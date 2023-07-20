import React from 'react'

const HeadlineCards = () => {
    return (
        <div className='max-w-[1650px] mx-auto p-4 pt-12 grid md:grid-cols-3 gap-6' >
            {/* Card */}
            <div className='rounded-xl relative '>
                {/* Overlay */}
                <div className='absolute w-full h-full bg-black/50 rounded-xl text-white px-2'>
                    <p className='font-bold text-2xl px-2 pt-4'>Rise and Shine</p>
                    <p className='px-2'>Breakfast menu</p>
                    <button className='border-white bg-white text-black mx-2 absolute bottom-4 hover:bg-orange-600 hover:text-white hover:border-orange-600'>Order Now</button>
                </div>
                <img 
                    className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
                    src="https://images.pexels.com/photos/101533/pexels-photo-101533.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="breakfast food" />
            </div>
            {/* Card */}
            <div className='rounded-xl relative '>
                {/* Overlay */}
                <div className='absolute w-full h-full bg-black/50 rounded-xl text-white px-2'>
                    <p className='font-bold text-2xl px-2 pt-4'>High Noon</p>
                    <p className='px-2'>Lunch menu</p>
                    <button className='border-white bg-white text-black mx-2 absolute bottom-4 hover:bg-orange-600 hover:text-white hover:border-orange-600'>Order Now</button>
                </div>
                <img 
                    className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
                    src="https://images.pexels.com/photos/566566/pexels-photo-566566.jpeg" alt="breakfast food" />
            </div>
            {/* Card */}
            <div className='rounded-xl relative '>
                {/* Overlay */}
                <div className='absolute w-full h-full bg-black/50 rounded-xl text-white px-2'>
                    <p className='font-bold text-2xl px-2 pt-4'>Dinner Served</p>
                    <p className='px-2'>Dinner menu</p>
                    <button className='border-white bg-white text-black mx-2 absolute bottom-4 hover:bg-orange-600 hover:text-white hover:border-orange-600'>Order Now</button>
                </div>
                <img 
                    className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
                    src="https://images.pexels.com/photos/1487511/pexels-photo-1487511.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="breakfast food" />
            </div>
        </div>
    )
}

export default HeadlineCards
