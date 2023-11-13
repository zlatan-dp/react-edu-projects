import { useState } from 'react';
import './Counter.scss';

function Counter() {
  const [count, setCount] = useState(0);

  const onClickPlus = () => {
    setCount(count + 1);
  };

  const onMinusPlus = () => {
    setCount(count - 1);
  };

  return (
    <div className="counter">
      <div>
        <h2>Счетчик:</h2>
        <p>{count}</p>
        <button onClick={onMinusPlus} className="minus">
          - Минус
        </button>
        <button onClick={onClickPlus} className="plus">
          Плюс +
        </button>
      </div>
    </div>
  );
}

export default Counter;
