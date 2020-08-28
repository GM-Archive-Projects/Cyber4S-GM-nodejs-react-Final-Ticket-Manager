import React, { useEffect, useState } from 'react';
import {
  getTickets, searchTickets, setDone, setUnDone, getTicket,
} from '../apis/api';
import Ticket from '../comps/Ticket';
import { DropdownButton, CompletedTasksButton } from '../comps/Buttons';

import { Header } from '../comps/Header';
import './TicketPage.css';

// Insert USE Effect to fetch Data
// Data will Be set at setData
{ /* <input type="text" id="searchInput" onChange={inputChangeHandler} value={userInput}/> */ }

const TicketPage = () => {
  const [ticketsData, setTicketsData] = useState([]);
  const [hiddenTickets, setHiddenTickets] = useState([]);
  const [completedTickets, setCompletedTickets] = useState([]);

  const [seconds, setSeconds] = useState(10);

  async function fetchData() {
    const tickets = await getTickets();
    const tempTickets = [...tickets.data];
    setTicketsData(tempTickets);
    return tickets;
  }

  async function updateCompleted() {
    const tickets = await getTickets();
    const tempTickets = [...tickets.data];
    const ticketsDone = [...tempTickets].filter((t) => t.done);
    const ticketsUnDone = [...tempTickets].filter((t) => !t.done);
    setTicketsData(ticketsUnDone);
    setCompletedTickets(ticketsDone);
  }

  useEffect(() => {
    fetchData().then(updateCompleted);
  }, []);

  const inputChangeHandler = async (value) => {
    const { data } = await searchTickets(value);
    setTicketsData(data);
  };
  const hideTicketsHandler = (ticket) => {
    const filteredTickets = ticketsData.filter((t) => t.id !== ticket.id);
    console.log(filteredTickets);
    setTicketsData(filteredTickets);
    setHiddenTickets([...hiddenTickets, ticket]);
  };

  const restoreHidden = () => {
    const ticketToRestore = [...hiddenTickets];
    const newTickets = ticketsData.concat(ticketToRestore);
    setHiddenTickets([]);
    setTicketsData(newTickets);
  };

  const completeTicketHandler = (ticket) => {
    const filteredTickets = ticketsData.filter((t) => t.id !== ticket.id);
    setTicketsData(filteredTickets);
    console.log([...completedTickets, ticket]);
    setCompletedTickets([...completedTickets, ticket]);
  };

  const setTicketDone = async (ticket) => {
    await setDone(ticket.id);
    const newTickets = ticketsData.map((t) => {
      if (t.id === ticket.id) {
        t.done = true;
        return t;
      }
      return t;
    });
    // const completeTheTicket = newTickets.filter((tt) => tt.id !== ticket.id)

    setTicketsData(newTickets);
    console.log('Ticket Updated To be Done');
    setTimeout(() => completeTicketHandler(ticket), 3000);
  };

  const setTicketUnDone = async (ticket) => {
    await setUnDone(ticket.id);
    const newTickets = ticketsData.map((t) => {
      if (t.id === ticket.id) {
        t.done = false;
        return t;
      }
      return t;
    });
    // const completeTheTicket = newTickets.filter((tt) => tt.id !== ticket.id)

    // setTicketsData(newTickets)
    const newCompletedTicket = [...completedTickets];
    const index = completedTickets.indexOf(ticket);
    if (index > -1) {
      newCompletedTicket.splice(index, 1);
    }

    setCompletedTickets([...newCompletedTicket]);

    const undoTicket = ticketsData.filter((t) => t.id !== ticket.id);
    setTicketsData(undoTicket);

    console.log('Ticket Updated To be UnDone');
  };

  const getDate = (time) => {
    const prettyDate = new Date(time);
    return prettyDate;
  };

  const sortTicketsByDate = () => {
    const sortedTickets = ticketsData.slice().sort((a, b) => a.creationTime - b.creationTime);
    setTicketsData(sortedTickets);
  };

  const sortByContentLength = () => {
    const sortedByContent = ticketsData.slice().sort((a, b) => a.content.length - b.content.length);
    setTicketsData(sortedByContent);
  };

  const getCompletedTicket = async (ticket) => {
    const { data } = await getTicket(ticket.id);
    debugger;
    console.log(data);
    setTicketsData(data);
    console.log(ticketsData);
  };
  // const tickets2Data = [...ticketsData]

  return (
    <div>
      <Header inputChangeHandler={inputChangeHandler} restoreHidden={restoreHidden} sortTicketsByDate={sortTicketsByDate} sortByContentLength={sortByContentLength} completedTickets={completedTickets} setCompletedTickets={setCompletedTickets} getCompletedTicket={getCompletedTicket} setTicketUnDone={setTicketUnDone} hiddenTickets={hiddenTickets} ticketsData={ticketsData} />
      {
        ticketsData.map((ticket) => <Ticket key={ticket.id} hideTicketsHandler={hideTicketsHandler} ticket={ticket} setTicketDone={setTicketDone} setTicketUnDone={setTicketUnDone} getDate={getDate} seconds={5} />)
      }

    </div>
  );
};

export default TicketPage;

// useEffect(()=> {
//     async function fetchFilteredData() {
//         const filteredTickets = await searchTickets(userInput);
//         setTicketsData(filteredTickets.data);
//     }
//     fetchFilteredData();
// }, [userInput])
