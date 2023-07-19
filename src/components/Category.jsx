import React from 'react'
import { categories } from '../data/data.js'

const Category = () => {
    return (
        <div className='max-w-[1640px] px-4 py-12 m-auto'>
            <h1 className='text-orange-600 font-bold text-3xl text-center'>Top Categories</h1>
            {/* Categories */}
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-6'>
                {categories.map((item, index) => (
                    <div key={index} className='flex justify-between bg-gray-100 
                    rounded-xl p-4 items-center hover:scale-105 duration-300'>
                        <h2 className='font-bold sm:text-xl mr-1'>{item.name}</h2>
                        <img src={item.image} alt={item.name} 
                            className='w-20'
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Category