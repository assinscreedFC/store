import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then(res => res.json());
function Shop(){
    const { data, error, isLoading } = useSWR('https://fakestoreapi.com/products/categories', fetcher)
    if (isLoading) return <div>Loading...</div>

    console.log(data);

    return(
        <>
        <div className="max-w-64 flex flex-col m-9 border-red-800 border-4">
            <img src={data.image} alt="" className=" p-2  bg-[#ffffff]" />
            <h1 className='text-sm'>{data.title}</h1>
            <p>{data.price} $</p>
        </div>
        </>
    )
}

export default Shop