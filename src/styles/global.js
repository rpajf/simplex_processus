import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

  * {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
  }

  *:focus {
  outline: 0;
  /* chrome behavior when mouse is over */
  }

  html,
  body,
  #root {
    height: 100%;
    background: #161622;

    /* all the container not just the content*/
  }

  body {
    -webkit-font-smoothing: antisaliased;
  }

  body, input, button {
    font: 14px 'Roboto', sans-serif;
  }

  a {
    text-decoration: none;
  }
  ul {
    list-style:none;
  }
  button {
    cursor: pointer;
  }
`;
