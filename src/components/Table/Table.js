import './Table.css';
import ApiCall from '../../API/index.js';
import React, { useEffect, useState } from "react";
import Edit from "../../images/edit.png"
import Minus from "../../images/minus.png"
import Plus from "../../images/plus.png"
import AddData from '../AddData/AddData';
import { Link } from 'react-router-dom';


function Table() {

    const [data, setData] = useState([]);
    const [clients, setClients] = useState([]);
    let [newClients, setNewClients] = useState(null)
    const [refresh, setRefresh] = useState(false);

     newClients = async () => {
        try {
            const res = await ApiCall.get(`/clientes`);
            setClients(res.data.data);
            setNewClients(res.data.data);
        } catch (err) {
            console.error('erro');
        }
    };

    useEffect(() => {
        newClients();
    }, [refresh]);


    return (
        <div className="container">
            <table className="data-table">
                <thead>
                    <tr>
                        <th>
                            <Link to="/add_client">
                                <img src={Plus}></img>
                            </Link>
                        </th>
                        <th>Nome</th>
                        <th>Endereço</th>
                        <th>Cidade</th>
                        <th>UF</th>
                        <th>Telefone</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {clients.map((item) => (
                        <tr key={item.TECL_ID}>
                            <th id="bg-none" className="border-left">
                                <img src={Minus} className="Minus"></img>
                                <img src={Edit}></img>
                            </th>
                            <td>{item.TECL_NOME}</td>
                            <td>{item.TECL_ENDERECO}</td>
                            <td>{item.TECL_CIDADE}</td>
                            <td>{item.TECL_UF}</td>
                            <td>{item.TECL_TELEFONE}</td>
                            <td className="border-right">fulano1@fulano1.com.br</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Table;
