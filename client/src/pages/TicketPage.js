import React, {useEffect, useState} from 'react'
import { getTickets, searchTickets } from '../apis/api'
import Ticket from '../comps/Ticket'

//Insert USE Effect to fetch Data
//Data will Be set at setData
const TicketPage = (props) => {
    const [ticketsData, setTicketsData] = useState([]);
    const [userInput, setUserInput] = useState('aaa')
    const [hidden, setHidden] = useState([]);

    useEffect(()=> {
        async function fetchData() {
            const tickets = await getTickets();
            setTicketsData(tickets.data);
        }
        fetchData();
    }, [])


    const inputChangeHandler = (event) => {
        const input = event.currentTarget.value;
        setUserInput(input);
      };

      
    useEffect(()=> {
        async function fetchFilteredData() {
            const filteredTickets = await searchTickets(userInput);
            setTicketsData(filteredTickets.data);
        }
        fetchFilteredData();
    }, [userInput])

    
    return (
        <div>
          <input type="text" id="searchInput" onChange={inputChangeHandler} value={userInput}/>
        {ticketsData.map(ticket => {
                return <Ticket content={ticket.content} labels={ticket.labels} key={ticket.id} title={ticket.title}/>
        })}
        </div>
    );
}






export default TicketPage;