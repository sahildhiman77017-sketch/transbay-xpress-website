import { services } from "../data/company";
import Icon from "./Icons";
import SectionHeading from "./SectionHeading";

export default function Services() {
  return (
    <section id="services" className="section-padding bg-white">
      <div className="section-shell">
        <SectionHeading
          eyebrow="What we do"
          title="Transportation solutions built around dependable execution."
          description="From company-owned capacity to flexible brokerage support, TransBay Xpress helps customers move freight with responsive communication and professional coordination."
          align="center"
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <article
              key={service.title}
              className="service-card group relative overflow-hidden rounded-3xl border border-zinc-200 bg-zinc-50 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-lime-300 hover:bg-white hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
            >
              <span className="absolute right-6 top-5 text-5xl font-black tracking-[-0.08em] text-zinc-200/80 transition-colors group-hover:text-lime-100">
                0{index + 1}
              </span>
              <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-zinc-950 text-lime-400 shadow-sm transition-transform duration-300 group-hover:scale-105">
                <Icon name={service.icon} size={25} />
              </div>
              <h3 className="relative mt-7 max-w-[85%] text-xl font-black tracking-[-0.025em] text-zinc-950">
                {service.title}
              </h3>
              <p className="relative mt-4 text-sm leading-7 text-zinc-600">{service.description}</p>
              <div className="relative mt-6 flex items-center gap-2 text-sm font-bold text-zinc-900">
                Service capability
                <Icon name="arrowRight" size={16} className="transition-transform group-hover:translate-x-1" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
