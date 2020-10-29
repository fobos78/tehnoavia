import React, { useEffect, useState } from 'react';

import './App.scss';

function App() {
  const arr = ['яблоко', 'груша', 'банан', 'киви', 'ананас', 'папайя', 'мандарин', 'апельсин', 'айва', 'лимон'];
  const [num, setNum] = useState(1);
  const [frut, setFrut] = useState(true);

  function inputChange(event) {
    setNum(event.target.value);
  }

  useEffect(() => {
    if ((num < 1 || num > 10)) {
      setFrut(false);
    } else {
      setFrut(true);
    }
  },[num]);

  return (
    <div className="App">
      <div className="wrap">
        {frut ? <div className="frut">{arr[num - 1]}</div> : <div className="frut">Нет фрукта</div>}
        <input className="inpNum" onChange={inputChange} value={num} />
      </div>
    </div>
  );
}

export default App;
