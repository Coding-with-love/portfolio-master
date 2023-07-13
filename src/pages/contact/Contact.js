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
import 'react-input-range/lib/css/index.css';

export const Contact = () => {
  const errorRef = useRef();
  const email = useFormInput('');
  const name = useFormInput('');
  const message = useFormInput('');
  const role = useFormInput('');
  const org = useFormInput('');
  const done = useFormInput('');
  const more = useFormInput('');
  const price = useFormInput('');
  const launch = useFormInput('');
  const [sending, setSending] = useState(false);
  const [complete, setComplete] = useState(false);
  const [statusError, setStatusError] = useState('');
  const initDelay = tokens.base.durationS;
  const [inquiryType, setInquiryType] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setStatusError('');

    if (sending || submitted) return;

    setSending(true);
    setSubmitted(true);

    const data = {
      name: name.value,
      email: email.value,
      message: message.value,
      role: role.value,
      org: org.value,
      done: done.value,
      more: more.value,
      price: price.value,
      launch: launch.value,
      inquiryType: inquiryType
    }

    const formBody = Object.keys(data).map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])).join('&');

    const response = await fetch(`sendmail.php`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
      },
      body: formBody
    });

    // handle the response from the server
    if (response.ok) {
      const responseMessage = await response.text();
      console.log(responseMessage);
      setComplete(true);
    } else {
      setStatusError('There was a problem sending your message');
    }

    setSending(false);
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
              <>
                <FormFields
                  fields={[
                    { label: "Your Full Name", type: "text", maxLength: 50, autoComplete: "name", state: name },
                    { label: "Your Email", type: "email", maxLength: 512, autoComplete: "email", state: email },
                    { label: "Your Role", type: "text", maxLength: 50, autoComplete: "role", state: role },
                    { label: "Your Organization", type: "text", maxLength: 50, autoComplete: "organization", state: org },
                    { label: "What do you need done?", type: "text", maxLength: 50, autoComplete: "done", state: done },
                    { label: "Tell us More", type: "text", maxLength: 2500, autoComplete: "more", state: more },
                    { label: "Price Range in USD", type: "text", maxLength: 50, autoComplete: "price range", state: price },
                    { label: "Target Launch", type: "date", autoComplete: "date", state: launch },
                  ]}
                  className={styles.input}
                  data-status={status}
                  style={getDelay(tokens.base.durationXS, initDelay)}
                  required={submitted}
                />
                <Button
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
                </Button>
              </>
            )}

            {inquiryType === 'Personal' && (
              <>
                <FormFields
                  fields={[
                    { label: "Your Email", type: "email", maxLength: 512, autoComplete: "email", state: email },
                    { label: "Message", type: "text", maxLength: 4096, autoComplete: "off", state: message },
                  ]}
                  className={styles.input}
                  data-status={status}
                  style={getDelay(tokens.base.durationXS, initDelay)}
                  required={submitted}
                />
                <Button
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
                </Button>
              </>
            )}
            {statusError && (
              <Text
                ref={errorRef}
                className={styles.error}
                color="error"
                data-status={status}
                style={getDelay(tokens.base.durationM, initDelay, 0.2)}
              >
                {statusError}
              </Text>
            )}
          </form>
        )}
      </Transition>
      <Footer />
    </Section>
  );
};

const FormFields = ({ fields, className, dataStatus, style, required }) => {
  return fields.map(({ label, type, maxLength, autoComplete, state }, index) => (
    <Input
      key={label}
      label={label}
      type={type}
      maxLength={maxLength}
      autoComplete={autoComplete}
      required={required}
      value={state.value}
      onChange={state.onChange}
      className={className}
      data-status={dataStatus}
      style={{ ...style, ...getDelay(tokens.base.durationXS, tokens.base.durationXS, index * 0.1) }}
    />
  ));
};


const getDelay = (duration, initDelay, offset = 0) => {
  const calcOffset = offset ? msToNum(duration) * offset : 0;
  const totalDelay = numToMs(msToNum(initDelay) + calcOffset);
  return cssProps({ '--transition-delay': totalDelay });
};

const getStatusError = ({ status, errorMessage, fallback }) => {
  switch (status) {
    case 429:
      return 'You have been rate limited. Try again later.';
    case 400:
      return errorMessage || fallback;
    case 500:
    default:
      return fallback;
  }
};
