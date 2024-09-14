import React from 'react'

export default function Categories() {
  return (
    <div className='py-10 md:py-16' data-aos="zoom-in">
        <div className='flex flex-col items-center justify-center gap-6 lg:gap-10'>
            <div className='container mx-auto'>
            <h2 className='text-center text-3xl md:text-4xl lg:text-5xl font-semibold'>Categories</h2>
            <hr className="my-8 mx-5 lg:mx-0 border-gray-200" />
            </div>
            
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 md:gap-10 lg:gap-14'>
                <div className='flex flex-col items-center justify-center gap-4'>
                    <span className='text-5xl hover:text-green-600'><ion-icon name="musical-notes-outline"></ion-icon></span>
                    <h3 className='text-2xl text-green-600 font-medium'>Music Events</h3>
                    <p className='text-gray-500 text-center lg:text-left px-4 md:px-6 w-80 xl:w-96'>Everything is sound and vibration. Why not try it.</p>
                </div>
                <div className='flex flex-col items-center justify-center gap-4'>
                    <span className='text-5xl hover:text-green-600'><ion-icon name="game-controller-outline"></ion-icon></span>
                    <h3 className='text-2xl text-green-600 font-medium'>Esports Game Events</h3>
                    <p className='text-gray-500 text-center lg:text-left px-4 md:px-6 w-80 xl:w-96'>Hop onto a game event and enjoy the rejoice of watching in a crowd.</p>
                </div>
                
            </div>
        </div>
    </div>
  )
}
