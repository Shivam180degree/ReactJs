import { useEffect, useState } from 'react';

function Stopwatch() {
  const [state, setState] = useState(false)
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    if(state === true){
      setTimeout(() => {
        setTimer(timer+1)
      }, 1000);
    }
  }, [timer, state]);

  console.log('timer:',timer,"state:" ,state)

  let handleStart = () => {
    console.log("start");
    setState(true)
  }

  let handlePause = () => {
    console.log("Pause");
    setState(false)
  }

  let handleStop = () => {
    console.log("handleStop");
    setState(false)
    setTimer(0)
  }

  return (
      <div className='contentWrapper'>
        <div className='contentBox'>
          <h1 ><span className='min'>{timer}</span></h1>
          <div className='buttonBox'>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
            <button onClick={handlePause}>Pause</button>
          </div>
        </div>
      </div>
  );
}

export default Stopwatch;