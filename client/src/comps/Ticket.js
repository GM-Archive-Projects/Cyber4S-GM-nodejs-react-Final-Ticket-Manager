import React, {useEffect, useState} from 'react'

const Ticket = (props) => {

    const getLabels = props.labels.map((label) => <p className={label}>{label}</p>)
    console.log(getLabels)
    return (
        <div className="ticket">
            <h1>{JSON.stringify(props.title)}</h1>
            <div id={props.key} className="ticketContent">
            {props.content}
            </div>
            <br></br>
        {/* {JSON.stringify(props.ticki)} */}
            {JSON.stringify(props.labels)}
        </div>
    );
}

export default Ticket;