import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Page404() {
  const navigate = useNavigate()
  useEffect(() => { navigate('/') })
  return (<></>)
}
