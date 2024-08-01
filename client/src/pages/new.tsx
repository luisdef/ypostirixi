import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Slogan from '../components/slogan'
import axios from 'axios'

export default function New() {
  const navigate = useNavigate()
  const goBackToHome = () => {
    navigate('/ypostirixi')
  }

  const [nome, setNome] = useState('');
  const [fone, setFone] = useState('');
  const [email, setEmail] = useState('');
  const [setor, setSetor] = useState('');
  const [problema, setProblema] = useState('');
  const [descricao, setDescricao] = useState('');
  const [prioridade, setPrioridade] = useState('Normal');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const response = await axios.post(process.env.API+'new', {
        nome,
        fone,
        email,
        setor,
        problema,
        descricao,
        prioridade
      });
      localStorage.setItem('status', String(response.status));
    } catch (error: unknown) {
      console.error(error);
    }
    navigate('/ypostirixi/list')
  }

  return (
    <div className='flex justify-center items-center h-screen max-md:flex-col max-md:justify-start'>
      <Slogan />
      <div className='m-4 w-[400px] flex flex-col gap-2 justify-center items-center border-l-2 border-l-slate-900 p-3'>
        <h2 className='text-[1.7rem] font-bold text-xl'>Abrir novo Chamado</h2>
        <form onSubmit={handleSubmit} className='w-full min-w-[300px] max-md:mb-12'>      
          <label className='w-full' htmlFor='name'> 
            <p className='pt-1'>Nome: *</p>
            <input className='w-full p-1 rounded-md border-b-[2px] border-slate-900' maxLength={100} id='name' name='name' type='text'
            onChange={(e) => setNome(e.target.value)}
            required />
          </label >
          <label className='w-full' htmlFor='fone'>
            <p className='pt-1'>Telefone:</p>
            <input className='w-full p-1 rounded-md border-b-[2px] border-slate-900' maxLength={20} id='fone' name='fone' type='tel'
            onChange={(e) => setFone(e.target.value)}
            required />
          </label >
          <label className='w-full' htmlFor='email'>
            <p className='pt-1'>E-mail: *</p>
            <input className='w-full p-1 rounded-md border-b-[2px] border-slate-900' maxLength={200} id='email' name='email' type='email'
            onChange={(e) => setEmail(e.target.value)}
            required />
          </label >
          <label className='w-full' htmlFor='setor'>
            <p className='pt-1'>Setor: *</p>
            <input className='w-full p-1 rounded-md border-b-[2px] border-slate-900' maxLength={25} id='setor' name='setor' type='text' 
            onChange={(e) => setSetor(e.target.value)}
            required />
          </label >
          <label className='w-full' htmlFor='problema'>
            <p className='pt-1'>Problema: *</p>
            <input className='w-full p-1 rounded-md border-b-[2px] border-slate-900' maxLength={200} id='problema' name='problema' type='text' 
            onChange={(e) => setProblema(e.target.value)}
            required />
          </label >
          <label className='w-full' htmlFor='descricao'>
            <p className='pt-1'>Descrição: *</p>
            <textarea className='w-full p-1 rounded-md border-b-[2px] border-slate-900' maxLength={400} rows={3} id='descricao' name='descricao'
            onChange={(e) => setDescricao(e.target.value)}
            required></textarea>
          </label >
          <label className='w-full'>
            <p className='pt-1'>Prioridade: *</p>
            <div className="flex justify-around">
              <div className="flex justify-center items-center gap-1 w-fit">
                <input type="radio" name="prioridade" id="Normal" value="Normal" onClick={() => setPrioridade('Normal')} defaultChecked />
                <label htmlFor="Normal">Normal</label>
              </div>
              <div className="flex justify-center items-center gap-1 w-fit">
                <input type="radio" name="prioridade" id="Urgente" value="Urgente" onClick={() => setPrioridade('Urgente')} />
                <label htmlFor="Urgente">Urgente</label>
              </div>
            </div>
          </label >

          <p><strong><code className='text-[18px]'>*</code></strong> Campos obrigatórios</p>

          <div className="pt-4 flex w-full justify-between">
            <button onClick={goBackToHome} className='hover:bg-[#d58cff] text-[1.2rem] py-2 px-4 border-[2px] rounded-xl border-slate-900'>Cancelar</button>
            <button type='submit' className='hover:bg-[#d58cff] text-[1.2rem] py-2 px-4 border-[2px] rounded-xl border-slate-900 bg-slate-200'>Abrir</button>
          </div>
        </form>
      </div>
    </div>
  )
}
