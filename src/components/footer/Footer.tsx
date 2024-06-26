// React router
import { Link } from 'react-router-dom';

// Components
import ListGroup from '../list_group/ListGroup';
import IconText from '../text_elements/icon_text/IconText';

// Data
import { navigation } from '../../data/navigation';
import { connect } from '../../data/connect';
import { sourceCode } from '../../data/sourceCode';
import { contact } from '../../data/contact';

// Icons
import { BiArrowToTop } from 'react-icons/bi';

export default function Footer() {
  return (
    <footer className='footer'>
      <Link
        to='/'
        className='btn btn--primary btn--back-to-top'
        aria-label='back to the top'
      >
        <BiArrowToTop />
      </Link>

      <div className='container'>
        <div className='footer__links'>
          <ListGroup
            heading='navigation'
            list={navigation}
            renderKey={(item) => item.name}
            renderItem={(item) => <Link to={item.link}>{item.name}</Link>}
          />
          <ListGroup
            heading='connect'
            list={connect}
            renderKey={(item) => item.name}
            renderItem={(item) => (
              <Link to={item.anchor} rel='noopener noreferrer' target='_blank'>
                {item.name}
              </Link>
            )}
          />
          <ListGroup
            heading='source code'
            list={sourceCode}
            renderKey={(item) => item.name}
            renderItem={(item) => (
              <Link to={item.anchor} rel='noopener noreferrer' target='_blank'>
                {item.name}
              </Link>
            )}
          />
          <ListGroup
            heading='contact'
            list={contact}
            renderKey={(item) => item.text}
            renderItem={(item) => (
              <IconText icon={item.icon} text={item.text} />
            )}
          />
        </div>
        <div className='copyright'>
          Copyright &copy; Craig Puxty - 2023. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
