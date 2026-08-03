import { company } from "../data/company";
import Icon from "./Icons";

const trustPoints = ["Authorized for hire", "Interstate operations", "25-truck fleet"];

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-zinc-50 pb-20 pt-36 sm:pt-44 lg:pb-28">
      <div className="hero-grid absolute inset-0 opacity-60" />
      <div className="absolute -left-32 top-48 h-80 w-80 rounded-full bg-lime-300/30 blur-3xl" />
      <div className="absolute -right-36 top-24 h-96 w-96 rounded-full bg-lime-200/40 blur-3xl" />

      <div className="section-shell relative grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
        <div>
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-lime-300 bg-lime-100/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-lime-900">
            <Icon name="shield" size={16} />
            Reliable freight. Professional execution.
          </div>

          <h1 className="max-w-4xl text-balance text-5xl font-black leading-[0.95] tracking-[-0.06em] text-zinc-950 sm:text-6xl lg:text-7xl xl:text-[5.4rem]">
            Freight moves better with a carrier you can
            <span className="relative ml-3 inline-block">
              trust.
              <span className="absolute -bottom-2 left-0 h-2 w-full -rotate-1 bg-lime-400/80" />
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-pretty text-lg leading-8 text-zinc-600 sm:text-xl">
            {company.name} delivers professional interstate trucking and freight brokerage solutions from
            Manteca, California—backed by a dedicated fleet, experienced drivers, and responsive dispatch.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#quote" className="btn-primary justify-center sm:justify-start">
              Request a Quote
              <Icon name="arrowRight" size={18} />
            </a>
            <a href="#services" className="btn-secondary justify-center sm:justify-start">
              Explore Services
            </a>
          </div>

          <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3">
            {trustPoints.map((point) => (
              <div key={point} className="flex items-center gap-2 text-sm font-semibold text-zinc-700">
                <Icon name="check" size={18} className="text-lime-600" />
                {point}
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[590px]">
          <div className="absolute -inset-5 rotate-2 rounded-[2.25rem] bg-lime-400/55 blur-sm" />
          <div className="relative overflow-hidden rounded-[2rem] border border-zinc-800 bg-zinc-950 p-5 shadow-[0_35px_90px_rgba(0,0,0,0.28)] sm:p-7">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_0%,rgba(182,245,0,0.20),transparent_40%)]" />
            <div className="relative flex items-center justify-between border-b border-white/10 pb-5">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-lime-400">Carrier Profile</p>
                <p className="mt-1 text-sm text-zinc-400">Verified company information</p>
              </div>
              <span className="inline-flex items-center gap-2 rounded-full border border-lime-400/30 bg-lime-400/10 px-3 py-1.5 text-xs font-bold text-lime-300">
                <span className="h-2 w-2 rounded-full bg-lime-400 shadow-[0_0_12px_rgba(182,245,0,0.8)]" />
                Authorized
              </span>
            </div>

            <div className="relative my-7 flex justify-center">
              <div className="relative rounded-full bg-white p-2 shadow-[0_0_45px_rgba(182,245,0,0.18)]">
                <img
                  src="/transbay-logo.png"
                  alt="TransBay Xpress truck logo"
                  className="h-60 w-60 rounded-full object-cover sm:h-72 sm:w-72"
                />
              </div>
            </div>

            <div className="relative grid grid-cols-2 gap-3">
              <ProfileDetail label="USDOT" value={company.usdot} />
              <ProfileDetail label="MC Number" value={company.mc} />
              <ProfileDetail label="Power Units" value={`${company.fleetSize} Trucks`} />
              <ProfileDetail label="Drivers" value={`${company.drivers} Professionals`} />
            </div>

            <div className="relative mt-4 flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-sm leading-6 text-zinc-300">
              <Icon name="mapPin" size={20} className="mt-0.5 shrink-0 text-lime-400" />
              <span>{company.address}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProfileDetail({ label, value }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
      <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-zinc-500">{label}</p>
      <p className="mt-2 text-sm font-bold text-white sm:text-base">{value}</p>
    </div>
  );
}
