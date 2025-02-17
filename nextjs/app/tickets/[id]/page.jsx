import { notFound } from "next/navigation";

export async function generateStsticParams(){

  const res = await fetch(`http://localhost:4000/tickets/${id}`);
  const tickets = res.json();
  return tickets.map((ticket)=>({
    id: ticket.id
  }))
}

async function getTickets(id){
  // imitate delay
  await new Promise(resolve=> setTimeout(resolve,3000));
  
  const res = await fetch(`http://localhost:4000/tickets/${id}`,{
    next: {
      revalidate: 60,
    } // set interval after which data is loaded (update cache)
  });

  if(!res.ok){
    notFound();
  }

  return res.json();
}


const TicketDetails = async ({params}) => {
  const id = params.id;
  const ticket = await getTickets(id);
  return (
    <main>
      <nav>
        <h2>Ticket Details</h2>
      </nav>
      <div className="card">
        <h3>{ticket.title}</h3>
        <small>Created by {ticket.user_email}</small>
        <p>{ticket.body}</p>
        <div className={`pill ${ticket.priority}`}>
          {ticket.priority} priority
        </div>
      </div>
    </main>
  )
}

export default TicketDetails;