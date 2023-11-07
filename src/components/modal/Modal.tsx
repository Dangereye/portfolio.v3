// React
import { useContext } from 'react';

// Context
import { AppContext } from '../../context/appContext';

// Components
import Button from '../buttons/Button';

export default function Modal() {
  const { modalIsOpen, setModalIsOpen } = useContext(AppContext);

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className={modalIsOpen ? 'modal' : 'modal closed'}>
      <div className='heading heading--h3'>Confirmation</div>
      <p className='body-text'>Download curriculum vitae in PDF format?</p>
      <div className='btns'>
        <Button variant='btn--secondary' fnc={closeModal}>
          <span>Close</span>
        </Button>

        <a
          href='/downloads/curriculum_vitae.pdf'
          className='btn btn--primary'
          download
          onClick={closeModal}
        >
          Yes, download CV
        </a>
      </div>
    </div>
  );
}
