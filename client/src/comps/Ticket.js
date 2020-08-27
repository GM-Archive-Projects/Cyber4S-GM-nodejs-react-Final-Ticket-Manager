import React, {useState} from 'react'
import LinearBuffer  from './LinearBuffer'
import './Ticket.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import LinearWithValueLabel from './LinearWithValueLabel'


const Ticket = ({ticket, hideTicketsHandler, setTicketUnDone, setTicketDone, getDate, progress, setProgress}) => {
    const [doShow, setDoShow] = useState(false)
    return (
        <div className="ticket">
            <h2 className='title'>{JSON.stringify(ticket.title)}</h2>
            <div className='date'>{getDate(ticket.creationTime).toString()}</div>
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
            {/* <LinearBuffer style= {{visibilty: 'none'}} className='timer' value={5} seconds={progress} setProgress={setProgress}/> */}
            <LinearWithValueLabel className='timer' value={10} seconds={progress} setProgress={setProgress}/>

            {/* {ticket.done && <CountDown seconds={() => {
                setInterval(() =>, 1000)
            }}/>} */}

        </div>
    );
}

// {JSON.stringify(props.labels)}

export default Ticket;