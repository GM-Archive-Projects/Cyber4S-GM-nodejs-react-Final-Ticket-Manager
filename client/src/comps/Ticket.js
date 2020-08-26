import React, {useEffect, useState} from 'react'
import './Ticket.css'
const Ticket = (props) => {

    return (
        <div className="ticket">
            <h1>{JSON.stringify(props.title)}</h1>
            <button className="hideTicketButton" onClick={() => props.hideTicketsHandler(props.ticket)}>Hide</button>
            <button className="setTicketDone" onClick={() => props.setTicketDone(props.ticket)}>Mark as Done</button>
            <button className="setTicketUnDone" onClick={() => props.setTicketUnDone(props.ticket)}>Mark as Undone</button>
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