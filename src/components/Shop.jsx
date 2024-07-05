import useSWR from 'swr'
import Cart from './Cart.jsx';

const fetcher = (...args) => fetch(...args).then(res => res.json());
function Shop(){
    const { data, error, isLoading } = useSWR('https://api.escuelajs.co/api/v1/products/?categoryId=1', fetcher)
    if (isLoading) return <div>Loading...</div>

    console.log(data);

    return(
        <>
        {/* <div className="max-w-64 flex flex-col m-9 border-red-800 border-4">
            <img src={data[20].category.image} alt="" className=" p-2  bg-[#ffffff]" />
            <h1 className='text-sm'>{data.title}</h1>
            <p>{data.price} $</p>
        </div> */}
        
        <div className='w-3/4 flex flex-wrap justify-center items-center
        '>
            <Cart/>
        </div>



        </>
    )
}

export default Shop