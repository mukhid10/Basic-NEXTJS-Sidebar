'use client'

interface Ibutton {
  userId: number
}

const Cbutton: React.FC<Ibutton>=({userId})=> {
  const handleClick = ()=>{
    alert(userId)
  }
  return (
    <button onClick={handleClick} className='bg-[tomato]'>Click</button>
  )
}

export default Cbutton