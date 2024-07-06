import { useContext, useState } from "react";
import { tab_article } from "../App.jsx";

function CartModal({ data, onDataSend }) {
  const { tab } = useContext(tab_article);
  const [count, setCount] = useState(1);
  const [total, setTotal] = useState(data.price);

  const btnAdd = () => {
    const newCount = count + 1;
    const newTotal = total + data.price;
    onDataSend(data, newTotal);
    setCount(newCount);
    setTotal(newTotal);
    
  };

  const btnSub = () => {
    if (count > 1) {
      const newCount = count - 1;
      const newTotal = total - data.price;
      onDataSend(data, newTotal);
      setCount(newCount);
      setTotal(newTotal);
      
    }
  };

  const handleRemove = () => {
    onDataSend(data, 0);
  };

  return (
    <div className="w-full flex flex-col gap-3 ring-1 ring-offset-1 rounded-sm relative ring-black p-4">
      <button onClick={handleRemove} className="absolute w-5 top-2 rounded-sm right-2 border-none ring-2 ring-offset-1 ring-red-500 bg-transparent hover:bg-red-500 hover:text-white">
        X
      </button>
      <div>
        <img src={data.image} alt="" className="w-20" />
        <h1 className="font-bold text-wrap">{data.title}</h1>
      </div>

      <hr className="bg-black text-black h-[1px] rounded-[50%] border-none w-11/12 m-auto" />

      <div className="flex justify-between">
        <p>Price: {data.price}$</p>
        <div className="flex justify-between items-center gap-1">
          <button className="p-1 w-6 bg-yellow-300 rounded-s-md" onClick={btnSub}>-</button>
          <p className="w-7 flex justify-center items-center bg-yellow-300 h-full">{count}</p>
          <button className="p-1 w-6 bg-yellow-300 rounded-e-md" onClick={btnAdd}>+</button>
        </div>
      </div>
    </div>
  );
}

export default CartModal;
