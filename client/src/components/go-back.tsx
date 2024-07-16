import { useNavigate } from 'react-router-dom'
import goBackIcon from '/back.svg'

export default function GoBack({path: string}) {
  const navigate = useNavigate()
  function goBack() { navigate() }

  return (
    <div onClick={goBack} className='bg-[#E9E3D0] rounded-[12px] p-2'>
      <img src={goBackIcon} className="logo w-[12px]" alt="Go back icon" />
    </div>
  )
}
