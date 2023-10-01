import { getAuthSession } from '@/lib/nextauth'
import Image from 'next/image'
import UserAccountNav from './UserAccountNav';
import SignInButton from './SignInButton';
import Link from "next/link";


const Navbar = async () => {
    const session = await getAuthSession();
    return (
      <div className='flex justify-between
       p-3 px-5 shadow-sm z-30'>
        <div className='flex gap-3 items-center'>
          <Image src='/logo.png' alt='logo'
          width={50} height={50}/>
          <h2 className='text-[25px] font-semibold
           hover:text-red-500 tracking-widest'>
              <Link href={"/"}>
                UAISEARCH
              </Link>
          </h2>
        </div>
        <ul className='flex gap-8 items-center'>
          <li className='text-[18px]
           hover:text-red-500 cursor-pointer'>
            <Link href={"/"}>
              Home
            </Link>
          </li>
          <li className='text-[18px]
           hover:text-red-500 cursor-pointer'>
            <Link href={"/about"}>
              About Us
            </Link>
          </li>
          <li className='text-[18px]
           hover:text-red-500 cursor-pointer'>
            {session?.user ? (
              <UserAccountNav user={session.user} />
            ) : (
              <SignInButton text={"Sign In"} />
            )}
           </li>
        </ul>
      </div>
    )
}

export default Navbar