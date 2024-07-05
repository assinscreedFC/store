import { NavLink } from "react-router-dom"
import { CiShoppingCart } from "react-icons/ci";
import { IconContext } from "react-icons";

function NavBar(){
    return(
        <>
        <header className="w-full bg-zinc-200 text-zinc-900 flex  justify-between px-6 items-center" >
            <img src="./—Pngtree—shopping logo design shop template_3631861.png" alt="" className="w-24" />
            <nav className="m-5">
                <ul className="flex gap-4">
                    <li><NavLink to="Shop">Go </NavLink></li>
                    <li><NavLink to="/store">Back</NavLink></li>
                </ul>
            </nav>
            <div className="flex items-center gap-4 mx-4">
            <div className="flex items-end flex-col">
            <span class="relative flex  h-3 w-3">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75 text-black"></span>
                <span class="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
                </span>
            <IconContext.Provider value={{ color: "blue" ,size:" 2em" }}>
            <CiShoppingCart  />
            </IconContext.Provider>
            </div>
           
            
            <button className="w-20 bg-zinc-900 text-zinc-100 p-3 rounded-md">Login</button>
            </div>
        </header>
        </>
    )
}
export default NavBar