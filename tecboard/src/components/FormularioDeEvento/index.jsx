import { Label } from "../Label";
import { TituloFormulario } from "../TituloFormulario";

export function FormularioDeEvento() {
  return (
    <form action="/">
      <TituloFormulario>Preencha para criar um evento:</TituloFormulario>
      <br />
      <fieldset>
        <Label htmlFor="name">Qual o nome do evento?</Label>
        <input type="text" id="name" name="name" />
        <Label htmlFor="date">Data do evento</Label>
        <input type="date" id="date" name="date" />
        <Label htmlFor="tema">Tema do evento</Label>
        <input type="text" id="tema" name="tema" />

        <br />
        <input type="submit" value="Criar Evento" />
      </fieldset>
    </form>
  );
}
