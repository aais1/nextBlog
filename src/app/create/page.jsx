const page = () => {
  return (
    <div className="mt-20">
      <div className="text-center text-white text-2xl font-bold">Create a BLOG Post</div>
      <div>
        <form className="flex flex-col gap-4 mx-auto w-[400px] mt-8">
          <input type="text" placeholder="Title" className="p-2 rounded-lg bg-gray-800 text-white"/>
          <textarea placeholder="Description" style={{resize:'none'}} className="p-2 rounded-lg h-[155px] bg-gray-800 text-white"></textarea>
          <input type="file" className="p-2 rounded-lg bg-gray-800 text-white"/>
          <button className="p-2 rounded-lg bg-gray-800 text-white hover:bg-white duration-150 hover:text-black">Create Post</button>
        </form>
      </div>
    </div>
  )
}

export default page