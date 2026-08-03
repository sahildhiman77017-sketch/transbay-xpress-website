import { useState } from "react";
import { company } from "../data/company";
import Icon from "./Icons";

export default function Contact() {
  const [quoteStatus, setQuoteStatus] = useState("");
  const [contactStatus, setContactStatus] = useState("");

  const handleQuoteSubmit = (event) => {
    event.preventDefault();
    setQuoteStatus("Quote request received. Our dispatch team will contact you shortly.");
  };

  const handleContactSubmit = (event) => {
    event.preventDefault();
    setContactStatus("Message sent. We will reach out soon.");
  };

  return (
    <section id="contact" className="bg-lime-400 py-16 sm:py-20">
      <div className="section-shell">
        <div className="grid overflow-hidden rounded-[2rem] bg-zinc-950 text-white shadow-[0_30px_90px_rgba(0,0,0,0.2)] lg:grid-cols-[1.15fr_0.85fr]">
          <div className="relative p-7 sm:p-10 lg:p-14">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_100%,rgba(182,245,0,0.14),transparent_38%)]" />
            <div className="relative max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-lime-400">Let’s move freight</p>
              <h2 className="mt-4 text-balance text-4xl font-black tracking-[-0.05em] sm:text-5xl">
                Need dependable transportation capacity?
              </h2>
              <p className="mt-5 text-base leading-8 text-zinc-400 sm:text-lg">
                Call TransBay Xpress to discuss lanes, shipment requirements, brokerage support, or carrier capacity.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href={`tel:${company.phoneHref}`} className="btn-lime justify-center sm:justify-start">
                  <Icon name="phone" size={18} />
                  {company.phone}
                </a>
                <a
                  href={company.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-white/10"
                >
                  View Location
                  <Icon name="external" size={16} />
                </a>
              </div>
            </div>
          </div>

          <aside className="border-t border-white/10 bg-white/[0.045] p-7 sm:p-10 lg:border-l lg:border-t-0 lg:p-12">
            <div className="grid gap-6">
              {/* <section id="quote" aria-labelledby="quote-heading" className="rounded-[1.85rem] border border-white/10 bg-white/[0.06] p-6 sm:p-8">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-lime-400">Request a Quote</p>
                <h3 id="quote-heading" className="mt-4 text-2xl font-black tracking-[-0.04em] text-white">Get a fast freight estimate</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-300">
                  Share your route, cargo, and timing details so our team can respond with the right capacity solution.
                </p>

                <form onSubmit={handleQuoteSubmit} className="mt-6 grid gap-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="block text-sm font-semibold text-zinc-200">
                      Origin
                      <input
                        type="text"
                        name="origin"
                        placeholder="Pickup city or terminal"
                        className="mt-2 w-full rounded-2xl border border-white/10 bg-zinc-950/90 px-4 py-3 text-sm text-white outline-none transition focus:border-lime-400 focus:ring-2 focus:ring-lime-400/25"
                      />
                    </label>
                    <label className="block text-sm font-semibold text-zinc-200">
                      Destination
                      <input
                        type="text"
                        name="destination"
                        placeholder="Delivery city or terminal"
                        className="mt-2 w-full rounded-2xl border border-white/10 bg-zinc-950/90 px-4 py-3 text-sm text-white outline-none transition focus:border-lime-400 focus:ring-2 focus:ring-lime-400/25"
                      />
                    </label>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="block text-sm font-semibold text-zinc-200">
                      Cargo Type
                      <input
                        type="text"
                        name="cargoType"
                        placeholder="General freight, beverages, etc."
                        className="mt-2 w-full rounded-2xl border border-white/10 bg-zinc-950/90 px-4 py-3 text-sm text-white outline-none transition focus:border-lime-400 focus:ring-2 focus:ring-lime-400/25"
                      />
                    </label>
                    <label className="block text-sm font-semibold text-zinc-200">
                      Weight / Dimensions
                      <input
                        type="text"
                        name="weight"
                        placeholder="Weight, pallets, skid count"
                        className="mt-2 w-full rounded-2xl border border-white/10 bg-zinc-950/90 px-4 py-3 text-sm text-white outline-none transition focus:border-lime-400 focus:ring-2 focus:ring-lime-400/25"
                      />
                    </label>
                  </div>

                  <label className="block text-sm font-semibold text-zinc-200">
                    Preferred pickup date
                    <input
                      type="date"
                      name="pickupDate"
                      className="mt-2 w-full rounded-2xl border border-white/10 bg-zinc-950/90 px-4 py-3 text-sm text-white outline-none transition focus:border-lime-400 focus:ring-2 focus:ring-lime-400/25"
                    />
                  </label>

                  <label className="block text-sm font-semibold text-zinc-200">
                    Additional details
                    <textarea
                      name="details"
                      rows="4"
                      placeholder="Special handling, delivery requirements, or other notes"
                      className="mt-2 w-full resize-none rounded-2xl border border-white/10 bg-zinc-950/90 px-4 py-3 text-sm text-white outline-none transition focus:border-lime-400 focus:ring-2 focus:ring-lime-400/25"
                    />
                  </label>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="block text-sm font-semibold text-zinc-200">
                      Name
                      <input
                        type="text"
                        name="quoteName"
                        placeholder="Your name"
                        className="mt-2 w-full rounded-2xl border border-white/10 bg-zinc-950/90 px-4 py-3 text-sm text-white outline-none transition focus:border-lime-400 focus:ring-2 focus:ring-lime-400/25"
                      />
                    </label>
                    <label className="block text-sm font-semibold text-zinc-200">
                      Email or phone
                      <input
                        type="text"
                        name="quoteContact"
                        placeholder="Email or phone"
                        className="mt-2 w-full rounded-2xl border border-white/10 bg-zinc-950/90 px-4 py-3 text-sm text-white outline-none transition focus:border-lime-400 focus:ring-2 focus:ring-lime-400/25"
                      />
                    </label>
                  </div>

                  <button type="submit" className="btn-lime w-full justify-center">
                    Send Quote Request
                  </button>
                  {quoteStatus && (
                    <p className="text-sm text-lime-100" aria-live="polite">{quoteStatus}</p>
                  )}
                </form>
              </section> */}

              <section aria-labelledby="contact-heading" className="rounded-[1.85rem] border border-white/10 bg-white/[0.06] p-6 sm:p-8">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-lime-400">Contact Us</p>
                <h3 id="contact-heading" className="mt-4 text-2xl font-black tracking-[-0.04em] text-white">Send a general inquiry</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-300">
                  Have a question about capacity, paperwork, or broker services? Drop us a note and we’ll follow up quickly.
                </p>

                <form onSubmit={handleContactSubmit} className="mt-6 grid gap-4">
                  <label className="block text-sm font-semibold text-zinc-200">
                    Name
                    <input
                      type="text"
                      name="contactName"
                      placeholder="Your name"
                      className="mt-2 w-full rounded-2xl border border-white/10 bg-zinc-950/90 px-4 py-3 text-sm text-white outline-none transition focus:border-lime-400 focus:ring-2 focus:ring-lime-400/25"
                    />
                  </label>
                  <label className="block text-sm font-semibold text-zinc-200">
                    Email
                    <input
                      type="email"
                      name="contactEmail"
                      placeholder="Your email"
                      className="mt-2 w-full rounded-2xl border border-white/10 bg-zinc-950/90 px-4 py-3 text-sm text-white outline-none transition focus:border-lime-400 focus:ring-2 focus:ring-lime-400/25"
                    />
                  </label>
                  <label className="block text-sm font-semibold text-zinc-200">
                    Phone
                    <input
                      type="tel"
                      name="contactPhone"
                      placeholder="Your phone"
                      className="mt-2 w-full rounded-2xl border border-white/10 bg-zinc-950/90 px-4 py-3 text-sm text-white outline-none transition focus:border-lime-400 focus:ring-2 focus:ring-lime-400/25"
                    />
                  </label>
                  <label className="block text-sm font-semibold text-zinc-200">
                    Message
                    <textarea
                      name="contactMessage"
                      rows="4"
                      placeholder="What can we help with today?"
                      className="mt-2 w-full resize-none rounded-2xl border border-white/10 bg-zinc-950/90 px-4 py-3 text-sm text-white outline-none transition focus:border-lime-400 focus:ring-2 focus:ring-lime-400/25"
                    />
                  </label>

                  <button type="submit" className="btn-lime w-full justify-center">
                    Send Message
                  </button>
                  {contactStatus && (
                    <p className="text-sm text-lime-100" aria-live="polite">{contactStatus}</p>
                  )}
                </form>
              </section>

              <div>
                <p className="text-sm font-black uppercase tracking-[0.16em] text-white">Company Contact</p>
                <div className="mt-7 grid gap-6">
                  <ContactItem icon="phone" label="Phone" value={company.phone} href={`tel:${company.phoneHref}`} />
                  <ContactItem icon="mapPin" label="Head Office" value={company.address} href={company.mapsUrl} external />
                  <ContactItem icon="truck" label="Business Type" value={company.businessType} />
                  <ContactItem icon="route" label="Operating Region" value={company.operatingRegion} />
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

function ContactItem({ icon, label, value, href, external = false }) {
  const content = (
    <div className="group flex items-start gap-4">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06] text-lime-400 transition-colors group-hover:border-lime-400/30">
        <Icon name={icon} size={21} />
      </div>
      <div>
        <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-zinc-500">{label}</p>
        <p className="mt-1.5 text-sm font-semibold leading-6 text-zinc-200">{value}</p>
      </div>
    </div>
  );

  if (!href) return content;

  return (
    <a href={href} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined}>
      {content}
    </a>
  );
}
