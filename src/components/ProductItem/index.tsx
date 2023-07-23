import * as C from './style';
import lapis from '../../assets/images/edit.svg';

import { ListItem } from '../../types/ListItem';
import { Link } from 'react-router-dom';
type Props = {
     item: ListItem;
}

export const ProductItem = ({item}:Props) =>{
     return (
          <C.Container>
               <tr>
                    <td>{item.date}</td>
                    <td>{item.hour}</td>
                    <td>{item.id}</td>
                    <td>{item.amount}</td>
                    <td>{item.status}</td>
                    <td>{item.deliveryman}</td>
                    <td><Link to='/'><img src={lapis} alt="Editar" /></Link></td>
               </tr>
          </C.Container>
     );
}