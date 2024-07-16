import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Slogan from '../components/slogan'
import eyeIcon from '/eye.svg'

export default function Login() {
  const navigate = useNavigate()
  const goBackToHome = () => {
    navigate('/')
  }

  const [showPassword, setShowPassword] = useState(false)
  const btnShowPassword = () => {
    if (showPassword) {
      setShowPassword(false)
    } else {
      setShowPassword(true)
    }
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
  }

  return (
    <div className='flex justify-center items-center h-screen max-md:flex-col'>
      <Slogan />
      <div className='m-4 flex flex-col gap-2 justify-center items-center border-l-2 border-l-slate-900 p-6'>
        <h2 className='text-[1.7rem] font-bold text-xl'>Faça login</h2>
        <form onSubmit={handleSubmit} className='w-full min-w-[300px]'>
          <label className='w-full' htmlFor='email'>
            <p className='pt-4'>E-mail *</p>
            <input className='w-full p-1 rounded-md border-b-[2px] border-slate-900' id='email' name='email' type='text' />
          </label >
          <label className='relative w-full' htmlFor='password'>
            <p className='pt-4'>Senha *</p>
            <input className='z-[1] w-full p-1 rounded-md border-b-[2px] border-slate-900' id='password' name='password' type={showPassword ? 'text' : 'password'} />
            <img onClick={btnShowPassword} src={eyeIcon} className="absolute max-w-[20px] top-[82%] mr-[.5rem] right-[20%] cursor-pointer" alt="Vite logo" />
          </label>
          <div className="pt-4 flex w-full justify-between">
            <button onClick={goBackToHome} className='hover:bg-[#d58cff] text-[1.2rem] py-2 px-4 border-[2px] rounded-xl border-slate-900'>Cancelar</button>
            <button className='hover:bg-[#d58cff] text-[1.2rem] py-2 px-4 border-[2px] rounded-xl border-slate-900 bg-slate-200'>Entrar</button>
          </div>
        </form>
      </div>
    </div>
  )
}
