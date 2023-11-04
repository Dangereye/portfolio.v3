// React
import { useState, useContext } from 'react';

// Email JS
import emailjs from 'emailjs-com';

// Context
import { AppContext } from '../../context/appContext';

// Components
import InputGroup from './input_group/InputGroup';
import FormInput from './inputs/FormInput';
import TextArea from './inputs/TextArea';
import Button from '../buttons/Button';
import IconText from '../text_elements/icon_text/IconText';
import SocialIcons from './social_icons/SocialIcons';
// import ArticleHeading from '../../components/ArticleHeading';

// Icons
import { MdEmail, MdOutlineError } from 'react-icons/md';
import { VscPassFilled } from 'react-icons/vsc';
import { FaSpinner } from 'react-icons/fa';

// Data
import { Connect, EmailAddress } from '../../data/connect';
import { toastDefault } from '../../data/toastDefault';
import { formDefault } from '../../data/formDefault';

// Animation hook
import useAnimation from '../../hooks/useAnimation';
import HeadingSection from '../text_elements/HeadingSection';
import BodyText from '../text_elements/BodyText';

export default function Contact() {
  const { setToast } = useContext(AppContext);
  const [state, setState] = useState(formDefault);

  // useAnimation(element id,trigger id,{from options},{to options})
  //   useAnimation(
  //     '.contact-animate-form',
  //     '#contact',
  //     {
  //       x: 300,
  //       y: 0,
  //       stagger: 0.05,
  //       ease: 'back.out(1.4)',
  //     },
  //     {}
  //   );

  //   useAnimation(
  //     '.contact-animate',
  //     '#contact',
  //     {
  //       x: -300,
  //       y: 0,
  //       stagger: 0.05,
  //       ease: 'back.out(1.4)',
  //     },
  //     {}
  //   );

  // Functions
  //   const resetValidation = () => {
  //     setState((prev) => ({
  //       ...prev,
  //       complete: false,
  //       name: { ...prev.name, error_msg: '' },
  //       email: { ...prev.email, error_msg: '' },
  //       message: { ...prev.message, error_msg: '' },
  //     }));

  //     const input = document.querySelectorAll('input');
  //     input.forEach((input) => {
  //       input.classList.remove('success');
  //       input.classList.remove('error');
  //     });

  //     const textArea = document.querySelector('textarea');
  //     textArea.classList.remove('success');
  //     textArea.classList.remove('error');
  //   };

  //   const handleUpdateInput = (e) => {
  //     const { name, value } = e.target;
  //     setState({
  //       ...state,
  //       [name]: {
  //         value,
  //         error_msg: '',
  //       },
  //     });
  //   };

  //   const checkName = () => {
  //     if (state.name.value.length < 1) {
  //       setState((prev) => ({
  //         ...prev,
  //         name: { ...state.name, error_msg: 'Please enter your name.' },
  //       }));
  //       const target = document.querySelector("[name='name']");
  //       target.classList.add('error');
  //       return;
  //     }

  //     if (state.name.value.length < 3) {
  //       setState((prev) => ({
  //         ...prev,
  //         name: {
  //           ...prev.name,
  //           error_msg: '3 characters min.',
  //         },
  //       }));

  //       const target = document.querySelector("[name='name']");
  //       target.classList.add('error');
  //       return;
  //     }
  //     const target = document.querySelector("[name='name']");
  //     target.classList.remove('error');
  //     target.classList.add('success');
  //   };

  //   const checkEmail = () => {
  //     if (state.email.value.length < 1) {
  //       setState((prev) => ({
  //         ...prev,
  //         email: { ...prev.email, error_msg: 'Please enter your email.' },
  //       }));

  //       const target = document.querySelector("[name='email']");
  //       target.classList.add('error');
  //       return;
  //     }

  //     if (!state.email.value.includes('@')) {
  //       setState((prev) => ({
  //         ...prev,
  //         email: { ...prev.email, error_msg: 'Please enter a valid email.' },
  //       }));

  //       const target = document.querySelector("[name='email']");
  //       target.classList.add('error');
  //       return;
  //     }
  //     const target = document.querySelector("[name='email']");
  //     target.classList.remove('error');
  //     target.classList.add('success');
  //   };

  //   const checkMessage = () => {
  //     if (state.message.value.length < 1) {
  //       setState((prev) => ({
  //         ...prev,
  //         message: { ...prev.message, error_msg: 'Please enter your message.' },
  //       }));

  //       const target = document.querySelector("[name='message']");
  //       target.classList.add('error');
  //       return;
  //     }

  //     const target = document.querySelector("[name='message']");
  //     target.classList.remove('error');
  //     target.classList.add('success');
  //     setState((prev) => ({ ...prev, complete: true }));
  //   };

  //   const validation = () => {
  //     resetValidation();
  //     checkName();
  //     checkEmail();
  //     checkMessage();
  //   };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //   validation();
    //   sendMail(e);
  };

  //   const sendMail = (e) => {
  //     if (state.complete) {
  //       setState((prev) => ({
  //         ...prev,
  //         sending: true,
  //       }));
  //       emailjs
  //         .sendForm(
  //           'gmail',
  //           'portfolio_template',
  //           e.target,
  //           `${process.env.NEXT_PUBLIC_EMAIL_JS_KEY}`
  //         )
  //         .then(
  //           (result) => {
  //             useToast('Message sent!', 'success', <VscPassFilled />);
  //             resetValidation();
  //             setState(formDefault);
  //           },
  //           (error) => {
  //             useToast(
  //               'Message failed! Please, try again.',
  //               'error',
  //               <MdOutlineError />
  //             );
  //           }
  //         );
  //     }
  //   };

  //   const useToast = (message, status) => {
  //     setToast({ message, status });
  //     setTimeout(() => {
  //       setToast(toastDefault);
  //     }, 6000);
  //   };

  return (
    <section className='section contact-section' id='contact'>
      <div className='container'>
        <div className='typography'>
          <HeadingSection
            lead='contact'
            heading="let's talk!"
            anim='contact-animate-text'
          />
          <BodyText
            text="To discuss career & freelance opportunities, contact me directly or
          fill out the form and I'll get back to you promptly."
            anim='contact-animate'
          />
          <IconText
            icon={<MdEmail />}
            text={EmailAddress}
            anim='contact-animate'
          />
          <SocialIcons list={Connect} anim='contact-animate' />
        </div>

        <form className='form' onSubmit={handleSubmit}>
          <InputGroup
            id='name'
            name='name'
            error_msg={state.name.error_msg}
            anim='contact-animate-form'
          >
            <FormInput
              id='name'
              type='text'
              name='name'
              onFocus={() => {}}
              onBlur={() => {}}
            />
          </InputGroup>
          {/* <InputGroup
            type='text'
            name='name'
            value={state.name.value}
            handleChange={handleUpdateInput}
            handleBlur={checkName}
            error_msg={state.name.error_msg}
            anim='contact-animate-form'
          /> */}
          <InputGroup
            id='email'
            name='email'
            error_msg={state.email.error_msg}
            anim='contact-animate-form'
          >
            <FormInput
              id='email'
              type='email'
              name='email'
              onFocus={() => {}}
              onBlur={() => {}}
            />
          </InputGroup>
          {/* <InputGroup
            type='email'
            name='email'
            value={state.email.value}
            handleChange={handleUpdateInput}
            handleBlur={checkEmail}
            error_msg={state.email.error_msg}
            anim='contact-animate-form'
          /> */}
          <InputGroup
            id='message'
            name='message'
            error_msg={state.message.error_msg}
            anim='contact-animate-form'
          >
            <TextArea
              id='message'
              name='message'
              onFocus={() => {}}
              onBlur={() => {}}
            />
          </InputGroup>
          {/* <TextAreaGroup
            name='message'
            value={state.message.value}
            handleChange={handleUpdateInput}
            handleBlur={checkMessage}
            error_msg={state.message.error_msg}
            anim='contact-animate-form'
          /> */}
          <div className='btns contact-animate-form'>
            <Button
              variant={state.complete ? 'btn--primary' : 'btn--disabled'}
              disabled={!state.complete}
              fnc={() => {}}
            >
              <span>{state.sending ? 'Sending' : 'Send message'}</span>
              {state.sending ? (
                <span className='spinner'>
                  <FaSpinner />
                </span>
              ) : null}
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
