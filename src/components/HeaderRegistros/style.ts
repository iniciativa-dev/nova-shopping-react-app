import styled from 'styled-components';

export const Container = styled.div`
  height: 12vh;
  padding: 1em;
  background-color: #000;
  margin: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  
`;

export const HeaderLeft = styled.div`
    margin: 2em;
  p{
    color: var(--color-header);
  }
  
`;


export const HeaderCenter = styled.h1`
  color: #fff;
  
`;


export const HeaderRight = styled.div`
  margin: 2em;
  color: #fff;
`;
