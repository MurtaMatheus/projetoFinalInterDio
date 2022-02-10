import React from "react";
import Person from "../../img/Fabianinha.png"

function CardMsg(props) {
    const { nome } = props;
    const { msg } = props;
    const { data } = props;

    return (
        <>
            <div className="card mb-3 w-75 mx-auto">
                <div className="row g-0">
                    <div className="col-md-2">
                        <img src={Person} className="w-100 p-3 mx-auto img-fluid" alt="..." />
                    </div>
                    <div className="col-md-10">
                        <div className="card-body">
                            <h5 className="card-title">{nome}</h5>
                            <p className="card-text">{msg}</p>
                            <p className="card-text"><small className="text-muted">{data}</small></p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}


export default CardMsg;
