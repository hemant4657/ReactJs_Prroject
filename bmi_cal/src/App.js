
import { useState } from 'react';
import './App.css';

function App() {
  const [weight,setWeight] = useState(0);
  const [Height,setHeight] = useState(0);
  const [bmi,setBmi] = useState('');
  const [message,setmessage] = useState('');

  let calBmi = (e) => {
      e.preventDefault()
      if(weight===0 || Height===0){
        alert("Enter a velid weight and height")
      }
      else{
        let bmi = (weight/(Height*Height)*703)
        setBmi(bmi.toFixed(1))  
      }
      if(bmi<25){
        setmessage('You are underweight');
      }
      else if (bmi>=25 && bmi<30){
        setmessage("You are healthy weight");
      }
      else{
        setmessage('You are over weight');
      }
    }

    let reload = () =>{
      window.location.reload();
    }

  return (
    <div className="container">
      <form onSubmit={calBmi}>
        <h2>BMI Calculator</h2>
        <div className='labal'>
          <label>Weight (ibs)</label>
          <br />
          <input type='text'
           placeholder='Enter Weight value' value={weight} onChange={(e) => setWeight(e.target.value)}/>
        </div>
        <div className='labal'>
          <label className='height'>Height (in)</label>
          <br />
          <input type='text' placeholder='Enter Height value' value={Height} onChange={(e) => setHeight(e.target.value)}/>
        </div>
        <div className='botton'>
          <button type='submit'>Submit</button>
          <button type='submit' onClick={reload}>Reload</button>
        </div>
        <div className='bmicolor'>
          <h3>Your Bmi is:{bmi}</h3>
          <p>{message}</p>
        </div>
      </form>
    </div>
  );
}

export default App;
