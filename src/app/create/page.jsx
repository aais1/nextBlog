import {createPost} from '@/utils/serverActions'

const page = () => {
  return (
    <div className="mt-20">
      <div className="text-center text-white text-2xl font-bold">Create a BLOG Post</div>
      <div>
        <form className="flex flex-col gap-4 mx-auto w-[400px] mt-8" action={createPost}>
          <input type="text" name='title' placeholder="Title" className="p-2 rounded-lg bg-gray-800 text-white"/>
          <textarea placeholder="Description" name='description' style={{resize:'none'}} className="p-2 rounded-lg h-[155px] bg-gray-800 text-white"></textarea>
          <input type="text" className="p-2 rounded-lg bg-gray-800 text-white" placeholder='Insert a img link from pexels' name='img'/>
          <button className="p-2 rounded-lg bg-gray-800 text-white hover:bg-white duration-150 hover:text-black"
          type='submit'>Create Post</button>
        </form>
      </div>
    </div>
  )
}

export default page