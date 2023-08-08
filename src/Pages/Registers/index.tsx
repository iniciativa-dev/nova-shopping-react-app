import * as C from './style';
import { HeaderRegistros } from '../../components/HeaderRegistros';
import { ProductList } from '../../components/ProductList';
import {Search} from '../../components/Search';
import { HandleProduct } from '../../components/HandleProduct';

export const Registers = () => {
     return (
          <C.Container>
               <HeaderRegistros/>
               <Search/>
               <ProductList/>
               <HandleProduct/>
          </C.Container>
     );
}