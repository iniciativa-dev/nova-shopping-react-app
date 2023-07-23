import * as C from './style';
import sair from '../../assets/images/exit.png'
import user from '../../assets/images/identification-badge.svg'
import { Link } from 'react-router-dom';
export const HeaderRegistros = () => {
     return (
          <C.Container>
               <C.HeaderTop>
                    <C.HeaderLeft>
                         <div><img src={user} alt="Foto do usuário" /></div>
                         <div >
                         <p>Usuário</p>
                         <p>Função:</p>
                         </div>
                    </C.HeaderLeft>
                    <C.HeaderRight>
                         <Link className='link' to={'/'}>
                              <img src={sair} alt="Sair" />
                              <h2>Sair</h2>
                         </Link>
                    </C.HeaderRight>
               </C.HeaderTop>
               <C.HeaderButton>
                    <h2>Painel de Pedidos</h2>
               </C.HeaderButton>

          </C.Container>
     );
}