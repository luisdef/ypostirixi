import ypostirixiLogo from '/ypostiriki.svg'

export default function Home() {
  return (
    <div className='flex justify-center items-center h-screen max-md:flex-col'>
        <div className='flex-col justify-center items-center'>
            <div className='flex justify-center items-center py-8'>
                <a href="" className=''>
                    <img src={ypostirixiLogo} className="logo w-[150px]" alt="Vite logo" />
                </a>
            </div>
            <h1 className='text-4xl font-bold w-full text-center'>ypostirixi</h1>
            <div className="card w-full text-center py-8">
                <p>
                    Sistema de gerenciamento de Suporte de TI.
                </p>
            </div>
        </div>

        <div className='pl-4 flex-col justify-center items-center'>
            <div className='border-2 border-[#241f34] rounded-md p-2 my-4 cursor-pointer select-none hover:bg-white'>
                <p className='font-bold'>Abrir OS</p>
                <span>Abrir um novo chamado.</span>
            </div>

            <div className='border-2 border-[#241f34] rounded-md p-2 my-4 cursor-pointer select-none hover:bg-white'>
                <p className='font-bold'>Consultar OS</p>
                <span>OSs abertas e em andamento.</span>
            </div>

            <div className='border-2 border-[#241f34] rounded-md p-2 my-4 cursor-pointer select-none hover:bg-white'>
                <p className='font-bold'>Dashboard OS</p>
                <span>Painel de controle de OSs.</span>
            </div>
        </div>
    </div>
  )
}
