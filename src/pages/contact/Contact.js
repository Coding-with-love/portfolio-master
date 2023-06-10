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
import { useFormInput } from 'hooks';
import { useRef, useState } from 'react';
import { cssProps, msToNum, numToMs } from 'utils/style';
import styles from './Contact.module.css';
import style from './select.module.css';
import Select from 'react-select';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';
export const Contact = () => {
  const errorRef = useRef();
  const email = useFormInput('');
  const name = useFormInput('');
  const message = useFormInput('');
  const role = useFormInput('');
  const org = useFormInput('');
  const more = useFormInput('');
  const done = useFormInput('');
  const price = useFormInput('');
  const launch = useFormInput('');
  const [sending, setSending] = useState(false);
  const [complete, setComplete] = useState(false);
  const [statusError, setStatusError] = useState('');
  const initDelay = tokens.base.durationS;
  const [showOtherInput, setShowOtherInput] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [value, setValue] = useState({ min: 100, max: 10000 });
  const [inquiryType, setInquiryType] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const marginTop = {
    marginTop: '2%',
  };
  const onSubmit = async (event) => {
    event.preventDefault();
    setStatusError('');

    if (sending || submitted) return;

    try {
      setSending(true);
      setSubmitted(true);
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/message`, {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name.value,
          email: email.value,
          role: role.value,
          org: org.value,
          selectedOptions: JSON.stringify(selectedOptions), // add selectedOptions to the body
          message: message.value,
        }),
      });

      const responseMessage = await response.json();

      const statusError = getStatusError({
        status: response?.status,
        errorMessage: responseMessage?.error,
        fallback: 'There was a problem sending your message',
      });

      if (statusError) throw new Error(statusError);

      setComplete(true);
      setSending(false);
    } catch (error) {
      setSending(false);
      setStatusError(error.message);
    }
  };

  const [selectedOptions, setSelectedOptions] = useState([]);
  const options = [
    { value: 'graphic-design', label: 'Graphic Design' },
    { value: 'website', label: 'Website' },
    { value: 'app', label: 'App' },
    { value: 'other', label: 'Other' },
  ];
  const handleSelectChange = selectedOptions => {
    setSelectedOptions(selectedOptions);
  };
  const select = {
    value: selectedOptions,
    onChange: handleSelectChange,
    options,
  };
  const handleClick = type => {
    setInquiryType(type);
  };
  return (
    <Section className={styles.contact}>
      <Meta
        title="Contact"
        description="Send me a message if you’re interested in discussing a project or if you just want to say hi"
      />
      <Transition unmount in={!complete} timeout={1600}>
        {(visible, status) => (
          <form className={styles.form} method="post" onSubmit={onSubmit}>
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
                onClick={() => handleClick('Business')}
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
                onClick={() => handleClick('Personal')}
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
                  label="Your Full Name"
                  type="text"
                  maxLength={50}
                  {...name} />
                <Input
                  required={submitted}
                  className={styles.input}
                  data-status={status}
                  style={getDelay(tokens.base.durationXS, initDelay)}
                  autoComplete="email"
                  label="Your Email"
                  type="email"
                  maxLength={512}
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
                  {...price} />
                <Input
                  required={submitted}
                  className={styles.input}
                  data-status={status}
                  style={getDelay(tokens.base.durationS, initDelay)}
                  autoComplete="date"
                  label="Target Launch"
                  type="date"
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

                  className={styles.input}
                  data-status={status}
                  style={{ marginTop: '2%', ...getDelay(tokens.base.durationXS, initDelay) }}
                  autoComplete="email"
                  label="Your Email"
                  type="email"
                  maxLength={512}
                  required={submitted}
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
                  {...message} />
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
    </Section >
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
