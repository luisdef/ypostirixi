import { useNavigate } from 'react-router-dom'
import goBackIcon from '/back.svg'

export default function GoBack(props: {path: string}) {
  const navigate = useNavigate()
  function goBack() {
    navigate(props.path)
  }

  return (
    <div onClick={goBack} className='bg-[#E9E3D0] rounded-[12px] p-2 w-fit cursor-pointer'>
      <img src={goBackIcon} className="logo w-[20px]" alt="Go back icon" />
    </div>
  )
}
