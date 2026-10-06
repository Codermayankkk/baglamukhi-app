import { useRef, useState } from 'react'
import { FaBed, FaCheck, FaFacebookF, FaFire, FaHandsPraying, FaInstagram, FaWhatsapp, FaXTwitter, FaYoutube } from 'react-icons/fa6'
import { FiVolume2, FiVolumeX } from 'react-icons/fi'
import omChant from './assets/audio/om-chant.mp3'
import temple from './assets/images/temple.jpg'
import devotees from './assets/images/devotees.jpg'
import pilgrims from './assets/images/pilgrims.jpg'
import gathering from './assets/images/gathering.jpg'
import { copy } from './content'

function App() {
  const [language, setLanguage] = useState<'en' | 'hi'>('en')
  const [isPlaying, setIsPlaying] = useState(false)
  const [audioError, setAudioError] = useState(false)
  const [isStarting, setIsStarting] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)
  const t = copy[language]
  const toggleChanting = async () => {
    const audio = audioRef.current
    if (!audio || isStarting) return
    setAudioError(false)
    if (!audio.paused) {
      audio.pause()
      return
    }
    setIsStarting(true)
    audio.volume = 0.45
    try {
      await audio.play()
    } catch {
      setIsPlaying(false)
      setAudioError(true)
    } finally {
      setIsStarting(false)
    }
  }
  const changeLanguage = (next: 'en' | 'hi') => {
    setLanguage(next)
    document.documentElement.lang = next
  }
  const packages = [
    { label: t.dayLabel, title: t.dayTitle, items: [{ icon: FaFire, text: t.hawan }, { icon: FaHandsPraying, text: t.chola }] },
    { label: t.nightLabel, title: t.nightTitle, items: [{ icon: FaBed, text: t.guestHouse }, { icon: FaFire, text: t.hawan }, { icon: FaHandsPraying, text: t.chola }] },
  ]
  return (
    <>
      <audio ref={audioRef} src={omChant} loop preload="none" onPlaying={() => setIsPlaying(true)} onPause={() => setIsPlaying(false)} onError={() => { setIsPlaying(false); setAudioError(true) }} />
      <a className="skip-link" href="#main">{t.skip}</a>
      <header className="site-header">
        <nav className="container navigation" aria-label={t.navLabel}>
          <a className="wordmark" href="#">{t.templeName}</a>
          <div className="nav-links"><a href="#offerings">{t.offeringsLink}</a><a href="#booking">{t.bookingLink}</a></div>
          <div className="nav-controls">
            <div className="language-switch" aria-label={t.languageLabel}>
              <button className={language === 'en' ? 'selected' : ''} aria-pressed={language === 'en'} onClick={() => changeLanguage('en')}>ENG</button>
              <button className={language === 'hi' ? 'selected' : ''} aria-pressed={language === 'hi'} onClick={() => changeLanguage('hi')}>हिंदी</button>
            </div>
            <button className="audio-control" disabled={isStarting} title={isPlaying ? t.audioStop : t.audioStart} aria-label={isPlaying ? t.audioStop : t.audioStart} aria-pressed={isPlaying} onClick={toggleChanting}>
              {isPlaying ? <FiVolume2 aria-hidden="true" /> : <FiVolumeX aria-hidden="true" />} Om · {isPlaying ? 'On' : 'Off'}
            </button>
          </div>
        </nav>
      </header>
      {audioError && <p className="audio-error" role="alert">{t.audioError}</p>}
      <main id="main">
        <section className="container hero" aria-labelledby="welcome-title">
          <div className="hero-copy"><p className="eyebrow">{t.heroLabel}</p><h1 id="welcome-title">{t.heroTitle}</h1><p>{t.heroIntro}</p><p>{t.heroBody}</p><a className="button" href="#offerings">{t.explore}</a></div>
          <img className="hero-image" src={temple} alt={t.templeAlt} fetchPriority="high" width="1800" height="1222" />
        </section>
        <section className="section muted" id="offerings" aria-labelledby="offerings-title">
          <div className="container section-content">
            <div className="section-heading"><p className="eyebrow">{t.journeyLabel}</p><h2 id="offerings-title">{t.journeyTitle}</h2><p>{t.journeyIntro}</p></div>
            <div className="two-columns photo-grid"><img src={devotees} alt={t.devoteesAlt} loading="lazy" width="1100" height="825" /><img src={pilgrims} alt={t.pilgrimsAlt} loading="lazy" width="1100" height="825" /></div>
            <div className="two-columns">
              <article className="offering-card"><p className="eyebrow">{t.stayLabel}</p><h3>{t.stayTitle}</h3><p>{t.stayBody}</p><p className="caption">{t.stayCaption}</p></article>
              <article className="offering-card"><p className="eyebrow">{t.offerLabel}</p><h3>{t.offerTitle}</h3><p>{t.offerBody}</p><p className="caption">{t.offerCaption}</p></article>
            </div>
          </div>
        </section>
        <section className="section" id="booking" aria-labelledby="booking-title">
          <div className="container section-content">
            <div className="section-heading"><p className="eyebrow">{t.bookingLabel}</p><h2 id="booking-title">{t.bookingTitle}</h2><p>{t.bookingIntro}</p></div>
            <div className="two-columns package-grid">{packages.map(pkg => <article className="package-card" key={pkg.title}>
              <div><p className="eyebrow">{pkg.label}</p><h3>{pkg.title}</h3><ul>{pkg.items.map(({ icon: Icon, text }) => <li key={text}><Icon aria-hidden="true" /><span>{text}</span><FaCheck className="included" aria-hidden="true" /></li>)}</ul></div>
              <a className="button" href={`https://wa.me/918959040275?text=${encodeURIComponent(`Namaste, I would like to enquire about the ${pkg.title} at Baglamukhi Mataji Mandir. Please confirm availability and details.`)}`} target="_blank" rel="noopener noreferrer"><FaWhatsapp aria-hidden="true" />{t.book}</a>
            </article>)}</div>
            <p className="booking-note">{t.bookingNote}</p>
          </div>
        </section>
        <section className="section muted" aria-labelledby="guidance-title">
          <div className="container section-content">
            <div className="section-heading"><p className="eyebrow">{t.guidanceLabel}</p><h2 id="guidance-title">{t.guidanceTitle}</h2></div>
            <img className="gathering-image" src={gathering} alt={t.gatheringAlt} loading="lazy" width="1100" height="733" />
            <div className="two-columns guidance-grid"><article><h3>{t.roomTitle}</h3><p>{t.roomBody}</p></article><article><h3>{t.hawanTitle}</h3><p>{t.hawanBody}</p></article></div><p>{t.respectNote}</p>
          </div>
        </section>
        <section className="closing"><div className="container"><h2>{t.closingTitle}</h2><p>{t.closingBody}</p></div></section>
      </main>
      <footer className="container site-footer">
        <a className="footer-wordmark" href="#">{t.templeName}</a>
        <div className="social-icons" aria-hidden="true"><FaInstagram /><FaFacebookF /><FaYoutube /><FaXTwitter /></div>
        <p>{t.footerNote}</p>
      </footer>
    </>
  )
}
export default App
