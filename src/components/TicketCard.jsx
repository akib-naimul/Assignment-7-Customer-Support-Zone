export default function TicketCard({ ticket, onAdd }) {
  return (
    <div
      onClick={() => onAdd(ticket)}
      className="bg-white rounded-xl border shadow-sm hover:shadow-md transition cursor-pointer w-full"
    >
      <div className="p-5 space-y-2">
        {/* Header */}
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-semibold text-sm leading-snug">
            {ticket.title}
          </h3>

          <span
            className={`badge badge-sm ${
              ticket.status === "In-Progress"
                ? "badge-warning"
                : "badge-success"
            }`}
          >
            {ticket.status}
          </span>
        </div>

        {/* Description */}
        <p className="text-xs text-gray-500 leading-relaxed">
          {ticket.description}
        </p>

        {/* Footer */}
        <div className="pt-3 flex items-center justify-between text-xs text-gray-500">
          <div className="flex items-center gap-2">
            <span>#{ticket.id}</span>

            <span
              className={`font-semibold ${
                ticket.priority === "HIGH"
                  ? "text-red-500"
                  : ticket.priority === "MEDIUM"
                  ? "text-yellow-500"
                  : "text-green-500"
              }`}
            >
              {ticket.priority} PRIORITY
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span>{ticket.customer}</span>

            <span className="flex items-center gap-1">
              📅 {ticket.createdAt}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
