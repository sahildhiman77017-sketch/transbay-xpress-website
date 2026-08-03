import { authorityItems } from "../data/company";
import Icon from "./Icons";

export default function Authority() {
  return (
    <section id="authority" className="relative overflow-hidden bg-zinc-950 py-20 text-white sm:py-24 lg:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(182,245,0,0.15),transparent_32%),radial-gradient(circle_at_100%_100%,rgba(182,245,0,0.08),transparent_35%)]" />
      <div className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)] [background-size:52px_52px]" />

      <div className="section-shell relative">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-lime-400">
              <span className="h-px w-8 bg-lime-400" />
              Operating credentials
            </p>
            <h2 className="text-balance text-4xl font-black tracking-[-0.045em] text-white sm:text-5xl">
              Authorized to move freight interstate.
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-8 text-zinc-400 lg:justify-self-end">
            Our federal carrier identifiers and operating profile are presented clearly so customers and partners
            can verify the organization they are working with.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {authorityItems.map((item, index) => (
            <article
              key={item.label}
              className="group rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm transition-colors hover:border-lime-400/40 hover:bg-white/[0.06] sm:p-7"
            >
              <div className="flex items-start justify-between gap-5">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-zinc-500">{item.label}</p>
                  <p className={`mt-3 font-black tracking-[-0.03em] text-white ${index < 2 ? "text-3xl" : "text-xl"}`}>
                    {item.value}
                  </p>
                </div>
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-lime-400 text-zinc-950">
                  <Icon name={index < 2 ? "shield" : index === 2 ? "check" : "route"} size={22} />
                </div>
              </div>
              <p className="mt-5 border-t border-white/10 pt-5 text-sm leading-6 text-zinc-400">
                {item.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-4 rounded-3xl border border-lime-400/20 bg-lime-400/10 p-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-4">
            <Icon name="shield" size={27} className="mt-0.5 shrink-0 text-lime-400" />
            <div>
              <p className="font-bold text-white">Authorized For Hire</p>
              <p className="mt-1 text-sm leading-6 text-zinc-400">
                Interstate transportation operations across the United States.
              </p>
            </div>
          </div>
          <span className="rounded-full border border-lime-400/30 bg-lime-400/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-lime-300">
            Active company profile
          </span>
        </div>
      </div>
    </section>
  );
}
