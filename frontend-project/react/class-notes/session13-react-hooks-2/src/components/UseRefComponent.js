import React, { useEffect, useRef, useState } from 'react';

const UseRefComponent = () => {
  const inputRef = useRef(null);
  const divRef = useRef(null);
  // const [value, setValue] = useState(0);
  // console.log(value);
  const valueRef = useRef(0);
  console.log('valueRef', valueRef);
  // const valueObj = {current: 0}
  // const [state, setState] = useState();

  useEffect(() => {
    // console.log(document.querySelector('input'));
    // document.querySelector('input').focus();
    // console.log(inputRef.current);
    inputRef.current.focus();
    // inputRef.current.parentNode.style.backgroundColor = 'red';
  }, []);

  const changeBGColor = () => {
    // divRef.current.style.backgroundColor = 'orange';
    // const colors = [
    //   'orange',
    //   'pink',
    //   'purple',
    //   'red',
    //   '#00ff00',
    //   'rgb(150, 150, 150)',
    // ];
    // const random = Math.trunc(Math.random() * 6);
    // console.log(random);
    // divRef.current.style.backgroundColor = colors[random];
    // console.log(inputRef.current.value);
    // divRef.current.style.backgroundColor = inputRef.current.value;
  };

  const increase = () => {
    // setValue(value + 1);
    // setState({});
    valueRef.current = valueRef.current + 1;
  };

  return (
    <div ref={divRef} className="useref">
      <h2>UseRef Component</h2>
      <input ref={inputRef} placeholder="Enter the text..." />
      <button onClick={changeBGColor}>Change BG Color</button>
      <button onClick={increase}>Increase Value</button>
    </div>
  );
};

export default UseRefComponent;
