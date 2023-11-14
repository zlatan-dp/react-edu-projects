import { useState } from 'react';
import './Quiz.scss';
import questions from '../../data/questions.json';

import Game from './Game/Game';
import Result from './Result/Result';

function QuizApp() {
  const [step, setStep] = useState(0);
  const [correct, setCorrect] = useState(0);
  const question = questions[step];

  const onClickVariant = index => {
    setStep(step + 1);

    if (index === question.correct) {
      setCorrect(correct + 1);
    }
  };

  return (
    <div className="quiz-wrap">
      <div className="quiz-app">
        {step !== questions.length ? (
          <Game
            step={step}
            question={question}
            onClickVariant={onClickVariant}
          />
        ) : (
          <Result
            correct={correct}
            resetStep={setStep}
            resetCorrect={setCorrect}
          />
        )}
      </div>
    </div>
  );
}

export default QuizApp;
