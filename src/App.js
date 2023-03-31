import React from 'react';
import ColorCards from './components/ColorCards.jsx';
import './styles/tailwind.css';

// import { MdClear } from 'react-icons/md'

const App = () => {
  return (
    <body className='bg-gray-100'>
      <div className='p-8'>
        <ColorCards type='pink' />
        <ColorCards type='yellow' />
      </div>
    </body>
  );
};

export default App;
