import { useState } from 'react'
import Coin from  "./assets/coin.svg"
import Small from "./assets/small-coin.png"
import Boost from "./assets/Boost.png"
import Tap from "./assets/tap.png"
import Task from "./assets/task.png"



import './App.css'

function App() {
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');
    fetch(`http://localhost:3000//start?token=${token}`)
      .then(response => response.json())
      .then(data => setBalance(data.balance));
  }, []);

  // ... rest of your code ...






const handleclick = () => {
  setBalance(balance + 100)
  console.log('balance chanced')
}

  return (
    <>
    <section className="App">
    <div className="balance">
      <img src={Small} alt=" coin balance"  /> <span className="coinbalance-num " >
       {balance}
       
      </span>

    </div>
    
    <div className="rember">
      <div className="numr">
        <h3 className="num">100</h3>
        <h5 className="num">100</h5>

      </div>
   </div>
    <div className="coinTap">
      <img src={Coin} className='coin' alt="coin"  onClick={handleclick}/>
    </div>

    
  
    
    <div className="footer">
      <div className="btn-container"> <img src={Boost} alt="" /> <h2 className="nam">BOOST</h2></div>
      <div className="btn-container"> <img src={Tap} alt="" /> <h2 className="nam">BOOST</h2></div>
      <div className="btn-container"> <img src={Task} alt="" /> <h2 className="nam">BOOST</h2></div>
      </div>




    </section>
    
    </>
  )
}

export default App
