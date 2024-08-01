import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Slogan from '../components/slogan'
import eyeIcon from '/eye.svg'
import axios from 'axios'

export default function Login() {
  const navigate = useNavigate()
  const goBackToHome = () => {
    navigate('/ypostirixi')
  }

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      navigate('/ypostirixi/maintenance/list');
      return;
    }
  }, [navigate]);

  const [showPassword, setShowPassword] = useState(false)
  const btnShowPassword = () => {
    if (showPassword) {
      setShowPassword(false)
    } else {
      setShowPassword(true)
    }
  }

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const response = await axios.post(process.env.API+'login', {
        email,
        password
      });
      localStorage.setItem('token', response.data.access_token);
      navigate('/ypostirixi/maintenance/list');
    } catch (error: unknown) {
      alert("Login não efetuado.\nNão autorizado.");
    }
  }

  return (
    <div className='flex justify-center items-center h-screen max-md:flex-col max-md:justify-start'>
      <Slogan />
      <div className='m-4 w-[400px] flex flex-col gap-2 justify-center items-center border-l-2 border-l-slate-900 p-6'>
        <h2 className='text-[1.7rem] font-bold text-xl'>Faça login</h2>
        <form onSubmit={handleSubmit} className='w-full min-w-[300px]'>
          <label className='w-full' htmlFor='email'>
            <p className='pt-4'>E-mail *</p>
            <input onChange={(e) => setEmail(e.target.value)} className='w-full p-1 rounded-md border-b-[2px] border-slate-900' id='email' name='email' type='text' required />
          </label >
          <label className='relative w-full' htmlFor='password'>
            <p className='pt-4'>Senha *</p>
            <input onChange={(e) => setPassword(e.target.value)} className='z-[1] w-full p-1 rounded-md border-b-[2px] border-slate-900' id='password' name='password' required type={showPassword ? 'text' : 'password'} />
            <img onClick={btnShowPassword} src={eyeIcon} className="absolute max-w-[20px] top-[82%] mr-[.5rem] right-[20%] cursor-pointer" alt="Vite logo" />
          </label>
          <div className="pt-4 flex w-full justify-between">
            <button type='reset' onClick={(e) => {e.preventDefault(); goBackToHome();}} className='hover:bg-[#d58cff] text-[1.2rem] py-2 px-4 border-[2px] rounded-xl border-slate-900'>Cancelar</button>
            <button type='submit' className='hover:bg-[#d58cff] text-[1.2rem] py-2 px-4 border-[2px] rounded-xl border-slate-900 bg-slate-200'>Entrar</button>
          </div>
        </form>
      </div>
    </div>
  )
}
