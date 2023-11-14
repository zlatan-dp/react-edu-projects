import questions from '../../../data/questions.json';
import './Result.scss';

function Result({ correct, resetStep, resetCorrect }) {
  return (
    <div className="result">
      <img
        src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png"
        alt="game element"
      />
      <h2>
        Ви відгадали {correct} відповіді з {questions.length}
      </h2>
      <button
        onClick={() => {
          resetStep(0);
          resetCorrect(0);
        }}
      >
        Спробувати ще раз
      </button>
    </div>
  );
}

export default Result;
