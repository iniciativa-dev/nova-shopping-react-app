import * as C from './style';
import ViewMode from '../../assets/images/view-mode-dark.svg';
import Logo from '../../assets/images/logo.png';
import { Link } from 'react-router-dom';


export const HandleProduct = () => {
     return(
          <C.Container>
               <C.Actions>
                    <Link to='/' className='newOrder'>Novo Pedido</Link>
                    <Link to='/newstorage' className='newStorage'>Novo Estoque</Link>                    
               </C.Actions>

               <C.FooterProduct>
                    <C.FooterLeft>
                         <img src={ViewMode} alt="Alternar tema" />
                    </C.FooterLeft>

                    <C.FooterCenter>
                         <Link to='/'>Termos de uso</Link>
                         <Link to='/'>POWERED BY iniciativa.DEV</Link>
                    </C.FooterCenter>

                    <C.FooterRight>
                         <img src={Logo} alt="Logo nova shopping" />
                    </C.FooterRight>
               </C.FooterProduct>

          </C.Container>
     );
}