import ypostirixiLogo from '/ypostiriki.svg'

export default function Slogan() {
    return (
        <div className='flex-col justify-center items-center'>
            <div className='flex justify-center items-center py-8'>
                <a href="/">
                    <img src={ypostirixiLogo} className="logo w-[150px]" alt="Vite logo" />
                </a>
            </div>
            <h1 className='text-4xl font-bold w-full text-center'>ypostirixi</h1>
            <div className="card w-full text-center py-8">
                <p>
                    Sistema de gerenciamento de Suporte de TI.
                </p>
            </div>
        </div>
    )
}
