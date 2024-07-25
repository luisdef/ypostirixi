import { useNavigate } from "react-router-dom"
import StatusLabel from "./status-label"

export default function ListRow(props: {
  uuid: string,
  os: number,
  date: string,
  setor: string,
  status: number,
  problem: string
}) {
  const navigate = useNavigate()
  const handleClick = () => {
    const token = localStorage.getItem('token');
    if (token) {
      navigate("/maintenance/os?uuid=" + props.uuid);
    } else {
      navigate("/os?uuid=" + props.uuid);
    }
  }

  return (
    <div onClick={handleClick} className='flex w-[100%] pt-2 pb-1 cursor-pointer border-b-[1px]'>
      <div className="w-[10%] text-[15px] self-center text-center truncate">{props.os}</div>
      <div className="w-[25%] text-[15px] self-center text-center truncate">{props.date}</div>
      <div className="w-[20%] text-[15px] self-center text-center truncate">{props.setor}</div>
      <div className="w-[20%] text-[15px] flex justify-center items-center truncate">
        <StatusLabel id={props.status} />
      </div>
      <div className="w-[25%] text-[15px] self-center text-center truncate">{props.problem}</div>
    </div>
  )
}
