import zeelogo from "../../assets/zeelogo.svg";


const Navbar = () => {
    return (
      <nav className="w-full h-[3rem] bg-[#3c527d] flex justify-between text-[#d5dff2]">
        <div className="w-[5rem] "> <img src={zeelogo} alt="namelogo" className="w-[3.5rem]" /> </div>
        <div className="w-[20rem] flex justify-around items-center">
          <a href="#">Contact Me</a> || <a href="#">Projects</a> || <a href="#">theme</a>
        </div>
      </nav>
    );
}
 
export default Navbar;