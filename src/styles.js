import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  html { height: 100% }
  
  body {
    background: ${props => props.theme.base};
    transition: background .5s ease;
    height: 100%;
    font-size: 15px;
  }

  * {
    margin: 0;
    padding: 0;
    font-family: 'Open Sans', sans-serif;
    box-sizing: border-box;
  }

  .parallax-effect { transform-style: preserve-3d }

  // .glare-wrapper { border-radius: 20px; }

  @keyframes pulsedark {
    0% { box-shadow: 0 0 0 0 rgba(255, 255, 255, .15) }
    100% { box-shadow: 0 0 0 60px rgba(255, 255, 255, 0) }
  }

  @keyframes pulselight {
    0% { box-shadow: 0 0 0 0 rgba(0, 0, 0, .05) }
    100% { box-shadow: 0 0 0 60px rgba(0, 0, 0, 0) }
  }
`

const darkColor = '#111111'
const lightColor = '#ffffff'

const baseStyles = {
  primary: '#60b389',
  accent: '#97cfb3',

  light: 300,
  regular: 400,
  bold: 600,
  corners: 10,
  cornersSm: 4,
}

export const theme = {
  dark: {
    mode: 'dark',
    base: darkColor,
    complement: lightColor,
    ...baseStyles
  },

  light: {
    mode: 'light',
    base: lightColor,
    complement: darkColor,
    ...baseStyles
  }
}