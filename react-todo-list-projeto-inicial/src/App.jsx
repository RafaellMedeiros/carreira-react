import { useState } from "react"
import { ChecklistsWrapper } from "./components/ChecklistsWrapper"
import { Container } from "./components/Container"
import { Dialog } from "./components/Dialog"
import { FabButton } from "./components/FabButton"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { Heading } from "./components/Heading"
import { IconPlus, IconSchool } from "./components/icons"
import { SubHeading } from "./components/SubHeading"
import { ToDoItem } from "./components/ToDoItem"
import { ToDoList } from "./components/ToDoList"
import { TextInput } from "./components/TextInput"
import { TodoFrom } from "./components/TodoForn"

function App() {

  const [todos, setTodos] = useState([
    {
      id: 1,
      description: "JSX e componentes",
      completed: false,
      createdAt: "2022-10-31"
    },
    {
      id: 2,
      description: "Rotas dinâmicas",
      completed: true,
      createdAt: "2022-10-31"
    }
  ])

  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const toggleDialog = () => {
    setIsDialogOpen(!isDialogOpen)
  }

  const addTodo = (formData) => {


    setTodos(prevState => {
      const newTodo = {
        id: prevState.length + 1,
        description: formData.get('description'),
        completed: false,
        createdAt: new Date().toISOString()
      }
      return [...prevState, newTodo]
      
    })


    toggleDialog()
  }

  return (
    <main>
      <Container>
        <Header>
          <Heading>
            <IconSchool /> Plano de estudos
          </Heading>
        </Header>
        <ChecklistsWrapper>
          <SubHeading>Para estudar</SubHeading>
          <ToDoList>
            {todos.filter((t) => !t.completed).map(function (t) {
              return <ToDoItem key={t.id} item={t} />
            })}
          </ToDoList>
          <SubHeading>Concluído</SubHeading>
          <ToDoList>
            {todos.filter((t) => t.completed).map(function (t) {
              return <ToDoItem key={t.id} item={t} />
            })}
          </ToDoList>
          <Footer>
            <FabButton onClick={toggleDialog}>
              <IconPlus />
            </FabButton>
          </Footer>
        </ChecklistsWrapper>
      </Container>
      <Dialog isOpen={isDialogOpen} onClose={toggleDialog}>
        <TodoFrom onSubmit={addTodo} />
      </Dialog>
    </main>
  )
}

export default App
