import { useEffect, useState } from "react"

function CartModal({key,data}){
    const [count,setcount]=useState(1);
    const btnadd=()=>{
        setcount((co)=>co+1);
    }
    const btnsub=()=>{
        if(count>1){
             setcount((co)=>co-1);
        }
        
       
    }
        return(
            
            <div key={key} className="w-full flex flex-col gap-3 ring-1 ring-offset-1 rounded-sm relative ring-black p-4" >
            <button className="absolute w-5 top-2 rounded-sm right-2 border-none ring-2 ring-offset-1  ring-red-500 bg-transparent hover:bg-red-500 hover:text-white">
            X
          </button>
          <div>
             <img src={data.image} alt="" className="w-20" />
            <h1 className=" font-bold text-wrap">{data.title}</h1>
          </div>
           
            <hr className="bg-black text-black h-[1px] rounded-[50%] border-none w-11/12 m-auto" />

            <div className="flex justify-between ">
                <p>price: {data.price}$</p>
                <div className="flex justify-between items-center gap-1">
                    <button className="p-1 w-6 bg-yellow-300 rounded-s-md" onClick={btnsub}>-</button>
                    <p className="w-7 flex justify-center items-center bg-yellow-300 h-full">{count}</p>
                    <button className="p-1 w-6 bg-yellow-300 rounded-e-md" onClick={btnadd}>+</button>
                </div>
            </div>
          </div>
        )
}
export default CartModal