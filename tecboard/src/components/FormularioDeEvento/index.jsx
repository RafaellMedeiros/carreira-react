import { Label } from "../Label";
import { TituloFormulario } from "../TituloFormulario";
import "./styles.css";

export function FormularioDeEvento({ temas, adicionaEvento }) {



  function recebeEvento(formData) {
    const temaId = Number(formData.get('tema'));

    const evento = {
      imagem: formData.get('image'),
      titulo: formData.get('name'),
      tema: temas.find(tema => tema.id === temaId),
      data: new Date(formData.get('date')),
      descricao: formData.get('description')
    }

    adicionaEvento(evento);
  }


  return (
    <form action={recebeEvento}>
      <TituloFormulario>Preencha para criar um evento:</TituloFormulario>
      <br />
      <fieldset>
        <Label htmlFor="name">Qual o nome do evento?</Label>
        <input
          className="campo-input"
          placeholder="Digite o nome do evento"
          type="text"
          id="name"
          name="name"
        />
        <Label htmlFor="image">Imagem da capa?</Label>
        <input
          className="campo-input"
          placeholder="http://..."
          type="text"
          id="image"
          name="image"
        />
        <Label htmlFor="description">Qual a descrição?</Label>
        <input
          className="campo-input"
          placeholder="Digite a descrição do evento"
          type="text"
          id="description"
          name="description"
        />
        <Label htmlFor="date">Data do evento</Label>
        <input className="campo-input" type="date" id="date" name="date" />
        <Label htmlFor="tema">Tema do evento</Label>
        <select className="campo-select" id="tema" name="tema" defaultValue="">
          <option className="opcoes" value="" disabled>Selecione um tema</option>
          {temas.map((tema) => (
            <option key={tema.id} className="opcoes" value={tema.id}>
              {tema.name}
            </option>
          ))}
        </select>
        <button type="submit" className="campo-botao">Criar evento</button>
      </fieldset>
    </form>
  );
}
