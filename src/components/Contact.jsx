import SectionTitle from './SectionTitle'

function Contact() {
  return (
    <section>
      <SectionTitle id="contacto" eyebrow="Contacto" title="Hablemos" />
      <div className="rounded-2xl border border-slate-200 bg-slate-900 p-6 text-slate-100 md:p-8">
        <p className="text-base leading-relaxed text-slate-200 md:text-lg">
          Si quieres colaborar en proyectos de BI, automatización o IA aplicada, puedes escribirme por email o
          conectar conmigo en LinkedIn y GitHub.
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
            <a className="font-semibold text-white underline decoration-slate-400" href="https://www.linkedin.com/in/tu-linkedin" target="_blank" rel="noreferrer">
              linkedin.com/in/tu-linkedin
            </a>
          </li>
          <li>
            GitHub:{' '}
            <a className="font-semibold text-white underline decoration-slate-400" href="https://github.com/tu-usuario" target="_blank" rel="noreferrer">
              github.com/tu-usuario
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Contact
