import styled from 'styled-components';

export const Container = styled.div`

  *{
    margin: 0;
  }
`;


export const ContainerRegisters = styled.div`
    background-color: #ccc;
    height: 72.8vh;
    display: flex;
    justify-content: space-between;
    padding: 5vh;
`;

export const ProductFilter = styled.div`


input{
  width: 100%;
  border-radius: 5px;
}

button{
  background-color: var(--color-button);
  color: var(--color-header);
  border-radius: 5px;
  text-align: center;
  display: flex;
  padding: 0.3em;
}
.lupa{
  height: 2vh;
}
 




`;

export const ProductList = styled.div`
  background-color: #fff;
  width: 100vh;
`;

export const HandleProduct = styled.div`

`;
