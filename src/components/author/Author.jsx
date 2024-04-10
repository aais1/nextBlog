import Image from 'next/image'

const Author = () => {
  return (
    <div className='flex items-center gap-x-6 mt-6'>
        <Image src="/profile.jpg"
        width={60} height={60} alt="dummy"
        className='rounded-full cursor-pointer' />
        <div>
            <p className='font-medium'>Author</p>
            <p className='text-gray-400'>Ali</p>
        </div>
        <div>
            <p className='font-medium'>Date</p>
            <p className='text-gray-400'>12/12/2021</p>
        </div>
    </div>
  )
}

export default Author