function Modal() {
    return (
      <div className="w-full h-svh fixed inset-0 bg-black/50">
        <div className="flex flex-col items-end relative h-svh">
          <div className="w-1/4 h-full flex flex-col gap-9 z-20 bg-white">
            <h1 className="font-bold text-center m-4 text-4xl">item shoped</h1>
            <div className="flex flex-col justify-center relative m-4 gap-4">
              <button className="absolute w-4 top-1 rounded-sm right-1 border-none ring-2 ring-offset-1  ring-red-500 bg-transparent hover:bg-red-500 hover:text-white">
                X
              </button>
              <div className="w-full ring-1 ring-offset-1 rounded-sm ring-black">
                <img src="" alt="" />
                <h1 className=" font-bold">Name of clothe</h1>
                <hr className="bg-black text-black h-[1px] rounded-[50%] border-none w-11/12 m-auto" />
                <div className="flex justify-between p-4">
                    <p>price: 39,99$</p>
                    <div className="flex justify-between items-center gap-1">
                        <button className="p-1 w-6 bg-yellow-300 rounded-s-md">-</button>
                        <p className="w-7 flex justify-center items-center bg-yellow-300 h-full">1</p>
                        <button className="p-1 w-6 bg-yellow-300 rounded-e-md">+</button>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Modal;
  
