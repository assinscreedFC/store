import { useContext, useEffect, useState } from "react";
import CartModal from "./CartModal.jsx";
import { tab_article } from "../App.jsx";
import { v4 as uuidv4 } from 'uuid';

function Modal({ yolo, setyolo }) {
  const { tab, settab } = useContext(tab_article);
  const [mod, setmod] = useState([]);
  const [calc, setcalc] = useState([]);
  const [rounded, setrounded] = useState(0);
  const [id,setid]=useState([]);

  const handeldata = (dta, count) => {
    let copyCalc = [...calc];
    let copyTab = [...tab];
    
    if (count === 0) {
      // Remove the item from copyCalc and copyTab
      copyCalc = copyCalc.filter(item => item.id !== dta.id);
      copyTab = copyTab.filter(item => item.id !== dta.id);
  
      // Update state with filtered arrays
      setcalc([...copyCalc]);
      settab([...copyTab]);
    } else {
      // Check if dta.id already exists in copyCalc
      const calcIndex = copyCalc.findIndex(item => item.id === dta.id);
  
      if (calcIndex !== -1) {
        // Update the count if the item exists
        copyCalc[calcIndex].count = count;
      } else {
        // Add a new item if it doesn't exist
        copyCalc.push({ id: dta.id, count });
      }
  
      // Update state with updated copyCalc
      setcalc([...copyCalc]);
      setid([...copyCalc]);
    }
    
    console.log("copyCalc:", copyCalc,id);
  };
  
  useEffect(() => {
    const mak = tab.map((item) => (
      <CartModal onDataSend={handeldata} key={uuidv4()} data={item} />
    ));

    tab.forEach(item => handeldata(item, item.price));

    setmod([...mak]);
    console.log(calc);
    console.log("render");
  }, [tab]);

  useEffect(() => {
    const total = calc.reduce((accumulator, item) => accumulator + item.count, 0);
    setrounded(parseFloat(total.toFixed(2)));
  }, [calc]);

  return (
    <div className="w-full h-svh fixed inset-0 bg-black/50">
      <div className="flex flex-col items-end relative h-svh">
        <div className="w-1/4 h-full overflow-auto flex flex-col gap-9 z-20 bg-white justify-between pb-3">
          <button className="absolute w-5 top-3 rounded-sm right-3 border-none ring-2 ring-offset-1 z-30 ring-red-500 bg-transparent hover:bg-red-400 hover:text-white" onClick={() => setyolo(!yolo)}>
            X
          </button>
          <h1 className="font-bold text-center m-4 text-4xl">item shoped</h1>
          <div className="flex flex-col justify-center relative m-4 gap-4">
            {mod}
          </div>
          <div>
            <hr className="bg-black text-black h-[1px] rounded-[50%] border-none w-11/12 m-auto" />
            <div className="w-full m-4">
              <h1 className="font-bold text-2xl">show total: {rounded}$</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
