import React from 'react'
import ReactDOM from 'react-dom'

import { ThemeProvider as MUIThemeProvider } from '@material-ui/core/styles'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import { theme as baseTheme, GlobalStyles } from './styles'

import Sketches from './Sketches'
import { Div, AnimatedSVG } from './components/index'

class App extends React.Component {
  state = {
    theme: baseTheme.dark,
  }

  toggleMode = () => this.setState({ theme: baseTheme[this.state.theme.mode === 'dark' ? 'light' : 'dark'] })

  render() {
    const { theme } = this.state
    return (
      <MUIThemeProvider theme={theme}> 
        <StyledThemeProvider theme={theme}>
          <GlobalStyles />

          {/* SHIT GOES HERE */}

          <Sketches />
          {/* <AnimatedSVG on={this.state.on} />
          <button onClick={_ => this.setState({ on: !this.state.on })}>toggle SVG</button>

          <AnimatedSVG on={this.state.on2} />
          <button onClick={_ => this.setState({ on2: !this.state.on2 })}>toggle SVG</button> */}
          {/* END OF SHIT */}

        </StyledThemeProvider>
      </MUIThemeProvider>
      
    )
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
