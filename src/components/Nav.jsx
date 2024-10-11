import React from 'react'

const Nav = () => {
    return (
        <>
            <div className='bg-yellow-200 pt-10'>
                <ul className=' list-none flex justify-center gap-4 font-bold items-center'>
                    <li className='hover:underline hover:text-orange-500 hover:cursor-pointer'>All</li>
                    <li className='underline text-orange-500 hover:cursor-pointer'>Photos</li>
                    <li className='hover:underline hover:text-orange-500 hover:cursor-pointer'>Videos</li>
                </ul>
            </div>
            <section className="pt-8 bg-yellow-200">
                {/* <h2 className="text-2xl text-center font-bold text-gray-800">Photos</h2> */}
                <div className="flex items-center justify-center flex-wrap gap-3 mt-4">
                    <div className="min-w-[200px] h-[200px] bg-gray-300 rounded-md flex items-center justify-center">
                        <img src="Alabay Assets/Alabay Games/Alabay Guard/image 1 alabay guard.png" alt="image1" 
                        className='w-[200px] h-auto'/>
                    </div>
                    <div className="min-w-[200px] h-[200px] bg-gray-300 rounded-md flex items-center justify-center">
                    <img src="Alabay Assets/Alabay Games/Alabay Guard/image 2 alabay guard.png" alt="image2" 
                    className='w-[200px] h-auto'/>
                    </div>
                    <div className="min-w-[200px] h-[200px] bg-gray-300 rounded-md flex items-center justify-center">
                    <img src="Alabay Assets/Alabay Games/Alabay Guard/image 3 alabay guard.png" alt="image3"
                    className='w-[200px] h-auto' />
                    </div>

                </div>
            </section></>
    )
}

export default Nav