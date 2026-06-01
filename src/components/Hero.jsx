function Hero() {
  return (
    <section className="mb-16 border-b border-slate-200 pb-12 md:mb-20 md:pb-16">
      <p className="mb-3 inline-flex rounded-full border border-slate-300 px-3 py-1 text-xs font-medium text-slate-600">
        Portfolio Profesional
      </p>
      <h1 className="text-3xl font-semibold text-slate-900 md:text-5xl">Javier Escobar Criado</h1>
      <p className="mt-3 text-sm font-medium uppercase tracking-[0.12em] text-slate-600 md:text-base">
        Matemático y Data Analyst | Power BI · SQL · Automation
      </p>
      <p className="mt-6 max-w-3xl text-base leading-relaxed text-slate-700 md:text-lg">
        Convierto datos operativos en información clara para tomar mejores decisiones: dashboards, métricas de
        negocio y automatización de procesos.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <a href="#proyectos" className="rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-semibold !text-white">
          Ver proyectos
        </a>
        <a href="https://www.linkedin.com/in/javier-escobar-criado-9115b1325/" target="_blank" rel="noopener noreferrer" className="rounded-lg border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50">
          LinkedIn
        </a>
        <a href="https://github.com/Javivi555" target="_blank" rel="noopener noreferrer" className="rounded-lg border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50">
          GitHub
        </a>
        <a href="#contacto" className="rounded-lg border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50">
          Contacto
        </a>
      </div>
    </section>
  )
}

export default Hero
