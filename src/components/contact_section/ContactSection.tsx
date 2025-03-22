// Components
import InputGroup from './input_group/InputGroup';
import FormInput from './inputs/FormInput';
import TextArea from './inputs/TextArea';
import Button from '../buttons/Button';
import IconText from '../text_elements/icon_text/IconText';
import SocialIcons from './social_icons/SocialIcons';
import HeadingSection from '../text_elements/HeadingSection';
import BodyText from '../text_elements/BodyText';

// Icons
import { MdEmail } from 'react-icons/md';
import { FaSpinner } from 'react-icons/fa';

// Data
import { EmailAddress } from '../../data/emailAddress';
import { connect } from '../../data/connect';

// Hooks
import useAnimation from '../../hooks/useAnimation';
import useForm from '../../hooks/useForm';

export default function Contact() {
  const { state, setActive, formComplete, handleUpdateInput, handleSubmit } =
    useForm();

  // useAnimation(element id,trigger id,{from options},{to options})
  useAnimation(
    '.contact-animate-form',
    '#contact',
    {
      x: 300,
      opacity: 0,
    },
    { x: 0, opacity: 1, stagger: 0.05, duration: 0.6, ease: 'power2.Out' }
  );

  useAnimation(
    '.contact-animate-text',
    '#contact',
    {
      x: -300,
      opacity: 0,
    },
    { x: 0, opacity: 1, stagger: 0.05, duration: 0.6, ease: 'power2.Out' }
  );

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
            text="Whether you're hiring or looking to collaborate, feel free to get in touch directly — or fill out the form and I’ll get back to you promptly."
            anim='contact-animate-text'
          />

          <IconText
            icon={<MdEmail />}
            text={EmailAddress}
            anim='contact-animate-text'
          />
          <SocialIcons list={connect} anim='contact-animate-text' />
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
              value={state.name.value}
              onChange={handleUpdateInput}
              onFocus={() => setActive('name')}
              onBlur={() => setActive(null)}
            />
          </InputGroup>

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
              value={state.email.value}
              onChange={handleUpdateInput}
              onFocus={() => setActive('email')}
              onBlur={() => setActive(null)}
            />
          </InputGroup>

          <InputGroup
            id='message'
            name='message'
            error_msg={state.message.error_msg}
            anim='contact-animate-form'
          >
            <TextArea
              id='message'
              name='message'
              value={state.message.value}
              onChange={handleUpdateInput}
              onFocus={() => setActive('message')}
              onBlur={() => setActive(null)}
            />
          </InputGroup>

          <div className='btns contact-animate-form'>
            <Button
              variant={formComplete ? 'btn--primary' : 'btn--disabled'}
              disabled={!formComplete}
              fnc={() => {}}
            >
              <span>{state.sending ? 'Sending' : 'Send message'}</span>
              {state.sending ? (
                <span className='icon spinner'>
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
