import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const MainStyles = createGlobalStyle`


html {
  margin: 0;
  overscroll-behavior: none;
  
}

 body {
  height: 100%;
  margin: 0;
  background-color: ${({ theme }) => theme.colorBcg};;
  font-family: 'Play', sans-serif;
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
 
}

code {
  font-family: 'Play', sans-serif;

}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}

`;
