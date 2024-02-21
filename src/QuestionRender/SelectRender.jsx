export default function SelectRender({ question, onFinish }) {
  const { content, answers, rightIndex } = question;

  function handleClick(i) {
    onFinish(i === rightIndex);
  }

  return (
    <div>
      <p>{content}</p>
      <ol type="A">
        {answers.map((row, i) => {
          return (
            <li key={row} onClick={() => handleClick(i)}>
              {row}
            </li>
          );
        })}
      </ol>
    </div>
  );
}
