import { useNavigate } from "react-router-dom";
import errorgif from "../../assets/errorimg.gif"

const Errorpage = () => {
const Navigate = useNavigate()
    return ( <>

          <div className=" w-full h-screen relative flex justify-center items-end  ">
            <img src={errorgif} alt="errorpage" className="object-cover w-[100vw] h-[100vh]" />
             <button  onClick={() =>{Navigate("/")}} className="absolute  bg-[#3c527d]  p-3 rounded-xl mb-16">Return Home Tiger</button>
          </div>
    </> );
}
 
export default Errorpage;