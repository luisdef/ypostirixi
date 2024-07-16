import Slogan from '../components/slogan'
import { useNavigate } from 'react-router-dom'

export default function Home() {
  const navigate = useNavigate()

  const handleDashboardAccess = () => {
    navigate('/login')
  }

  return (
    <div className='flex justify-center items-center h-screen max-md:flex-col'>
        <Slogan />
        <div className='pl-4 flex-col justify-center items-center'>
            <div id='button' className='border-[2px] border-[#241f34] rounded-md p-2 my-4 cursor-pointer select-none hover:bg-slate-200'>
                <p className='font-bold'>Abrir chamado</p>
                <span>Abrir um novo chamado.</span>
            </div>

            <div id='button' className='border-[2px] border-[#241f34] rounded-md p-2 my-4 cursor-pointer select-none hover:bg-slate-200'>
                <p className='font-bold'>Consultar Ordem de Serviço</p>
                <span>OSs abertas e em andamento.</span>
            </div>

            <div onClick={handleDashboardAccess} id='button' className='border-[2px] border-[#241f34] rounded-md p-2 my-4 cursor-pointer select-none hover:bg-slate-200'>
                <p className='font-bold'>Dashboard OS</p>
                <span>Painel de controle de OSs.</span>
            </div>
        </div>
    </div>
  )
}
