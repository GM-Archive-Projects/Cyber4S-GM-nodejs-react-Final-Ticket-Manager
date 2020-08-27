const express = require('express');
const fs = require('fs').promises
const app = express();
app.use(express.json());
module.exports = app;



app.get('/api/tickets/', async(req, res)=> {
  const content = await fs.readFile('./data.json');
  const tickets = JSON.parse(content);
  if(req.query.searchText){
    const filterText = tickets.filter((text) => 
    text.title.toLowerCase().includes(req.query.searchText.toString()))
    res.send(filterText)
  } else if (req.query.ticketId) {
    const filterText = tickets.filter((text) => {
      return text.id.toString().toLowerCase() === (req.query.ticketId.toString().toLowerCase())
    })
    res.send(filterText)
  } else {
    res.send(tickets);
  }      
});



app.get('/api/tickets/:ticketId', async(req, res)=> {
  let content = await fs.readFile('./data.json');
  let tickets = JSON.parse(content);
  const filterText = tickets.filter((tick) =>  t.id.toString() === req.query.ticketId.toString());
  console.log(filterText)
  return res.send(filterText)
})



app.get('/api/tickets/:searchText', async(req, res)=> {
    let content = await fs.readFile('./data.json');
    let tickets = JSON.parse(content);
    if(req.query.searchText){
      let filterText = tickets.filter((text) => text.title.toLowerCase().includes(req.query.searchText.toString()))
      res.send(filterText)
    }else {
      res.send(tickets)
    }})

app.get('/api/tickets/', async(req, res)=> {
  console.log("Get All Tickets")
    let content = await fs.readFile('./data.json');
    let tickets = JSON.parse(content);
    res.send(tickets);
    });



app.post('/api/tickets/:ticketId/done', async(req,res)=>{
    let content = await fs.readFile('./data.json')
    let tickets = JSON.parse(content);
    try {
        const newTicket = tickets.map((item)=>{
            if(item.id === req.params.ticketId){
                item.done = true;
            }
            return item;
        });
    tickets = JSON.stringify(newTicket);
    await fs.writeFile('./data.json', tickets);
    console.log(`Ticket ${req.params.ticketId} Changed To Done --> True`)
    res.send( { updated: true });
  }
  catch (error) { res.send({ updated: false }); }
});

app.post('/api/tickets/:ticketId/undone', async (req, res) => {
  let content = await fs.readFile('./data.json');
  let tickets = JSON.parse(content);
  try {
    const data = tickets.map((item) => {
      if (item.id === req.params.ticketId) {
        item.done = false;
      }
      return item;
    });
    tickets = JSON.stringify(data);
    await fs.writeFile('./data.json', tickets);
    res.send({ updated: true });
    console.log(`Ticket ${req.params.ticketId} Changed To Undone --> False`)
  } catch (e) { res.send({ updated: true }); }
});