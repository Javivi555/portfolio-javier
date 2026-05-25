import SectionTitle from './SectionTitle'

function Contact() {
  return (
    <section>
      <SectionTitle id="contacto" eyebrow="Contacto" title="Hablemos" />
      <div className="rounded-2xl border border-slate-200 bg-slate-900 p-6 text-slate-100 md:p-8">
        <p className="text-base leading-relaxed text-slate-200 md:text-lg">
          Si quieres colaborar en proyectos de BI, automatización o prototipos de programación e IA aplicada, puedes
          escribirme por email o conectar conmigo en LinkedIn y GitHub.
        </p>
        <ul className="mt-6 space-y-2 text-sm md:text-base">
          <li>
            Email:{' '}
            <a className="font-semibold text-white underline decoration-slate-400" href="mailto:javierec555@gmail.com">
              javierec555@gmail.com
            </a>
          </li>
          <li>
            LinkedIn:{' '}
            <a className="font-semibold text-white underline decoration-slate-400" href="https://www.linkedin.com/in/javier-escobar-criado-9115b1325/" target="_blank" rel="noopener noreferrer">
              linkedin.com/in/javier-escobar-criado-9115b1325
            </a>
          </li>
          <li>
            GitHub:{' '}
            <a className="font-semibold text-white underline decoration-slate-400" href="https://github.com/Javivi555" target="_blank" rel="noopener noreferrer">
              github.com/Javivi555
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Contact
