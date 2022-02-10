import React, { useState } from "react";
import api from '../../services/api/useAPI'


function FormContato() {

    const [name, setName] = useState();
    const [msg, setMsg] = useState();
    const recebe = () => {
        const dados = { username: name, msg: msg };
        console.log(dados);

        if (!name || !msg) {
            alert('Informe o nome e/ou a mensagem!!')
        } else {

            api.post('/card', dados).then((Response) => {
                console.log(dados);
            });

        }
    }





    return (
        <>
            <div className="w-75 p-3 mx-auto" >

                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Nome Completo</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Fabianinha Cabeçudinha da Silva" onChange={(event) => {
                        setName(event.target.value);
                    }} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label" >Mensagem</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Digite aqui sua mensagem" name="msg" onChange={(event) => {
                        setMsg(event.target.value);
                    }}></textarea>
                </div>
                <div>
                    <button type="button" className="btn btn-success" onClick={recebe}>Enviar</button>
                </div>
            </div>

        </>

    );
}

export default FormContato;