// React
import { useState, useEffect, useContext } from 'react';

// Email JS
import emailjs from 'emailjs-com';

// Context

// Data
import { formDefault } from '../data/formDefault';
import { EmailRegex } from '../data/emailAddress';
import { AppContext } from '../context/appContext';

type ActiveTypes = 'name' | 'email' | 'message' | null;

export default function useForm() {
  const { setToast } = useContext(AppContext);
  const [state, setState] = useState(formDefault);
  const [active, setActive] = useState<ActiveTypes>(null);

  const nameInput = document.querySelector("[name='name']");
  const emailInput = document.querySelector("[name='email']");
  const messageTextArea = document.querySelector("[name='message']");

  const formComplete =
    state.name.complete && state.email.complete && state.message.complete;

  const handleUpdateInput = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: {
        value,
        error_msg: '',
        complete: false,
      },
    });
  };

  const resetForm = () => {
    setState(formDefault);

    nameInput?.classList.remove('success');
    emailInput?.classList.remove('success');
    messageTextArea?.classList.remove('success');
  };

  const sendMail = () => {
    setState((prev) => ({
      ...prev,
      sending: true,
    }));

    emailjs
      .send(
        'service_79dl3ne',
        'template_d6x2qvw',
        {
          name: state.name.value,
          email: state.email.value,
          message: state.message.value,
        },
        `${process.env.REACT_APP_EMAIL_KEY}`
      )
      .then(
        (result) => {
          setToast((prev) => ({
            ...prev,
            message: 'Message sent successfully. Thank you!',
            status: 'success',
            is_active: true,
          }));
          resetForm();
        },
        (error) => {
          console.error('EmailJS error:', error);

          let userMessage = 'Something went wrong. Please try again.';

          switch (error?.status) {
            case 400:
              userMessage = 'Invalid request. Please check your form.';
              break;
            case 401:
              userMessage = 'Authorisation error. Please try again later.';
              break;
            case 403:
              userMessage = 'Permission denied. Contact the site owner.';
              break;
            case 404:
              userMessage = 'Service or template not found. Try again later.';
              break;
            case 500:
              userMessage = 'Server error. Please try again in a moment.';
              break;
          }

          setToast((prev) => ({
            ...prev,
            message: userMessage,
            status: 'error',
            is_active: true,
          }));

          setState((prev) => ({
            ...prev,
            sending: false,
          }));
        }
      );
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sendMail();
  };

  // Name input
  useEffect(() => {
    if (nameInput && state.name.value.length && active !== 'name') {
      if (state.name.value.length < 3) {
        setState((prev) => ({
          ...prev,
          name: {
            ...prev.name,
            error_msg: '3 Characters minimum.',
          },
        }));

        nameInput?.classList.add('error');
        return;
      }

      nameInput?.classList.remove('error');
      nameInput?.classList.add('success');

      setState((prev) => ({
        ...prev,
        name: {
          ...prev.name,
          complete: true,
        },
      }));
    } else {
      nameInput?.classList.remove('error');
      nameInput?.classList.remove('success');

      setState((prev) => ({
        ...prev,
        name: {
          ...prev.name,
          complete: false,
        },
      }));
    }
  }, [state.name.value, active, nameInput]);

  // Email input
  useEffect(() => {
    if (emailInput && state.email.value.length && active !== 'email') {
      if (!state.email.value.match(EmailRegex)) {
        setState((prev) => ({
          ...prev,
          email: { ...prev.email, error_msg: 'Please enter a valid email.' },
        }));

        emailInput?.classList.add('error');
        return;
      }

      emailInput.classList.remove('error');
      emailInput.classList.add('success');

      setState((prev) => ({
        ...prev,
        email: {
          ...prev.email,
          complete: true,
        },
      }));
    } else {
      emailInput?.classList.remove('error');
      emailInput?.classList.remove('success');

      setState((prev) => ({
        ...prev,
        email: {
          ...prev.email,
          complete: false,
        },
      }));
    }
  }, [state.email.value, active, emailInput]);

  //   Message TextArea
  useEffect(() => {
    if (messageTextArea && state.message.value.length && active !== 'message') {
      if (state.message.value.length < 10) {
        setState((prev) => ({
          ...prev,
          message: { ...prev.message, error_msg: '10 Characters minimum.' },
        }));

        messageTextArea.classList.add('error');
        return;
      }

      messageTextArea.classList.remove('error');
      messageTextArea.classList.add('success');

      setState((prev) => ({
        ...prev,
        message: {
          ...prev.message,
          complete: true,
        },
      }));
    } else {
      messageTextArea?.classList.remove('error');
      messageTextArea?.classList.remove('success');

      setState((prev) => ({
        ...prev,
        message: {
          ...prev.message,
          complete: false,
        },
      }));
    }
  }, [state.message.value, active, messageTextArea]);

  return {
    state,
    setState,
    active,
    setActive,
    formComplete,
    handleUpdateInput,
    handleSubmit,
  };
}
