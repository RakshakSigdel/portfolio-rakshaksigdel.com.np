import React from 'react';
import Background from '/images/background.webp';
import MyImage from '/images/person.png';
import './page1.css'

const Page1 = () => {
  return (
    <div className='h-[91vh] bg-cover bg-center page1Container' style={{ backgroundImage: `url(${Background})` }}>
      <div className='flex flex-col sm:flex-row items-center justify-between sm:h-full'>
        {/* Texts On the Left */}
        <div className='text-center sm:text-left text-white p-4'>
          <div className='flex justify-center sm:justify-start font-bold tracking-widest'>
            <div className='bg-red-500 px-2 py-1 rounded shadow hover:shadow-lg mr-1'>Portfolio</div>
            <div className='bg-blue-500 px-2 py-1 rounded shadow hover:shadow-lg'>Of</div>
          </div>
          <div className='text-4xl font-bold mt-2 tracking-wide'>Rakshak Sigdel</div>
          <div className='text-lg tracking-wider'>Newbie on the field</div>
        </div>
        {/* Picture On the Right - Aligned to the Bottom */}
        <div className='mt-4 sm:mt-0 flex justify-center sm:justify-end w-full sm:w-auto self-end'>
          <img className='w-auto h-auto max-w-full ' src={MyImage} alt="My Picture" />
        </div>
      </div>
    </div>
  );
}

export default Page1;



// <div className='h-[91vh] bg-cover bg-center page1Container' style={{ backgroundImage: `url(${Background})` }}>
// <div className='sm:flex justify-between sm:h-full'>
//   {/* Texts On the Left*/}
//   <div className='sm:flex items-center  text-white p-4'>
//     <div>
//       <div className='flex font-bold tracking-widest'>
//         <div className='bg-red-500 px-2 py-1 rounded shadow hover:shadow-lg mr-1'>Portfolio</div>
//         <div className='bg-blue-500 px-2 py-1 rounded shadow hover:shadow-lg'>Of</div>
//       </div>
//       <div className='text-4xl font-bold mt-2 tracking-wide'>Rakshak Sigdel</div>
//       <div className='text-lg tracking-wider'>Newbie on the field</div>
//     </div>
//   </div>
//   {/* Picture On the Right - Aligned to the Bottom */}
//   <div className='flex items-end'>
//     <img className='w-auto h-auto' src={MyImage} alt="My Picture" />
//   </div>
// </div>
// </div>