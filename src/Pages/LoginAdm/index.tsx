import * as C from './style';
import logo from '../../assets/images/logo.png'

export const LoginAdm = () => {
     return (
          <C.Container>
               <div className='login-box'>
                    <img src={logo} alt="Logo Shopping"/>
                    <C.Login> 
                         <div className='login-title'>
                              <h2 >LOGIN - ADM</h2>
                         </div>
                         
                         <form className='login-form'>
                              <hr />
                              <div className='login-input'>
                                   <div>E-mail: <input type="email" /></div>
                                   <div>Senha: <input type="password"/></div>
                              </div>
                                   <div className='login-quite'><a>Esqueceu a senha?</a></div>
                                   <div className='login-botton'>
                                        <a href='/register'>Cadastrar-se</a>
                                        <button><a>Acessar</a></button>
                                   </div>
                                   
                              </form>
                    </C.Login>
               </div>
          </C.Container>
     );
}