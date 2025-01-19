import resumedark from "../../assets/Zainab-Arowojobe-FullStack-Resume-Dark.pdf";
import resume from "../../assets/Zainab-Arowojobe-FullStack-Resume.pdf";
import resumeImage from "../../assets/resume-image-dark.png";
import resumeImg from "../../assets/resume-image.png"

const Resume = () => {
  return (
    <div className="bg-[#d5dff2] dark:bg-gray-800 w-full min-h-[93vh] flex items-center justify-center">
      <div className="w-[90%] h-[80%]  rounded-xl bg-[#3c527d] flex flex-col m-5 ">
        <button className="hover:bg-[#825621] w-[7rem] rounded-l-2xl bg-[#d5dff2] h-[1.5rem] my-5 self-end">
          <a href={localStorage.getItem("theme") === "dark" ? resumedark: resume} download="resume">
            download
          </a>
        </button>

        <div className="w-[70%] h-[70%] self-center">
          <img
            src={localStorage.getItem("theme") === "dark" ? resumeImage : resumeImg}
            alt="resume"
            className="w-fit h-fit bg-cover rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Resume;
