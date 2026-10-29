import { useEffect, useState } from 'react'

import {

  ArrowDownRight, ArrowRight, AudioLines, Baby, BookOpen, Brain,

  CheckCircle2, ChevronDown, GraduationCap, HeartHandshake, MapPin,

  Menu, MessageCircle, Mic2, MoveUpRight, Stethoscope, Users, Volume2, X

} from 'lucide-react'



const WHATSAPP_NUMBER = '558381470314'

const WHATSAPP_MESSAGE = 'Olá! Vim pelo site da Fono Helmana e gostaria de agendar uma consulta ou tirar uma dúvida.'

const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`



const services = [

  {

    icon: Baby,

    title: 'Crianças e adolescentes',

    description: 'Acompanhamento de atrasos de fala, trocas na fala, gagueira, transtornos do neurodesenvolvimento, funções orofaciais e questões vocais.',

    tag: 'Desenvolvimento e comunicação',

  },

  {

    icon: Volume2,

    title: 'Adultos',

    description: 'Cuidado em fluência, voz, motricidade orofacial e comunicação, incluindo demandas relacionadas ao neurodesenvolvimento e à performance vocal.',

    tag: 'Voz, fala e fluência',

  },

  {

    icon: Users,

    title: 'Consultoria empresarial',

    description: 'Consultorias e treinamentos de comunicação para pessoas e equipes, com foco em clareza, expressividade e confiança ao se comunicar.',

    tag: 'Comunicação profissional',

  },

]



const results = [

  {

    eyebrow: 'DESENVOLVIMENTO DA FALA',

    title: 'Mais palavras, novas possibilidades',

    description: 'A criança iniciou a terapia aos 1 ano e 5 meses, usando pouco mais de cinco palavras. Após três meses de acompanhamento, já apresentava um repertório de cerca de 200 palavras.',

    image: '/fotos/resultado.1.jpeg',

    imageAlt: 'Relato de acompanhamento sobre desenvolvimento da fala',

  },

  {

    eyebrow: 'FLUÊNCIA',

    title: 'Evolução no tratamento da gagueira',

    description: 'Ao longo de oito meses, o acompanhamento combinou prática baseada em evidências, constância e participação da família para reduzir significativamente as disfluências.',

    image: '/fotos/resultado2.jpeg',

    imageAlt: 'Relato de evolução no tratamento de fluência',

  },

  {

    eyebrow: 'FONOLOGIA',

    title: 'Conquista de novos sons da fala',

    description: 'Em aproximadamente cinco meses de terapia, com empenho e realização dos exercícios, o paciente organizou o repertório fonológico e alcançou a alta terapêutica.',

    image: '/fotos/resultado3-2.jpeg',

    imageAlt: 'Relato de evolução em transtorno fonológico',

  },

]



const training = [

  {

    title: 'Formação e capacitações',

    icon: GraduationCap,

    text: 'Graduação em Fonoaudiologia pela Universidade Federal da Paraíba e pós-graduação em andamento em Transtorno do Espectro Autista pelo CBI of Miami. Capacitações em ABA, Denver, DTTC (apraxia de fala), oratória, coach vocal, Comunicação Aumentativa e Alternativa, terapia de fluência, musicoterapia, funções orofaciais, fotobiomodulação aplicada à voz e VB-MAPP.',

  },

  {

    title: 'Experiência acadêmica e clínica',

    icon: BookOpen,

    text: 'Atuação em extensão e pesquisa em fluência e voz, avaliação auditiva em bebês, monitoria e palestras em congresso de Fonoaudiologia, além de estágios supervisionados em voz, disfagia, motricidade orofacial e atendimento hospitalar.',

  },

]



function SectionHeading({ eyebrow, title, description, centered = false }) {

  return (

    <div className={`section-heading ${centered ? 'is-centered' : ''}`}>

      {eyebrow && <span className="eyebrow">{eyebrow}</span>}

      <h2>{title}</h2>

      {description && <p>{description}</p>}

    </div>

  )

}



function App() {

  const [menuOpen, setMenuOpen] = useState(false)

  const [activeSection, setActiveSection] = useState('inicio')

  const [countersStarted, setCountersStarted] = useState(false)



  useEffect(() => {

    const sections = document.querySelectorAll('main section[id]')

    const observer = new IntersectionObserver((entries) => {

      entries.forEach((entry) => {

        if (entry.isIntersecting) setActiveSection(entry.target.id)

      })

    }, { rootMargin: '-30% 0px -55% 0px', threshold: 0 })

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()

  }, [])



  useEffect(() => {

    const section = document.getElementById('resultados')

    if (!section || countersStarted) return

    const observer = new IntersectionObserver((entries) => {

      if (entries[0]?.isIntersecting) {

        setCountersStarted(true)

        observer.disconnect()

      }

    }, { threshold: 0.2 })

    observer.observe(section)

    return () => observer.disconnect()

  }, [countersStarted])



  const closeMenu = () => setMenuOpen(false)

  const navItems = [

    ['quem-sou', 'Quem sou'],

    ['atuacao', 'Atuação'],

    ['capacitacoes', 'Capacitações'],

    ['localizacao', 'Localização'],

    ['resultados', 'Resultados'],

  ]



  return (

    <>

      <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>

      <header className="site-header">

        <div className="nav-shell">

          <a className="brand" href="#inicio" aria-label="Helmana Macêdo — página inicial" onClick={closeMenu}>

            <span className="brand-mark"><AudioLines size={22} strokeWidth={1.8} /></span>

            <span className="brand-copy"><strong>Helmana Macêdo</strong><small>FONOAUDIOLOGIA CLÍNICA</small></span>

          </a>



          <button className="menu-toggle" type="button" aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>

            {menuOpen ? <X size={23} /> : <Menu size={23} />}

          </button>



          <nav className={`main-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Navegação principal">

            {navItems.map(([id, label]) => (

              <a key={id} href={`#${id}`} className={activeSection === id ? 'active' : ''} onClick={closeMenu}>{label}</a>

            ))}

            <a className="nav-cta" href="#presente" onClick={closeMenu}>Presente gratuito <ArrowRight size={15} /></a>

          </nav>

        </div>

      </header>



      <main id="conteudo">

        <section id="inicio" className="hero">

          <div className="hero-orb hero-orb-one" aria-hidden="true" />

          <div className="hero-orb hero-orb-two" aria-hidden="true" />

          <div className="container hero-layout">

            <div className="hero-copy">

              <div className="availability"><span /> Atendimento humanizado e individualizado</div>

              <p className="eyebrow">FONOAUDIOLOGIA COM PROPÓSITO</p>

              <h1>Comunicação é conexão. <em>Vamos desenvolver a sua?</em></h1>

              <p className="hero-description">Cuidado fonoaudiológico especializado, acolhedor e orientado por evidências científicas para cada etapa da vida.</p>

              <div className="hero-actions">

                <a className="button button-primary" href={WHATSAPP_URL} target="_blank" rel="noreferrer">Agendar pelo WhatsApp <MoveUpRight size={17} /></a>

                <a className="button button-secondary" href="#atuacao">Conheça minha atuação <ArrowDownRight size={17} /></a>

              </div>

              <div className="hero-proof">

                <div className="proof-icon"><HeartHandshake size={20} /></div>

                <p><strong>Escuta, ciência e acolhimento</strong><span>O cuidado é construído junto com você e sua família.</span></p>

              </div>

            </div>

            <div className="hero-visual">

              <div className="portrait-frame">

                <img src="/fotos/perfil.jpeg" alt="Fonoaudióloga Helmana Macêdo" onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement.classList.add('portrait-fallback') }} />

                <div className="portrait-fallback-content"><AudioLines size={54} /><span>Helmana Macêdo</span><small>Fonoaudióloga</small></div>

              </div>

              <div className="floating-note note-top"><span className="note-icon"><Mic2 size={19} /></span><span><strong>Voz e fluência</strong><small>Comunicação com confiança</small></span></div>

              <div className="floating-note note-bottom"><span className="note-icon note-icon-light"><Brain size={19} /></span><span><strong>Desenvolvimento</strong><small>Respeitando cada jornada</small></span></div>

              <div className="portrait-caption"><span>HM</span><p>Um cuidado que respeita<br />a individualidade.</p></div>

            </div>

          </div>

          <div className="hero-bottom container"><span>JOÃO PESSOA · PARAÍBA</span><a href="#quem-sou">Conheça a profissional <ArrowDownRight size={15} /></a></div>

        </section>



        <section id="quem-sou" className="section about-section">

          <div className="container about-layout">

            <div className="about-aside">

              <span className="section-index">01 / QUEM SOU</span>

              <div className="about-quote">“Cada pessoa tem sua própria forma de se expressar. Meu papel é ajudar essa voz a encontrar caminhos.”</div>

              <div className="signature">Helmana Macêdo <span>Fonoaudióloga</span></div>

            </div>

            <div className="about-content">

              <SectionHeading eyebrow="PRAZER, SOU HELMANA" title="Ciência e acolhimento em cada etapa." />

              <p>Olá! Sou Helmana Macêdo, fonoaudióloga formada pela Universidade Federal da Paraíba. Acredito em um atendimento de alto padrão, humanizado e baseado em evidências científicas — com objetivos construídos de forma individualizada e atenção às necessidades de cada paciente e família.</p>

              <p>Meu trabalho é apoiar o desenvolvimento da comunicação, da fala, da linguagem, da voz e das funções orofaciais com cuidado, parceria e clareza durante todo o processo terapêutico.</p>

              <a className="text-link" href={WHATSAPP_URL} target="_blank" rel="noreferrer">Vamos conversar sobre suas necessidades <ArrowRight size={17} /></a>

              <div className="values-row">

                <div><CheckCircle2 size={18} /><span>Plano individualizado</span></div>

                <div><CheckCircle2 size={18} /><span>Prática baseada em evidências</span></div>

                <div><CheckCircle2 size={18} /><span>Parceria com a família</span></div>

              </div>

            </div>

          </div>

        </section>



        <section id="atuacao" className="section services-section">

          <div className="container">

            <SectionHeading eyebrow="COMO POSSO AJUDAR" title="Cuidado para diferentes histórias." description="Cada fase da vida traz necessidades próprias. O atendimento é pensado a partir da pessoa, dos seus objetivos e do contexto em que vive." centered />

            <div className="service-grid">

              {services.map(({ icon: Icon, title, description, tag }, index) => (

                <article className="service-card" key={title}>

                  <div className="service-card-top"><span className="service-number">0{index + 1}</span><span className="service-icon"><Icon size={25} strokeWidth={1.7} /></span></div>

                  <h3>{title}</h3>

                  <p>{description}</p>

                  <div className="service-card-bottom"><span>{tag}</span><a href={WHATSAPP_URL} target="_blank" rel="noreferrer" aria-label={`Consultar sobre ${title}`}><ArrowRight size={18} /></a></div>

                </article>

              ))}

            </div>

          </div>

        </section>



        <section id="capacitacoes" className="section training-section">

          <div className="container training-layout">

            <div className="training-intro">

              <span className="section-index">02 / FORMAÇÃO CONTÍNUA</span>

              <SectionHeading eyebrow="CONHECIMENTO EM MOVIMENTO" title="Aprender para cuidar melhor." description="A formação contínua amplia as possibilidades terapêuticas e fortalece decisões clínicas responsáveis." />

              <div className="training-decoration"><Stethoscope size={26} /><span>Atualização profissional como parte do cuidado.</span></div>

            </div>

            <div className="training-list">

              {training.map(({ title, icon: Icon, text }, index) => (

                <article className="training-item" key={title}>

                  <span className="training-index">0{index + 1}</span>

                  <div className="training-icon"><Icon size={22} /></div>

                  <div><h3>{title}</h3><p>{text}</p></div>

                  <ChevronDown className="training-chevron" size={18} />

                </article>

              ))}

            </div>

          </div>

        </section>



        <section id="localizacao" className="section location-section">

          <div className="container location-layout">

            <div className="location-copy">

              <span className="section-index">03 / ONDE ESTAMOS</span>

              <SectionHeading eyebrow="LOCALIZAÇÃO" title="Um espaço para acolher você." description="Encontre o consultório em João Pessoa, Paraíba. Se precisar de ajuda para chegar, fale comigo pelo WhatsApp." />

              <div className="address-card"><span className="address-icon"><MapPin size={22} /></span><div><strong>Delta Center</strong><p>Rua Empresário João Rodrigues Alves, 125<br />Bancários, João Pessoa – PB<br />CEP 58051-022</p><a href="https://www.google.com/maps/search/?api=1&query=Delta+Center%2C+Jo%C3%A3o+Pessoa%2C+PB" target="_blank" rel="noreferrer">Abrir rota no Google Maps <MoveUpRight size={15} /></a></div></div>

            </div>

            <div className="map-frame">

              <iframe title="Mapa de localização do Delta Center, João Pessoa" src="https://www.google.com/maps?q=Delta%20Center%2C%20Jo%C3%A3o%20Pessoa%2C%20PB&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />

              <div className="map-label"><MapPin size={17} /><span>Delta Center <small>Bancários · João Pessoa</small></span></div>

            </div>

          </div>

        </section>



        <section id="resultados" className="section results-section">

          <div className="container">

            <div className="results-heading-row">

              <SectionHeading eyebrow="HISTÓRIAS DE EVOLUÇÃO" title="Cada conquista importa." description="Alguns exemplos de trajetórias terapêuticas. Os resultados variam de pessoa para pessoa, conforme suas necessidades e o plano de cuidado." />

              <div className="results-stamp"><HeartHandshake size={22} /><span>Progresso com<br />acolhimento</span></div>

            </div>

            <div className="results-grid">

              {results.map((item, index) => (

                <article className="result-card" key={item.title}>

                  <div className={`result-image-wrap ${index === 2 ? 'result-image-wrap-third' : 'result-image-wrap-standard'}`}>

                    <img src={item.image} alt={item.imageAlt} loading="lazy" onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement.classList.add('image-missing') }} />

                    <div className="result-image-placeholder"><AudioLines size={30} /><span>Adicione a imagem do relato</span></div>

                    <span className="result-count">0{index + 1}</span>

                  </div>

                  <div className="result-body"><span className="eyebrow">{item.eyebrow}</span><h3>{item.title}</h3><p>{item.description}</p></div>

                </article>

              ))}

            </div>

            <p className="privacy-note"><CheckCircle2 size={16} /> Relatos apresentados com finalidade informativa. Preserve autorizações de uso de imagem e dados dos pacientes antes de publicar.</p>

          </div>

        </section>



        <section id="presente" className="gift-section">

          <div className="gift-pattern" aria-hidden="true" />

          <div className="container gift-layout">

            <div className="gift-art"><div className="gift-circle"><BookOpen size={66} strokeWidth={1.2} /><span>GUIA GRATUITO</span></div><span className="gift-spark spark-one">✳</span><span className="gift-spark spark-two">✳</span></div>

            <div className="gift-copy"><span className="eyebrow">UM CARINHO PARA SUA FAMÍLIA</span><h2>Um presente para estimular a fala do seu bebê. <em>🎁</em></h2><p>Eu e a fonoaudióloga Bárbara Carolina preparamos um e-book gratuito para mamães, papais e cuidadores com os primeiros passos para estimular a comunicação dos pequenos.</p><a className="button button-cream" href="/ebook/EbookEstimule%20(1).pdf" download onClick={(e) => { if (!e.currentTarget.href) e.preventDefault() }}>Baixar e-book grátis <ArrowRight size={17} /></a><small>Material educativo gratuito. Aproveite e compartilhe com quem precisa.</small></div>

          </div>

        </section>

      </main>



      <footer className="site-footer">

        <div className="container footer-main">

          <a className="brand footer-brand" href="#inicio"><span className="brand-mark"><AudioLines size={22} /></span><span className="brand-copy"><strong>Helmana Macêdo</strong><small>FONOAUDIOLOGIA CLÍNICA</small></span></a>

          <p>Comunicação, cuidado e desenvolvimento<br />em todas as fases da vida.</p>

          <div className="footer-links"><a href="https://www.instagram.com/fonohelmana" target="_blank" rel="noreferrer">Instagram <MoveUpRight size={15} /></a><a href={WHATSAPP_URL} target="_blank" rel="noreferrer">WhatsApp <MoveUpRight size={15} /></a></div>

        </div>

        <div className="container footer-bottom"><span>© {new Date().getFullYear()} Helmana Macêdo. Todos os direitos reservados.</span><a href="#inicio">Voltar ao topo ↑</a></div>

      </footer>



      <a className="floating-whatsapp" href={WHATSAPP_URL} target="_blank" rel="noreferrer" aria-label="Entre em contato com Helmana pelo WhatsApp"><MessageCircle size={25} /><span>Fale comigo</span></a>

    </>

  )

}



export default App
