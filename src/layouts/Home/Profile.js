
import profileImgLarge from 'assets/profile-large.jpg';
import profileImgPlaceholder from 'assets/profile-placeholder.jpg';
import profileImg from 'assets/profile.jpg';
import { Button } from 'components/Button';
import { DecoderText } from 'components/DecoderText';
import { Divider } from 'components/Divider';
import { Heading } from 'components/Heading';
import { Image } from 'components/Image';
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
      Hi! I&apos;m Connor Love, a high school senior from Medina, Ohio, who is really into web and graphic design. I&apos;ve spent the last five years diving into coding and the last three years sharpening my skills in graphic design.
    </Text>


    <Text className={styles.description} data-visible={visible} size="l" as="p">
      You know, the best part about what I do is that it combines two things I love the most: technology and creativity. I get to take an idea - just a thought - and bring it to life with lines of code and design elements. The feeling I get when I see a website or an app I built working smoothly, looking good, and being helpful to people, it&apos;s like nothing else. It&apos;s like watching a bunch of Lego blocks turn into a spaceship or a castle. I guess that&apos;s why I&apos;m hooked!
    </Text>


    <Text className={styles.description} data-visible={visible} size="l" as="p">
      Over the years, I&apos;ve become good at working with a lot of different coding languages, like HTML, CSS, Reactjs, Nextjs, Three.js, Java, PHP, SQL, SWIFT, Typescript, and even a bit of Python. This helps me to build interactive and sturdy online experiences that people love to use. And when it comes to design, knowing how to use tools like Photoshop, Illustrator, and After Effects gives me the chance to add my own unique style to everything I create.
    </Text>

    <Text className={styles.description} data-visible={visible} size="l" as="p">
      But no matter how much I learn, there&apos;s always something new out there. That&apos;s why I&apos;m always learning, always pushing myself to get better. This way, my work stays fresh and up-to-date.
    </Text>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      I can&apos;t wait to share my portfolio with you. Each piece in it is a little part of my journey, a window into how much I&apos;ve grown and what I can do. More than anything, it shows the love and passion I have for my work.
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
                  alt="Me at Homecoming"
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
