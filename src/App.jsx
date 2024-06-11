import { useEffect, useState } from 'react'
import './App.css'
import Carousel from './components/carousel'


function App() {
  const [loading, setLoading] =  useState(false);
  const [images , setImages] =  useState([]);
  // console.log(images);

  const fetchimages = async(imgLimit) => {
    setLoading(true);
    try{
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/photos?_limit=${imgLimit}`
      );
      const data = await response.json();
      setImages(data);
    }
    catch(e){
        console.log("Error fetching images: " + error );
    } finally{
      setLoading(false);
    }
  };

  useEffect(() =>{
      fetchimages(9);
  },[]);

  return (
    <>
    <div className='h-1/3 w-1/2'>
      <Carousel 
     images={images}
     isLoading={loading}
     onImgClick={(image, index) => {}}
     imgPerSlide={2}
     imageLimit={4}
     customPrevButton={(onClick) => (
       <button
         className="btn prev"
         style={{background: "red"}}
         onClick={onClick}
       >
         Prev
       </button>
     )}
     customNextButton={(onClick) => (
       <button
         className="btn next"
         style={{background: "blue"}}
         onClick={onClick}
       >
         Next
       </button>
     )}
      />
    </div>
      
    </>
  )
}

export default App
