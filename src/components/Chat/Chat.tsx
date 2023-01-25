import React from 'react'
import InputSection from './InputSection'
import Messages from './Messages'

function Chat() {
  return (
    <div className='col-span-2 relative'>
      <Messages/>
      <div className='p-3 absolute w-full bottom-0 bg-sky-900'>
      <InputSection/>
      </div>
    </div>
  )
}

export default Chat