import { useNavigate, useSearchParams } from 'react-router-dom'
import HeaderLogo from '../components/header-logo'
import GoBack from '../components/go-back'
import { useEffect, useState } from 'react';
import StatusLabel from '../components/status-label';
import { removeNonNumericCharacters, IOS } from '../utils';
import axios from 'axios';
import Loading from '../components/loading';

export default function Consult() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const uuidValueQuery = searchParams.get("uuid");

  useEffect(() => {
    if (uuidValueQuery?.length !== 36) {
      navigate('/ypostirixi')
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

  useEffect(() => {
    if (data != undefined) {
      setUuid(data.uuid);
      setNome(data.nome);
      setEmail(data.email);
      setFone(data.fone);
      setSetor(data.setor);
      setProblema(data.problema);
      setDescricao(data.descricao);
      setPrioridade(data.prioridade);
      setDescricaoTec(data.descricaoTec);
      setStatus(data.status);
      setUpdatedAt(data.updated_at);
    }
  }, [data]);

  return (
    <div>
      <HeaderLogo />
      <main className='flex flex-col items-center justify-start w-full max-md:items-start max-md:overflow-scroll'>
        <h2 className='text-2xl font-bold p-4'>
          Ordem de serviço n° { loading ? '' : <>{parseInt(removeNonNumericCharacters(uuid).substring(0,4))}</> }
        </h2>

        <div className='bg-[#f7f7f7] p-5 rounded-[20px] w-[800px] max-md:w-full'>
          { loading ? <Loading /> :

          <>
            <div className="flex justify-between">
              <GoBack path={'/list'} />
              <StatusLabel id={status} />
              <div className="w-[22px]"></div>
            </div>
    
            <div className="flex w-[100%] py-4 max-md:flex-col max-md:gap-4">
              <div className="w-[60%] max-md:w-full">Nome: <span className='bg-[#e0d1c8] p-2 rounded'>{nome}</span></div>
              <div className="w-[40%] max-md:w-full">Setor: <span className='bg-[#e0d1c8] p-2 rounded'>{setor}</span></div>
            </div>
    
            <div>Contato:</div>
    
            <div className="flex w-[100%] py-4 max-md:flex-col max-md:gap-4">
              <div className="w-[60%] max-md:w-full">E-mail: <span className='bg-[#e0d1c8] p-2 rounded'>{email}</span></div>
              <div className="w-[40%] max-md:w-full">Fone: <span className='bg-[#e0d1c8] p-2 rounded'>{fone}</span></div>
            </div>
    
            <div className="flex w-[100%] py-4 max-md:flex-col max-md:gap-4">
              <div className="w-[60%] max-md:w-full">Problema: <span className='bg-[#e0d1c8] p-2 rounded break-all'>{problema}</span></div>
              <div className="w-[40%] max-md:w-full">Prioridade: <span className='bg-[#e0d1c8] p-2 rounded'>{prioridade}</span></div>
            </div>
    
            <div className="flex flex-col w-[100%] py-4">
              <div className="w-[100%]">Problema:</div>
              <span className='bg-[#e0d1c8] p-2 rounded break-all'>{descricao}</span>
            </div>    
    
            <div className="flex flex-col w-[100%] py-4">
              <div className="w-[100%]">Observação técnica:</div>
              <span className='bg-[#e0d1c8] p-2 rounded break-all'>{descricaoTec}</span>
            </div>
    
            <div className="flex w-[100%] py-4">
              <div className="w-[60%]">Data: <span className='bg-[#e0d1c8] p-2 rounded'>{updatedAt}</span></div>            
            </div>
          </>
          
          }
        </div>
      </main>
    </div>
  )
}
