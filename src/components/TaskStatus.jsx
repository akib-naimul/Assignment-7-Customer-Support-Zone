export default function TaskStatus({ tasks, resolved, onComplete }) {
  return (
    <aside className="bg-white border rounded-xl p-5 space-y-4">
      <div>
        <h2 className="font-semibold">Task Status</h2>
        <p className="text-xs text-gray-500">
          Select a ticket to add to Task Status
        </p>
      </div>

      {/* Active Tasks */}
      {tasks.length === 0 && (
        <p className="text-sm text-gray-400">
          No task selected yet.
        </p>
      )}

      {tasks.map((task) => (
        <div key={task.id} className="border rounded-md p-3">
          <p className="text-sm font-medium mb-3">
            {task.title}
          </p>
          <button
            className="btn btn-success btn-sm w-full"
            onClick={() => onComplete(task)}
          >
            Complete
          </button>
        </div>
      ))}

      {/* Resolved */}
      <div className="pt-2">
        <h3 className="font-semibold">Resolved Task</h3>

        {resolved.length === 0 ? (
          <p className="text-sm text-gray-400 mt-1">
            No resolved tasks yet.
          </p>
        ) : (
          <div className="mt-2 space-y-2">
            {resolved.map((t) => (
              <div
                key={t.id}
                className="bg-blue-50 text-sm rounded px-3 py-2"
              >
                {t.title}
              </div>
            ))}
          </div>
        )}
      </div>
    </aside>
  );
}
