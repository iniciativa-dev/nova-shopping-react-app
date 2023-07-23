import * as C from './style';
import { HeaderRegistros } from '../../components/HeaderRegistros';
import { ProductList } from '../../components/ProductList';
import {Search} from '../../components/Search';

export const LoginFolhaDeRegistros = () => {
     return (
          <C.Container>
               <HeaderRegistros/>
               <Search/>
               <ProductList/>
               <C.HandleProduct>Manipulação de produtos</C.HandleProduct>
          </C.Container>
     );
}