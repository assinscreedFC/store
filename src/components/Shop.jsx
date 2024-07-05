import useSWR from 'swr'
import Cart from './Cart.jsx';

const fetcher = (...args) => fetch(...args).then(res => res.json());
function Shop(){
    const { data, error, isLoading } = useSWR('https://fakestoreapi.com/products', fetcher)
    if (isLoading) return <div>Loading...</div>

    console.log(data);
    let tab= [];
    for (let i = 0; i < data.length; i++) {
        tab.push(<Cart keyy={new Date().getTime()} data={data[i]} />)
    }
    return(
        <>
        {/* <div className="max-w-64 flex flex-col m-9 border-red-800 border-4">
            <img src={data[20].category.image} alt="" className=" p-2  bg-[#ffffff]" />
            <h1 className='text-sm'>{data.title}</h1>
            <p>{data.price} $</p>
        </div> */}
        <div className='flex justify-center w-full'>
            <div className='w-3/4 gap-3 grid grid-cols-3 justify-items-center
        '>
            {tab}
        </div>
        </div>
        



        </>
    )
}

export default Shop