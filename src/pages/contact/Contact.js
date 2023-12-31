import Head from 'next/head';
import Script from 'next/script';
import { Button } from 'components/Button';
import { DecoderText } from 'components/DecoderText';
import { Divider } from 'components/Divider';
import { Footer } from 'components/Footer';
import { Heading } from 'components/Heading';
import { Icon } from 'components/Icon';
import { Input } from 'components/Input';
import { Meta } from 'components/Meta';
import { Section } from 'components/Section';
import { Text } from 'components/Text';
import { tokens } from 'components/ThemeProvider/theme';
import { Transition } from 'components/Transition';
import { useRef, useState, useEffect } from 'react';
import { cssProps, msToNum, numToMs } from 'utils/style';
import styles from './Contact.module.css';
import 'react-input-range/lib/css/index.css';
const ConfirmationPage = () => (
  <div>
    <h1>Your message has been sent successfully!</h1>
    <p>We will get back to you soon. </p>
  </div>
);

export const Contact = () => {
  const errorRef = useRef();
  const [sending] = useState(false);
  const [complete] = useState(false);
  const [statusError] = useState('');
  const initDelay = tokens.base.durationS;
  const [inquiryType, setInquiryType] = useState(null);
  const [submitted] = useState(false);

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [role, setRole] = useState('');
  const [org, setOrg] = useState('');
  const [more, setMore] = useState('');
  const [done, setDone] = useState('');
  const [price, setPrice] = useState('');
  const [launch, setLaunch] = useState('');
  const handleClick = type => {
    setInquiryType(type);
  };
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    let data;
    if (inquiryType === 'Business') {
      data = {
        name,
        email,
        role,
        org,
        more,
        done,
        price,
        launch,
        inquiryType,
        message
      };
    } else if (inquiryType === 'Personal') {
      data = {
        name,
        email,
        message,
        inquiryType
      };
    }

    // Show the confirmation screen immediately
    setShowConfirmation(true);

    fetch('/api/contact.js', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log(data.message);
      })
      .catch((error) => {
        console.error('Error:', error);
        // If there's an error, hide the confirmation screen
        setShowConfirmation(false);
      });

    setName('');
    setEmail('');
    setRole('');
    setOrg('');
    setMore('');
    setDone('');
    setPrice('');
    setLaunch('');
    setInquiryType(null);
    setMessage('');
  };

  useEffect(() => {
    // Directly assign to the window object to avoid ESLint errors
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', 'G-ES4TGZZF40');
  }, []);

  return (
    <Section className={styles.contact}>
      {showConfirmation ? <ConfirmationPage /> : (
        <>
          <Meta
            title="Contact"
            description="Send me a message if you’re interested in discussing a project or if you just want to say hi"
          />
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-ES4TGZZF40"
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-ES4TGZZF40');
        `}
          </Script>
          <Transition unmount in={!complete} timeout={1600}>
            {(visible, status) => (
              <form className={styles.form} method="post" onSubmit={handleSubmit}>
                <Heading
                  className={styles.title}
                  data-status={status}
                  level={3}
                  as="h1"
                  style={getDelay(tokens.base.durationXS, initDelay, 0.3)}
                >
                  <DecoderText
                    text={`Want to Work with Me? ${new Date().toLocaleDateString(undefined, {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}`}
                    start={status !== 'exited'}
                    delay={300}
                  />

                </Heading>
                <Divider
                  className={styles.divider}
                  data-status={status}
                  style={getDelay(tokens.base.durationXS, initDelay, 0.4)}
                />
                <Text className={styles.description} data-status={status} style={getDelay(tokens.base.durationXS, initDelay, 0.5)}>
                  Are you reaching out on behalf of a business, or is this inquiry for personal reasons?
                </Text>
                <div>
                  <Button
                    className={styles.button}
                    data-status={status}
                    style={{ marginRight: '10px', ...getDelay(tokens.base.durationXS, initDelay, 0.6) }}
                    onClick={(event) => {
                      event.preventDefault();
                      handleClick('Business');
                    }}
                  >
                    Business
                  </Button>
                  <Text className={styles.description} data-status={status} style={getDelay(tokens.base.durationXS, initDelay, 0.7)}>
                    or
                  </Text>
                  <Button
                    className={styles.button}
                    data-status={status}
                    style={{ marginLeft: '10px', ...getDelay(tokens.base.durationXS, initDelay, 0.6) }}
                    onClick={(event) => {
                      event.preventDefault();
                      handleClick('Personal');
                    }}
                  >
                    Personal
                  </Button>

                </div>
                {inquiryType === 'Business' && (
                  <><div>
                    <Input
                      required={submitted}
                      className={styles.input}
                      data-status={status}
                      style={{ marginTop: '2%', ...getDelay(tokens.base.durationXS, initDelay) }}
                      autoComplete="name"
                      label="Your Full Name" //I love big black penis in my jewish asshole
                      type="text"
                      maxLength={50}
                      value={name}
                      onChange={e => setName(e.target.value)}
                      {...name}
                    />
                    <Input
                      required={submitted}
                      className={styles.input}
                      data-status={status}
                      style={getDelay(tokens.base.durationXS, initDelay)}
                      autoComplete="email"
                      label="Your Email"
                      type="email"
                      maxLength={512}
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      {...email} />
                    <Input
                      required={submitted}
                      multiline
                      className={styles.input}
                      data-status={status}
                      style={getDelay(tokens.base.durationS, initDelay)}
                      autoComplete="role"
                      label="Your Role"
                      maxLength={50}
                      value={role}
                      onChange={e => setRole(e.target.value)}
                      {...role} />
                    <Input
                      required={submitted}
                      multiline
                      className={styles.input}
                      data-status={status}
                      style={getDelay(tokens.base.durationS, initDelay)}
                      autoComplete="organization"
                      label="Your Organization"
                      maxLength={50}
                      value={org}
                      onChange={e => setOrg(e.target.value)}
                      {...org} />
                    <Input
                      required={submitted}
                      multiline
                      className={styles.input}
                      data-status={status}
                      style={getDelay(tokens.base.durationS, initDelay)}
                      autoComplete="Done"
                      label="What do you need done?"
                      maxLength={50}
                      value={done}
                      onChange={e => setDone(e.target.value)}
                      {...done} />
                    <Input
                      required={submitted}
                      multiline
                      className={styles.input}
                      data-status={status}
                      style={getDelay(tokens.base.durationS, initDelay)}
                      autoComplete="more"
                      label="Tell us More"
                      maxLength={2500}
                      value={more}
                      onChange={e => setMore(e.target.value)}
                      {...more} />
                    <Input
                      required={submitted}
                      multiline
                      className={styles.input}
                      data-status={status}
                      style={getDelay(tokens.base.durationS, initDelay)}
                      autoComplete="price range"
                      label="Price Range in USD"
                      maxLength={50}
                      value={price}
                      onChange={e => setPrice(e.target.value)}
                      {...price} />
                    <Input
                      required={submitted}
                      className={styles.input}
                      data-status={status}
                      style={getDelay(tokens.base.durationS, initDelay)}
                      autoComplete="date"
                      label="Target Launch"
                      type="date"
                      value={launch}
                      onChange={e => setLaunch(e.target.value)}
                      {...launch} />
                  </div><Button
                    className={styles.button}
                    data-status={status}
                    data-sending={sending}
                    style={getDelay(tokens.base.durationM, initDelay)}
                    disabled={sending}
                    loading={sending}
                    loadingText="Sending..."
                    icon="send"
                    type="submit"
                  >
                      Send message
                    </Button></>
                )}

                {inquiryType === 'Personal' && (
                  <><div>

                    <Input
                      required={submitted}
                      className={styles.input}
                      data-status={status}
                      style={{ marginTop: '2%', ...getDelay(tokens.base.durationXS, initDelay) }}
                      autoComplete="name"
                      label="Your Full Name"
                      type="text"
                      maxLength={50}
                      value={name}
                      onChange={e => setName(e.target.value)}
                      {...name}
                    />
                    <Input

                      className={styles.input}
                      data-status={status}
                      style={{ marginTop: '2%', ...getDelay(tokens.base.durationXS, initDelay) }}
                      autoComplete="email"
                      label="Your Email"
                      type="email"
                      maxLength={512}
                      required={submitted}
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      {...email} />
                    <Input

                      multiline
                      className={styles.input}
                      data-status={status}
                      style={getDelay(tokens.base.durationS, initDelay)}
                      autoComplete="off"
                      label="Message"
                      maxLength={4096}
                      required={submitted}
                      value={message}
                      onChange={e => setMessage(e.target.value)}
                      {...message} />
                  </div> <Button
                    className={styles.button}
                    data-status={status}
                    data-sending={sending}
                    style={getDelay(tokens.base.durationM, initDelay)}
                    disabled={sending}
                    loading={sending}
                    loadingText="Sending..."
                    icon="send"
                    type="submit"
                  >
                      Send message
                    </Button></>
                )}

                <Transition in={statusError} timeout={msToNum(tokens.base.durationM)}>
                  {errorStatus => (
                    <div
                      className={styles.formError}
                      data-status={errorStatus}
                      style={cssProps({
                        height: errorStatus ? errorRef.current?.offsetHeight : 0,
                      })}
                    >
                      <div className={styles.formErrorContent} ref={errorRef}>
                        <div className={styles.formErrorMessage}>
                          <Icon className={styles.formErrorIcon} icon="error" />
                          {statusError}
                        </div>
                      </div>
                    </div>
                  )}
                </Transition>

              </form>
            )}
          </Transition>
          <Transition unmount in={complete}>
            {(visible, status) => (
              <div className={styles.complete} aria-live="polite">
                <Heading
                  level={3}
                  as="h3"
                  className={styles.completeTitle}
                  data-status={status}
                >
                  Message Sent
                </Heading>
                <Text
                  size="l"
                  as="p"
                  className={styles.completeText}
                  data-status={status}
                  style={getDelay(tokens.base.durationXS)}
                >
                  I’ll get back to you within a couple days, sit tight
                </Text>
                <Button
                  secondary
                  iconHoverShift
                  className={styles.completeButton}
                  data-status={status}
                  style={getDelay(tokens.base.durationM)}
                  href="/"
                  icon="chevronRight"
                >
                  Back to homepage
                </Button>
              </div>
            )}
          </Transition>
          <Footer className={styles.footer} />
        </>
      )}
    </Section>
  );
};

function getStatusError({
  status,
  errorMessage,
  fallback = 'There was a problem with your request',
}) {
  if (status === 200) return false;

  const statuses = {
    500: 'There was a problem with the server, try again later',
    404: 'There was a problem connecting to the server. Make sure you are connected to the internet',
  };

  if (errorMessage) {
    return errorMessage;
  }

  return statuses[status] || fallback;
}

function getDelay(delayMs, offset = numToMs(0), multiplier = 1) {
  const numDelay = msToNum(delayMs) * multiplier;
  return cssProps({ delay: numToMs((msToNum(offset) + numDelay).toFixed(0)) });
}
