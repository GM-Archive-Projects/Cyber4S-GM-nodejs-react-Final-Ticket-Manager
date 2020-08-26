import React, {useEffect, useState} from 'react'
import { getTickets, searchTickets, setDone, setUnDone } from '../apis/api'
import Ticket from '../comps/Ticket'
import './TicketPage.css'

//Insert USE Effect to fetch Data
//Data will Be set at setData
          {/* <input type="text" id="searchInput" onChange={inputChangeHandler} value={userInput}/> */}

const TicketPage = (props) => {
    const [ticketsData, setTicketsData] = useState([]);
    const [hiddenTickets, setHiddenTickets] = useState([])
    const [ticketDone, setTicketsDone] = useState(false)
    // const [count, setCount] = useState(0)

    useEffect(()=> {
        async function fetchData() {
            const tickets = await getTickets();
            setTicketsData(tickets.data);
        }
        fetchData();
    }, [])

    const inputChangeHandler = async (value) => {
        const {data} = await searchTickets(value)
        setTicketsData(data);
    };
    const hideTicketsHandler = (ticket) => {
        const filteredTickets = ticketsData.filter((t) => t.id !== ticket.id)
        console.log(filteredTickets)
        setTicketsData(filteredTickets)
        setHiddenTickets([...hiddenTickets, ticket])
    }

    const restoreHidden = () => {
        const ticketToRestore = [...hiddenTickets];
        const newTickets = ticketsData.concat(ticketToRestore)
        setHiddenTickets([]);
        setTicketsData(newTickets)
    }

    const setTicketDone = async (id) => {
        await setDone(id)
        console.log(`Ticket Updated To be Done`)
        const tickets = await getTickets();
        setTicketsData(tickets.data);
        
        
    }
    
    const setTicketUnDone = async (id) => {
        await setUnDone(id)
        console.log(`Ticket Updated To be UnDone`)
        const tickets = await getTickets();
        setTicketsData(tickets.data);
    }

    return (
        <div>
          <input id="searchInput" onChange={e => inputChangeHandler(e.target.value)} />
          <button id="restoreHideTickets" onClick={() => restoreHidden()}> Restore Hidden Tickets</button>
          <div id="hideTicketsCounter">{hiddenTickets.length}</div>
          <div className="hideTicketsCounter">Hidden Tickets = {hiddenTickets.length}</div>
          

          <div>Available Ticket = {ticketsData.length}</div>
        {ticketsData.map(ticket => {
                return <Ticket content={ticket.content} labels={ticket.labels} key={ticket.id} title={ticket.title} hideTicketsHandler={hideTicketsHandler} ticket={ticket} setTicketDone={setTicketDone} setTicketUnDone={setTicketUnDone}/>
        })}
        </div>
    );
}






export default TicketPage;







  
// useEffect(()=> {
//     async function fetchFilteredData() {
//         const filteredTickets = await searchTickets(userInput);
//         setTicketsData(filteredTickets.data);
//     }
//     fetchFilteredData();
// }, [userInput])

