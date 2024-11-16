import logo from '../assets/gratidao.png';
import { Link, useNavigate } from 'react-router-dom';
import Axios from "axios";
import { useState } from 'react';

export default function Login(){

    const [ nomeUsuario, setNomeUsuario ] = useState();
    const [ senhaUsuario, setSenhaUsuario ] = useState();

    const navigate = useNavigate();

    function Logar(){
        Axios.post("http://localhost:5000/usuario/logarusuario", {
            nomeUsuario: nomeUsuario,
            senhaUsuario: senhaUsuario
        }).then((response) => {
            
            if (response.data[0][0].ativoUsuario == 1){
                navigate('/home');
            }else if (response.data[0][0].ativoUsuario == 0){
                alert('Usuário ou senha incorretos');
            }
        })
    }

    return(        
        <section className="bg-gray-1 dark:bg-dark py-20 lg:py-[120px]">
            <div className="container mx-auto">
                <div className="flex flex-wrap -mx-4">
                    <div className="w-full px-4">
                        <div
                            className="relative mx-auto max-w-[525px] overflow-hidden rounded-lg bg-white px-10 text-center sm:px-12 md:px-[60px] dark:bg-dark-2"
                            >
                            <div className="mb-10 text-center md:mb-16">
                                <a
                                    href="#"
                                    className="mx-auto inline-block max-w-[160px]"
                                    >
                                <img
                                    src={logo}
                                    alt="logo"
                                    />
                                </a>
                            </div>                        
                                <div className="mb-6">
                                    <input
                                        type="text"
                                        placeholder="Usuário"
                                        className="w-full px-5 py-3 text-base bg-transparent border rounded-md outline-none border-stroke text-body-color dark:text-black dark:border-dark-3 focus:border-primary focus-visible:shadow-none"
                                        onChange={((e) => setNomeUsuario(e.target.value))} />
                                </div>                                  
                                <div className="mb-6">
                                    <input
                                        type="password"
                                        placeholder="Password"
                                        className="w-full px-5 py-3 text-base bg-transparent border rounded-md outline-none border-stroke text-body-color dark:text-black dark:border-dark-3 focus:border-primary focus-visible:shadow-none"
                                        onChange={((e) => setSenhaUsuario(e.target.value))} />
                                </div>
                                <div className="mb-10">                                
                                    <button onClick={() => Logar()}className='border-dark dark:border-dark-2 border rounded-md inline-flex items-center justify-center py-3 px-7 text-center text-base font-medium text-dark  text-blue-700 hover:bg-gray-4 dark:hover:bg-dark-3 disabled:bg-gray-3 disabled:border-gray-3 disabled:text-dark-5'>
                                        Entrar
                                    </button>                                    
                                </div>                            
                            
                            <p className="text-base text-body-color dark:text-dark-6">
                                <span className="pr-0.5">Não é membro ainda?</span> 
                                <Link to='/criarconta'>
                                    <button className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                                        Criar conta
                                    </button>                                       
                                </Link>                                                                          
                            </p>                    
                        </div>
                    </div>
                </div>
            </div>
        </section>        
    )
}