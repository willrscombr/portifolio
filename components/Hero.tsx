import Image from 'next/image'
export default function Hero(){
    return(
        <div className="h-screen w-screen flex  flex-col justify-between   mt-5 items-center bg-indigo-900">
            <div className="text-1xl flex flex-col items-center justify-around">
                <h1 className="text-4xl text-white">Wilton Ribeiro Silva</h1>
                <h2 className="text-xl text-gray-300">Tech Lead</h2>
            
            </div>
            <div className="w-80 h-80 bg-indigo-600 shadow-xl  rounded-full flex items-center justify-center ">
                <div className="w-72 h-72 bg-indigo-700  rounded-full flex items-center justify-center animate-wiggle_rightleft ">
                    <div className="w-60 h-60 flex items-center justify-center  rounded-full bg-indigo-800 animate-wiggle_left ">
                        <Image className=" w-56 h-56 rounded-full " src="/imagens/1540205643949.jpg" width={200} height={200} />
                    </div>
                </div>
            </div>
            <div>
                asd
            </div>
        </div>
    )
}