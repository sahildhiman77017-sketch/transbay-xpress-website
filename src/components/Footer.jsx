import { company, navigation } from "../data/company";
import Icon from "./Icons";

export default function Footer() {
  return (
    <footer className="bg-zinc-950 pb-8 pt-14 text-white">
      <div className="section-shell">
        <div className="grid gap-10 border-b border-white/10 pb-10 lg:grid-cols-[1fr_auto_auto] lg:gap-20">
          <div className="max-w-md">
            <a href="#home" className="inline-flex items-center gap-3">
              <img
                src="/transbay-logo.png"
                alt="TransBay Xpress logo"
                className="h-14 w-14 rounded-full border border-white/10 object-cover"
              />
              <div>
                <p className="text-lg font-black">TransBay Xpress Inc.</p>
                <p className="mt-0.5 text-xs uppercase tracking-[0.16em] text-zinc-500">Transportation & Logistics</p>
              </div>
            </a>
            <p className="mt-5 text-sm leading-7 text-zinc-500">
              Professional interstate trucking and freight brokerage solutions based in Manteca, California.
            </p>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-zinc-500">Navigation</p>
            <div className="mt-5 grid gap-3">
              {navigation.map((item) => (
                <a key={item.href} href={item.href} className="text-sm font-semibold text-zinc-300 hover:text-lime-400">
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-zinc-500">Credentials</p>
            <div className="mt-5 grid gap-3 text-sm text-zinc-300">
              <p>USDOT {company.usdot}</p>
              <p>MC {company.mc}</p>
              <p>{company.operatingAuthority}</p>
              <a href={`tel:${company.phoneHref}`} className="mt-2 inline-flex items-center gap-2 font-bold text-lime-400">
                <Icon name="phone" size={16} />
                {company.phone}
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-7 text-xs text-zinc-600 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} TransBay Xpress Inc. All rights reserved.</p>
          <p>Authorized interstate carrier & freight brokerage</p>
        </div>
      </div>
    </footer>
  );
}
