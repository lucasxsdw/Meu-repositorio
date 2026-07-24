import { Terminal } from 'lucide-react';

export function Header(){
    return (
      <>
        <header className='' >
                <div className=" flex justify-center  gap-60  mx-auto">
                    <div className="flex ">
                        <Terminal />
                        <a href="#" className="logo-name">Lucas.dev</a>
                     </div>
                    
                    <nav className='flex gap-8' >
                        <a href="#" className="">Sobre</a>
                        <a href="#" className="">Projetos</a>
                        <a href="#" className="">Formação</a>
                        <a href="#" className="">Stack</a>
                        <a href="#" className="">Contato</a>
                    </nav>
                  
                    <div className="">
                        <a href="" className="butao-contato">Vamos conversar</a>
                    </div>
                </div>
                   
          
        </header>
      </>
    );
}