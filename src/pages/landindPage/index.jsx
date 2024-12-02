import { CgArrowLongRightR } from "react-icons/cg";
import { FaGithub, FaRegCopyright } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiHtml5, SiMysql, SiMongodb, SiTailwindcss } from "react-icons/si";
import { FaReact } from "react-icons/fa6";
import { IoLogoNodejs } from "react-icons/io5";
import profilePicture from "../../assets/profile-picture.jpg"
const Home = () => {
  
const tools = [
  { id: 1, icon: <IoLogoJavascript />, name: "Javascript" },
  { id: 2, icon: <FaGithub />, name: "Git" },
  { id: 3, icon: <SiHtml5 />, name: "HTML" },
  { id: 4, icon: <FaReact />, name: "React" },
];

  const tools2 = [
    { id: 5, icon: <SiTailwindcss />, name: "Tailwindcss" },
    { id: 6, icon: <SiMysql />, name: "mySQL" },
    { id: 7, icon: <SiMongodb />, name: "MongoDB" },
    { id: 8, icon: <IoLogoNodejs />, name: "Node.js" },
  ];



    return (
      <div className=" w-full h-screen bg-white font-[Oswald] text-[#d5dff2]">

          <nav className="w-full h-[3rem] bg-[#3c527d] flex justify-between">
            <div className="w-[5rem] border"></div>
            <div className="w-[20rem] flex justify-around items-center">
              <a href="#">Contact Me</a> || <a href="#">Projects</a>|| <a href="#">theme</a>
            </div>
          </nav>

          <div className="w-[95%] h-[90%]  m-auto rounded-t-3xl bg-[#d5dff2] shadow-2xl shadow-blue-500">

            <button className="mt-[2rem] border-4 w-[7rem] border-l-0 rounded-r-2xl bg-[#3c527d]">Darkmode</button>
            
            <div className="flex justify-center">

                <div className="border-4 border-[#825621] bg-[#825621] w-[10rem] h-[10rem] rounded-full relative"> 
                  <img src={profilePicture} alt="profrilePicture" className="w-[8.5rem] rounded-full absolute top-0 left-2"/>
                </div>

                   <div className="flex flex-col justify-center">
                          <CgArrowLongRightR className="text-[#825621] w-[100%] text-5xl"/>   
                          <CgArrowLongRightR className="text-[#825621] w-[100%] text-5xl"/>              
                  </div>  

                <div className="border w-[40rem] h-[10rem] bg-[#3c527d] rounded-3xl p-3">
                  <p><h1 className=" text-[2.5rem] text-center">Hi i'm Zainab, a Software Engineer</h1></p>
                  <p><h3 className=" text-[2rem] text-center"> Frontend || Backend</h3></p>
                  <p className="text-end">-Zainab Arowojobe</p>
                </div>

            </div>

             <button className="mt-[1rem] w-[7rem] border-l-0 rounded-r-2xl bg-[#3c527d]">Tools</button>

              <div className="w-[98%] h-[20%]  flex m-auto mt-1 shadow-xl">
                 <div className="w-[50%]  p-3 flex text-[#3c527d] justify-between">
                  {
                    tools.map(ele => <div  key={ele.id} className="w-[6rem] h-[6rem] bg-[#d5dff2] rounded-full p-1 flex flex-col items-center justify-between "> <div className="text-[3rem] text-[#825621]">{ele.icon}</div> <p>{ele.name}</p></div> )
                  }
                 </div>
                 <div className="w-[50%] p-3 flex justify-between bg-[#d5dff2] border">
                    {
                    tools.map(ele => <div  key={ele.id} className="w-[6rem] h-[6rem] bg-[#3c527d] rounded-full p-1 flex flex-col items-center justify-between "> <div className="text-[3rem] text-[#825621]">{ele.icon}</div> <p>{ele.name}</p></div> )
                  }
                 </div>
              </div>

              <button className="mt-[1rem] w-[7rem] border-l-0 rounded-r-2xl bg-[#3c527d]">Journey</button>
              <div className="border border-black h-[6rem]"> 
                <div className=""></div>
                <div className=""></div>
              </div>  

                <div className=" h-[2rem] mt-3">
                  <p className="text-[#3c527d] flex items-center text-xs justify-end pt-3"> <FaRegCopyright/>copyright Zaianb Arowojobe 2024. All rights reserved </p>
                </div>

          </div>
      </div>
    );
}
 
export default Home;