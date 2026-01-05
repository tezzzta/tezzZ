import { useEffect } from 'react'
import Componente from './Componentes/Principal.tsx'
import Second from './Componentes/Second.tsx'
import {First} from './Cards/First.tsx'
import { BrowserRouter, Route, Routes} from 'react-router-dom'


function Home() {
  useEffect(() => {
    const preventZoom = (event: WheelEvent) => {
      if (event.ctrlKey) {
        event.preventDefault();
      }
    };

    window.addEventListener("wheel", preventZoom, { passive: false });

    return () => {
      window.removeEventListener("wheel", preventZoom);
    };
  }, []);

  return (
    <>

   <style>
        {`
        

         html, body {
          background-color: #111;
          scroll-behavior: smooth;
          overflow-x: hidden;

            }
        `}
      </style>
      <Componente/>
      <Second/>
      
    </>
  )
}



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<First />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App
