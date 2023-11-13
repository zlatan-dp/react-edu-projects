import { useState } from 'react';
import './Modal.scss';
import { ModalWindow } from './ModalWindow/ModalWindow';

function Modal() {
  const [open, setOpen] = useState(false);

  return (
    <div className="modal-wrap">
      <button onClick={() => setOpen(true)} className="open-modal-btn">
        ✨ Открыть окно
      </button>
      <ModalWindow open={open} setOpen={setOpen}>
        <img
          // src="https://media2.giphy.com/media/xT0xeJpnrWC4XWblEk/giphy.gif"
          src="https://media.tenor.com/Dld6AGBeg2kAAAAM/spiderman.gif"
          alt="gif"
        />
      </ModalWindow>
    </div>
  );
}
export default Modal;
