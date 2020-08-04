import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/Table.css";

export default class Table extends Component {
    render() {
        return (
            <div>
                <h1>Crud</h1>
                <table class="tabler">
                    <tbody>
                    <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Savings</th>
                    </tr>
                    <tr>
                        <td>Peter</td>
                        <td>Griffin</td>
                        <td>$100</td>
                    </tr>
                    <tr>
                        <td>Lois</td>
                        <td>Griffin</td>
                        <td>$150</td>
                    </tr>
                    <tr>
                        <td>Joe</td>
                        <td>Swanson</td>
                        <td>$300</td>
                    </tr>
                    </tbody>
                    </table>
            </div>            
        )
    }
}