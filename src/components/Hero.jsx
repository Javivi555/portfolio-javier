function Hero() {
  return (
    <section id="inicio" className="scroll-mt-28 pb-16 pt-8 md:pb-20 md:pt-12">
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-center">
        <div>
          <p className="mb-4 inline-flex rounded-full border border-sky-300/20 bg-sky-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-sky-200">
            Portfolio Profesional
          </p>
          <h1 className="max-w-4xl text-4xl font-semibold text-white md:text-6xl">
            Javier Escobar Criado
          </h1>
          <p className="mt-4 text-sm font-semibold uppercase tracking-[0.14em] text-slate-300 md:text-base">
            Matemático y Data Analyst | Power BI · SQL · Automation
          </p>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-slate-300 md:text-lg">
            Convierto datos operativos en información clara para tomar mejores decisiones: dashboards, métricas de
            negocio y automatización de procesos.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#proyectos" className="rounded-lg bg-gradient-to-r from-sky-500 to-indigo-500 px-5 py-2.5 text-sm font-semibold !text-white shadow-lg shadow-sky-950/40 transition hover:from-sky-400 hover:to-indigo-400">
              Ver proyectos
            </a>
            <a href="https://www.linkedin.com/in/javier-escobar-criado-9115b1325/" target="_blank" rel="noopener noreferrer" className="rounded-lg border border-white/10 bg-white/[0.04] px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-sky-300/30 hover:bg-white/[0.08] hover:text-white">
              LinkedIn
            </a>
            <a href="https://github.com/Javivi555" target="_blank" rel="noopener noreferrer" className="rounded-lg border border-white/10 bg-white/[0.04] px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-sky-300/30 hover:bg-white/[0.08] hover:text-white">
              GitHub
            </a>
            <a href="#contacto" className="rounded-lg border border-white/10 bg-white/[0.04] px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-sky-300/30 hover:bg-white/[0.08] hover:text-white">
              Contacto
            </a>
          </div>
        </div>

        <aside className="glass-panel overflow-hidden rounded-2xl p-5">
          <div className="hero-visual rounded-xl border border-white/10 bg-slate-950 p-5">
            <div className="flex items-center justify-between text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-400">
              <span>Data Analyst</span>
              <span>BI</span>
            </div>
            <div className="mt-12 space-y-3">
              {['Power BI', 'SQL', 'Automation'].map((item) => (
                <div key={item} className="flex items-center justify-between rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2">
                  <span className="text-sm font-medium text-slate-200">{item}</span>
                  <span className="h-2 w-16 rounded-full bg-gradient-to-r from-sky-400/80 to-indigo-400/80" />
                </div>
              ))}
            </div>
          </div>
          <div className="mt-5">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">Enfoque</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {['Big Data', 'Visual Analytics', 'Business Intelligence', 'Microsoft 365'].map((item) => (
                <span key={item} className="rounded-full border border-sky-300/15 bg-sky-300/10 px-3 py-1 text-xs font-medium text-sky-100">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </section>
  )
}

export default Hero
