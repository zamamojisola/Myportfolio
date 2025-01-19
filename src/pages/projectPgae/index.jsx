import Copyright from "../common/copyright";
import "animate.css"
import {projectList} from "./projects.js"





const Projects = () => {



    return (
      <div className="w-full min-h-[92vh] bg-[#d5dff2] dark:bg-gray-800 border">
        <div className="w-[97%] min-h-[33rem] font-[Oswald]  m-auto mt-5 rounded-2xl bg-[#3c527d]  p-5 text-[#3c527d] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 shadow-2xl shadow-blue- gap-3">
          {projectList.map((ele) => (
            <div
              key={ele.id}
              className="w-[95%] h-[30rem] border hover:border-[#825621] dark:bg-gray-800 bg-[#d5dff2] [&_img]:hover:border-[#825621] p-4 rounded-xl flex flex-col justify-between animate__animated hover:animate-pulse"
            >
              <div className="w-full h-[35%] rounded-xl flex items-center">
                <img
                  src={ele.image}
                  alt="paysimg"
                  className="rounded-xl border-4 border-[#3c527d]"
                />
              </div>

              <p>{ele.preview}</p>

              <button className="w-full h-[3.5rem] hover:bg-[#825621] bg-[#3c527d] rounded-2xl text-[#d5dff2] ">
                <a href={ele.link} target="blank">
                  Github Link
                </a>
              </button>
            </div>
          ))}
        </div>
        <Copyright />
      </div>
    );
}
 
export default Projects;