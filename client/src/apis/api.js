// API Calls To Use
import axios from "axios";
import { TICKETS, SEARCHTEXT, TICKET } from "./consts";

// axios.defaults.headers.post["Content-Type"] = "application/json; charset=utf-8";
axios.defaults.validateStatus = (status) => status >= 200 && status < 300;

export const getTickets = () => axios.get(TICKETS);

export const searchTickets = (input) => axios.get(SEARCHTEXT + input);

export const setDone = (input) => axios.post(`${TICKETS}/${input}/done`);

export const setUnDone = (input) => axios.post(`${TICKETS}/${input}/undone`);

export const getTicket = (ticketId) => axios.get(TICKET + ticketId);
