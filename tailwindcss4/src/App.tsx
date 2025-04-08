import { useEffect } from 'react'
import Componente from './Componentes/Principal.tsx'
import Second from './Componentes/Second.tsx'

function App() {
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

           overflow-x: hidden;

            }
        `}
      </style>
      <Componente/>
      <Second/>
      
    </>
  )
}

export default App
