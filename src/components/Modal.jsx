import { useContext, useEffect, useState } from "react";
import CartModal from "./CartModal.jsx";
import { tab_article } from "../App.jsx";

function Modal({yolo,setyolo}) {
    const {tab,settab}=useContext(tab_article);
    const [mod,setmod]=useState([]);
    useEffect(()=>{
        let mak=[];
       for (let index = 0; index < tab.length; index++) {
        mak.push(<CartModal key={new Date().getTime()} data={tab[index]}/>)
        
       }
       setmod(mak);
       console.log("render");
    },[tab]);


    return (
      <div className="w-full h-svh fixed inset-0 bg-black/50" >
        <div className="flex flex-col items-end relative h-svh">
          <div className="w-1/4 h-full overflow-auto  flex flex-col gap-9 z-20 bg-white">
          <button className="absolute w-5 top-3 rounded-sm right-3 border-none ring-2 ring-offset-1 z-30  ring-red-500 bg-transparent hover:bg-red-400 hover:text-white" onClick={()=>setyolo(!yolo)}> 
            X
          </button>
            <h1 className="font-bold text-center m-4 text-4xl">item shoped</h1>
            <div className="flex flex-col justify-center relative m-4 gap-4">
              {mod}
            </div>
            
            <div>
                <hr className="bg-black text-black h-[1px] rounded-[50%] border-none w-11/12 m-auto" />
                <div className="w-full m-4">
                    <h1 className="font-bold text-2xl">show total: </h1>
                </div>
                
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Modal;
  
