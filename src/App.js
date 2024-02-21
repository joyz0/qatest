import { QuestionSquare } from './QuestionRender';
import { CategoryEnum, TypeEnum } from './Constants';
import './App.css';

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    // 随机选取一个比当前小的元素索引
    const j = Math.floor(Math.random() * (i + 1));
    // 交换它们
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const questions = shuffleArray([
  {
    id: 'q1',
    category: CategoryEnum.SELECT,
    type: TypeEnum.TYPE_1,
    content: '3，9，27，81，？',
    answers: [98, 168, 243, 324],
    rightIndex: 2,
  },
  {
    id: 'q2',
    category: CategoryEnum.SELECT,
    type: TypeEnum.TYPE_1,
    content: '2，4，6，8，？',
    answers: [10, 12, 14, 16],
    rightIndex: 0,
  },
  {
    id: 'q3',
    category: CategoryEnum.SELECT,
    type: TypeEnum.TYPE_1,
    content: '2，4，8，16，？',
    answers: [18, 20, 24, 32],
    rightIndex: 3,
  },
  {
    id: 'q4',
    category: CategoryEnum.SELECT,
    type: TypeEnum.TYPE_1,
    content: '0，1，3，6，？',
    answers: [7, 8, 9, 10],
    rightIndex: 3,
  },
  {
    id: 'q5',
    category: CategoryEnum.SELECT,
    type: TypeEnum.TYPE_1,
    content: '1，2，2，4，8，？',
    answers: [16, 24, 32, 64],
    rightIndex: 2,
  },
]);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <QuestionSquare questions={questions} />
      </header>
    </div>
  );
}

export default App;
