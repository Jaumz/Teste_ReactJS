import './AddData.css';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import ApiCall from '../../API';
import Header from '../Header/Header';

const AddData = () => {

    const { register } = useForm();
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [UF, setUF] = useState("");
    const [phone, setPhone] = useState("");

    const createClient = async (e) => {
        e.preventDefault();
        const client = { 
            TECL_NOME: name, 
            TECL_ENDERECO: address, 
            TECL_CIDADE: city, 
            TECL_UF: UF, TECL_TELEFONE: phone };

        try {
            await ApiCall.post("/cliente", client)
        } catch (error) {
            console.log(error)
        }

         navigate('/home');
    };

    // const BlankInfo = () => {
    // if (name !== "" || address !== "" || city !== "" || state !== "" || cell !== "") {
    /*não completa a ação*/
    //  }
    // }
    return (
        <div>
            <Header />
            <div className='container'>
                <div className="window">
                    <form className="form_container" onSubmit={(e) => createClient(e)}>
                        <div className="first-line">
                            <label htmlFor="input1">Nome:</label>
                            <input type="text" id="input1" value={name}
                                onChange={(e) => setName(e.target.value)} />
                            <label htmlFor="input2">Endereço:</label>
                            <input type="text" id="input2" value={address}
                                onChange={(e) => setAddress(e.target.value)} />
                        </div>
                        <div className="second-line">
                            <label htmlFor="input3">Cidade:</label>
                            <input type="text" id="input3" value={city}
                                onChange={(e) => setCity(e.target.value)} />
                            <label htmlFor="input4">UF:</label>
                            <input type="text" id="input4" value={UF}
                                onChange={(e) => setUF(e.target.value)} />
                            <label htmlFor="input5">Telefone:</label>
                            <input type="text" id="input5" value={phone}
                                onChange={(e) => setPhone(e.target.value)} />
                        </div>
                        <button type="submit" onClick={(e) => createClient(e)}>Salvar</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AddData;
