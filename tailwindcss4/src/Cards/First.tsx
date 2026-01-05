import { useRef, useState, useEffect } from "react";
import {Data} from "../Data/CarousData"
import styles from "./First.module.css";
import { ArrowLeft, ArrowRight } from "lucide-react";
import ScrambledText from './Texto';
import {Button, AnotherButton} from './Card'
import { Link } from "react-router-dom";

export const First = () => {
  const listRef = useRef<HTMLUListElement | null>(null);
  const [actual, setActual] = useState(0);
    // const [actualStr, setActualStr] = useState('');


  useEffect(() => {
    const listNode = listRef.current;
    const imgNode = listNode?.querySelectorAll("li > img")[actual];

    if (imgNode) {
      imgNode.scrollIntoView({
        behavior: "smooth"
      });
    }
  }, [actual]);
const scrollImg = (direction: string) =>{
  if(direction==='prev'){
    setActual(curr =>{
      const primera = actual === 0;
      return primera? 0: curr - 1;
    })
  }else{
    const Last = actual === Data.length -1
    if(!Last){
      setActual(curr => curr + 1)


    }
  }
}

const goToSlide = (iddx: number) =>{
  setActual(iddx)
}

  return (


    <div>
        <style>
            {`
         body {
  margin: 0;
  height: 100vh;
  background: linear-gradient(-45deg, #100121, #000, #100121, #000);
  background-size: 400% 400%;
  animation: moveGradient 10s ease infinite;
  color: white; /* para que el texto sea visible si lo necesitas */
}

@keyframes moveGradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
        `}
        </style>
        <div className="py-5">
        
          <div className={styles.divinicial}>
            
        <Link to='/'>
          <button className="m-auto px-2 bg-[#7C3AED] rounded text-white text-[28px]"> Vuelve al inicio </button>  
        </Link>
                  {/* <div className="grid grid-cols-1 gap-4"> */}



                    <div>
                      <ScrambledText
                        radius={100}
                        duration={1.2}
                        speed={0.5}
                        scrambleChars=".:"
                        className="text-amber-500"
                      >
                        REVISA MIS PROYECTOS
                      </ScrambledText>

                      </div>
                  <div className="w-[100%] h-[80%] px-[10%] lg:p-0 lg:w-[85vh] mb-10">
                    
                    <div className="relative h-[100%] w-[100%] my-auto mx-auto lg:w-[85vh] bg-[#111]   border-[1px] rounded-[20px] border-[#111] shadow-md  shadow-[#7C3AED] overflow-hidden gap-1">
                      <div className="relative h-[70%] w-[100%]">
                        <div className="w-[100%] h-[100%] border-[1px]  border-[#111]  overflow-hidden p-[4%]">
                      <ul ref={listRef}>
                      {Data.map((item) =>{
                        return(<li key={item.id}> 

                        {                    actual === item.id - 1  ?<img src={item.img} height={200} width={600} className="mx-auto my-2 rounded" />: ''}                               
                          </li>                                                    
                        )
                      } 
                      )}
                      </ul>                      
                      </div>
                    </div>
                      <div className="grid text-start px-2">
                                         {Data.map((item) =>(
                                        <p key={item.id}>
                                            {
                                             actual=== item.id - 1 ?
                                            <div>
                                             <p className="text-white p-2"> {item.title}</p>
                                              <p  className="text-white p-1"> {item.text } </p>
                                             <div className="flex flex-wrap p-2">
                              {item.label.map((label, i) => (
                                <span 
                                  key={i} 
                                  className="p-1 m-1 bg-[#9370DB] text-white rounded text-sm"
                                >
                                  {label}
                                </span>
                              ))}
  
                            </div>

                                                       </div>
                                                            : ''

                                                      }

                                                  </p>
                                                        ) )
                                                  }

                      </div>

                       </div>
                      <div className="flex justify-center gap-4 m-5">
                                    <span className="text-gray-400 p-2 rounded bg-blue-950 hover:bg-[#7C3AED]" onClick={() => scrollImg('prev')}>  <ArrowLeft/> </span>

                                    <span className="text-gray-400 bg-blue-950 p-2 rounded hover:bg-[#7C3AED]" onClick={() => scrollImg('next')}>      <ArrowRight/> </span>
                        </div>
                      <div className="flex justify-center m-0">
                        {Data.map((_,idx) =>(
                            <div key={idx} className={`m-[8px_3px] pointer font-[12px] text-center text-gray-600 ${idx === actual ? 'bg-[#612fb8] rounded' : ''}`} onClick={() => goToSlide(idx)}>
                              &#9865;
                            </div>)
                          )
                        }
                      </div>
                      
                  </div>

                    </div> 
                      <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 p-2 lg:p-10 m-5 gap-2"> 

                        {Data.map((item, idx) => (
                          <div 
                            key={idx}
                            className="m-auto w-3/4 lg:w-[70%] rounded bg-[#111] gap-3  border-2 border-[#111] shadow-2xl  shadow-[#7C3AED]"
                          >
                            <img src={item.img} alt={item.title} className="rounded" />

                            <p className="text-white text-start font-semibold p-2">
                              {item.title}
                            </p>

                            <p className="text-white text-start p-2">
                              {item.text}
                            </p>

                            <div className="flex flex-wrap p-2">
                              {item.label.map((label, i) => (
                                <span 
                                  key={i} 
                                  className="p-1 m-1 bg-[#9370DB] text-white rounded text-sm"
                                >
                                  {label}
                                </span>
                              ))}
  
                            </div>
                                 <div className="w-full flex ">
                                  <Button github={item.github}/> 
                                                                  <AnotherButton github={item.link}/> 
                                 </div>
                          </div>
                        ))}

                      

                      </div>



        </div>
    </div>
    // </div>
  );
};


