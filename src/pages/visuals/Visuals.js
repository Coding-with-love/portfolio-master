
import profileImgPlaceholder from '../../assets/profile-placeholder.jpg';

import { Button } from '../../components/Button';
import { DecoderText } from '../../components/DecoderText';

import { Heading } from '../../components/Heading';
import { Image } from '../../components/Image';
import { Section } from '../../components/Section';
import { Text } from '../../components/Text';
import { Transition } from '../../components/Transition';
import { Fragment, useState } from 'react';
import { media } from 'utils/style';
import styles from './Visuals.module.css';
import lonelyRobot from './assets/lonelyRobot.jpeg';
import raccoon from './assets/raccoon.jpeg';
import warMachine from './assets/warMachine.jpeg';
import humanRobot from './assets/humanRobot.jpg';
import deer from './assets/deer.jpg';
import heroRabbit from './assets/heroRabbit.jpeg';
import cosmicAmazement from './assets/cosmicAmazement.jpeg';
import gangsterGiraffe from './assets/gangsterGirraffe.jpeg';
import iceDragon from './assets/iceDragon.jpeg';
import chemicalExplosion from './assets/chemicalExplosion.jpg';
import dimensionalBattle from './assets/DimensionalBattle.jpg';
import ultimateCheckers from './assets/ultimatecheckers.jpg';
const ProfileTextLeft = ({ visible }) => (
    <Fragment>

        <Text className={styles.description} data-visible={visible} size="l" as="p">
            Welcome to my Visuals page, where artistry meets technology. Over the last three years, I have been honing my skills in graphic design, developing a keen eye for aesthetics and mastering the technical aspects of visual creation. My work involves a blend of creativity, strategy, and a thorough understanding of contemporary visual trends.
        </Text>
    </Fragment>
);

const ProfileTextRight = ({ visible }) => (
    <Text className={styles.description} data-visible={visible} size="l" as="p">
        I&apos;m proficient in using Adobe Suite tools, such as Photoshop, Illustrator, and After Effects, which allow me to craft distinct, dynamic, and engaging visual content. My creations span across a variety of media and purposes, including web design, logo creation, branding, illustration, animation, and more.
    </Text>

);
const PhotoRow = () => (
    <>
        <div className={styles.row}>
            <FlipCard
                image={lonelyRobot}
                alt="Image of the Lonely Robot project"
                info={{
                    name: "Lonely Robot",
                    description: "This is a project about a lonely robot...",
                    technique: "Digital Painting",
                    date: "2023-07-01"
                }}
            />
            <FlipCard
                image={raccoon}
                alt="Image of the Raccoon project"
                info={{
                    name: "Raccoon",
                    description: "This is a project about a raccoon...",
                    technique: "Oil Painting",
                    date: "2023-07-02"
                }}
            />
            <FlipCard
                image={warMachine}
                alt="Image of the War Machine project"
                info={{
                    name: "War Machine",
                    description: "This is a project about a war machine...",
                    technique: "Watercolor Painting",
                    date: "2023-07-03"
                }}
            />
            <FlipCard
                image={humanRobot}
                alt="Image of the Human Robot project"
                info={{
                    name: "Human Robot",
                    description: "This is a project about a human robot...",
                    technique: "Graphite Drawing",
                    date: "2023-07-04"
                }}
            />
        </div>
        <div className={styles.row}>
            <FlipCard
                image={deer}
                alt="Image of the Deer project"
                info={{
                    name: "Deer",
                    description: "This is a project about a deer...",
                    technique: "Digital Painting",
                    date: "2023-07-05"
                }}
            />
            <FlipCard
                image={heroRabbit}
                alt="Image of the Hero Rabbit project"
                info={{
                    name: "Hero Rabbit",
                    description: "This is a project about a hero rabbit...",
                    technique: "Oil Painting",
                    date: "2023-07-06"
                }}
            />
            <FlipCard
                image={cosmicAmazement}
                alt="Image of the Cosmic Amazement project"
                info={{
                    name: "Cosmic Amazement",
                    description: "This is a project about cosmic amazement...",
                    technique: "Watercolor Painting",
                    date: "2023-07-07"
                }}
            />
            <FlipCard
                image={gangsterGiraffe}
                alt="Image of the Gangster Giraffe project"
                info={{
                    name: "Gangster Giraffe",
                    description: "This is a project about a gangster giraffe...",
                    technique: "Graphite Drawing",
                    date: "2023-07-08"
                }}
            />
        </div>
        <div className={styles.row}>
            <FlipCard
                image={iceDragon}
                alt="Image of the Ice Dragon project"
                info={{
                    name: "Ice Dragon",
                    description: "This is a project about an ice dragon...",
                    technique: "Digital Painting",
                    date: "2023-07-09"
                }}
            />
            <FlipCard
                image={chemicalExplosion}
                alt="Image of the Chemical Explosion project"
                info={{
                    name: "Chemical Explosion",
                    description: "This is a project about a chemical explosion...",
                    technique: "Oil Painting",
                    date: "2023-07-10"
                }}
            />
            <FlipCard
                image={dimensionalBattle}
                alt="Image of the Dimensional Battle project"
                info={{
                    name: "Dimensional Battle",
                    description: "This is a project about a dimensional battle...",
                    technique: "Watercolor Painting",
                    date: "2023-07-11"
                }}
            />
            <FlipCard
                image={ultimateCheckers}
                alt="Image of the Ultimate Checkers project"
                info={{
                    name: "Ultimate Checkers",
                    description: "This is a project about ultimate checkers...",
                    technique: "Graphite Drawing",
                    date: "2023-07-12"
                }}
            />
        </div>
    </>
);

const FlipCard = ({ image, alt, info }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const flipCard = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <div
            className={`${styles.flipCard} ${isFlipped ? styles.isFlipped : ''}`}
            onClick={flipCard} // add this line here
        >
            <div className={styles.flipCardInner}>
                <div className={styles.flipCardFront}>
                    <Image
                        reveal
                        className="photo"
                        delay={100}
                        placeholder={profileImgPlaceholder}
                        srcSet={[image, image]}
                        sizes={`(max-width: ${media.mobile}px) 100vw, 480px`}
                        alt={alt}
                    />
                </div>
                <div className={styles.flipCardBack}>
                    <h4>{info.name}</h4>
                    <p>{info.description}</p>
                    <p><strong>Technique:</strong> {info.technique}</p>
                    <p><strong>Date:</strong> {info.date}</p>
                </div>
            </div>
        </div>
    );
};




export const Visuals = ({ id, visible, sectionRef }) => {
    const [focused, setFocused] = useState(false);
    const titleId = `${id}-title`;
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
                    <>
                        <Heading className={`${styles.title} ${styles.headingCenter}`} data-visible={visible} level={3} id={titleId} style={{ marginTop: '2%' }}>
                            <DecoderText text="Visual Journey " start={visible} delay={500} />
                        </Heading>
                        <div className={styles.content}>

                            <div className={styles.column}>
                                <ProfileTextLeft visible={visible} />
                            </div>
                            <div className={styles.column}>
                                <ProfileTextRight visible={visible} />

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
                            <PhotoRow />
                        </div></>
                )}
            </Transition>
        </Section>
    );
};
