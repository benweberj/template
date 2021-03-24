import React from 'react'
import ReactDOM from 'react-dom'

import { ThemeProvider as MUIThemeProvider } from '@material-ui/core/styles'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import { theme as baseTheme, GlobalStyles } from './styles'

import { Div } from './components/index'

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
          <Div w={100} h={200} bg='red' />
          <div style={{ width: 100, height: 100, background: theme.complement }} onClick={this.toggleMode} />
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
