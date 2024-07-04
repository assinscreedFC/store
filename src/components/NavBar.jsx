import { NavLink } from "react-router-dom"

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
        </header>
        </>
    )
}
export default NavBar