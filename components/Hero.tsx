import Link from 'next/link'
export default function Hero(){
    return(
    
            <div className="h-screen w-screen flex-col justify-around bg-indigo-900 text-center">
                <div className=" flex flex-col ">
                    <h1 className="text-2xl text-white">Wilton Ribeiro Silva</h1>
                    <h2 className="text-4xl text-gray-500">Tech Lead</h2>
                </div>
                <div className='h-5/6 flex flex-col  justify-evenly items-center  w-4/4  '>

                    <h3 className='text-xl text-left text-gray-300 w-2/4 flex-auto'>
                        Como Marido <br/>
                        Desejo amar e protejer minha esposa com todas as minhas forças<br/>
                        Para que ela possa se sentir amada, segura e cuidada.
                    </h3>
                    <h3 className='text-xl text-left text-gray-300  w-2/4 flex-auto'>
                        Como Pai<br/>
                        Desejo ser um bom exemplo<br/>
                        Para que quando meus filhos tiverem que escolher o caminho em que trilhar <br/>
                        saberão qual o correto a seguir.
                    </h3>
                    <h3 className='text-xl text-left text-gray-300 w-2/4  flex-auto'>
                        Como Tech Lead <br/>
                        Desejo desenvolver minhas habilidades de desenvolvimento e gestão<br/>
                        Para liderar times performáticos e gerar valor com a tecnologia para a empresa.
                    </h3>
                    <div className='h-1/6'>
                        <Link  href={'carreira'}> 
                            <span className="text-gray-300 cursor-pointer">
                                Carreira
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
            
    )
}