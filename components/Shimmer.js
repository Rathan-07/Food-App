// import Skeleton from 'react-loading-skeleton';

const Shimmer = () => {
  return (
    <div className="restaurant-List flex flex-wrap">
     {Array(20).fill("").map((e,index)=>
     <div  key ={index} className=" w-56 h-56 bg-gray-300 m-5 ">
     </div>)}
    </div>


  )
};

export default Shimmer;



