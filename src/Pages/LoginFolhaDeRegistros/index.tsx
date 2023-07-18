import * as C from './style';
import { HeaderRegistros } from '../../components/HeaderRegistros';
import Search from '../../assets/images/search.png';
export const LoginFolhaDeRegistros = () => {
     return (
          <C.Container>
               <HeaderRegistros/>
               <C.ContainerRegisters>
                    <C.ProductFilter>
                         <h3>PESQUISA</h3><hr/>
                         <form >
                              <label>
                                   <h4>Id:</h4>
                                   <input type="number" />
                              </label>
                              <label>
                                   <h4>Data:</h4>
                                   <input type="date" />
                              </label>
                              <label>
                                   <h4>Hora:</h4>
                                   <input type="number" />
                              </label>
                              <label>
                                   <h4>Entregador:</h4>
                                   <input type="text" />
                              </label>
                              <label className='search-button'>
                                   <button type="submit">Buscar <img className='lupa' src={Search} alt="Lupa de busca" /></button>
                              </label>
                         </form>
                    </C.ProductFilter> 
                  <C.ProductList>Lista de produtos</C.ProductList>
                  <C.HandleProduct>Manipulação de produtos</C.HandleProduct>
               </C.ContainerRegisters>
          </C.Container>
     );
}