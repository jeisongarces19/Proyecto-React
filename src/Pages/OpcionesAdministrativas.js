import React from 'react';
//import Constantes from "../Constantes";


import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';


//Estas dos son para la otra forma
//import styled from 'styled-components';
//import { useTable } from 'react-table';

import swal from 'sweetalert';

import '../Styles/login.css';

import '../Styles/opcionesadministrativas.css';




/*

const Styles = styled.div`
  padding: 1rem;

  table {
    border-spacing: 0;
    border: 1px solid black;
    color: black;


    tr {
      :last-child {
        td {
          border-bottom: 0;

        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }
    }
  }
`
var data2=[
  {
    "admin": 1, 
    "email": "santiflo17@gmail.com", 
    "id": 1, 
    "name": "Santiago"
  }, 
  {
    "admin": 0, 
    "email": "garcesjeison17@gmail.com", 
    "id": 3, 
    "name": "jeison"
  }
]


function Table({ columns, data }) {
  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
  })

  // Render the UI for your table
  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}



function App2(props) {

    const columns = React.useMemo(() => 
        [{
          Header: 'Datos Personales',
          columns: [
            {
              Header: 'ID',
              accessor: 'id',
            },
            {
              Header: 'Nombre',
              accessor: 'name',
            },
            {
              Header: 'Correo',
              accessor: 'email',
            },
        ],},
        {
          Header: 'Administrador',
          columns: [
            {
              Header: 'Tipo 0 y 1',
              accessor: 'admin',
            },              
          ],
        },        
        
        ],
        []
      )

    var data3=data2;   

    //console.log("lo que hay en:",props.todo)

    return (
                    
        <Styles>            
            <Table columns={columns} data={props.todo} />
        </Styles>
        
    )
}

*/


// ayuda: https://codesandbox.io/s/1rmzfw?file=/demo.tsx:429-4237

interface Column {
  id: 'id' | 'name' | 'email' | 'admin';
  label: string;
  align?: 'right';
}

const columns: Column[] = [
  { id: 'id', label: 'ID'},
  { id: 'name', label: 'Nombre'},
  { id: 'email',label: 'Correo'},
  { id: 'admin', label: 'Tipo( 0 o 1)',  align: 'right'},
];

function ColumnGroupingTable(props) {
  const rows=props.todo
  //console.log("llego",rows)
  //const rows = [{id: 'India', name: 'IN', email: 1324171354, admin: 3287263}];

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '100%' }} >
      <TableContainer sx={{ maxHeight: 450 }} >
        <Table stickyHeader aria-label="sticky table" >
          <TableHead>
            <TableRow>

              <TableCell align="center" colSpan={3} >
                Datos Personales
              </TableCell>

              <TableCell align="center" colSpan={1}>
                Administrador:
              </TableCell>

            </TableRow>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ top: 57, minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>

      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}

class OpcionesAdministrativas extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          data: {
            "id": "", 
            "Usuarios": [],
          },
        };

        this.componentDidMount = this.componentDidMount.bind(this);
        this.manejarCambio = this.manejarCambio.bind(this);        
        this.eliminarUsuario = this.eliminarUsuario.bind(this);
        this.cambiarTipo = this.cambiarTipo.bind(this);
    }

    async componentDidMount() {

        var respuesta = await fetch(`https://proyecto-meca-cali.herokuapp.com/AdminUsers`, 
        {
            method: "GET",    
        });
              
        
        var existe;
        var statusr=respuesta.status;  

        if (statusr===200) {
            existe= await respuesta.json(); 
            
            this.setState({
                data: {
                    id:  this.state.data.id, 
                    Usuarios:  existe,                            
                }
            });
        }
    }

    render() {
        return (

            <div className="columns central">

              <div className="column"></div>

                <div className="column" >

                  <div className="cardTabla">
                    <center>

                      <h1 className="opcionesletra">OPCIONES ADMINISTRATIVAS!</h1>            
                      
                      <form className="">                         

                          
                          <div className="form-group">                                
                            <input autoFocus required placeholder="Id: Modificar/Eliminar" type="text" id="id" className="FondoInput" onChange={this.manejarCambio} value={this.state.data.id} >
                            </input>
                          </div>

                          <div className="form-group">
                              <button className="button is-success mt-2" onClick={this.cambiarTipo}>
                                Cambiar tipo
                              </button>
                          </div>
                        
                          <div className="form-group">
                              <button className="button is-success mt-2" onClick={this.eliminarUsuario}>
                                Eliminar Usuario
                              </button>
                          </div>

                          
                          <br></br>

                          {/*<App2 todo={this.state.data.Usuarios}></App2>*/}

                          {this.state.data.Usuarios.length===0 ?(

                            <h3>Cargando...</h3>
                            ):(
                              
                              <ColumnGroupingTable todo={this.state.data.Usuarios}></ColumnGroupingTable>                         
                            )
                          }  


                          {/*<div className="form-group">
                              <button className="button is-success mt-2" onClick={this.componentDidMount}>
                                Mostrar Usuarios
                              </button>
                          </div>*/}
                      
                      </form>
                    
                    </center>
                  </div>
                </div>
                
                <div className="column" >
                   
                </div>

            </div>
            
        );
    }

    async cambiarTipo(evento){

        evento.preventDefault();
        
        const continuar = () =>{
            swal({
              title: "¡Actualizar tipo!",
              text: "se actualizo el tipo de usuario",
              icon: "success",                        
            }).then(function() {
                window.location = "/OpcionesAdministrativas";                            
            });
        }

        const detener = () =>{
            swal({
              title: "Surgio un error",
              text: "El usuario no existe",
              icon: "error",
              timer: 6000,
            });
        }    

        //const cargaUtil = JSON.stringify(this.state.data.id);

        var cargaUtil= JSON.stringify(this.state.data)
        



        //console.log("carga util",cargaUtil);   

        var respuesta = await fetch(`https://proyecto-meca-cali.herokuapp.com/Users/Uptdate/admin`, 
        {
            method: "PUT",            
            body: cargaUtil,   
        });        

        
        //console.log("respuesta de todo",respuesta) 
                
        var statusr=respuesta.status;

        //console.log("respuesta de todo",statusr) 

          
        if (statusr===200) {
            
            this.setState({
                data: {
                    id: "", 
                    Usuarios: this.state.data.Usuarios,                               
                }
            });            
            continuar(); 
        } else {
            detener();
        }
    }




    async eliminarUsuario(evento){
        evento.preventDefault();
        
        const continuar = () =>{
            swal({
              title: "Eliminar!",
              text: "Deseas Eliminar Usuario",
              icon: "success",                        
            }).then(function() {
                window.location = "/OpcionesAdministrativas";                            
            });
        }

        const detener = () =>{
            swal({
              title: "Error",
              text: "Surgio un error",
              icon: "error",
              timer: 6000,
            });
        }    
        

        var respuesta = await fetch(`https://proyecto-meca-cali.herokuapp.com/Users/Delete/`+this.state.data.id, 
        {
            method: "DELETE",    
        });

        console.log("respuesta de todo",respuesta) 
                
        var statusr=respuesta.status;

          
        if (statusr===200) {
            
            this.setState({
                data: {
                    id: "", 
                    Usuarios: this.state.data.Usuarios,

                }
            });            
            continuar(); 
        } else {
            detener();
        }
    }


    manejarCambio(evento) {

        const clave = evento.target.id;
        let valor = evento.target.value;
        this.setState(state => {
            const dataActualizado = state.data;            
            dataActualizado[clave] = valor;
            return {
                data: dataActualizado,
            }
        });
    }
    
}

export default OpcionesAdministrativas;

