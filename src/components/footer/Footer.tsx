// React router
import { Link } from 'react-router-dom';

// Components

import IconText from '../text_elements/icon_text/IconText';
import Button from '../buttons/Button';

// Data
import { navigation } from '../../data/navigation';
import { connect } from '../../data/connect';
import { sourceCode } from '../../data/sourceCode';

// Icons
import { MdEmail } from 'react-icons/md';
import { BiArrowToTop } from 'react-icons/bi';
import ListGroup from '../list_group/ListGroup';
import { contact } from '../../data/contact';
import { downloads } from '../../data/downloads';

export default function () {
  //   const { downloadCV } = useModal();
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
            renderItem={(item) => <Link to={item.link}>{item.name}</Link>}
          />
          <ListGroup
            heading='connect'
            list={connect}
            renderItem={(item) => (
              <Link to={item.anchor} rel='noopener noreferrer' target='_blank'>
                {item.name}
              </Link>
            )}
          />
          <ListGroup
            heading='source code'
            list={sourceCode}
            renderItem={(item) => (
              <Link to={item.anchor} rel='noopener noreferrer' target='_blank'>
                {item.name}
              </Link>
            )}
          />
          <ListGroup
            heading='download'
            list={downloads}
            renderItem={(item) => (
              <Button variant='btn--tertiary' fnc={item.fnc}>
                <span>{item.name}</span>
              </Button>
            )}
          />
          <ListGroup
            heading='contact'
            list={contact}
            renderItem={(item) => (
              <IconText icon={item.icon} text={item.text} />
            )}
          />
        </div>
        <div className='copyright'>
          &copy; Craig Puxty - 2022. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
