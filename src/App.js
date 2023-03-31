import React from 'react';
import './styles/tailwind.css';
import ColorCards from './components/ColorCards.jsx';
import MainBlock from './components/MainBlock.jsx';

// import { MdClear } from 'react-icons/md'

const App = () => {
  return (
    <body className='p-8 bg-gray-100'>
      <MainBlock />
      <ColorCards type='pink' />
      <ColorCards type='yellow' />
    </body>
  );
};

export default App;
