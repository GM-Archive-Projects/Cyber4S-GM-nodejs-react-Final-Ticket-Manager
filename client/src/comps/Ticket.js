import React, {useEffect, useState} from 'react'

// const style={
//     display:" inline-block",
//     padding: "16px",
//     textAlign: "center",
//     margin: "16px",
//     border:"1px solid black"
//     } style={style}


const Ticket = (props) => {

    return (
        <div className="ticket">
            <h1>{JSON.stringify(props.title)}</h1>
            <div id={props.key} className="ticketContent">
            {props.content}
            </div>
            <br></br>
            <p>{JSON.stringify((props.labels))}</p>
            <div>{props.labels && props.labels.map((label) => <div className="label">{label}</div>)}</div>
        </div>
    );
}

// {JSON.stringify(props.labels)}

export default Ticket;