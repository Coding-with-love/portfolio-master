
import profileImgLarge from 'assets/profile-large.jpg';
import profileImgPlaceholder from 'assets/profile-placeholder.jpg';
import profileImg from 'assets/profile.jpg';
import { Button } from 'components/Button';
import { DecoderText } from 'components/DecoderText';
import { Divider } from 'components/Divider';
import { Heading } from 'components/Heading';
import { Image } from 'components/Image';
import { Link } from 'components/Link';
import { Section } from 'components/Section';
import { Text } from 'components/Text';
import { Transition } from 'components/Transition';
import { Fragment, useState } from 'react';
import { media } from 'utils/style';
import styles from './Profile.module.css';

const ProfileText = ({ visible, titleId }) => (
  <Fragment>
    <Heading className={styles.title} data-visible={visible} level={3} id={titleId}>
      <DecoderText text="hello world! " start={visible} delay={500} />
    </Heading>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      I'm Connor Love, a passionate young web and graphic designer based in Medina, Ohio. As a senior in high school, I've spent the last five years immersing myself in the realm of coding and the last three years honing my skills in graphic design. My love for technology and creativity has allowed me to cultivate an array of skills that enables me to weave together intricate, functional, and aesthetically pleasing websites, applications, and visual content.
    </Text>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      With a comprehensive grasp of languages including HTML, CSS, Reactjs, Nextjs, Three.js, Java, PHP, SQL, SWIFT, Typescript, and a touch of Python, I am adept at creating robust and interactive online experiences. Moreover, my proficiency with Adobe Suite tools such as Photoshop, Illustrator, and After Effects elevates my designs, making them distinct, dynamic, and engaging. As a dedicated student of design and technology, I continue to learn and adapt, ensuring that my work is always fresh, innovative, and on the cutting edge. I look forward to sharing my portfolio with you, demonstrating the breadth and depth of my expertise.
    </Text>
  </Fragment>
);

export const Profile = ({ id, visible, sectionRef }) => {
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
                  About Me
                </div>
              </div>
              <div className={styles.image}>
                <Image
                  reveal
                  delay={100}
                  placeholder={profileImgPlaceholder}
                  srcSet={[profileImg, profileImgLarge]}
                  sizes={`(max-width: ${media.mobile}px) 100vw, 480px`}
                  alt="Me standing in front of the Torii on Miyajima, an island off the coast of Hiroshima in Japan"
                />
                <svg
                  aria-hidden="true"
                  width="135"
                  height="765"
                  viewBox="0 0 135 765"
                  className={styles.svg}
                  data-visible={visible}
                >

                </svg>
              </div>
            </div>
          </div>
        )}
      </Transition>
    </Section>
  );
};
