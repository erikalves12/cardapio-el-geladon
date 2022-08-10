
import { paletas } from "../mocks/paletas.js";
import "../components/PaletaLista.css"

  function PaletaLista() {
    return (
      <div className="PaletaLista">
         {paletas.map((paleta, index) => (
        <div className="PaletaListaItem" key={`PaletaListaItem-${index}`} >
          <div>
            <div className="PaletaListaItem__titulo">
              {paleta.titulo}
                         </div>
            <div className="PaletaListaItem__preco">{paleta.preco.toFixed(2)}</div>
            <div className="PaletaListaItem__descricao">
              {paleta.descricao}
              Quam vulputate dignissim suspendisse in est ante in nibh mauris.
            </div>
            <div className="PaletaListaItem__acoes Acoes">
              <button className="Acoes__adicionar Acoes__adicionar--preencher">
                adicionar
              </button>
            </div>
          </div>
          <img
            className="PaletaListaItem__foto"
            src={paleta.foto}
            alt={`Paleta de ${paleta.sabor}`}
          />
        </div>
         ))}
      </div>
    );
  }
  
  export default PaletaLista;