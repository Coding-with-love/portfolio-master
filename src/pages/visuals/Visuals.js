import profileImgLarge from '../../assets/profile-large.jpg';
import profileImgPlaceholder from '../../assets/profile-placeholder.jpg';
import profileImg from '../../assets/profile.jpg';
import { Button } from '../../components/Button';
import { DecoderText } from '../../components/DecoderText';
import { Divider } from '../../components/Divider';
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
import humanRobot from './assets/humanRobot.jpeg';
import deer from './assets/deer.jpeg';
import heroRabbit from './assets/heroRabbit.jpeg';
import cosmicAmazement from './assets/cosmicAmazement.jpeg';
import gangsterGiraffe from './assets/gangsterGirraffe.jpeg';
import iceDragon from './assets/iceDragon.jpeg';
import chemicalExplosion from './assets/chemicalExplosion.jpeg';
import dimensionalBattle from './assets/DimensionalBattle.jpeg';
import ultimateCheckers from './assets/ultimateCheckers.jpeg';
const ProfileTextLeft = ({ visible, titleId }) => (
    <Fragment>

        <Text className={styles.description} data-visible={visible} size="l" as="p">
            Welcome to my Visuals page, where artistry meets technology. Over the last three years, I have been honing my skills in graphic design, developing a keen eye for aesthetics and mastering the technical aspects of visual creation. My work involves a blend of creativity, strategy, and a thorough understanding of contemporary visual trends.
        </Text>
    </Fragment>
);

const ProfileTextRight = ({ visible }) => (
    <Text className={styles.description} data-visible={visible} size="l" as="p">
        I'm proficient in using Adobe Suite tools, such as Photoshop, Illustrator, and After Effects, which allow me to craft distinct, dynamic, and engaging visual content. My creations span across a variety of media and purposes, including web design, logo creation, branding, illustration, animation, and more.
    </Text>
);

const PhotoRow = ({ visible }) => (
    <div className={styles.row}>
        <FlipCard
            image={lonelyRobot}
            projectTitle="Lonely Robot"
            projectDate="January 1, 2023"
            toolsUsed="Adobe Suite"
            client="Personal project"
            description="This is a brief description of the Lonely Robot project."
        />
        <FlipCard
            image={raccoon}
            projectTitle="Raccoon"
            projectDate="February 15, 2023"
            toolsUsed="Adobe Suite"
            client="Commercial client"
            description="This is a brief description of the Raccoon project."
        />
    </div>
);



const FlipCard = ({ image, projectTitle, projectDate, toolsUsed, client, description }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleClick = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <div
            className={`flip-card ${isFlipped ? "flip-card-inner" : ""}`}
            onClick={handleClick}
        >
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <Image
                        reveal
                        className="photo"
                        delay={100}
                        placeholder={profileImgPlaceholder}
                        srcSet={[image, image]}
                        sizes={`(max-width: ${media.mobile}px) 100vw, 480px`}
                        alt="Image of the project"
                    />
                </div>

                <div className="flip-card-back">
                    <h1>{projectTitle}</h1>
                    <p>Date: {projectDate}</p>
                    <p>Tools Used: {toolsUsed}</p>
                    <p>Client: {client}</p>
                    <p>{description}</p>
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
                            <div className='center'>
                                <PhotoRow visible={visible} />
                            </div>
                        </div></>
                )}
            </Transition>
        </Section>
    );
};
