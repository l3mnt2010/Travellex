import React , { useState } from 'react'

import TodoView  from './TodoView';
import TodoEdit from './TodoAdd';
import ChartExample from './Charts';

import  tripweb from '../images/trip.webp';
import logo from '../images/logo.png';
import fly from '../images/fly.webp';
import router from '../images/xmilestone_1.png.pagespeed.ic.cgGYEf9S7l.webp'

interface TodoViewProps {
 todo: string;
}

const MenuBar = () => {

  const [tab, setTab] = useState<React.ReactNode>(null);
  const [dark, setDark] =useState(false)

  const ChangeDark = () =>{
   setDark(!dark);
  }
 const ClickView = () => {
    setTab(<TodoView />);
 }
 
 const ClickAdd = ()  => {
   setTab(<TodoEdit/>)
 }


 const ClickEdit = (id:Number)  => {
    console.log(id)
 }
 const ClickCharArt = ()  =>  {
  setTab(<ChartExample/>)
 }

  return (
<div className={dark? 'bg-black text-white':''}>

<div className={dark? 'w-full h-15 grid grid-cols-2 border border-sky-600 bg-black text-white':'w-full h-15 grid grid-cols-2 border border-sky-600'}>
  <div className='flex'>
  <img src={tripweb} className='w-10 h-10 m-10'></img>
  {/* <img src={logo} className='w-35 h-12 my-10'></img> */}
  </div>

  <div className=''>
     <div className='flex'>
        <img src={fly} className='w-10 h-10 ml-40 my-9'></img>
        <h3 className='mr-40 my-10 ml-5 cursor-pointer' onClick={ChangeDark}>Dark Mode</h3>
        <img src={router} className='w-12 h-12 ml-32 my-10'></img>
     </div>
  </div>


</div>

<div className='flex w-full max-h-screen mt-10'>
<div className={dark? 'w-1/6 max-h-screen border border-sky-600 text-black bg-black':'w-1/6 max-h-screen border border-sky-600'}>
 <ul className={dark? 'w-full h-4/5 grid grid-rows-4 gap-14 text-center' :'w-full h-4/5 grid grid-rows-4 bg-cyan-200 gap-14 text-center'}>
  <li className='bg-white text-black cursor-pointer h-full flex items-center justify-center hover:bg-gray-500' onClick={ClickView}>
     View

  </li>
  <li className='bg-white cursor-pointer h-full flex items-center justify-center hover:bg-gray-500' onClick={ClickAdd}>
     Add

  </li>
  
  <li className='bg-white cursor-pointer h-full flex items-center justify-center hover:bg-gray-500' onClick={()=>ClickEdit(1)}>
     Edit
  </li>
  <li className='bg-white cursor-pointer h-full flex items-center justify-center hover:bg-gray-500'  onClick={ClickCharArt}>
     Char Art
  </li>

 </ul>

</div>


<div className='w-5/6 h-auto text-center mr-1 h-screen'>
<div>{tab}</div>
</div>

</div>










</div>



  )


}

export default MenuBar;