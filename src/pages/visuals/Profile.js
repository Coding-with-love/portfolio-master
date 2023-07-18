import React, { useState, Fragment } from 'react';
import profileImgPlaceholder from 'assets/profile-placeholder.jpg';
import { Button } from 'components/Button';
import { DecoderText } from 'components/DecoderText';
import { Divider } from 'components/Divider';
import { Heading } from 'components/Heading';
import { Image } from 'components/Image';
import { Section } from 'components/Section';
import { Text } from 'components/Text';
import { Transition } from 'components/Transition';
import medina from './assets/img/medina.jpeg';
import styles from './Profile.module.css';
import flip from './flip.module.css';

const ProfileText = ({ visible, titleId }) => (
    <Fragment>
        <Heading className={styles.title} data-visible={visible} level={3} id={titleId}>
            <DecoderText text="My Graphic Design Journey " start={visible} delay={500} />
        </Heading>
        <Text className={styles.description} data-visible={visible} size="l" as="p">
            Welcome to the showcase of my visual work, an expansive and diverse collection reflecting my skills in Adobe Photoshop and Illustrator. You&apos;ll discover a vibrant array of designs here, from complex creations crafted from scratch to transformative alterations of existing images, all of which demonstrate my ability to envision and manifest beauty in many forms.
        </Text>

    </Fragment>
);

const FlipCard = ({ images }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [flipped, setFlipped] = useState(false);

    const handleUpArrowClick = () => {
        // Go to previous image (if not already at the first)
        if (currentImageIndex > 0) {
            setCurrentImageIndex(currentImageIndex - 1);
        }
    };

    const handleDownArrowClick = () => {
        // Go to next image (if not already at the last)
        if (currentImageIndex < images.length - 1) {
            setCurrentImageIndex(currentImageIndex + 1);
        }
    };

    const handleImageClick = () => {
        setFlipped(!flipped);
    };

    return (
        <div className={flip.flipCardContainer}>
            <button onClick={handleUpArrowClick}>&#8593;</button> {/* Up Arrow */}
            {flipped ? (
                <div onClick={handleImageClick}>
                    <h3>{images[currentImageIndex].title}</h3>
                    <p>{images[currentImageIndex].description}</p>
                    <h4>Techniques</h4>
                    <ul>{images[currentImageIndex].techniques.map(t => <li key={t}>{t}</li>)}</ul>
                    <h4>Tools</h4>
                    <ul>{images[currentImageIndex].tools.map(t => <li key={t}>{t}</li>)}</ul>
                </div>
            ) : (
                <Image onClick={handleImageClick} src={images[currentImageIndex].src} alt={images[currentImageIndex].alt} placeholder={images[currentImageIndex].placeholder} />
            )}
            <button onClick={handleDownArrowClick}>&#8595;</button> {/* Down Arrow */}
        </div>
    );
};

export const Profile = ({ id, visible, sectionRef }) => {
    const [focused, setFocused] = useState(false);
    const titleId = `${id}-title`;
    const images = [
        {
            src: medina,
            alt: 'Image 1',
            title: 'Project 1',
            description: 'This is a detailed description of Project 1.',
            techniques: ['Technique 1', 'Technique 2'],
            tools: ['Tool 1', 'Tool 2'],
            placeholder: profileImgPlaceholder
        },
        // ... more images
    ];

    return (
        <Section
            className={styles.profile}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            as="section"
            id={id}
            ref={sectionRef}
            aria-labelledby={titleId}
            tabIndex={-1}
        >
            <Transition in={visible || focused} timeout={0}>
                {visible => (
                    <div className={styles.content}>
                        <div className={styles.column}>
                            <ProfileText visible={visible} titleId={titleId} />
                            <Button
                                secondary
                                className={styles.button}
                                data-visible={visible}
                                href="/contact"
                                icon="send"
                            >
                                Send me a message
                            </Button>
                        </div>
                        <div className={styles.column}>
                            <div className={styles.tag} aria-hidden>
                                <Divider
                                    notchWidth="64px"
                                    notchHeight="8px"
                                    collapsed={!visible}
                                    collapseDelay={1000}
                                />
                                <div className={styles.tagText} data-visible={visible}>
                                    Please click on the image to see a detailed description of the project and the specific techniques and tools I used to bring it to life. Use the arrows to navigate between projects.
                                </div>
                            </div>
                            <div className={flip.image}>
                                <FlipCard images={images} />
                            </div>
                        </div>
                    </div>
                )}
            </Transition>
        </Section>
    );
};
