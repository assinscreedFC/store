import { toast } from "sonner"

function Cart({keyy, data}){


    return(
        <div className="flex flex-col bg-white w-full p-4 m-4 gap-3 justify-between  " key={keyy} >
            <div className="flex flex-col gap-2">
            <img src={data.image} alt="ya pas encore" className="m-4 w-20 bg-transparent" />
            <h1 className="">{data.title}</h1>
            <p className="text-sm text-black/80 ">{data.description}</p>
            
            
            </div>
            <div className="flex justify-between items-center ">
                <p>prix : {data.price}$</p>
                <button onClick={() => toast.success('ajouter heu... yes',{
                    duration:1500,
                    
                },)} className="border-none  ring-2 ring-offset-2 ring-green-500 w-20 rounded-md hover:bg-green-500 hover:text-green-50" >Add</button>
            </div>
        </div>
    )



}
export default Cart