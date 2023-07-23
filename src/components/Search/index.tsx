import * as C from './style';
import search from '../../assets/images/search.svg';

export const Search = ()=>{
     return(
          <C.Container>
                         <form >
                              <label>
                                   <p>ID:<img className='lupa' src={search} alt="Lupa de busca" /></p>
                                   <input type="text" placeholder='Informe o ID do produto' />
                              </label>
                              <label>
                                   <button type="submit" >Buscar</button>
                              </label>
                         </form>
          </C.Container>
     );
}