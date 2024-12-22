import Copyright from "../common/copyright";
import emailsvg from "../../assets/emailsvg.svg";
import { FaLocationDot, FaPhone } from "react-icons/fa6";

const Contact = () => {

    
    function create(e){
        e.preventDefault()
        console.log(e.target.value);

    }
  return (
    <>
      <div className="w-[98%] h-[32rem] m-auto bg-[#3c527d] my-6 rounded-xl shadow-xl shadow-[#3c527d] text-[#cbd8f1] font-[Oswald] flex gap-4 flex-col justify-center items-center">
        <div className="w-[80%] h-[80%] shadow-md shadow-[#3c527d] p-4 bg-[#cbd8f1] rounded-2xl flex justify-around">
          <div className="w-[40%] p-4 hidden md:block">
            <img src={emailsvg} alt="emailimage" className="w-[20rem]" />
          </div>
          <div className="w-[80%] md:w-[50%] p-3  text-[#3c527d]">
            <h2 className="text-2xl">Get in touch</h2>

            <form onChange={create} className="flex flex-col gap-4 mt-7">
              <input
                type="text"
                placeholder="name"
                className=" w-[80%] md:w-[70%] h-[2.5rem] rounded-xl p-2  outline-[#825621]"
              />
              <input
                type="email"
                placeholder="email"
                className="w-[80%] md:w-[70%] h-[2.5rem] rounded-xl p-2 outline-[#825621]"
              />

              <textarea
                name=""
                id=""
                placeholder="message"
                className="w-[100%] md:w-[90%] h-[6rem] rounded-xl p-2 outline-[#825621]"
              ></textarea>
            </form>

            <div className="w-full flex justify-center  items-center mt-5">
              <button className="w-[15rem] h-[2.5rem]  text-center bg-[#3c527d] rounded-xl text-[#cbd8f1]">
                Send
              </button>
            </div>
          </div>
        </div>
        <div className="w-[80%] h-[2rem] flex justify-end gap-5">
          <div className="flex items-center gap-2">
            
            <FaLocationDot /> <p>Lagos,Nigeria.</p>
          </div>
          <div className="flex items-center gap-2">
        
            <FaPhone /> <p>+234 9059469581</p>
          </div>
        </div>
      </div>
      <Copyright />
    </>
  );
};

export default Contact;
