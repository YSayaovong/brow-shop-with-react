function App() {
  return (
    <div className="min-h-screen bg-brand-50 text-slate-900">
      {/* NAVBAR */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-brand-50/80 backdrop-blur border-b border-brand-100">
        <nav className="max-w-5xl mx-auto flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="h-8 w-8 rounded-full bg-brand-500 inline-flex items-center justify-center text-white text-lg font-bold">
              B
            </span>
            <div className="leading-tight">
              <div className="font-display text-lg tracking-wide">
                Brow Studio
              </div>
              <div className="text-xs text-slate-500 uppercase tracking-[0.2em]">
                Brows by Sheng
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-6 text-sm font-medium">
            <a href="#services" className="hover:text-brand-700">
              Services
            </a>
            <a href="#gallery" className="hover:text-brand-700">
              Gallery
            </a>
            <a href="#booking" className="hover:text-brand-700">
              Booking
            </a>
          </div>

          <a
            href="#booking"
            className="hidden md:inline-flex items-center rounded-full border border-brand-500 px-4 py-1.5 text-sm font-semibold text-brand-700 hover:bg-brand-500 hover:text-white transition-colors"
          >
            Book Now
          </a>
        </nav>
      </header>

      <main className="pt-20">
        {/* HERO */}
        <section
          id="home"
          className="max-w-5xl mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-700 mb-3">
              Brow Shaping • Tint • Lamination
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight mb-4">
              Effortless brows,
              <span className="block text-brand-500">every single day.</span>
            </h1>
            <p className="text-sm md:text-base text-slate-600 mb-6">
              A boutique brow studio specializing in natural, face-framing
              brows. Customized shaping, precise tinting, and long-lasting
              lamination tailored to your features.
            </p>
            <div className="flex flex-wrap gap-3 items-center">
              <a
                href="#booking"
                className="inline-flex items-center rounded-full bg-brand-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-brand-700 transition-colors"
              >
                Book an Appointment
              </a>
              <span className="text-xs text-slate-500">
                New clients get a complimentary brow mapping consultation.
              </span>
            </div>
            <div className="mt-6 flex items-center gap-4 text-xs text-slate-500">
              <div>★★★★★ 4.9 average rating</div>
              <div className="w-px h-4 bg-slate-300" />
              <div>Downtown • Tues–Sat</div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] rounded-[2rem] bg-brand-100 shadow-lg overflow-hidden">
              <div className="w-full h-full flex items-center justify-center text-sm text-brand-700">
                Brow Model / Before &amp; After
              </div>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white/90 backdrop-blur rounded-2xl shadow-md px-4 py-3 text-xs">
              <div className="font-semibold text-slate-800">
                Signature Brow Set
              </div>
              <div className="text-slate-500">Shaping • Tint • Styling</div>
              <div className="mt-1 font-semibold text-brand-700">
                $75 • 45 min
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section
          id="services"
          className="border-y border-brand-100 bg-white py-14"
        >
          <div className="max-w-5xl mx-auto px-4">
            <div className="flex items-end justify-between gap-4 mb-8">
              <div>
                <h2 className="font-display text-2xl md:text-3xl mb-2">
                  Brow services
                </h2>
                <p className="text-sm text-slate-600 max-w-md">
                  Curated treatments to enhance your natural brows, not replace
                  them.
                </p>
              </div>
              <span className="hidden md:inline text-xs text-slate-500">
                Pricing for demo purposes only.
              </span>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  name: "Brow Shaping",
                  duration: "30 min",
                  price: "$45",
                  description:
                    "Custom brow shaping using wax, tweezers, and trimming.",
                },
                {
                  name: "Brow Tint + Shape",
                  duration: "45 min",
                  price: "$75",
                  description:
                    "Enhance your natural shape with long-lasting tint and precision shaping.",
                },
                {
                  name: "Brow Lamination",
                  duration: "60 min",
                  price: "$110",
                  description:
                    "Lifted, fluffy brows that stay in place for up to 6 weeks.",
                },
                {
                  name: "New Client Brow Map",
                  duration: "30 min",
                  price: "Included",
                  description:
                    "Face analysis and brow mapping to find your ideal shape.",
                },
              ].map((service) => (
                <article
                  key={service.name}
                  className="rounded-2xl border border-brand-100 bg-brand-50/60 p-5 hover:border-brand-500/60 hover:shadow-sm transition-all"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-slate-800">
                      {service.name}
                    </h3>
                    <span className="text-sm font-semibold text-brand-700">
                      {service.price}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 mb-3">
                    {service.duration}
                  </p>
                  <p className="text-sm text-slate-600">{service.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* GALLERY */}
        <section id="gallery" className="bg-brand-50 py-14">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="font-display text-2xl md:text-3xl mb-2">
              Before &amp; after
            </h2>
            <p className="text-sm text-slate-600 max-w-md mb-6">
              Real results from real clients. Subtle, natural, and tailored to
              their features.
            </p>

            <div className="grid md:grid-cols-3 gap-5">
              {[
                {
                  label: "Soft arch • Tint",
                  note: "Natural definition for everyday wear.",
                },
                {
                  label: "Fluffy lamination",
                  note: "Lifted, brushed-up look.",
                },
                {
                  label: "Corrective reshape",
                  note: "Growing out over-plucked brows.",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl bg-white border border-brand-100 overflow-hidden shadow-sm"
                >
                  <div className="aspect-[4/5] bg-brand-100 flex items-center justify-center text-xs text-brand-700">
                    Before / After {idx + 1}
                  </div>
                  <div className="p-4">
                    <div className="text-sm font-semibold text-slate-800 mb-1">
                      {item.label}
                    </div>
                    <div className="text-xs text-slate-500">{item.note}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BOOKING */}
        <section
          id="booking"
          className="bg-white border-t border-brand-100 py-14"
        >
          <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-[1.1fr,0.9fr] gap-10">
            <div>
              <h2 className="font-display text-2xl md:text-3xl mb-2">
                Book your brow appointment
              </h2>
              <p className="text-sm text-slate-600 mb-6 max-w-md">
                Demo form only: filling this out won&apos;t actually book
                anything, but it shows how your real form could look.
              </p>

              <form className="space-y-4 text-sm">
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-xl border border-slate-300 px-3 py-2 outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500/60"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full rounded-xl border border-slate-300 px-3 py-2 outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500/60"
                    placeholder="you@email.com"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Date
                    </label>
                    <input
                      type="date"
                      className="w-full rounded-xl border border-slate-300 px-3 py-2 outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500/60"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Time
                    </label>
                    <input
                      type="time"
                      className="w-full rounded-xl border border-slate-300 px-3 py-2 outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500/60"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Service
                  </label>
                  <select className="w-full rounded-xl border border-slate-300 px-3 py-2 outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500/60 bg-white">
                    <option value="">Select a service</option>
                    <option>Brow Shaping</option>
                    <option>Brow Tint + Shape</option>
                    <option>Brow Lamination</option>
                    <option>New Client Brow Map</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Notes
                  </label>
                  <textarea
                    rows={3}
                    className="w-full rounded-xl border border-slate-300 px-3 py-2 outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500/60 resize-none"
                    placeholder="Preferences, allergies, previous brow history..."
                  />
                </div>

                <button
                  type="button"
                  className="inline-flex items-center rounded-full bg-brand-500 px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-brand-700 transition-colors"
                >
                  Submit (demo)
                </button>
              </form>
            </div>

            <aside className="text-xs text-slate-600 bg-brand-50 border border-brand-100 rounded-2xl p-5 h-fit">
              <div className="font-semibold text-slate-800 mb-2">
                Studio hours
              </div>
              <ul className="space-y-1 mb-4">
                <li>Tue–Fri: 10:00am – 6:00pm</li>
                <li>Sat: 10:00am – 3:00pm</li>
                <li>Sun–Mon: Closed</li>
              </ul>
              <div className="font-semibold text-slate-800 mb-1">
                Policies
              </div>
              <ul className="space-y-1">
                <li>• 24-hour cancellation notice.</li>
                <li>• Arrive makeup-free around the brow area.</li>
                <li>• Please reschedule if you are feeling unwell.</li>
              </ul>
            </aside>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-brand-100 bg-brand-50">
        <div className="max-w-5xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Brow Studio. All rights reserved.
          </div>
          <div className="flex flex-wrap gap-3 justify-center md:justify-end">
            <span>123 Main St, Your City</span>
            <span>•</span>
            <a href="tel:+15555551234" className="hover:text-brand-700">
              (555) 555-1234
            </a>
            <a
              href="mailto:hello@browstudio.com"
              className="hover:text-brand-700"
            >
              hello@browstudio.com
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
