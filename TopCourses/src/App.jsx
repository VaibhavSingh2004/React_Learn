import React, { useEffect, useState } from 'react'
// import { useEffect } from 'react'
import Navbar from './Components/Navbar'
import Spinner from './Components/Spinner'
import Filter from './Components/Filter'
import Cards from './Components/Cards'
import { filterData,apiUrl } from './data'

function App() {
  const [courses,setCourses]=useState([]);
  const [loading,setLoading]=useState(true);
  const [category,setCategory]=useState(filterData[0].title)

  async function fetchData(){
    setLoading(true);
    try{
      let data = await fetch(apiUrl)
      let output = await data.json()
      setCourses(output.data)

    }catch(e){
      console.log(e)
    }
  }
  useEffect(()=>{
    fetchData()
  },[])
  return (
    <div>
      <div>
        <Navbar/>
      </div>
      <div>
        <Filter 
        filterData={filterData}
        category={category}
        setCategory={setCategory}
        />
      </div>
      <div>
        <Cards 
        courseData = {courses}
        category={category}/>
      </div>
    </div>
  )
}

export default App