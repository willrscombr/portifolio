import Image from 'next/image'
import Link from 'next/link'

export default function Carreira(){
    return(

            <div className='h-screen w-screen  flex  flex-row items-center justify-center bg-gray-300 '>
                <div className='flex-auto w-32'>
                <Link  href={'/'}> 
                    <div className=" cursor-pointer w-80 h-80 bg-indigo-600 shadow-xl  rounded-full flex items-center justify-center ">
                        <div className="w-72 h-72 bg-indigo-700  rounded-full flex items-center justify-center animate-wiggle_rightleft ">
                            <div className="w-60 h-60 flex items-center justify-center  rounded-full bg-indigo-800 animate-wiggle_left ">
                                <Image className=" w-56 h-56 rounded-full " src="/imagens/1540205643949.jpg" width={200} height={200} />
                            </div>
                        </div>
                    </div>
                </Link>
                </div>
                <div className='flex-auto w-64 justify-around'>
                    <h2 className='text-3xl'> Marido da Walekssania e pai do Davi.</h2>
                    <h2 className="text-2xl ">Experiência Acadêmica</h2>
                    <h3 className='text-xl text-gray-500'>
                       
                        <ul>
                            <li>2011 a 2012 - Técnico em informática </li>
                            <li>2013 a 2018 - Análise e desenvolvimento de sistemas</li>
                            <li>2019 a 2020 - Especialização em desenvolvimento web</li>
                        </ul>
                   
                        {/* <ul>
                            <li>React</li>
                            <li>Node.Js</li>
                            <li>Php</li>
                            <li>Docker</li>
                            <li>Scrum</li>
                            <li>Kabam</li>
                            <li>XP</li>
                        </ul> */}
                    </h3>
                    <h2 className="text-2xl ">Experiência de Mercado</h2>
                    <h3 className='text-xl text-gray-500'>
                        2012 -  iniciei na área de automação comercial, onde pude aplicar meus <br/>
                        conhecimentos em SQl e praticar a garantia de qualidade de software com <br/>
                        testes e abertura de bugs. <br/>
                        Também possuia outras responsabilidades como suporte e implantação de sistemas.<br/>    
                    </h3>


                </div>
            </div>

    )
}