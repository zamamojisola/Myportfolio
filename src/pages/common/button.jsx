const Button  = ({title,onclick}) => {

    return (
      <button onClick={onclick} className="mt-[1rem] mb-[1rem]  hover:bg-[#825621] w-[7rem] border-l-0 rounded-r-2xl bg-[#3c527d]">
        {title}
      </button>
    );
     
}
 
export default Button;