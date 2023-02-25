import React from 'react'

export default function Client({client, width = 300, cardColor = "card-danger", textColor}) {
    return (
        <div
            key={client.id}
            className={`card bg-light m-auto ${cardColor}`}
            style={{ width: width }}
        >
            <div className="card-header">{client.jmbg}</div>
            <div className="card-body text-left">
                <h4 className="card-text">
                    {" "}
                    <span className={`fw-bold ${textColor}`}>Ime:</span>
                    {client.ime}
                </h4>
                <p className="card-text">
                    <span className={`fw-bold ${textColor}`}>Prezime:</span>
                    {client.prezime}
                </p>
                <p className="card-text">
                    <span className={`fw-bold ${textColor}`}>email:</span>
                    {client.email}
                </p>
                <p className="card-text">
                    <span className={`fw-bold ${textColor}`}>Broj racuna:</span>
                    {client.br_racuna}
                </p>
            </div>
        </div>
    );
}