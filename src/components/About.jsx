import { company } from "../data/company";
import Icon from "./Icons";
import SectionHeading from "./SectionHeading";

const commitments = [
  "Clear pickup and delivery coordination",
  "Professional, safety-conscious drivers",
  "Responsive dispatch communication",
  "Flexible carrier and brokerage capacity",
];

export default function About() {
  return (
    <section id="about" className="section-padding overflow-hidden bg-zinc-50">
      <div className="section-shell grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <div className="relative order-2 lg:order-1">
          <div className="absolute -left-8 -top-8 h-44 w-44 rounded-full bg-lime-300/45 blur-3xl" />
          <div className="relative overflow-hidden rounded-[2rem] bg-zinc-950 p-7 text-white shadow-[0_30px_80px_rgba(0,0,0,0.2)] sm:p-9">
            <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:34px_34px]" />
            <div className="relative">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-lime-400">Company Snapshot</p>
              <h3 className="mt-4 text-3xl font-black tracking-[-0.04em] sm:text-4xl">
                Built to keep freight moving.
              </h3>
              <p className="mt-4 max-w-xl text-sm leading-7 text-zinc-400 sm:text-base">
                Operating from California’s Central Valley, TransBay Xpress combines fleet capacity,
                driver experience, and brokerage flexibility to support interstate transportation needs.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <SnapshotCard icon="truck" label="Fleet" value={`${company.fleetSize} power units`} />
                <SnapshotCard icon="users" label="Team" value={`${company.drivers} drivers`} />
                <SnapshotCard icon="route" label="Coverage" value="Interstate U.S." />
                <SnapshotCard icon="building" label="Head Office" value="Manteca, CA" />
              </div>

              <div className="mt-8 rounded-2xl border border-lime-400/20 bg-lime-400/10 p-5">
                <p className="text-sm font-bold text-lime-300">Operational focus</p>
                <p className="mt-2 text-sm leading-6 text-zinc-300">
                  General freight, dry bulk commodities, beverages, paper products, and utilities-related cargo.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <SectionHeading
            eyebrow="About TransBay"
            title="A transportation partner focused on reliability, communication, and compliance."
            description="We understand that every shipment carries a deadline, a customer promise, and operational risk. Our approach is direct: plan carefully, communicate clearly, and execute professionally."
          />

          <div className="mt-8 grid gap-4">
            {commitments.map((commitment) => (
              <div key={commitment} className="flex items-start gap-3 rounded-2xl border border-zinc-200 bg-white p-4">
                <Icon name="check" size={21} className="mt-0.5 shrink-0 text-lime-600" />
                <p className="text-sm font-semibold leading-6 text-zinc-700">{commitment}</p>
              </div>
            ))}
          </div>

          <a href="#contact" className="mt-8 inline-flex items-center gap-2 text-sm font-black text-zinc-950">
            Work with TransBay Xpress
            <Icon name="arrowRight" size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}

function SnapshotCard({ icon, label, value }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-5">
      <Icon name={icon} className="text-lime-400" size={23} />
      <p className="mt-5 text-[10px] font-bold uppercase tracking-[0.18em] text-zinc-500">{label}</p>
      <p className="mt-1.5 text-base font-bold text-white">{value}</p>
    </div>
  );
}
