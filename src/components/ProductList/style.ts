import styled from 'styled-components';

export const Container = styled.div`

     th{
          background-color: var(--color-back-table-header);
     }
     table, th, td {
     border: 1px solid black;
     border-collapse: collapse;
     justify-items: center;
     text-align: center;
     }

     table{
          width: 100%;
     }

     tr{
     display: grid;
     grid-template-columns: repeat(7,1fr);
     }
`;
