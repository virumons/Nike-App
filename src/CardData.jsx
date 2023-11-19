
import React from 'react';


const CardData = ({Data}) => {

  return (
    
          <div className='flex flex-row justify-center items-center '>
            <div className='flex flex-col justify-center items-center mx-[10px] hover:drop-shadow-xl'>
              <img src={Data.img} className='w-[500px] h-[500px] rounded-tl-3xl rounded-tr-3xl' />
              <div className='py-[2rem] rounded-br-3xl rounded-bl-3xl bg-[#f4f4f4] w-[500px] flex flex-col justify-center items-center '>
                <h1 className='text-[20px] font-normal'>Nike Sports collections</h1>
                <h1 className='text-[50px] font-semibold text-[#2d2d2d]'>{Data.name}</h1>
                <button className=' py-2 text-[#4971c9] text-[20px] font-medium border-b-[3px] border-[#4971c9] hover:text-black transition duration-100 ease-in-out'>Shop Now</button>
              </div>
            </div>
            
          </div>
   
  );
};

export default CardData;


