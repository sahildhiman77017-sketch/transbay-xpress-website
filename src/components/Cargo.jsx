import { company } from "../data/company";
import Icon from "./Icons";
import SectionHeading from "./SectionHeading";

export default function Cargo() {
  return (
    <section className="section-padding bg-white">
      <div className="section-shell">
        <div className="grid items-start gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
          <div className="lg:sticky lg:top-36">
            <SectionHeading
              eyebrow="Cargo capabilities"
              title="Equipped for essential freight categories."
              description="Our operating profile includes a practical mix of general and specialized commodity categories supported by experienced transportation coordination."
            />
            <a href={`tel:${company.phoneHref}`} className="btn-primary mt-8">
              Discuss Your Shipment
              <Icon name="phone" size={17} />
            </a>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {company.cargo.map((item, index) => (
              <article
                key={item}
                className={`group min-h-48 rounded-3xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
                  index === 0
                    ? "border-zinc-950 bg-zinc-950 text-white sm:col-span-2"
                    : "border-zinc-200 bg-zinc-50 text-zinc-950 hover:border-lime-300 hover:bg-white"
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div
                    className={`flex h-11 w-11 items-center justify-center rounded-2xl ${
                      index === 0 ? "bg-lime-400 text-zinc-950" : "bg-white text-zinc-950 shadow-sm"
                    }`}
                  >
                    <Icon name={index === 1 ? "scale" : "package"} size={22} />
                  </div>
                  <span className={`text-xs font-black ${index === 0 ? "text-zinc-600" : "text-zinc-300"}`}>
                    0{index + 1}
                  </span>
                </div>
                <h3 className="mt-8 text-xl font-black tracking-[-0.025em]">{item}</h3>
                <p className={`mt-3 text-sm leading-6 ${index === 0 ? "text-zinc-400" : "text-zinc-600"}`}>
                  Coordinated with clear dispatch communication and professional transportation support.
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
