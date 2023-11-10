// React router
import { Link } from 'react-router-dom';

// Components
import BodyText from '../text_elements/BodyText';
import HeadingSection from '../text_elements/HeadingSection';

export default function ErrorSection() {
  return (
    <section className='section error-section' id='error'>
      <div className='container'>
        <HeadingSection
          lead='404'
          heading='well, this is arkward.'
          anim='animate-error-text'
        />
        <BodyText
          text="It looks like something went wrong. Don't worry though, these things happen from time to time. Have you tried going back to the previous page or the homepage? If that doesn't work, maybe try again later and see if the problem resolves itself."
          anim='animate-error-text'
        />
        <div className='btns'>
          <Link to='/' className='btn btn--primary'>
            Home
          </Link>
        </div>
      </div>
    </section>
  );
}
