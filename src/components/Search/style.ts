import styled from 'styled-components';

export const Container = styled.div`
     display: flex;
     flex-direction: column;
     background-color: var(--color-back-header);
     width: 100%;
     justify-content: center;
     align-items: center;
     height: 15vh;

     form{
          display: flex;
          flex-direction: row;
     }

     label{
          display: flex;
          flex-direction: row;
          
     }

     label * {
          margin: 5px;
     }

     input{
          border-radius: 5px;
          width: 50vh;
     }

     button{
          background-color: var(--color-button);
          color: var(--color-font-header);
          border-radius: 5px;
          text-align: center;
          display: flex;
          padding: 0.3em;
     }

     .lupa{
          height: 16px;
     }

     p{
          color: var(--color-font-header);
          font-size:16px;
          padding-top: 0;
     }
`;
