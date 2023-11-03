
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
                alt="Rocket Raccoon in Space Suit"
                info={{
                    name: "Raccoon",
                    description: "This is a project about a raccoon...",
                    technique: "Oil Painting",
                    date: "2023-07-02"
                }}
            />

            <FlipCard
                image={warMachine}
                alt="The Fallen Knight"
                info={{
                    name: "The Fallen Knight",
                    description: "A soaked knight in black armor, skull-adorned helmet, red eyes, stoically enduring a heavy downpour.",
                    technique: "Diverse brushes, colors, and a 'bleeding' technique to depict a knight, his armor, and the rain.",
                    date: "2023-06-10"
                }}
            />
            <FlipCard
                image={humanRobot}
                alt="Humanoid"
                info={{
                    name: "Humanoid",
                    description: "AnthroBot, a hyper-realistic robot endowed with a humanoid face structure.",
                    technique: "Photorealistic rendering, complex textures, light refraction, and advanced 3D modeling techniques.",
                    date: "2023-05-29"
                }}
            />
        </div>
        <div className={styles.row}>
            <FlipCard
                image={deer}
                alt="The Nightwalkers"
                info={{
                    name: "The Nightwalkers",
                    description: "The image depicts a pair of digitally-designed, glow-in-the-dark deer amidst a geometrically-shaped forest, demonstrating the enchanting potential of digital art.",
                    technique: "Mixed Media",
                    date: "2023-05-25"
                }}
            />

            <FlipCard
                image={heroRabbit}
                alt="Astro-Bunny"
                info={{
                    name: "Astro-Bunny",
                    description: "A vibrant, cartoonish rabbit in a spacesuit, energetically sprinting through a realistic space backdrop.",
                    technique: "Fusion of 3D-modeled rabbit and digitally painted cosmic backdrop, forming the final lively picture.",
                    date: "2023-05-15"
                }}
            />

            <FlipCard
                image={cosmicAmazement}
                alt="The Tree of Life"
                info={{
                    name: "The Tree of Life",
                    description: "A serene image of a loving couple embracing under a sunset sky, beside a towering tree.",
                    technique: "Digital painting of the tree and background combined with a photo-manipulated couple for a seamless look.",
                    date: "2023-05-08"
                }}
            />
            <FlipCard
                image={gangsterGiraffe}
                alt="The Giraffe in Sneakers"
                info={{
                    name: "The Giraffe in Sneakers",
                    description: "A whimsical image featuring a jacket-clad, sneaker-wearing giraffe on a stool, gazing.",
                    technique: "Created in Photoshop, morphing a stock giraffe photo with added jacket, sneakers, and stool, color-adjusted for a whimsical appeal.",
                    date: "2023-05-05"
                }}
            />
        </div>
        <div className={styles.row}>

            <FlipCard
                image={iceDragon}
                alt="The Dragon's Roar"
                info={{
                    name: "The Dragon's Roar",
                    description: "An intense close-up of a white dragon with sharp teeth and red eyes, breathing a fiery vortex.",
                    technique: "The dramatic image blends digital painting, transforming a stock dragon head with added flames.",
                    date: "2023-05-03"
                }}
            />
            <FlipCard
                image={chemicalExplosion}
                alt="Bubble World"
                info={{
                    name: "Bubble World",
                    description: "The imaginative image displays a mid-air suspended glass ball filled with vibrant bubbles, seemingly floating in a liquid.",
                    technique: "The image showcases 'bubble painting,' blending 3D glass balls and bubbles.",
                    date: "2022-12-26"
                }}
            />
            <FlipCard
                image={dimensionalBattle}
                alt="The Sea of Shadows"
                info={{
                    name: "The Sea of Shadows",
                    description: "An adventurous image showcasing a lantern-lit pirate ship sailing under a starry, moonlit night, reflecting mystery.",
                    technique: "The atmospheric ship image under a starry night was color-adjusted in Photoshop.",
                    date: "2022-12-06"
                }}
            />
            <FlipCard
                image={ultimateCheckers}
                alt="Ultimate Checkers"
                info={{
                    name: "Ultimate Checkers",
                    description: "A super intense checkers game with crazy viewers.",
                    technique: "Put multiple people that looked like myself to make a scene of an intense checkers game.",
                    date: "2021-10-19"
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

    useEffect(() => {
        // Google Analytics script
        const scriptTag = document.createElement('script');
        scriptTag.async = true;
        scriptTag.src = 'https://www.googletagmanager.com/gtag/js?id=G-ES4TGZZF40';
        document.head.appendChild(scriptTag);

        const script = document.createElement('script');
        script.innerHTML = `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-ES4TGZZF40');
        `;
        document.head.appendChild(script);

        // Clean up function to remove the script when the component unmounts
        return () => {
            document.head.removeChild(scriptTag);
            document.head.removeChild(script);
        };
    }, []);

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
                {(transitionVisible) => (
                    <Fragment>
                        <Heading className={`${styles.title} ${styles.headingCenter}`} data-visible={transitionVisible} level={3} id={titleId} style={{ marginTop: '2%' }}>
                            <DecoderText text="Visual Journey " start={transitionVisible} delay={500} />
                        </Heading>
                        <div className={styles.content}>
                            <div className={styles.column}>
                                <ProfileTextLeft visible={transitionVisible} />
                            </div>
                            <div className={styles.column}>
                                <ProfileTextRight visible={transitionVisible} />
                                <Button
                                    secondary
                                    className={styles.button}
                                    data-visible={transitionVisible}
                                    href="/contact"
                                    icon="send"
                                >
                                    Send me a message
                                </Button>
                            </div>
                            <PhotoRow />
                        </div>
                    </Fragment>
                )}
            </Transition>
        </Section>
    );
};
