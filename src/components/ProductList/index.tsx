import { useState } from 'react';
import * as C from './style';
import {ListItem} from '../../types/ListItem'
import {ProductItem} from '../ProductItem';
import config from '../../assets/images/config.svg'

export const ProductList = () =>{
     const[list, setList] = useState<ListItem[]>([
          {id:1, date:'2023-04-03', amount:12, hour:'12:00',status:'Enviado',deliveryman:'João'},
          {id:2, date:'2023-04-04', amount:15, hour:'13:00',status:'Atrasado',deliveryman:'Matheus'},
          {id:3, date:'2023-04-05', amount:16, hour:'14:00',status:'Enviado',deliveryman:'Lucas'},
          {id:4, date:'2023-04-06', amount:55, hour:'15:00',status:'Enviado',deliveryman:'Thiago'},
          {id:5, date:'2023-07-22', amount:50, hour:'17:00',status:'Preparo',deliveryman:'Pedro'}
        ]);
     return (
          <C.Container>
               <table>
                    <tr>
                         <th>Data</th>
                         <th>Hora</th>
                         <th>ID Produto</th>
                         <th>Qtd</th>
                         <th>Status</th>
                         <th>Entregador</th>
                         <th><img src={config} alt="Configurações" /></th>
                    </tr>
                         {list.map((item, index)=>(
                    <ProductItem key={index} item={item}/>
                    ))}
               </table>
          </C.Container>
     );
}