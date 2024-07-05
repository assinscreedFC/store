import CartModal from "./CartModal.jsx";

function Modal({yolo,setyolo}) {
    return (
      <div className="w-full h-svh fixed inset-0 bg-black/50" >
        <div className="flex flex-col items-end relative h-svh">
          <div className="w-1/4 h-full flex flex-col gap-9 z-20 bg-white">
          <button className="absolute w-5 top-3 rounded-sm right-3 border-none ring-2 ring-offset-1  ring-red-500 bg-transparent hover:bg-red-400 hover:text-white" onClick={()=>setyolo(!yolo)}> 
            X
          </button>
            <h1 className="font-bold text-center m-4 text-4xl">item shoped</h1>
            <div className="flex flex-col justify-center relative m-4 gap-4">
              <CartModal/>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Modal;
  
