// React
import { useState, useEffect } from 'react';

// Data
import { formDefault } from '../data/formDefault';
import { EmailRegex } from '../data/emailAddress';

type ActiveTypes = 'name' | 'email' | 'message' | null;

export default function useForm() {
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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    resetForm();
    //   sendMail(e);
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
  }, [state.name.value, active]);

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
  }, [state.email.value, active]);

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
  }, [state.message.value, active]);

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
