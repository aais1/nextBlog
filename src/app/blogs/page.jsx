import Card from '@/components/card/Card'
import Link from 'next/link'
import { getPosts } from '@/utils/data.js'

const page = async () => {

  // FETCH DATA WITHOUT AN API
   const posts = await getPosts();

  return (
    <div className='flex flex-wrap gap-x-8 gap-y-4 justify-center'>
      {
        posts.map((post)=>{
          return (
          <Link href={`./blogs/${post._id}`} key={post._id}>
            <Card {...post._doc}/>
          </Link>
          )
        })
      }
    </div>
  )
}

export default page