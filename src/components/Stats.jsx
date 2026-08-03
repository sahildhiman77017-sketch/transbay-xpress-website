import { stats } from "../data/company";

export default function Stats() {
  return (
    <section aria-label="Company statistics" className="relative z-10 -mt-7 pb-16 lg:-mt-10 lg:pb-24">
      <div className="section-shell">
        <div className="grid overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-[0_24px_70px_rgba(0,0,0,0.08)] sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`group relative p-6 sm:p-7 ${index > 0 ? "border-t border-zinc-200 sm:border-t-0 sm:border-l" : ""} ${
                index === 2 ? "sm:border-l-0 lg:border-l" : ""
              } ${index >= 2 ? "sm:border-t lg:border-t-0" : ""}`}
            >
              <p className="text-4xl font-black tracking-[-0.05em] text-zinc-950">{stat.value}</p>
              <p className="mt-2 text-sm font-bold text-zinc-900">{stat.label}</p>
              <p className="mt-1 text-xs text-zinc-500">{stat.detail}</p>
              <span className="absolute bottom-0 left-7 right-7 h-1 rounded-t-full bg-lime-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
