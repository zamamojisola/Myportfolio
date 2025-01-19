import { NavLink, Outlet } from "react-router-dom";
import zeelogo from "../../assets/zeelogo.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdCancel } from "react-icons/md"
import { useState } from "react";


const Navbar = () => {

  const [toggle,setToggle]=useState(false)

  function handleToggle(){
    setToggle(prevtoggle => !prevtoggle)
  }


    return (
      <>
       <nav className="w-full h-[3rem] bg-[#3c527d] flex justify-between text-[#d5dff2] font-[Oswald]">
        <div className="w-[5rem] "> <img src={zeelogo} alt="namelogo" className="w-[3.5rem]" /> </div>
        {!toggle && <GiHamburgerMenu onClick={handleToggle} className="md:hidden m-5"/>}
        <div  className={toggle ? " flex relative flex-col w-[10rem] justify-around p-3 rounded-lg mt-1 ring-4  h-[10rem] z-20 bg-[#3c527d]":"hidden md:flex md:w-[20rem] md:justify-around md:items-center"}>
          <div><NavLink className={({isActive}) => isActive && "text-[#825621] bg-[#d5dff2]"} to="/">Home</NavLink> </div>
          <div><NavLink className={({isActive}) => isActive && "text-[#825621] bg-[#d5dff2]" } to="projects">Projects</NavLink> </div>
          <div><NavLink  className={({isActive}) => isActive && "text-[#825621] bg-[#d5dff2]"}to="contactme">Contact Me</NavLink></div>
          {toggle && <MdCancel className="md:hidden absolute top-4 right-0" onClick={handleToggle}/>}
        </div>
      </nav>
      <Outlet/>
      </>
    );
}
 
export default Navbar;