import React, { useState, useEffect } from 'react';
import { useFirebase } from '../FirebaseContext'; 

export default function Profile() {
  const { user } = useFirebase(); 
  const [gallery, setGallery] = useState([]);

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const response = await fetch('/photo.json');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setGallery(data.gallery);
      } catch (error) {
        console.error('Error fetching photo.json:', error);
      }
    };

    fetchGallery();
  }, []);

  return (
    <>
      <div  data-aos="fade-up"
     data-aos-duration="3000" className="p-4 mx-5 md:mx-10 lg:mx-20 mt-24 md:mt-32 mb-20 rounded-lg bg-gray-100">
        <div className='flex flex-col items-center justify-center'>
          {user && (
            <>
              <img
                className='rounded-full shadow-xl -mt-20 h-40 w-40 md:h-48 md:w-48 object-cover mb-8'
                src={user?.photoURL || 'https://i.ibb.co/HzrsZjz/man.png'}
                alt=""
              />
              <h2 className='text-2xl md:text-3xl font-semibold mb-1 md:mb-2'>{user.displayName}</h2>
              <p className='italic text-lg text-gray-700 mb-5 lg:mb-6'>{user.email}</p>
              <div className='border-b-2 border-gray-600 w-[90%] opacity-20'></div>
            </>
          )}
        </div>
        
      </div>
    </>
  );
}
