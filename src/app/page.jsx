import Image from "next/image";


export default function Home() {

  return (
    <div className="flex justify-between items-center gap-x-6">
      <div className="text-white w-[50%] px-4">
        <div className=" text-6xl font-extrabold space-y-4 mb-4">
          <h1>Creative</h1>
          <h1>Thoughts</h1>
          <h1>Agency.</h1>
        </div>
        <p className="mb-4">
          We are such a cool company even i dont know what we do lol lmao rofl
        </p>
        <div className="flex gap-x-4">
          <button className="py-2 px-4 bg-blue-500 hover:bg-blue-700  duration-75 text-white rounded-md">
            Learn More
          </button>
          <button className="py-2 px-4 bg-white text-black rounded-md">
            Contact
          </button>
        </div>
        <div className="w-[100%] h-[75px] relative">
         <Image src="/brands.png" className="mt-4" fill alt="brands" />
        </div>
      </div>
      <div className="w-[50%] max-h-[450]">
        <Image src="/hero.gif" unoptimized width={450} height={450} alt="gif" />
      </div>
    </div>
  );
}
