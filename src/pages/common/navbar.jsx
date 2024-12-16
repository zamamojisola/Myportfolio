import { NavLink, Outlet } from "react-router-dom";
import zeelogo from "../../assets/zeelogo.svg";


const Navbar = () => {
    return (
      <>
       <nav className="w-full h-[3rem] bg-[#3c527d] flex justify-between text-[#d5dff2] font-[Oswald]">
        <div className="w-[5rem] "> <img src={zeelogo} alt="namelogo" className="w-[3.5rem]" /> </div>
        <div className="w-[20rem] flex justify-around items-center">
          <NavLink className={"active:text-[#825621]"} to="/">Home</NavLink> || 
          <NavLink className={"active:text-[#825621]"} to="projects">Projects</NavLink> || 
          <NavLink  className={"active:text-[#825621]"}to="#">Contact Me</NavLink>
        </div>
      </nav>
      <Outlet/>
      </>
    );
}
 
export default Navbar;