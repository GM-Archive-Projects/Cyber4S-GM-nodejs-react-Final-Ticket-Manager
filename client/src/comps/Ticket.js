import React from 'react'
import CircularStatic  from '../comps/CircularStatic'
import './Ticket.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';


const Ticket = ({ticket, hideTicketsHandler, setTicketUnDone, setTicketDone, getDate, progress, setProgress}) => {

    return (
        <div className="ticket">
            <h2>{JSON.stringify(ticket.title)}</h2>
            <div>{getDate(ticket.creationTime).toString()}</div>
            <br />
           
            <div id={ticket.id} className="ticketContent">
            <br />
            {ticket.content}
            </div>
            <br />
            <div>{ticket.labels && ticket.labels.map((label) => <div className="label">{label}</div>)}</div>
            <br />
            <button className="hideTicketButton" onClick={() => hideTicketsHandler(ticket)}>Hide</button>
            {/* <button className="changeTicketState" style={buttonStyle}onClick={ticket.done ? () => setTicketUnDone(ticket) : () => setTicketDone(ticket)}> {ticket.done ? 'Undone' : 'done'}</button> */}
            <Button  className="changeTicketState" variant= {ticket.done ? "success": "danger"} onClick={ticket.done ? () => setTicketUnDone(ticket): () => setTicketDone(ticket)}> {ticket.done ? 'Undone' : 'done'}</Button> 
            <CircularStatic value={5} seconds={progress} setProgress={setProgress}/>
            {/* {ticket.done && <CountDown seconds={() => {
                setInterval(() =>, 1000)
            }}/>} */}

        </div>
    );
}

// {JSON.stringify(props.labels)}

export default Ticket;