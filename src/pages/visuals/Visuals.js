
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
    <><div className={styles.row}>
        <div className={styles.imageContainer}>
            <Image
                reveal
                className="photo"
                delay={100}
                placeholder={profileImgPlaceholder}
                srcSet={[lonelyRobot, lonelyRobot]}
                sizes={`(max-width: ${media.mobile}px) 100vw, 480px`}
                alt="Image of the Lonely Robot project" />
        </div>
        <div className={styles.imageContainer}>
            <Image
                reveal
                className="photo"
                delay={100}
                placeholder={profileImgPlaceholder}
                srcSet={[raccoon, raccoon]}
                sizes={`(max-width: ${media.mobile}px) 100vw, 480px`}
                alt="Image of the Raccoon project" />
        </div>
        <div className={styles.imageContainer}>
            <Image
                reveal
                className="photo"
                delay={100}
                placeholder={profileImgPlaceholder}
                srcSet={[warMachine, warMachine]}
                sizes={`(max-width: ${media.mobile}px) 100vw, 480px`}
                alt="Image of the War Machine project" />
        </div>
        <div className={styles.imageContainer}>
            <Image
                reveal
                className="photo"
                delay={100}
                placeholder={profileImgPlaceholder}
                srcSet={[humanRobot, humanRobot]}
                sizes={`(max-width: ${media.mobile}px) 100vw, 480px`}
                alt="Image of the Human Robot project" />
        </div>

    </div><div className={styles.row}>
            <div className={styles.imageContainer}>
                <Image
                    reveal
                    className="photo"
                    delay={100}
                    placeholder={profileImgPlaceholder}
                    srcSet={[deer, deer]}
                    sizes={`(max-width: ${media.mobile}px) 100vw, 480px`}
                    alt="Image of the Lonely Robot project" />
            </div>
            <div className={styles.imageContainer}>
                <Image
                    reveal
                    className="photo"
                    delay={100}
                    placeholder={profileImgPlaceholder}
                    srcSet={[heroRabbit, heroRabbit]}
                    sizes={`(max-width: ${media.mobile}px) 100vw, 480px`}
                    alt="Image of the Raccoon project" />
            </div>
            <div className={styles.imageContainer}>
                <Image
                    reveal
                    className="photo"
                    delay={100}
                    placeholder={profileImgPlaceholder}
                    srcSet={[cosmicAmazement, cosmicAmazement]}
                    sizes={`(max-width: ${media.mobile}px) 100vw, 480px`}
                    alt="Image of the War Machine project" />
            </div>
            <div className={styles.imageContainer}>
                <Image
                    reveal
                    className="photo"
                    delay={100}
                    placeholder={profileImgPlaceholder}
                    srcSet={[gangsterGiraffe, gangsterGiraffe]}
                    sizes={`(max-width: ${media.mobile}px) 100vw, 480px`}
                    alt="Image of the Human Robot project" />
            </div>

        </div>
        <div className={styles.row}>
            <div className={styles.imageContainer}>
                <Image
                    reveal
                    className="photo"
                    delay={100}
                    placeholder={profileImgPlaceholder}
                    srcSet={[iceDragon, iceDragon]}
                    sizes={`(max-width: ${media.mobile}px) 100vw, 480px`}
                    alt="Image of the Lonely Robot project" />
            </div>
            <div className={styles.imageContainer}>
                <Image
                    reveal
                    className="photo"
                    delay={100}
                    placeholder={profileImgPlaceholder}
                    srcSet={[chemicalExplosion, chemicalExplosion]}
                    sizes={`(max-width: ${media.mobile}px) 100vw, 480px`}
                    alt="Image of the Raccoon project" />
            </div>
            <div className={styles.imageContainer}>
                <Image
                    reveal
                    className="photo"
                    delay={100}
                    placeholder={profileImgPlaceholder}
                    srcSet={[dimensionalBattle, dimensionalBattle]}
                    sizes={`(max-width: ${media.mobile}px) 100vw, 480px`}
                    alt="Image of the War Machine project" />
            </div>
            <div className={styles.imageContainer}>
                <Image
                    reveal
                    className="photo"
                    delay={100}
                    placeholder={profileImgPlaceholder}
                    srcSet={[ultimateCheckers, ultimateCheckers]}
                    sizes={`(max-width: ${media.mobile}px) 100vw, 480px`}
                    alt="Image of the Human Robot project" />
            </div>

        </div></>
);

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
