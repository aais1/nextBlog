import Image from 'next/image'

const Card = () => {

  const descrip="Text Description goes here this will be written by theguy whoever writes the blog post so yeah cool right?";
  return (
    <div className='w-[200px]'>
        <div className='w-[200px] h-[240px] overflow-hidden cursor-pointer'>
        <Image src="https://images.pexels.com/photos/20888059/pexels-photo-20888059/free-photo-of-view-of-a-canal-and-basilica-in-venice.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='image' width={200} height={280} className='hover:scale-110 duration-150 ' />
        </div>
        <p className='font-bold text-2xl text-white'>Blog Titile</p>
        <p className='text-white line-clamp-3'> {descrip} 😊</p>
        { 
          descrip.length>80 &&
          <span className='text-gray-500 hover:text-white duration-150 hover:no-underline font-bold text-md underline cursor-pointer'>Read More</span>}
    </div>
  )
}

export default Card