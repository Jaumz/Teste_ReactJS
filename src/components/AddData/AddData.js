import './AddData.css';
import { useState} from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import ApiCall from '../../API';
import Header from '../Header/Header';

const AddData = ({ setAddData, setRefresh, refresh }) => {

    const { register } = useForm();
    const navigate = useNavigate();

    const [name, setName] = useState();
    const [address, setAddress] = useState();
    const [city, setCity] = useState();
    const [uf, setUf] = useState();
    const [cell, setCell] = useState();

    const createClient = async (e) => {
        e.preventDefault();

        const client = { name, address, city, uf, cell };

        await ApiCall.post("/cliente", client, {})

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
                            <input type="text" id="input1" {...register("TECL_NOME", { onChange: (e) => setName(e.target.value) })} />
                            <label htmlFor="input2">Endereço:</label>
                            <input type="text" id="input2" {...register("TECL_ENDERECO", { onChange: (e) => setAddress(e.target.value) })} />
                        </div>
                        <div className="second-line">
                            <label htmlFor="input3">Cidade:</label>
                            <input type="text" id="input3" {...register("TECL_CIDADE", { onChange: (e) => setCity(e.target.value) })} />
                            <label htmlFor="input4">UF:</label>
                            <input type="text" id="input4" {...register("TECL_UF", { onChange: (e) => setUf(e.target.value) })} />
                            <label htmlFor="input5">Telefone:</label>
                            <input type="text" id="input5" {...register("TECL_TELEFONE", { onChange: (e) => setCell(e.target.value) })} />
                        </div>
                        <button type="submit" onClick={(e) => createClient(e)}>Salvar</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AddData;
