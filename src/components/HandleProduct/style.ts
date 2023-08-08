import styled from 'styled-components';

export const Container = styled.div`
  background-color: var(--color-back-footer);
`;


export const Actions = styled.div`
     display: flex;
     justify-content: center;
     a{
          margin: 1em;
          text-decoration: none;
          color: var(--color-font-header);

          border-radius: 5px;
          padding: 0.5em 2em;
     }

     .newOrder{
          background-color: var(--color-button);
     }

     .newStorage{
         background-color:var(--color-button-secont);
     }
`;

export const FooterProduct = styled.div`
     display: flex;
     justify-content: space-between;

     div{
          margin: 20px;
     }
`;


export const FooterLeft = styled.div`

`;

export const FooterCenter = styled.div`
     display: flex;
     flex-direction: column;
     align-items: center;
     

     a{
          //Link
          text-decoration: none;
          color: var(--color-font-header);
     }

     
`;

export const FooterRight = styled.div`

`;