import { useEffect, useMemo, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import TicketCard from "./components/TicketCard";
import TaskStatus from "./components/TaskStatus";
import Footer from "./components/Footer";

export default function App() {
  const [tickets, setTickets] = useState([]);
  const [taskStatus, setTaskStatus] = useState([]);
  const [resolved, setResolved] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/tickets.json")
      .then((res) => res.json())
      .then((data) => {
        setTickets(data);
        setLoading(false);
      })
      .catch(() => {
        toast.error("Failed to load tickets");
        setLoading(false);
      });
  }, []);

  const inProgressCount = taskStatus.length;
  const resolvedCount = resolved.length;

  const taskIds = useMemo(
    () => new Set(taskStatus.map((t) => t.id)),
    [taskStatus]
  );

  const handleAddToTask = (ticket) => {
    if (taskIds.has(ticket.id)) {
      toast.info("Ticket already added");
      return;
    }
    setTaskStatus((prev) => [...prev, ticket]);
    toast.success("Added to Task Status");
  };

  const handleComplete = (ticket) => {
    setTaskStatus((prev) => prev.filter((t) => t.id !== ticket.id));
    setResolved((prev) => [...prev, ticket]);
    setTickets((prev) => prev.filter((t) => t.id !== ticket.id));
    toast.success("Ticket Resolved");
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <Banner
        inProgressCount={inProgressCount}
        resolvedCount={resolvedCount}
      />

      <main className="w-full px-6 pb-10 flex-1">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
          <section className="lg:col-span-8">
            <h2 className="font-semibold mb-4">Customer Tickets</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {tickets.map((ticket) => (
                <TicketCard
                  key={ticket.id}
                  ticket={ticket}
                  onAdd={handleAddToTask}
                />
              ))}
            </div>
          </section>

          <section className="lg:col-span-4">
            <TaskStatus
              tasks={taskStatus}
              resolved={resolved}
              onComplete={handleComplete}
            />
          </section>
        </div>
      </main>


      <Footer />
      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
}
