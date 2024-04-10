import Image from 'next/image'

const page = () => {
  return (
    <div className='flex p-2 md:flex-row justify-between flex-col gap-x-6 text-white'>
      <div className='md:w-[50%] w-[100%]'>
        <p className='text-blue-500 text-xl font-bold mb-6'>About Agency</p>
        <h1 className='text-5xl font-bold mb-6'>We Create digital ideas that are bigger, bolder, braver and better.</h1>
        <p className='font-light mb-6'>We create digital ideas that are bigger, bolder, braver and better. We believe in good ideas flexibillity and precission. We&apos;re world&apos;s Our Special Team best consulting & finance solution provider. Wide range of web of software development services</p>
        <div className='flex gap-x-6 mb-6'>
          <div>
            <p className='text-blue-500 text-2xl font-bold'>10 {' '}K+</p>
            <p>Year of experience</p>
          </div>
          <div className=''>
            <div>
            <p className='text-blue-500 text-2xl font-bold'>234 {' '}K+</p>
            <p>People reached</p>
            </div>
          </div>
          <div>
          <div>
            <p className='text-blue-500 text-2xl font-bold'>5 {' '}K+</p>
            <p>Services and plugins</p>
            </div>
          </div>
        </div>
      </div>
      <div className='md:w-[50%] mx-auto w-[90%] flex items-center justify-center'>
        <Image src="/about.png" width={400} height={400} alt='about-section'/>
      </div>
    </div>
  )
}

export default page