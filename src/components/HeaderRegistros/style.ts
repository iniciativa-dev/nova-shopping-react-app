import styled from 'styled-components';

export const Container = styled.div`
  padding: 0;
  margin: 0;
`;

export const HeaderTop = styled.div`
    background-color: var(--color-back-header);
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const HeaderLeft = styled.div`
    margin: 3em;
    display: flex;

  p{
    color: var(--color-font-header);
  }

  img {
    margin-right: 2vh;
    background-color: var(--color-font-header);
    height: 10vh;
  }

  div img {
    border-radius: 50px;
  }
`;


export const HeaderButton = styled.h1`
  text-align: center;
  font-size: 20;
  color: var(--color-font-header);
  background-color: var(--color-secont-back-header);
`;


export const HeaderRight = styled.div`
  margin: 3em;


  img{
    width: 5vh;
    height: 5vh;
  }
  .link{
    display: flex;
    text-decoration: none;
    color: var(--color-font-header);
  }
`;
