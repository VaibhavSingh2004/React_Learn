import { useState} from 'react';
import './App.css'
import data from "../src/component/data"
import Tours from "../src/component/Tours"
function App() {
  const [tours,setTours] = useState(data)
  console.log(tours)

  function removeToursHandler(id){
    let new_data = tours.filter(tour =>tour.id !== id)
    setTours(new_data);
  }
  if (tours.length===0){
    return(
      <>
      <div className="refresh">
        <h2>No Tours Left</h2>  
        <button className="btn-white"  onClick={()=>{setTours(data)}}>Refresh</button>
      </div>
      </>
    )
  }
  return (
    
    <>
      <div className='app'>
        <Tours tours={tours} removeTours={removeToursHandler}/>
      </div>
    </>
  )
}

export default App
