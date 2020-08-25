import React, {useEffect, useState} from 'react'
import { getTickets, searchTickets } from '../apis/api'
import Ticket from '../comps/Ticket'

//Insert USE Effect to fetch Data
//Data will Be set at setData
          {/* <input type="text" id="searchInput" onChange={inputChangeHandler} value={userInput}/> */}

const TicketPage = (props) => {
    const [ticketsData, setTicketsData] = useState([]);
    const [hiddenTickets, setHiddenTickets] = useState([])
    const [count, setCount] = useState(0)

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

    return (
        <div>
          <input id="searchInput" onChange={e => inputChangeHandler(e.target.value)} />
          <button>Restore Hidden Tickets {hiddenTickets.length}</button>
        {ticketsData.map(ticket => {
                return <Ticket content={ticket.content} labels={ticket.labels} key={ticket.id} title={ticket.title} hideTicketsHandler={hideTicketsHandler} ticket={ticket}/>
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

