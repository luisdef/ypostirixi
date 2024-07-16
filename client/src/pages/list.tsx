import HeaderLogo from '../components/header-logo'
import GoBack from '../components/go-back'

export default function List() {
  return (
    <div>
      <HeaderLogo />
      <main className='flex flex-col items-center justify-start border-2 w-full'>
        <h2 className='text-2xl font-bold p-4'>Ordens de Serviço</h2>

        <div className='bg-[#f7f7f7] p-5 rounded-[20px] min-w-[600px]'>
          <GoBack path={'/'} />
        </div>
      </main>
    </div>
  )
}
