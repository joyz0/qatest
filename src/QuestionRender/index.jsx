import { useState, useRef } from 'react';
import { CategoryEnum } from '../Constants';
import SelectRender from './SelectRender';
import Timer from './Timer';
import './index.css';

function QuestionRender({ question, onFinish }) {
  let TargetRender = <div>未知题目类型</div>;
  if (question.category === CategoryEnum.SELECT) {
    TargetRender = SelectRender;
  }

  return <TargetRender question={question} onFinish={onFinish} />;
}

function Report({ report }) {
  const dataStr =
    'data:text/json;charset=utf-8,' +
    encodeURIComponent(JSON.stringify(report));

  return (
    <a role="button" href={dataStr} download="report.json">
      已完成所有题目，点击下载统计报告
    </a>
  );
}

export function QuestionSquare({ questions }) {
  const [index, setIndex] = useState(0);
  const [report, setReport] = useState([]);
  const [start, setStart] = useState(false);
  const timerRef = useRef();
  const completed = index === questions.length;
  const currentQuestion = questions[index];

  function handleFinish(correct) {
    const responseTime = timerRef.current.check();
    setReport([
      ...report,
      {
        id: currentQuestion.id,
        responseTime,
        correct,
      },
    ]);
    setIndex(index + 1);
  }

  function handleStart() {
    setStart(true);
  }

  if (!start) {
    return (
      <h3 role="button" onClick={handleStart}>
        开始做题
      </h3>
    );
  }

  if (completed) {
    return <Report report={report}></Report>;
  }

  return (
    <div>
      <Timer key={index} ref={timerRef}></Timer>
      <QuestionRender
        question={currentQuestion}
        onFinish={handleFinish}
      ></QuestionRender>
    </div>
  );
}
