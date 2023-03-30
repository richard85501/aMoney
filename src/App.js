import React from 'react'
import Cards from './components/Cards.jsx'
import './index.css'

// import { MdClear } from 'react-icons/md'

const App = () => {
  return (
    <body className="bg-gray-100">
      <div className="p-8">
        <Cards />
        <h1 className="text-3xl font-bold underline bg-[#333] text-red-500">
          Hello world!
        </h1>
      </div>
    </body>
  )
}

export default App
