import { toast } from "sonner"
import { useContext, useState } from "react"
import {tab_article} from "../App.jsx"
import { v4 as uuidv4 } from 'uuid';

function Cart({ data}){
    const {tab,settab}=useContext(tab_article);
    const [active,setactive]=useState(true);

    const btnadd = ()=>{
        toast.success('ajouter heu... yes',{
            duration:1500,
            
        },)
        let copy =[...tab,data];
        settab([...copy]);
        setactive(false);
        console.log(tab);
    }
    const btncancel= ()=>{
        toast.success('ghir l"khir ya kho ?',{
            duration:1500,
            
        },)
        setactive(true);
        let copy=[...tab];
        console.log(copy)
        copy=copy.filter(da=> da.id!==data.id);
        settab([...copy]);
    }


    return(
        <div className="flex flex-col bg-white w-full p-4 m-4 gap-3 justify-between  " key={uuidv4()} >
            <div className="flex flex-col gap-2" >
            <img src={data.image} alt="ya pas encore" className="m-4 w-20 bg-transparent" />
            <h1 className="font-bold">{data.title}</h1>
            <p className="text-sm text-black/80 ">{data.description}</p>
            
            
            </div>
            <div className="flex justify-between items-center ">
                <p>prix : {data.price}$</p>
                
                
                
               {active ? <button onClick={btnadd} className="border-none  ring-2 ring-offset-2 ring-green-500 w-20 rounded-md hover:bg-green-500 hover:text-green-50" > Add</button> : <button onClick={btncancel} className="border-none  ring-2 ring-offset-2 ring-red-500 w-20 rounded-md hover:bg-red-500 hover:text-green-50" > Cancel</button>}
            </div>
        </div>
    )



}
export default Cart