import React, {useEffect, useState} from 'react'
import { getTickets } from '../apis/api'
import Ticket from '../comps/Ticket'

//Insert USE Effect to fetch Data
//Data will Be set at setData
const TicketPage = (props) => {
    const [ticketsData, setTicketsData] = useState([]);
    const [hidden, setHidden] = useState([]);

    useEffect(()=> {
        async function fetchData() {
            const tickets = await getTickets();
            setTicketsData(tickets.data);
            debugger            
        }
        fetchData();
    }, [])



    return (
        <div>
        <input type="text" id="searchInput" />
        {ticketsData.map(ticket => {
                return <Ticket ticki={ticket} label={ticket.labels}/>
        })}
        </div>
    );
}



export default TicketPage;