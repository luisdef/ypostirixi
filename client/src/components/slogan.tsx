import ypostirixiLogo from '/ypostiriki.svg'

export default function Slogan() {
    return (
      <div className='flex-col justify-center items-center'>
        <div className='flex justify-center items-center py-8 max-md:py-3'>
            <a href="/ypostirixi">
                <img src={ypostirixiLogo} className="logo w-[150px]" alt="ypostirixi logo" />
            </a>
        </div>
        <h1 className='text-5xl font-bold w-full text-center'>ypostirixi</h1>
        <div className="card w-full text-center py-8">
            <p className='text-xl'>
                Sistema de gerenciamento de Suporte em TI.
            </p>  
        </div>
      </div>
    )
}
