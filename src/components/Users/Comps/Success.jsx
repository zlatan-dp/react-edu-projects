import React from 'react';
import SuccessImg from '../../../img/users/success.svg';

export const Success = ({ count }) => {
  return (
    <div className="success-block">
      <img src={SuccessImg} alt="Success" />
      <h3>Успішно!</h3>
      <p>Всім {count} користувачам відправлено запрошення.</p>
      <button
        onClick={() => window.location.reload()}
        className="send-invite-btn"
      >
        Назад
      </button>
    </div>
  );
};
