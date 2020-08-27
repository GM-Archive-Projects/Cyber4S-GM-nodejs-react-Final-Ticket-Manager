import React, {useEffect, useState} from 'react'
import { getTickets, searchTickets, setDone, setUnDone, getTicket } from '../apis/api'
import Ticket  from '../comps/Ticket'
import {DropdownButton}  from '../comps/Buttons'
import {CompletedTasksButton}  from '../comps/Buttons'

import './TicketPage.css'
import { Button } from 'react-bootstrap';

//Insert USE Effect to fetch Data
//Data will Be set at setData
          {/* <input type="text" id="searchInput" onChange={inputChangeHandler} value={userInput}/> */}

const TicketPage = () => {
    const [ticketsData, setTicketsData] = useState([]);
    const [hiddenTickets, setHiddenTickets] = useState([])
    const [completedTickets, setCompletedTickets] = useState([])
    const [seconds, setSeconds] = useState(10)

    // useEffect(seconds) => {
    //     if (seconds >= 0) {
    //         setTimeout(() => setSeconds(seconds - 1))
    //     } else {setSeconds(-1)}
    // }

    // async function fetchData() {
    //     const tickets = await getTickets();
    //     let tempTickets = [...tickets.data]
    //     let tempTickets2 = [...tickets.data].filter((t) => !t.done)
    //     const tempCompletedTickets = tempTickets.filter((t) => t.done)

    //     setTicketsData(tempTickets2);
    //     setCompletedTickets(tempCompletedTickets);
    //     // setCompletedTickets(tempCompletedTicket);
    // }


    // let tempTickets2 = [...tickets.data].filter((t) => !t.done)
    // const tempCompletedTickets = tempTickets.filter((t) => t.done)

    async function fetchData() {
        const tickets = await getTickets();
        let tempTickets = [...tickets.data]
        setTicketsData(tempTickets);
        return tickets
    }

    async function updateCompleted() {
        const tickets = await getTickets();
        debugger
        let tempTickets = [...tickets.data]
        let ticketsDone = [...tempTickets].filter((t) => t.done)
        let ticketsUnDone = [...tempTickets].filter((t) => !t.done)
        setTicketsData(ticketsUnDone);
        setCompletedTickets(ticketsDone)
    }
    
    useEffect(()=> {
        fetchData().then(updateCompleted);
    },[])




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

    const completeTicketHandler = (ticket) => {
        const filteredTickets = ticketsData.filter((t) => t.id !== ticket.id)
        setTicketsData(filteredTickets)
        console.log([...completedTickets, ticket])
        setCompletedTickets([...completedTickets, ticket])
    }
    
//     const getCompletedTicket = (ticket) => {
//         const filteredTicket = ticketsData.filter((t) => t.id !== ticket.id)
//         setTicketsData([...filteredTicket])

// }

        
    // const startCountdown = (ticket) => {
    //     if (seconds >= 0) {
    //         setTimeout(() => setSeconds(seconds - 1), 1000)
    //         console.log(seconds)
    //         return seconds
    //     } else {
    //         setSeconds(9)
    //         return seconds
    //     }
    // }



    const setTicketDone = async (ticket) => {
        await setDone(ticket.id)
        console.log(`Ticket Updated To be Done`)
        const tickets = await getTickets();
        setTicketsData(tickets.data);

        setTimeout(() => completeTicketHandler(ticket), 5000)
        
        
    }
    
    const setTicketUnDone = async (ticket) => {
        await setUnDone(ticket.id)
        console.log(`Ticket Updated To be UnDone`)
        const tickets = await getTickets();
        setTicketsData(tickets.data);
    }

    const getDate = (time) => {
        const prettyDate =  new Date(time)
        return prettyDate
    }

    
    const sortTicketsByDate = () => {
        const sortedTickets = ticketsData.slice().sort((a, b) => a.creationTime - b.creationTime)
        setTicketsData(sortedTickets);

    }
    
    const sortByContentLength = () => {
        const sortedByContent = ticketsData.slice().sort((a, b) => a.content.length - b.content.length)
        setTicketsData(sortedByContent);

    }

    const getCompletedTicket = async (ticket) => {
        const {data} = await getTicket(ticket.id)
        debugger
        console.log(data)
        setTicketsData(data);
        console.log(ticketsData)
    }
    // const tickets2Data = [...ticketsData]


    return (
        <div>
            {/* <Header /> */}
          <input id="searchInput" onChange={e => inputChangeHandler(e.target.value)} />
          <button id="restoreHideTickets" onClick={() => restoreHidden()}>Restore Hidden Tickets</button>
          
          <DropdownButton sortTicketsByDate={sortTicketsByDate} sortByContentLength={sortByContentLength}/>
          <CompletedTasksButton variant="success" completedTickets={completedTickets} setCompletedTickets={setCompletedTickets} getCompletedTicket={getCompletedTicket} getCompletedTicket={getCompletedTicket}/>
          {/* <Button variant="success">Completed Tasks: {completedTickets.length}</Button> */}

          <div id="hideTicketsCounter">{hiddenTickets.length}</div>
          <div className="hideTicketsCounter">Hidden Tickets = {hiddenTickets.length}</div>
          <div>Available Ticket = {ticketsData.length}</div>
        
        {
            ticketsData.map((ticket) => {
                return <Ticket key={ticket.id} hideTicketsHandler={hideTicketsHandler} ticket={ticket} setTicketDone={setTicketDone} setTicketUnDone={setTicketUnDone} getDate={getDate} seconds={5} />
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

