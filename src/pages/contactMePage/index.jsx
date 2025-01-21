import Copyright from "../common/copyright";
import emailsvg from "../../assets/emailsvg.svg";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { useEffect, useRef, useState } from "react";
import axios from "axios";

const Contact = () => {

   const [form, setForm] = useState({user_name: "", user_email:"", message: ""})
   const [error, setError] = useState({ user_name: "", user_email: "", message: "" });

   const nameref= useRef()

    useEffect(() => {
      nameref.current.focus();
    }, []);


   function handleForm (e){
     setForm({...form, [e.target.name]:e.target.value})
   } 


   function handleValidity(e){
    
      !e.target.validity.valid ? setError({...error, [e.target.name]:`invalid ${e.target.name} input`}) 
      : 
      setError({...error, [e.target.name]:""})

      if(e.target.tagName == "TEXTAREA"){
        const wordCount = e.target.value.length 

        if(wordCount > 220) setError({...error, message:"Please input less than fifty words"})
        else if (wordCount == 0 || wordCount < 5 ) setError({...error, message:"Please input more  words"})
      }
   }
  
    
    async function handleSubmit (e){

     e.preventDefault()

     try {
       const res = await axios.post(import.meta.env.VITE_URL, form,{headers: { "Content-Type": "application/json" }});
      console.log(res)

        if(res.data.ok){
           setForm((prevform)=>({...prevform, user_name:"", user_email:"", message:""}));
            alert("message sent to Zainab successful");
        }

     } catch (error) {

      const err = error?.status?.toString()
          
       if(err.startsWith("4") || err.startsWith("5")){
        setForm({...form, user_email:"", user_name:"", message:""})
        alert("unable to process message please try again later");
       };

     }

   }
   
  return (
    <div className="dark:bg-gray-800 border  bg-[#d5dff2] min-h-[40rem]">
      <div className="w-[98%]  min-h-[32rem] m-auto bg-[#3c527d] my-6 rounded-xl shadow-xl shadow-[#3c527d] text-[#cbd8f1] font-[Oswald] flex gap-4 flex-col justify-center items-center">
        <div className="w-[80%] h-[85%] shadow-md shadow-[#3c527d] p-4 dark:bg-gray-800 bg-[#cbd8f1] rounded-2xl flex justify-around">
          <div className="w-[40%] p-4 hidden md:block">
            <img src={emailsvg} alt="emailimage" className="w-[20rem]" />
          </div>

          <div className="w-[80%]  md:w-[50%] p-3  text-[#3c527d]">
            <h2 className="text-2xl">Get in touch</h2>

            <form
              onSubmit={handleSubmit}
              className="flex min-h-[18.5rem]  flex-col gap-4 mt-7 "
            >
              <input
                onChange={handleForm}
                required
                ref={nameref}
                type="text"
                placeholder="name"
                className=" w-[80%] md:w-[70%] h-[2.5rem] rounded-xl p-2  outline-[#825621]"
                name="user_name"
                pattern="^(?:[a-zA-Z]+ ?){1,4}$"
                value={form.user_name}
                onInput={handleValidity}
              />
              {error.user_name && (
                <div className="text-red-500 m-0">
                  <p>{error.user_name}</p>
                </div>
              )}

              <input
                onChange={handleForm}
                required
                type="email"
                placeholder="email"
                className="w-[80%] md:w-[70%] h-[2.5rem] rounded-xl p-2 outline-[#825621]"
                name="user_email"
                value={form.user_email}
                onInput={handleValidity}
              />
              {error.user_email && (
                <p className="text-red-500">{error.user_email}</p>
              )}

              <textarea
                required
                onChange={handleForm}
                placeholder="message"
                name="message"
                className="w-[100%] md:w-[90%] h-[6rem] rounded-xl p-2 outline-[#825621]"
                value={form.message}
                onInput={handleValidity}
              ></textarea>
              {error.message && <p className="text-red-500">{error.message}</p>}

              <button
                type="submit"
                className="w-[60%] h-[2.5rem] self-center text-center bg-[#3c527d] rounded-xl text-[#cbd8f1]"
              >
                {" "}
                Send{" "}
              </button>
            </form>
          </div>
        </div>

        <div className="w-[80%] h-[2rem] flex justify-end gap-5">
          <div className="flex items-center gap-2">
            {" "}
            <FaLocationDot /> <p>Lagos,Nigeria.</p>
          </div>

          <div className="flex items-center gap-2">
            {" "}
            <FaPhone /> <p>+234 9059469581</p>{" "}
          </div>
        </div>
      </div>

      <Copyright />
    </div>
  );
};

export default Contact;
