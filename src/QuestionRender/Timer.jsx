import { useState, useEffect, useImperativeHandle, forwardRef } from 'react';

function Timer(props, ref) {
  const [millisecond, setMillisecond] = useState(0);

  useImperativeHandle(ref, () => ({
    check: () => {
      return millisecond;
    },
  }));

  useEffect(() => {
    const id = setInterval(() => {
      setMillisecond((prev) => prev + 1);
    }, 1);
    return () => clearInterval(id);
  }, []);

  return <div>{millisecond}ms</div>;
}

export default forwardRef(Timer);
