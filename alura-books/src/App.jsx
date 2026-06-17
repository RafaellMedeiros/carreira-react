import styled from 'styled-components'
import Search from './components/Search'
import Footer from './components/Footer'

const AppContainer = styled.div`
  padding: 1% 10%;
`

function App() {

  return (
    <AppContainer>
      <Search />
      <Footer />
    </AppContainer>
  )
}

export default App
