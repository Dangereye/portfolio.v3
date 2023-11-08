// React
import { useState, useEffect, useRef } from 'react';

// Data
import { formDefault } from '../data/formDefault';
import { EmailRegex } from '../data/emailAddress';

type ActiveTypes = 'name' | 'email' | 'message' | null;

export default function useForm() {
  const [state, setState] = useState(formDefault);
  const [active, setActive] = useState<ActiveTypes>(null);

  const nameInput = document.querySelector("[name='name']");
  const emailInput = document.querySelector("[name='email']");

  console.log('Focused: ', active);

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
    } else {
      nameInput?.classList.remove('error');
      nameInput?.classList.remove('success');
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

      emailInput?.classList.remove('error');
      emailInput?.classList.add('success');
    } else {
      emailInput?.classList.remove('error');
      emailInput?.classList.remove('success');
    }
  }, [state.email.value, active]);

  return { state, setState, active, setActive };
}
