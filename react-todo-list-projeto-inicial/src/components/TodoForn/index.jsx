import { TextInput } from '../TextInput';
import { Button } from "../Button";
import './todo-form.styles.css'

export function TodoFrom({onSubmit}) {

    function handleSubmit(event) {
        event.preventDefault();
        if (onSubmit) {
            onSubmit(new FormData(event.target));
        }
    }

    return (
        <form onSubmit={handleSubmit} className="todo-form" >
            <TextInput 
                placeholder="Digite o item que deseja adicionar"
                name="description"
                required 
            />
            <Button>Salvar item</Button>
        </form>
    )
}