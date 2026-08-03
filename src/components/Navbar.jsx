import { useEffect, useState } from "react";
import { company, navigation } from "../data/company";
import Icon from "./Icons";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 18);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="hidden border-b border-white/10 bg-zinc-950 text-white md:block">
        <div className="section-shell flex h-9 items-center justify-between text-[11px] font-semibold uppercase tracking-[0.12em] text-zinc-400">
          <span>Authorized Interstate Carrier & Freight Broker</span>
          <div className="flex items-center gap-5">
            <span>USDOT {company.usdot}</span>
            <span>MC {company.mc}</span>
          </div>
        </div>
      </div>

      <nav
        aria-label="Main navigation"
        className={`transition-all duration-300 ${
          scrolled || menuOpen
            ? "border-b border-zinc-200/80 bg-white/95 shadow-[0_10px_40px_rgba(0,0,0,0.06)] backdrop-blur-xl"
            : "border-b border-transparent bg-white/80 backdrop-blur-md"
        }`}
      >
        <div className="section-shell flex h-20 items-center justify-between">
          <a href="#home" className="group flex items-center gap-3" aria-label="TransBay Xpress home">
            <img
              src="/transbay-logo.png"
              alt="TransBay Xpress Inc. logo"
              className="h-12 w-12 rounded-full border border-zinc-200 object-cover shadow-sm transition-transform duration-300 group-hover:scale-105"
            />
            <div>
              <p className="text-base font-black tracking-[-0.025em] text-zinc-950 sm:text-lg">
                TransBay Xpress
              </p>
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-zinc-500">
                Transportation & Logistics
              </p>
            </div>
          </a>

          <div className="hidden items-center gap-8 lg:flex">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-semibold text-zinc-600 transition-colors hover:text-zinc-950"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="hidden lg:block">
            <a href={`tel:${company.phoneHref}`} className="btn-primary">
              <Icon name="phone" size={17} />
              Call Dispatch
            </a>
          </div>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-zinc-200 text-zinc-950 lg:hidden"
            aria-controls="mobile-menu"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            onClick={() => setMenuOpen((current) => !current)}
          >
            <Icon name={menuOpen ? "close" : "menu"} />
          </button>
        </div>

        {menuOpen && (
          <div id="mobile-menu" className="border-t border-zinc-200 bg-white lg:hidden">
            <div className="section-shell grid gap-2 py-5">
              {navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm font-semibold text-zinc-700 transition-colors hover:bg-zinc-100 hover:text-zinc-950"
                >
                  {item.label}
                </a>
              ))}
              <a href={`tel:${company.phoneHref}`} className="btn-primary mt-2 justify-center">
                <Icon name="phone" size={17} />
                {company.phone}
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
