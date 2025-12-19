export default function Footer() {
  return (
    <footer className="bg-neutral text-neutral-content mt-12">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="font-bold text-lg">CS — Ticket System</h3>
            <p className="text-sm opacity-70 mt-4 leading-relaxed">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book.
            </p>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold">Company</h4>
            <ul className="mt-4 space-y-2 text-sm opacity-80">
              <li>
                <a className="link link-hover">About Us</a>
              </li>
              <li>
                <a className="link link-hover">Our Mission</a>
              </li>
              <li>
                <a className="link link-hover">Contact Sales</a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold">Services</h4>
            <ul className="mt-4 space-y-2 text-sm opacity-80">
              <li>
                <a className="link link-hover">Products &amp; Services</a>
              </li>
              <li>
                <a className="link link-hover">Customer Stories</a>
              </li>
              <li>
                <a className="link link-hover">Download Apps</a>
              </li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h4 className="font-semibold">Information</h4>
            <ul className="mt-4 space-y-2 text-sm opacity-80">
              <li>
                <a className="link link-hover">Privacy Policy</a>
              </li>
              <li>
                <a className="link link-hover">Terms &amp; Conditions</a>
              </li>
              <li>
                <a className="link link-hover">Join Us</a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold">Social Links</h4>
            <ul className="mt-4 space-y-3 text-sm opacity-80">
              <li className="flex items-center gap-2">
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-neutral-content/10">
                  ⓧ
                </span>
                <a className="link link-hover">@CS — Ticket System</a>
              </li>
              <li className="flex items-center gap-2">
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-neutral-content/10">
                  in
                </span>
                <a className="link link-hover">@CS — Ticket System</a>
              </li>
              <li className="flex items-center gap-2">
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-neutral-content/10">
                  f
                </span>
                <a className="link link-hover">@CS — Ticket System</a>
              </li>
              <li className="flex items-center gap-2">
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-neutral-content/10">
                  ✉
                </span>
                <a className="link link-hover">support@cst.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom line */}
        <div className="mt-10 border-t border-neutral-content/10 pt-6 text-center text-sm opacity-70">
          © 2025 CS — Ticket System. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
