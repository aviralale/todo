import React from 'react'
import TodoContainer from './components/TodoContainer'
import Footer from './components/Footer'
import { Toaster } from 'sonner'

export default function App() {
  return (
    <div className='flex flex-col'>
      <div className='flex gap-2 justify-center mt-4'>
      <h1 className='text-6xl text-center font-semibold'>Todo Using React</h1><img src="https://skillicons.dev/icons?i=react" />
      </div>
      <Footer/>
      <div className='flex justify-center'>
        <TodoContainer/>
      </div>
      <Toaster theme='dark' richColors position="bottom-right" />
    </div>
  )
}
