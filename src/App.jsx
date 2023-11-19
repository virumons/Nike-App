
import heroimg from './assets/hero.png'
import CardData from './CardData'
import logo from './assets/logo.png'
import red from './assets/red.jpg';
import blue from './assets/blue.jpg';
import pink from './assets/pink.jpg';
import green from './assets/green.jpg';
import back from './assets/back.jpg';
import Footer from './footer'
import kid from './assets/kid.jpg'
import men from './assets/men.jpg'
import women from './assets/women.jpg'

function Move(){
  return(
    <marquee direction="right"  scrollamount="12" >
    <div className='flex flex-row'>
  <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/air-jordan.png" alt="air-jordan"/>
    <h1 className=' px-[50px] text-[30px] font-medium'>Diwali sale <span className='text-[50px] text-[#c97323] font-extrabold'>40% off</span></h1>
  <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/air-jordan.png" alt="air-jordan"/>
  
  <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/air-jordan.png" alt="air-jordan"/>
    <h1 className=' px-[50px] text-[30px] font-medium'>Diwali sale <span className='text-[50px] text-[#c97323] font-extrabold'>40% off</span></h1>
  <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/air-jordan.png" alt="air-jordan"/>
  
  <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/air-jordan.png" alt="air-jordan"/>
    <h1 className=' px-[50px] text-[30px] font-medium'>Diwali sale <span className='text-[50px] text-[#c97323] font-extrabold'>40% off</span></h1>
  <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/air-jordan.png" alt="air-jordan"/>
  
  <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/air-jordan.png" alt="air-jordan"/>
    <h1 className=' px-[50px] text-[30px] font-medium'>Diwali sale <span className='text-[50px] text-[#c97323] font-extrabold'>40% off</span></h1>
  <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/air-jordan.png" alt="air-jordan"/>
  
  <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/air-jordan.png" alt="air-jordan"/>
    <h1 className=' px-[50px] text-[30px] font-medium'>Diwali sale <span className='text-[50px] text-[#c97323] font-extrabold'>40% off</span></h1>
  <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/air-jordan.png" alt="air-jordan"/>
  
  </div>
 
  </marquee>
  );
}
function Category(){
  return(
    <>
    <div className='flex flex-col sm:flex-row justify-center items-center'>
      
      <div className=' mx-[20px]'>
        <img src={kid} className=' sm:w-[500px] rounded-2xl hover:opacity-25 transition duration-100 ease-in-out'/>
        <h1 className='text-[25px] font-meduim py-2'>Kids Collection</h1>
      </div>

      <div className='mx-[20px]'>
        <img src={men} className='w-[500px]  rounded-2xl hover:opacity-25 transition duration-100 ease-in-out'/>
        <h1 className='text-[25px] font-meduim py-2'>Men's Collection</h1>
      </div>

      <div className='mx-[20px]'>
        <img src={women} className=' w-[500px] rounded-2xl hover:opacity-25 transition duration-100 ease-in-out '/>
        <h1 className='text-[25px] font-meduim py-2'>Women Collection</h1>
      </div>
    </div>
    </>
  );
}
export default function App() {
 
  return (
   
    <>
    <section className='px-[30px] py-3 text-[#d3d3d3] flex flex-row justify-between bg-[#1f1f1f]' id='nav'>
      <div className='flex flex-row'>
        <img src='https://img.icons8.com/color/48/nike.png'></img>
        <h3 className='p-[10px] text-[25px] font-semibold'>Nike</h3>
      </div>
      <div className='a-tag hidden sm:flex flex-row p-[10px] text-[20px] font-medium '>
        <div className='flex flex-row px-[20px]'>
        <img width="40" height="40" src="https://img.icons8.com/glyph-neue/64/FFFFFF/trainers.png" alt="trainers"/>
        <a className='hover:text-[#c97323] transition duration-100 ease-in-out'>Search</a>
        </div>
        <div className='flex flex-row px-[20px]'>
        <img width="40" height="40" src="https://img.icons8.com/ios-filled/50/FFFFFF/nike.png" alt="nike"/>
        <a className='hover:text-[#c97323] transition duration-100 ease-in-out'>About us</a>
        </div>
        <div className='flex flex-row px-[20px]'>
        <img width="40" height="40" src="https://img.icons8.com/ios-glyphs/60/FFFFFF/shopping-cart-loaded.png" alt="shopping-cart-loaded"/>
        <a className='hover:text-[#c97323] transition duration-100 ease-in-out'>Cart</a>
        </div>
      </div>
    </section>
    
    {/* Hero car */}
    <section className='flex flex-col sm:flex-row justify-center items-center p-[1rem] pt-[1rem]  pb-[50px]'>
      <div className=' text-center sm:flex-col justify-center items-center p-[2rem] mt-[20px]  h-[700px]'>
        
        <h1 className='text-[150px] font-bold text-[#c97323] pl-[1rem]'>Nike</h1>
        <h1 className='pl-[1rem] font-medium text-[20px] text-[#4d4d4d]'>Nike's online store epitomizes sports innovation, offering top-tier footwear, apparel, and gear for athletes worldwide.</h1>
        
        <button className='ml-[1rem] mt-[1rem] py-[10px] px-[50px] text-black font-medium text-[20px] bg-[#c97323] rounded-2xl'>Expolre</button>
      </div>
      <img src={heroimg} className='bg-white rounded-2xl'></img>
    </section>

    <section>
     <Move />
    </section>

    {/* hero card explore */}
    <section className=' flex-col sm:flex-col justify-center items-center'>
      <div className='flex flex-col justify-center items-center'>
      <img src={logo} className='w-[250px] p-[0px] m-[0px] '/>
      <h1 className='sm:text-[50px] font-medium p-[0px] m-[0px] text-[#252525]'>Trending</h1>
      </div>
      <div className='flex flex-col sm:flex-row justify-center items-center my-8'>
      <CardData Data={{img:red,name:'basket ball'}}/>
      <CardData Data={{img:blue,name:'Nike-Sports'}}/>
      <CardData Data={{img:pink,name:'Casual'}}/>
      </div>
      <div className='flex flex-col sm:flex-row justify-center items-center'>
      <CardData Data={{img:green,name:'Sport + Casual'}}/>
      <CardData Data={{img:back,name:'White-Casual'}}/>
      </div>
    </section>

    <section className='mt-[200px] bg-[#c97323] py-[3rem]'>
      <div className='flex flex-row justify-center items-center'>
      <img src={logo} className='w-[250px] p-[0px] m-[0px] '/>
      </div>
      <div className='flex flex-col justify-center items-center'>
        <h1 className=' text-[70px] font-extrabold' id='gifts'>GIFTS THAT MOVE YOU</h1>
        <h1 className='text-[25px]'>This year's GIFTS. Next year's greatness</h1>
        <div className='flex flex-row justify-center items-center'>
          <button className='bg-[#171717] text-white text-[20px] font-medium px-[3rem] py-[1rem] rounded-2xl m-2'>shop</button>
          <button className='bg-[#171717] text-white text-[20px] font-medium px-[3rem] py-[1rem] rounded-2xl m-2'>Explore</button>
        </div>
    </div>
    </section>

    <section className='my-[150px] flex flex-col justify-center items-center'>
    <h1 className='text-[35px] font-medium py-10'>Category</h1>
      <Category/>
    </section>
    <section className='bg-[#171717] p-12'>
      <Footer/>
    </section>
    
    </>
  )
}