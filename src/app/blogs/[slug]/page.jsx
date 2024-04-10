import Image from 'next/image'
import Author from '@/components/author/Author'
import { Suspense } from 'react'

const page = ({params}) => {
  return (
    <div className='flex flex-col gap-6 md:flex-row px-4 text-white md:justify-between'>
      <div className='w-[250px] h-[333px]'>
        <Image src="https://images.pexels.com/photos/20888059/pexels-photo-20888059/free-photo-of-view-of-a-canal-and-basilica-in-venice.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        width={250} height={333} alt='image' />
      </div>
      <div className=''>
        <h1 className='text-2xl font-bold '>Blog Title</h1>
        <div className='mt-6'>
        <p>Text Description goes here this will be written by theguy whoever writes the blog post so yeah yeah?</p>
        <p>Text Description goes here this will be written by theguy whoever writes the blog post so yeah yeah?</p>
        <p>Text Description goes here this will be written by theguy whoever writes the blog post so yeah yeah?</p>
        <p>Text Description goes here this will be written by theguy whoever writes the blog post so yeah yeah?</p>
        </div>
        <Suspense fallback={<p>Loading</p>}>
          <Author/>
        </Suspense>
      </div>
    </div>
  )
}

export default page