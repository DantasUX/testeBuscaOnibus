import { useState } from 'react';
import './App.css';


function App() {

  const lista =[
    ["key_abadiania", "Abadiânia", "GO", "True"],
    ["key_belem", "Belém", "PA", "False"],
    ["key_belo-horizonte", "Belo Horizonte", "MG", "True"],
    ["key_belo-horizonte", "Campinas", "SP", "True"],
    ["key_diamantina", "Diamantina", "MG", "True"],
    ["key_foz-do-iguacu", "Foz do Iguaçu", "PR", "True"],
    ["key_fraiburgo", "Fraiburgo", "SC", "True"],
    ["key_franca", "Franca", "SP", "False"],
    ["key_goiania", "Goiânia", "GO", "True"],
    ["key_novo-hamburgo", "Novo Hamburgo", "RS", "False"],
    ["key_rio-de-janeiro", "Rio de Janeiro", "RJ", "True"],
    ["key_sao-paulo", "São Paulo", "SP", "True"],
    ["key_sao-sebastiao", "São Sebastião", "RS", "False"],
    ["key_volta-redonda", "Volta Redonda", "RJ", "True"]
  ]

  const [busca, setBusca] = useState('');
  const [coluna, setColuna] = useState(0);
  const itensFiltrados = lista.filter((item)=>  item[coluna].toUpperCase().startsWith(busca.toUpperCase()));

  const filtrar = (ev) =>{
    setBusca(ev.target.value);
    console.log(ev.target.id);


    switch(ev.target.id) {
      case 'key':
        return setColuna(0);
      case 'name':
        return setColuna(1);
      case 'state':
        return setColuna(2);
      case 'visivel':
        return setColuna(3);
      default:
        return 'foo';
    };


  }




  return (
    <>
      <nav className="bo-navbar navbar navbar-default navbar-static-top" role="navigation">
        <div className="navbar-header">
          <a className="navbar-brand" href="/cms">CMS</a>
        </div>
      </nav>

      <div className="bo-container-fixed container-fixed">
        <div className="row">
          <div className="col-md-12">
            <table id="bo_city_handler_table" className="table table-hover table-striped tablesorter">
              <thead>
                <tr>
                  <th>Key</th>
                  <th>Nome</th>
                  <th>State</th>
                  <th>Visível</th>
                </tr>
              </thead>
              <tbody>
                <tr id="filtros">
                  <td>
                  <div>
                      <input type="text" className="form-control" id="key"
                        placeholder="Filtra pelo Key" onChange={filtrar}/>
                    </div>
                  </td>
                  <td>
                    <div>
                      <input type="text" className="form-control" id="name"
                        placeholder="Filtra pelo Nome" onChange={filtrar}/>
                    </div>
                  </td>
                  <td>
                  <div>
                      <input type="text" className="form-control" id="state"
                        placeholder="Filtra pelo State" onChange={filtrar}/>
                    </div>
                  </td>
                  <td>
                    <div>
                      <input type="text" className="form-control" id="visivel"
                        placeholder="Visível?" onChange={filtrar}/>
                    </div>
                  </td>
                </tr>


                {itensFiltrados.map((item, index)=>
                    <tr key={item.id}>
                      <td>{item[0]}</td>
                      <td>{item[1]}</td>
                      <td>{item[2]}</td>
                      <td className={ item[3]==="True" ? 'bo_visible_true' : 'bo_visible_false'}>{item[3]}</td>
                    </tr>
                    )
                  }

              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
