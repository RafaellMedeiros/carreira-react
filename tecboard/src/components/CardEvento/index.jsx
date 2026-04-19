import './styles.css';

export function CardEvento({evento}) {
    return (
        <div className="card-evento">
            <img src={evento.imagem} alt={evento.titulo} />
            <div className="conteudo">
                <p className="tema">
                    {evento.tema.name}
                </p>
                <p className="data">
                    {evento.data.toLocaleDateString('pt-BR')}
                </p>
                <h4 className="titulo">
                    {evento.titulo}
                </h4>
                <p className="descricao">
                    {evento.descricao}
                </p>
            </div>
        </div>
    )
}