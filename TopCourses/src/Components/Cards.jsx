import React, { useState } from 'react'
import Card from './Card'
function Cards({courseData,category}) {
    const [likedCourses,setLikedCourses]=useState([])
    function getCourses(){
        if (category==="All"){
            let allCourses=[]
            Object.values(courseData).forEach((arrData)=>{
                arrData.forEach((courses)=>{
                    allCourses.push(courses)
                })
            })
            return allCourses
        }else{
            return courseData[category]
        }
    }

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-4">
        {getCourses().map((course)=>{
            return <Card 
            course={course}
            likedCourses={likedCourses}
            setLikedCourses={setLikedCourses}/>
        })}
        
    </div>
  )
}

export default Cards