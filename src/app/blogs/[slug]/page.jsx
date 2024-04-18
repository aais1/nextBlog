import Image from 'next/image'
import Author from '@/components/author/Author'
import { Suspense } from 'react'
import { getPostById } from '@/utils/data.js'


const page = async ({params}) => {


  const {title,description,createdAt} = await getPostById(params.slug);



  return (
    <div className='flex flex-col gap-6 md:flex-row px-4 text-white md:justify-between'>
      <div className='min-w-[95%] md:min-w-[30%] min-h-[420px] md:h-[500px] relative'>
        <Image src="https://images.pexels.com/photos/20888059/pexels-photo-20888059/free-photo-of-view-of-a-canal-and-basilica-in-venice.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        layout='fill' alt='image' />
      </div>
      <div className='min-w-[70%]'>
        <h1 className='text-2xl font-bold '>{title}</h1>
        <div className='mt-6'>
          <p>{description}</p>
          <p className='text-gray-500 mt-4'>{createdAt.toString().slice(0,24)}</p>
        </div>
        <Suspense fallback={<p>Loading</p>}>
          <Author/>
        </Suspense>
      </div>
    </div>
  )
}

export default page