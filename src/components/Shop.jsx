import useSWR from 'swr'
import Cart from './Cart.jsx';
import { v4 as uuidv4 } from 'uuid';

const fetcher = (...args) => fetch(...args).then(res => res.json());
function Shop(){
    const { data, error, isLoading } = useSWR('https://fakestoreapi.com/products', fetcher)
    if (isLoading) return <div>Loading...</div>

    console.log(data);
    let tab= [];
    for (let i = 0; i < data.length; i++) {
        tab.push(<Cart key={data[i].id} data={data[i]} />)
    }
    return(
        <>
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