import { useState, ReactDOM, useEffect } from 'react'


import CardMsg from '../components/cardMsg/CardMsg';
import FormContato from '../components/formContato/FormContato';
import NavBar from '../components/navbar/NavBar';
import api from '../services/api/useAPI';


function Contato() {

    const [info, setInfo] = useState([]);

    useEffect(() => {
        api.get("/card").then(({ data }) => {
            setInfo(data);

        })
            .catch((err) => {
                console.error(err);
            });


    }, []);

    return (
        <>
            <NavBar />
            <FormContato />




            {info.reverse().map((conteudo, uuid) => {
                return (
                    <div key={uuid}>
                        <CardMsg nome={conteudo.username} msg={conteudo.msg} data={conteudo.data} />
                    </div>

                )
            })}

        </>
    )


}

export default Contato;
