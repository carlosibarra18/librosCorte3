import { useState } from "react";
import { Libro } from "../../modelos/Libro";
import { ARREGLO_LIBROS } from "../../mocks/Libro_mocks";
import { ARREGLO_LIBRO_GENEROS } from "../../utilidades/dominios/DomGenero";

export const LibroListar = () => {
  const [arrLibros] = useState<Libro[]>(ARREGLO_LIBROS);
  const obtenerNombre = (valor: string)=>{
    for(const objGen of ARREGLO_LIBRO_GENEROS){
      if (objGen.codGenero == valor) {
        return objGen.nombreGenero
      }
    }
  }

  return (
    <>
      <div className="pt-4 d-flex justify-content-center">
        <div className="col-md-10">
          <table className="table table-primary">
            <thead>
              <tr>
                <th style={{width: "5%"}}>No.</th>
                <th style={{width: "35%"}}>Título de libro</th>
                <th style={{width: "30%"}}>Autor</th>
                <th style={{width: "15%"}}>Genero</th>
                <th style={{width: "15%"}}>imagen</th>
              </tr>
            </thead>
            <tbody>
              {arrLibros.map((milib: Libro)=>(
                <tr>
                  <th scope="row" className="text-center">{milib.codLibro}</th>
                <td>{milib.tituloLibro}</td>
                <td>{milib.autorLibro}</td>
                <td>{obtenerNombre(milib.codGeneroLibro)}</td>
                <td className="text-center">{milib.imagenLibro}</td>
              </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
