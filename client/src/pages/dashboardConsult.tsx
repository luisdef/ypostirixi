import { useNavigate, useSearchParams } from 'react-router-dom'
import HeaderLogo from '../components/header-logo'
import GoBack from '../components/go-back'
import { useEffect, useState } from 'react';
import { removeNonNumericCharacters, IOS } from '../utils';
import axios from 'axios';
import Loading from '../components/loading';
import LoggedBox from '../components/logged-box';

export default function DashboardConsult() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const [message, setMessage] = useState('');

  const [emailLogged, setEmailLogged] = useState('');
  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          navigate('/login');
          return;
        }
        const response = await axios.get(process.env.API+'protected', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setEmailLogged(response.data.logged_in_as.email);
      } catch (error) {
        localStorage.removeItem('token');
        navigate('/login');
      }
    };
    fetchData();
  }, [navigate]);

  const uuidValueQuery = searchParams.get("uuid");

  useEffect(() => {
    if (uuidValueQuery?.length !== 36) {
      navigate('/')
    }
  });

  const [data, setData] = useState<IOS>();
  const [loading, setLoading] = useState(true);

  const [uuid, setUuid] = useState('');
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [fone, setFone] = useState('');
  const [setor, setSetor] = useState('');
  const [problema, setProblema] = useState('');
  const [descricao, setDescricao] = useState('');
  const [prioridade, setPrioridade] = useState('');
  const [descricaoTec, setDescricaoTec] = useState('');
  const [status, setStatus] = useState(1);
  const [updatedAt, setUpdatedAt] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(process.env.API+`os?uuid=${uuidValueQuery}`);
        setData(response.data);
        setLoading(false);
      } catch (error: unknown) {
        console.log("error while retrieving data");
        setLoading(false);
      }
    };
    fetchData();
  }, [uuidValueQuery]);

  const [nomeForm, setFormNome] = useState(nome);
  const [emailForm, setFormEmail] = useState(email);
  const [foneForm, setFormFone] = useState(fone);
  const [setorForm, setFormSetor] = useState(setor);
  const [problemaForm, setFormProblema] = useState(problema);
  const [descricaoForm, setFormDescricao] = useState(descricao);
  const [prioridadeForm, setFormPrioridade] = useState(prioridade);
  const [descricaoTecForm, setFormDescricaoTec] = useState(descricaoTec);
  const [statusForm, setFormStatus] = useState(status);

  useEffect(() => {
    if (data != undefined) {
      setUuid(data.uuid);

      setNome(data.nome);
      setFormNome(data.nome);
      setEmail(data.email);
      setFormEmail(data.email);
      setFone(data.fone);
      setFormFone(data.fone);
      setSetor(data.setor);
      setFormSetor(data.setor);
      setProblema(data.problema);
      setFormProblema(data.problema);
      setDescricao(data.descricao);
      setFormDescricao(data.descricao);
      setPrioridade(data.prioridade);
      setFormPrioridade(data.prioridade);
      setDescricaoTec(data.descricaoTec);
      setFormDescricaoTec(data.descricaoTec);
      setStatus(data.status);
      setFormStatus(data.status);

      setUpdatedAt(data.updated_at);
    }
  }, [data]);

  const opts = [1,2,3,4];
  const textStatus = [
    "Aberta",
    "Em serviço",
    "Pendente",
    "Encerrada"
  ]
  const renderedOpts = opts.map((num) =>
    <option key={num+61} value={num}>{textStatus[num-1]}</option>
  );

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const response = await axios.put(String(`${process.env.API}update?uuid=${uuid}`), {
        nome: nomeForm,
        setor: setorForm,
        email: emailForm,
        fone: foneForm,
        problema: problemaForm,
        prioridade: prioridadeForm,
        descricao: descricaoForm,
        descricaoTec: descricaoTecForm,
        status: statusForm
      }, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      })
      if (response.status) {
        setMessage("OS atualizada.");
        setTimeout(() => {
          setMessage('');
        }, 3000);
      }
    } catch (error: unknown) {
      console.error(error);
    }
    navigate(`/maintenance/os?uuid=${uuid}`);
  }

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const handleDeleteButton = async () => {
    try {
      const response = await axios.delete(String(`${process.env.API}delete?uuid=${uuid}`), {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      })
      console.log(response.statusText);
      navigate('/maintenance/list');''
    } catch (error: unknown) {
      console.error(error);
    }
  }

  return (
    <div>
      <LoggedBox email={emailLogged} />
      <HeaderLogo />
      <main className='flex flex-col items-center justify-start w-full max-md:items-start max-md:overflow-scroll'>
        <h2 className='text-2xl font-bold p-4'>
          Manutenção OS n° { loading ? '' : <>{parseInt(removeNonNumericCharacters(uuid).substring(0,4))}</> }
        </h2>

        <div className='bg-[#f7f7f7] p-5 rounded-[20px] w-[800px] mb-4'>
          { loading ? <Loading /> :

          <form onSubmit={handleSubmit}>
            { message ? <p className='w-full rounded-xl text-center mb-2 py-1 bg-lime-400'>{message}</p> : '' }
            <div className="flex justify-between">
              <GoBack path={'/maintenance/list'} />
              <select name="status" id="status" defaultValue={2} onChange={(e) => setFormStatus(parseInt(e.target.value))} className='border-2 border-red-200 rounded'>
                {renderedOpts}
              </select>
              <div className="w-[22px]"></div>
            </div>
    
            <div className="flex w-[100%] py-4">
              <div className="w-[60%]">Nome: <input name="nome" id="nome" onChange={(e) => {setFormNome(e.target.value)}} className='bg-[#fcebe1] p-2 rounded w-[85%] border-b-2 border-b-black' value={nomeForm} /></div>
              <div className="w-[40%]">Setor: <input name="setor" id="setor" onChange={(e) => {setFormSetor(e.target.value)}} className='bg-[#fcebe1] p-2 rounded w-[80%] border-b-2 border-b-black' value={setorForm} /></div>
            </div>
    
            <div>Contato:</div>
    
            <div className="flex w-[100%] py-4">
              <div className="w-[60%]">E-mail: <input name="email" id="email" onChange={(e) => {setFormEmail(e.target.value)}} className='bg-[#fcebe1] border-b-2 w-[85%] border-b-black p-2 rounded' value={emailForm} /></div>
              <div className="w-[40%]">Fone: <input name="fone" id="fone" onChange={(e) => {setFormFone(e.target.value)}} className='bg-[#fcebe1] p-2 border-b-2 border-b-black rounded w-[80%]' value={foneForm}/></div>
            </div>
    
            <div className="flex w-[100%] py-4">
              <div className="w-[60%]">Problema: <input name="problem" id="problema" onChange={(e) => {setFormProblema(e.target.value)}} className='bg-[#fcebe1] p-2 rounded border-b-2 border-b-black w-[75%]' value={problemaForm} /></div>
              <div className="w-[40%]">Prioridade:
                <select
                  defaultValue={prioridadeForm}
                  onChange={(e) => {setFormPrioridade(e.target.value)}}
                  name="prioridade" id="prioridade"
                  className='bg-[#fcebe1] p-2 rounded border-b-2 border-b-black w-[40%]'
                >
                  <option value="Normal">Normal</option>
                  <option value="Urgente">Urgente</option>
                </select>
              </div>
            </div>
    
            <div className="flex flex-col w-[100%] py-4">
              <div className="w-[100%]">Descrição:</div>
              <textarea onChange={(e) => {setFormDescricao(e.target.value)}} className='bg-[#fcebe1] p-2 rounded border-b-2 border-b-black' value={descricaoForm}></textarea>
            </div>
    
            <div className="flex flex-col w-[100%] py-4">
              <div className="w-[100%]">Observação técnica:</div>
              <textarea onChange={(e) => {setFormDescricaoTec(e.target.value)}} rows={4} className='bg-[#fcebe1] p-2 rounded border-b-2 border-b-black' value={descricaoTecForm}></textarea>
            </div>
    
            <div className="flex w-[100%] py-4 justify-between">
              <div className="w-[60%]">Data: <span className='bg-[#fcebe1] p-2 rounded'>{updatedAt}</span></div>
              <button type="reset" onClick={(e) => {e.preventDefault(); setIsDeleteModalOpen(true);}} className='bg-[#ff8686] p-2 rounded-md'>Remover OS</button>

              {
                isDeleteModalOpen ?
                  <div className="z-10 fixed top-0 right-0 w-full h-full flex justify-center items-center bg-[#00000095]">
                  <div className="bg-white p-8 rounded-3xl flex flex-col gap-4">
                    <h3>Deseja mesmo remover a OS?</h3>
                    <div className="flex justify-between">
                      <div onClick={() => setIsDeleteModalOpen(false)} className="cursor-pointer bg-[#ff8686] p-2 rounded-md">Não</div>
                      <div onClick={() => handleDeleteButton()} className="cursor-pointer bg-[#afff87] p-2 rounded-md">Sim</div>
                    </div>
                  </div>
                </div>
                : ''
              }

              <button type="submit" className='bg-[#afff87] p-2 rounded-md'>Salvar OS</button>           
            </div>
          </form>
          }
        </div>
      </main>
    </div>
  )
}
