import SectionTitle from './SectionTitle'

function Contact() {
  return (
    <section className="pb-6">
      <SectionTitle id="contacto" eyebrow="Contacto" title="Hablemos" />
      <div className="glass-panel rounded-2xl p-6 md:p-8">
        <ul className="grid gap-3 text-sm md:grid-cols-3 md:text-base">
          <li className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
            <span className="block text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">Email</span>
            <a className="mt-2 block break-words font-semibold text-white underline decoration-sky-300/40 underline-offset-4 transition hover:text-sky-200" href="mailto:javierec555@gmail.com">
              javierec555@gmail.com
            </a>
          </li>
          <li className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
            <span className="block text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">LinkedIn</span>
            <a className="mt-2 block break-words font-semibold text-white underline decoration-sky-300/40 underline-offset-4 transition hover:text-sky-200" href="https://www.linkedin.com/in/javier-escobar-criado-9115b1325/" target="_blank" rel="noopener noreferrer">
              linkedin.com/in/javier-escobar-criado-9115b1325
            </a>
          </li>
          <li className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
            <span className="block text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">GitHub</span>
            <a className="mt-2 block break-words font-semibold text-white underline decoration-sky-300/40 underline-offset-4 transition hover:text-sky-200" href="https://github.com/Javivi555" target="_blank" rel="noopener noreferrer">
              github.com/Javivi555
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Contact
