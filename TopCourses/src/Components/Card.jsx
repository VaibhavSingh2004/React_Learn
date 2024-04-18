import React from 'react'
import { BiUpvote,BiSolidUpvote } from "react-icons/bi";
import { toast } from 'react-toastify';
function Card({course,likedCourses,setLikedCourses}) {
    function liked(course_id){
        if (likedCourses.includes(course_id)){
            setLikedCourses( (prev) => prev.filter((cid)=> (cid !== course_id) )  );
            toast.warning("like removed");
        }else{
            if(likedCourses.length === 0 ) {
                setLikedCourses([course_id]);
            }
            else {
                //non-empty pehle se
                setLikedCourses((prev) => [...prev, course_id]);
            }
            toast.success("Liked Successfully");
        }


    }

  return (

        <div className='w-[300px] bg-bgDark bg-opacity-80 rounded-md overflow-hidden'>
            <div className='relative'>
                <img src={course.image.url} alt="" />
                <div className='w-[40px] h-[40px] bg-red-500 rounded-full absolute right-2 bottom-[-12px]
            grid place-items-center'>
                    <button onClick={()=>{liked(course.id)}}>
                    {!likedCourses.includes(course.id) ?(<BiUpvote fontSize="1rem"/>):(<BiSolidUpvote fontSize="1rem"/>)}
                    
                    </button>
                </div>
            </div>
            <div className='p-4'>
            <h1 className="text-black font-semibold text-lg leading-6">{course.title}</h1>
            <p className='mt-2 text-black'>{course.description}</p>
            </div>
            
        </div>

  )
}

export default Card