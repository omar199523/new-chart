import {useEffect, useState} from 'react'
import {configArr } from './getData'

import axios from 'axios';
import Chart from './componant/chart';
import './App.css'
function App() {

  return(
    <div className="App">
      <div className='token-list'>
        <div className='title'>
          <h2 className='tilte-name'>name/symdol</h2>
          <h2 className='tilte-address'>Address</h2>
        </div>
        {configArr.map(config=><Chart config={config}/> )}
      </div>
    </div>
  );
}

export default App;
