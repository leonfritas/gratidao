import Axios from "axios";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

export default function CriarConta(){
    const [ nomeCompletoUsuario, setNomeCompletoUsuario ] = useState();
    const [ nomeUsuario, setNomeUsuario ] = useState();
    const [ emailUsuario, setEmailUsuario ] = useState();
    const [ senhaUsuario, setSenhaUsuario ] = useState();
    const [ favoritoUsuario, setFavoritoUsuario ] = useState();
    const [ idadeUsuario, setIdadeUsuario ] = useState();
    const [ fotoUsuario, setFotoUsuario ] = useState();
    
    const navigate = useNavigate();

    function salvarConta(){
        Axios.post("http://localhost:5000/usuario/criarconta", {
            nomeUsuario: nomeUsuario,
            emailUsuario: emailUsuario,
            senhaUsuario: senhaUsuario,
            nomeCompletoUsuario: nomeCompletoUsuario,
            favoritoUsuario: favoritoUsuario,
            idadeUsuario: idadeUsuario,            
            fotoUsuario: fotoUsuario           
        }).then((response) => {
            console.log(response);

        })
        alert('Conta criada com sucesso.');
        navigate('/');
    }

    function imagemAdicionar(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setFotoUsuario(reader.result); // reader.result é a string base64
            };
            reader.readAsDataURL(file);
        }
    }

    return(        
        <section className="bg-gray-1 dark:bg-dark  lg:py-[120px]">
            <div className="container mx-auto">
                <div className="flex flex-wrap -mx-4">
                    <div className="w-full px-4">
                        <div
                            className="relative mx-auto max-w-[525px] overflow-hidden rounded-lg bg-white px-10 text-center sm:px-12 md:px-[60px] dark:bg-dark-2"
                            >                            
                            <p className="text-xl font-semibold text-blue-600/100 dark:text-blue-500/100 my-10">Insira as suas informações</p>
                            <form>
                                <div className="mb-6">
                                    <input
                                        type="text"
                                        placeholder="Nome completo"
                                        className="w-full px-5 py-3 text-base bg-transparent border rounded-md outline-none border-stroke text-body-color dark:text-black dark:border-dark-3 focus:border-primary focus-visible:shadow-none"
                                        onChange={((e) => setNomeCompletoUsuario(e.target.value))} />
                                </div>      
                                <div className="mb-6">
                                    <input
                                        type="text"
                                        placeholder="Idade"
                                        className="w-full px-5 py-3 text-base bg-transparent border rounded-md outline-none border-stroke text-body-color dark:text-black dark:border-dark-3 focus:border-primary focus-visible:shadow-none"
                                        onChange={((e) => setIdadeUsuario(e.target.value))} />
                                </div>       
                                <div className="mb-6">
                                    <input
                                        type="text"
                                        placeholder="Coisa favorita"
                                        className="w-full px-5 py-3 text-base bg-transparent border rounded-md outline-none border-stroke text-body-color dark:text-black dark:border-dark-3 focus:border-primary focus-visible:shadow-none"
                                        onChange={((e) => setFavoritoUsuario(e.target.value))} />
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
                                        type="text"
                                        placeholder="Email"
                                        className="w-full px-5 py-3 text-base bg-transparent border rounded-md outline-none border-stroke text-body-color dark:text-black dark:border-dark-3 focus:border-primary focus-visible:shadow-none"
                                        onChange={((e) => setEmailUsuario(e.target.value))} />
                                </div>
                                <div className="mb-6">
                                    <input
                                        type="password"
                                        placeholder="Password"
                                        className="w-full px-5 py-3 text-base bg-transparent border rounded-md outline-none border-stroke text-body-color dark:text-black dark:border-dark-3 focus:border-primary focus-visible:shadow-none"
                                        onChange={((e) => setSenhaUsuario(e.target.value))} />
                                </div>
                                <div className="mb-6">                                    
                                    <input onChange={imagemAdicionar} type="file" accept="image/png, image/jpeg"  className="block w-full text text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="large_size" />    
                                </div>
                                <div className="mb-10">                                
                                    <button onClick={() => salvarConta()} className='border-dark dark:border-dark-2 border rounded-md inline-flex items-center justify-center py-3 px-7 text-center text-base font-medium text-dark  text-blue-700 hover:bg-gray-4 dark:hover:bg-dark-3 disabled:bg-gray-3 disabled:border-gray-3 disabled:text-dark-5'>
                                        Criar Perfil
                                    </button>                                
                                </div>
                            </form>                                             
                        </div>
                    </div>
                </div>
            </div>
        </section>        
    )
}