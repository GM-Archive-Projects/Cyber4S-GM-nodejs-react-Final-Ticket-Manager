import React, {useEffect, useState} from 'react'
import './Ticket.css'
const Ticket = (props) => {

    return (
        <div className="ticket">
            <h1>{JSON.stringify(props.title)}</h1>
            <button className="hideTicketButton" onClick={() => props.hideTicketsHandler(props.ticket)}>Hide</button>
            <button className="changeTicketState" onClick={props.ticket.done ? () => props.setTicketUnDone(props.ticket.id) : () => props.setTicketDone(props.ticket.id)}> {props.ticket.done ? 'Undone' : 'done'}</button>
            <div id={props.key} className="ticketContent">
            {props.content}
            </div>
            <br />
            <div>{props.labels && props.labels.map((label) => <div className="label">{label}</div>)}</div>
        </div>
    );
}

// {JSON.stringify(props.labels)}

export default Ticket;