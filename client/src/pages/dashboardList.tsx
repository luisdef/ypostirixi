import { useEffect, useState } from 'react'
import HeaderLogo from '../components/header-logo'
import GoBack from '../components/go-back'
import ListRow from '../components/list-row'
import axios from 'axios'
import Loading from '../components/loading'
import { useNavigate } from 'react-router-dom'

import { removeNonNumericCharacters, OS } from '../utils'
import LoggedBox from '../components/logged-box'

export default function DashboardList() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          navigate('/ypostirixi/login');
          return;
        }
        const response = await axios.get(process.env.API+'protected', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setEmail(response.data.logged_in_as.email);
      } catch (error) {
        localStorage.removeItem('token');
        navigate('/ypostirixi/login');
      }
    };
    fetchData();
  }, [navigate]);

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(process.env.API+'all');
        setData(response.data);
        setLoading(false);
      } catch (error: unknown) {
        console.log("error while retrieving data")
        setError(true);
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  
  if (error) return <div>error while retrieving data</div>;

  const listItems = data.map((os: OS) => 
    <ListRow
      key={os.uuid}
      uuid={os.uuid}
      os={parseInt(removeNonNumericCharacters(os.uuid).substring(0,4))}
      date={os.updated_at}
      setor={os.setor}
      status={os.status}
      problem={os.problema}
    />
  );

  return (
    <div>
      <LoggedBox email={email} />

      <HeaderLogo />
      <main className='flex flex-col items-center justify-start w-full max-md:items-start max-md:overflow-scroll'>
        <h2 className='text-2xl font-bold p-4'>Manutenção de Ordens de Serviço</h2>

        <div className='bg-[#f7f7f7] p-5 rounded-[20px] min-w-[600px] mb-16'>
          <GoBack path={'/ypostirixi'} />

          <div className='flex w-[100%] pt-4'>
            <div className="font-bold w-[10%] text-[17px] text-center">N°OS</div>
            <div className="font-bold w-[25%] text-[17px] text-center">Data</div>
            <div className="font-bold w-[20%] text-[17px] text-center">Setor</div>
            <div className="font-bold w-[20%] text-[17px] text-center">Status</div>
            <div className="font-bold w-[25%] text-[17px] text-center">Problema</div>
          </div>

          <>{loading ? <Loading /> : ''}</>
          <>{listItems}</>
        </div>
      </main>
    </div>
  )
}
