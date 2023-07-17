import logo from '../../assets/images/logo.png'
import * as C from './style';

export const SignIn = () => {
     return (
          <C.singContainer>
               <div>
                    <img src={logo} alt='Logo Shopping'/>
               </div>
               <div>
                    <h1>Cadastro de Funcionarios</h1>
                    <form action="login" method="post">
                         <input type="text" name="nome" placeholder="Nome completo"></input>
                         <input type="text" name="cpf" placeholder="CPF"></input>
                         <input type="email" name="email" placeholder="E-mail"></input>
                         <input type="password" name="password" placeholder="Senha"></input>
                         <input type="text" name="cargo" placeholder="Cargo"></input>
                         <input className='botao' type="submit" value="Cadastro"></input>
                    </form>
               </div>
          </C.singContainer>     
     );
}