import Slogan from '../components/slogan'
import { useNavigate } from 'react-router-dom'

export default function Home() {
  const navigate = useNavigate()
  
  const handleNew = () => {
    navigate('/new')
  }
  const handleListing = () => {
    navigate('/list')
  }
  const handleDashboardAccess = () => {
    navigate('/login')
  }

  return (
    <div className='flex justify-center gap-8 items-center h-screen max-md:flex-col'>
        <Slogan />
        <div className='pl-4 flex-col w-[400px] justify-center items-center'>
            <div onClick={handleNew} id='button' className='border-[3px] border-[#241f34] rounded-md p-4 my-4 cursor-pointer select-none hover:bg-slate-200'>
                <p className='text-2xl font-bold'>Abrir chamado</p>
                <span className='text-xl'>Abrir um novo chamado.</span>
            </div>

            <div onClick={handleListing} id='button' className='border-[3px] border-[#241f34] rounded-md p-4 my-4 cursor-pointer select-none hover:bg-slate-200'>
                <p className='text-2xl font-bold'>Consultar Ordem de Serviço</p>
                <span className='text-xl'>OSs abertas e em andamento.</span>
            </div>

            <div onClick={handleDashboardAccess} id='button' className='border-[3px] border-[#241f34] rounded-md p-4 my-4 cursor-pointer select-none hover:bg-slate-200'>
                <p className='text-2xl font-bold'>Dashboard OS</p>
                <span className='text-xl'>Painel de controle de OSs.</span>
            </div>
        </div>
    </div>
  )
}
