import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;



  .login-box{
    background-color: black;
    height: 15em;
    width: 45em;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10em;
  }

  img {
    padding: 2em;
    height: 100px;
  }

`;




export const Login = styled.div`
  width: 350px;
  color: white;

  input[type="email"]{
    width: 75%;
  }
  input[type="password"]{
    width: 75%;
  }

  .login-title{
    display: flex;
    justify-content: center;
  }

  .login-form{
    align-items: center;
    margin: 1em;
  }

  .login-input{
    width: 100%;
    margin: 1em;
  }

  .login-quite{
    display: flex;
    justify-content: right;
    margin: 0.5em 1em;
  }

  .login-botton{
    display: flex;
    justify-content: space-between;
    margin: 0.5em 1em;
  }

  .login-botton a {
    text-decoration: none;
  }
  
  `;
