import * as C from './style';
import {HeaderRegistros} from '../../components/HeaderRegistros';
import {Search} from '../../components/Search';
import {NewProduct} from '../../components/NewProduct';

export const NewStorage = () => {
     return (
          <C.Container>
               <HeaderRegistros/>
               <Search/>
               <NewProduct/>
          </C.Container>
     );
}