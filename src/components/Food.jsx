import React, { useState } from 'react'
import { data } from '../data/data'

const Food = () => {
  const [ foods, setFoods ] = useState(data)

//   Function to filter by type
const filterType = (category) => {
    setFoods(
        data.filter((item) => {
            return item.category === category;
        })
    );
};

//   Function to filter by price
const filterPrice = (price) => {
    setFoods(
        data.filter((item) => {
            return item.price === price;
        })
    );
};

  return (
    <div className='max-w-[1640px] m-auto px-4 py-12'>
        <h1 className='text-orange-600 font-bold text-4xl text-center'>Most Popular Items</h1>
        {/* filter row */}
        <div className='flex flex-col lg:flex-row justify-between'>
            {/* filter type */}
            <div>
                <p className='font-bold text-gray-700'>Filter by Type</p>
                <div className='flex justify-between max-w-[600px] flex-wrap'>
                    <button onClick={() => setFoods(data)} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>All</button>
                    <button onClick={() => filterType('burger')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Burgers</button>
                    <button onClick={() => filterType('pizza')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Pizza</button>
                    <button onClick={() => filterType('salad')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Salads</button>
                    <button onClick={() => filterType('chicken')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Chickens</button>
                </div>
            </div>
            {/* filter price */}
            <div>
                <p className='font-bold text-gray-700'>Filter by Price</p>
                <div className='flex justify-between max-w-[390px] w-full'>
                    <button onClick={() => filterPrice('৳')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white font-bold text-xl'>৳</button>
                    <button onClick={() => filterPrice('৳৳')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white font-bold text-xl'>৳৳</button>
                    <button onClick={() => filterPrice('৳৳৳')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white font-bold text-xl'>৳৳৳</button>
                    <button onClick={() => filterPrice('৳৳৳৳')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white font-bold text-xl'>৳৳৳৳</button>
                </div>
            </div>
        </div>

        {/* Display food */}
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-6'>
            {foods.map((item, index) => (
                <div key={index} className='border shadow-lg rounded-lg hover:scale-105 duration-300 cursor-pointer'>
                    <img src={item.image} alt={item.name} 
                        className='w-full h-[200px] object-cover rounded-t-lg'
                    />
                    <div className='flex justify-between py-4 px-2'>
                        <p className='font-bold mr-1'>{item.name}</p>
                        <p><span className='text-orange-600 font-extrabold text-sm '>{item.price}</span></p>
                    </div>
                </div>
            ))}
        </div>

    </div>
  )
}

export default Food