export default function Banner({ inProgressCount, resolvedCount }) {
  return (
    <section className="w-full px-6 py-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* In Progress */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-purple-600 to-violet-500 text-white px-10 py-14 text-center">
          <p className="text-base opacity-90">In-Progress</p>
          <p className="text-6xl font-bold mt-4">{inProgressCount}</p>
        </div>

        {/* Resolved */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-green-500 to-emerald-600 text-white px-10 py-14 text-center">
          <p className="text-base opacity-90">Resolved</p>
          <p className="text-6xl font-bold mt-4">{resolvedCount}</p>
        </div>
      </div>
    </section>
  );
}
