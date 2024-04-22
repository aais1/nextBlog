import Links from './Links'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='flex justify-between w-[90vw] md:w-[80vw] mx-auto py-4'>
        <Link href="/blogs" className='text-4xl font-bold text-gray-400 '>Blog App</Link>
        <div className='space-x-6'>
           <Links/>
        </div> 
    </div>
  )
}

export default Navbar