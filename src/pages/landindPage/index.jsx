import { CgArrowLongRightR } from "react-icons/cg";
import profilePicture from "../../assets/profile-picture.jpg"
import Copyright from "../common/copyright";
import tool from "./tools.js"
import Button from "../common/button.jsx";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";





const Home = () => {

  const [darkmode, setDarkMode] = useState( localStorage.getItem("theme") === "dark" )

  const {tools,tools2} = tool

  const Navigate = useNavigate()

useEffect(() => {
  if (darkmode) {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }
}, [darkmode]);

  function handleMode(){
    setDarkMode(prevMode => !prevMode)
  }

    return (
      <div className=" w-full min-h-screen dark:bg-gray-800 bg-[#d5dff2] font-[Oswald] text-[#d5dff2] dark:text-gray-400">
        <div className="w-[95%] h-[90%]  m-auto rounded-t-3xl bg-[#d5dff2] dark:bg-gray-800 shadow-2xl shadow-blue-500">
          <div className="w-full flex justify-between">
            <Button
              onclick={handleMode}
              title={darkmode ? "LightMode" : "Darkmode"}
            />

            <button  onClick={() =>{Navigate("resume")}} className="mt-[1rem] mb-[1rem]  hover:bg-[#825621] w-[7rem] rounded-l-2xl bg-[#3c527d]">
              Resume
            </button>
          </div>

          <div className="flex justify-center gap-3 md:gap-0">
            <div className="md:border-4 md:border-[#825621] md:bg-[#825621] w-[10rem] h-[10rem] rounded-full relative">
              <img
                src={profilePicture}
                alt="profrilePicture"
                className="w-[8.5rem] rounded-full absolute top-0 left-2"
              />
            </div>

            <div className="flex flex-col justify-center">
              <CgArrowLongRightR className="hidden md:block text-[#825621] w-[100%] text-5xl" />
              <CgArrowLongRightR className=" hidden md:block text-[#825621] w-[100%] text-5xl" />
            </div>

            <div className="border w-[40rem] h-fit bg-[#3c527d] rounded-3xl p-3">
              <h1 className=" text-[2.5rem] text-center">
                Hi I'm Zainab, a Software Engineer.
              </h1>
              <h3 className=" text-[2rem] text-center"> Frontend || Backend</h3>
              <p className="text-end">-Zainab Arowojobe</p>
            </div>
          </div>

          <Button title="Tools" />

          <div className="w-[98%] min-h-[20%]  flex  flex-col md:flex-row m-auto mt-1 shadow-xl">
            <div className=" w-[100%] md:w-[50%]  p-3 flex text-[#3c527d] justify-between">
              {tools.map((ele) => (
                <div
                  key={ele.id}
                  className="w-[6rem] h-[6rem] bg-[#d5dff2] hover:ring-8 rounded-3xl md:rounded-full p-1 
                              flex flex-col items-center justify-between m-2"
                >
                  <ele.icon className="text-[2.5rem] md:text-[3rem] text-[#825621]" />
                  <p>{ele.name}</p>
                </div>
              ))}
            </div>
            <div className=" w-[90%] md:w-[50%] p-3 flex justify-between  ">
              {tools2.map((ele) => (
                <div
                  key={ele.id}
                  className="w-[6.5rem] h-[6.5rem] bg-[#3c527d] hover:ring-8 rounded-3xl 
                    md:rounded-full p-1 flex flex-col items-center justify-between m-1"
                >
                  <ele.icon className="text-[2.5rem] md:text-[3rem] text-[#825621]" />
                  <p>{ele.name}</p>
                </div>
              ))}
            </div>
          </div>

          <Button title="Journey" />

          <div className="min-h-[6rem] md:h-[6rem] flex flex-col md:flex-row md:items-center p-2 shadow-2xl">
            <div className="w-fit min-h-[4rem] md:h-[4.5rem] bg-[#3c527d] text-[#d5dff2] rounded-lg p-2 leading-5">
              <p>* March 2023</p>
              <p>Started a udemy course on cloud computing.</p>
            </div>
            <CgArrowLongRightR className="text-[#825621] text-lg" />
            <div className="w-fit min-h-[4.5rem] md:h-[4.5rem] bg-[#3c527d] text-[#d5dff2] rounded-lg p-2 leading-5">
              <p>* Jan 2024</p>
              <p>
                Shifted to software Engineer and attended a bootcamp, where I
                went through an intensive and interpersonal training using basic
                tools listed above and more.{" "}
              </p>
            </div>
            <CgArrowLongRightR className="text-[#825621] text-lg" />
            <div className=" w-fit min-h-[4rem] md:h-[4.5rem] bg-[#3c527d] text-[#d5dff2] rounded-lg p-2 leading-5">
              <p>* Oct 2024 Till date.</p>
              <p>Working on projects and consistent skill development.</p>
            </div>
          </div>

          <Copyright />
        </div>
      </div>
    );
}
 
export default Home;