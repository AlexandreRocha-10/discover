"use client"
import Image from 'next/image'

export default function AboutComp() {
  return (
    <div className='text-center mb-10'>
      <div>
        <Image src='/bg.png' alt='hero-image' width={800} height={200} className='w-full absolute' />
        <div className='mt-[40px] z-10'>
          <h2 className='text-[55px] text-red-600 tracking-widest font-semibold'>UAISEARCH</h2>
          <h2 className='text-[20px]'>Find Anything</h2>
        </div>
        <div className=' mt-40 text-gray-700 text-lg p-10'>
          <p className='leading-6'>
            UAISEARCH is a high-performance search engine designed to help you find anything you're looking for. With a user-friendly and efficient interface, our platform enables you to search and discover information, products, or services quickly and accurately. With a simple search, you'll have access to relevant results, making your search more effective. No matter what you're searching for, UAISEARCH is here to streamline your search and assist you in finding what you need, when you need it.
          </p>
        </div>
      </div>
    </div>
  );
}
