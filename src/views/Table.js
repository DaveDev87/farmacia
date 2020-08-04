import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/Table.css";

export default class Table extends Component {
    render() {
        return (
            <div>
                <form class="tabler">
                    <h2>Agregue un producto</h2>
                    <input required type="text" placeholder="Medicamento"></input>
                    <br></br>
                    <input type="text" placeholder="Image"></input>
                    <br></br>
                    <input required type="text" placeholder="Descripción"></input>
                    <br></br>
                    <input required type="text" placeholder="Dosis"></input>
                    <br></br>
                    <button>Agregar</button>
                </form>
                <table class="tabler">
                    <tbody>
                    <tr>
                    <th>Medicamento</th>
                    <th>Imagen</th>
                    <th>Descripcion</th>
                    <th>Dosis</th>
                    </tr>
                    <tr>
                        <td>Nitrato de Mitrozon</td>
                        <td>url</td>
                        <td>descripcion</td>
                        <td>50mg</td>
                    </tr>
                    <tr>
                        <td>Crotolamo</td>
                        <td>url</td>
                        <td>descripcion</td>
                        <td>50mg</td>
                    </tr>
                    <tr>
                        <td>Pendijotromicina</td>
                        <td>url</td>
                        <td>descripcion</td>
                        <td>50mg</td>
                    </tr>
                    </tbody>
                    </table>
            </div>            
        )
    }
}