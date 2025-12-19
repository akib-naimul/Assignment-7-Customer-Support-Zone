export default function Navbar() {
  return (
    <header className="border-b bg-white">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Left */}
        <h1 className="font-bold text-lg">CS — Ticket System</h1>

        {/* Right */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a className="hover:text-primary">Home</a>
          <a className="hover:text-primary">FAQ</a>
          <a className="hover:text-primary">Changelog</a>
          <a className="hover:text-primary">Blog</a>
          <a className="hover:text-primary">Download</a>
          <a className="hover:text-primary">Contact</a>

          <button className="btn btn-primary btn-sm">
            + New Ticket
          </button>
        </nav>
      </div>
    </header>
  );
}
