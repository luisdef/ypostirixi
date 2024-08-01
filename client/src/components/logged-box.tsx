import { useState } from "react";
import viteLogo from '/vite.svg';
import { useNavigate } from "react-router-dom";

export default function LoggedBox(prop: { email: string }) {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const openAndCloseBehaviour = () => {
    isOpen ? setIsOpen(false) : setIsOpen(true);
  }

  const logout = () => {
    localStorage.removeItem('token');
    navigate('/ypostirixi');
  }

  return (
    <>
      <div onClick={openAndCloseBehaviour} className="absolute z-3 top-4 right-4 hover:bg-[#DDDD00] bg-white rounded-md p-3 cursor-pointer">
        <img src={viteLogo} className="logo w-[20px]" alt="ypostirixi logo" />
      </div>

      {
        isOpen ?
          <div
            className="absolute flex flex-col gap-2 bg-slate-200 p-4 rounded-md z-4 top-[65px] right-4"
          >
            {prop.email}

            <button onClick={logout} className="underline text-red-500">Sair</button>
          </div>
        : ''
      }
    </>
  );
}
