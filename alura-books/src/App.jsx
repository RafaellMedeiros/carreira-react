import styled from 'styled-components'
import Search from './components/Search'

const AppContainer = styled.div`
  padding: 1% 10%;
`

function App() {

  return (
    <AppContainer>
      <Search />
    </AppContainer>
  )
}

export default App
