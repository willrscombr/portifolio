import Image from 'next/image'
export default function Hero(){
    return(
        <div className="h-screen w-full flex justify-around mt-5 items-center">
            <div className="text-6xl text-purple-500 flex flex-col justify-around">
                <h1 className="text-purple-500 bg-black">Product Manager</h1>
                <h1 className="text-red-500 bg-green-500">Tech Leader</h1>
                <h1 className="text-green-500 bg-yellow-500">Team Leader</h1>
            </div>
            <div className=" flex">
                <div className="bg-purple-500 border border-indigo-600  ">
                    <Image src="/imagens/1540205643949.jpg" width={200} height={200} />
                </div>
            </div>
        </div>
    )
}