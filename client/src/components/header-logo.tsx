import ypostirixiLogo from '/ypostiriki.svg'

export default function HeaderLogo() {
  return (
    <div className='flex justify-center items-center gap-4 p-4'>
      <a href="/ypostirixi">
        <img src={ypostirixiLogo} className="logo w-[75px]" alt="ypostirixi logo" />
      </a>
      <h1 className='font-bold text-2xl'>ypostirixi</h1>
    </div>
  )
}
