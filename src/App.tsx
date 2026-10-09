import { useRef, useState } from 'react'
import { FaBars, FaBed, FaCheck, FaFire, FaHandsPraying, FaWhatsapp, FaXmark } from 'react-icons/fa6'
import { FiVolume2, FiVolumeX } from 'react-icons/fi'
import omChant from './assets/audio/om-chant.mp3'
import maaLogo from './assets/images/maa-logo.png'

const announcements = [
  'Weekly Sukh-Shanti Havan every Tuesday at 5 PM – Book now for peace and clarity',
  'Dhan-Lakshmi Prapti Havan every Thursday at 5 PM – Invite wealth and prosperity',
  'Limited slots for Havan & Chola Rasam this month',
]

const navigation = [
  { label: 'Home', href: '#top' },
  { label: 'Havan', href: '#packages' },
  { label: 'Packages', href: '#packages' },
  { label: 'Contact', href: '#contact' },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isStarting, setIsStarting] = useState(false)
  const [audioError, setAudioError] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

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

  return (
    <>
      <audio ref={audioRef} src={omChant} loop preload="none" onPlaying={() => setIsPlaying(true)} onPause={() => setIsPlaying(false)} onError={() => setAudioError(true)} />
      <a className="skip-link" href="#content">Skip to content</a>
      <header>
        <div className="utility-bar">
          <div className="shell utility-inner">
            <div className="contact-links">
              <a href="https://wa.me/919425428725" target="_blank" rel="noreferrer"><FaWhatsapp aria-hidden="true" /> +91 94254 28725</a>
            </div>
            <div className="utility-actions">
              <button className={`chant-button ${isPlaying ? 'playing' : ''}`} onClick={toggleChanting} disabled={isStarting} aria-pressed={isPlaying} aria-label={isPlaying ? 'Pause Om chanting' : 'Play Om chanting'}>
                {isPlaying ? <FiVolume2 aria-hidden="true" /> : <FiVolumeX aria-hidden="true" />} Om · {isPlaying ? 'On' : 'Off'}
              </button>
              <a className="pill-link" href="#packages">Puja Seva</a>
            </div>
          </div>
        </div>
        <div className="main-nav">
          <div className="shell nav-inner">
            <a className="brand" href="#top" aria-label="Priyanshu Pujari, Baglamukhi Mataji home">
              <img src={maaLogo} alt="Maa Baglamukhi" />
              <span><strong>Priyanshu Pujari</strong><small>Maa Baglamukhi Mandir, Nalkheda</small></span>
            </a>
            <button className="menu-button" onClick={() => setMenuOpen(value => !value)} aria-expanded={menuOpen} aria-controls="primary-navigation" aria-label={menuOpen ? 'Close menu' : 'Open menu'}>
              {menuOpen ? <FaXmark /> : <FaBars />}
            </button>
            <nav id="primary-navigation" className={menuOpen ? 'nav-list open' : 'nav-list'} aria-label="Primary navigation">
              {navigation.map(item => <a key={item.label} href={item.href} onClick={() => setMenuOpen(false)}>{item.label}</a>)}
            </nav>
          </div>
        </div>
        <div className="ticker" aria-label="Temple announcements">
          <div className="ticker-track">{[...announcements, ...announcements].map((item, index) => <span key={`${item}-${index}`}>{item} <b>• Jai Maa Baglamukhi 🙏</b></span>)}</div>
        </div>
      </header>
      {audioError && <p className="audio-error" role="alert">Om chanting play nahi ho saka. Speaker button dobara press karein.</p>}

      <main id="content">
        <section className="page-banner" id="top">
          <div className="banner-flower left" aria-hidden="true">✦</div>
          <h1>Devotional Packages</h1>
          <p>Hawan, Chola Seva aur Guest House booking</p>
          <div className="banner-flower right" aria-hidden="true">✦</div>
        </section>
        <section className="packages-section" id="packages">
          <div className="shell">
            <div className="section-title">
              <p>PLAN WITH PEACE OF MIND</p>
              <h2>Choose your devotional package</h2>
              <span>Same-day pooja ya stay ke saath complete seva package choose karein. Date aur availability WhatsApp par confirm hogi.</span>
            </div>
            <div className="packages-grid">
              <article className="package-card">
                <div className="package-number">01</div>
                <p className="package-label">SAME DAY POOJA PACKAGE</p>
                <h3>1 Day Package</h3>
                <ul>
                  <li><FaFire aria-hidden="true" /><span>Hawan Booking</span><FaCheck aria-hidden="true" /></li>
                  <li><FaHandsPraying aria-hidden="true" /><span>Chola Booking</span><FaCheck aria-hidden="true" /></li>
                </ul>
                <a href="https://wa.me/919425428725?text=Jai%20Maa%20Baglamukhi%2C%20mujhe%201%20Day%20Package%20book%20karna%20hai." target="_blank" rel="noreferrer"><FaWhatsapp aria-hidden="true" /> Book Package</a>
              </article>
              <article className="package-card featured">
                <div className="popular-tag">COMPLETE SEVA</div>
                <div className="package-number">02</div>
                <p className="package-label">STAY KE SAATH COMPLETE BOOKING</p>
                <h3>1 Day – 1 Night Package</h3>
                <ul>
                  <li><FaBed aria-hidden="true" /><span>Guest House</span><FaCheck aria-hidden="true" /></li>
                  <li><FaFire aria-hidden="true" /><span>Hawan Booking</span><FaCheck aria-hidden="true" /></li>
                  <li><FaHandsPraying aria-hidden="true" /><span>Chola Booking</span><FaCheck aria-hidden="true" /></li>
                </ul>
                <a href="https://wa.me/919425428725?text=Jai%20Maa%20Baglamukhi%2C%20mujhe%201%20Day%20-%201%20Night%20Package%20book%20karna%20hai." target="_blank" rel="noreferrer"><FaWhatsapp aria-hidden="true" /> Book Package</a>
              </article>
            </div>
            <p className="package-note">Booking, contribution amount aur room availability temple team WhatsApp par confirm karegi. Website par koi online payment collect nahi kiya jata.</p>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-main">
          <div className="shell footer-grid">
            <div className="footer-about"><div className="footer-brand"><img src={maaLogo} alt="Maa Baglamukhi" /><span><strong>Priyanshu Pujari</strong><small>Maa Baglamukhi Mandir, Nalkheda</small></span></div><p>Maa Baglamukhi does not merely bless, She rewrites destiny for her bhaktas. Surrender your doubts, fears and battles at Her golden feet.</p></div>
            <div><h3>Useful Links</h3><ul><li><a href="#top">Home</a></li><li><a href="#packages">Packages</a></li><li><a href="#contact">Contact Us</a></li></ul></div>
            <div><h3>Puja</h3><ul><li><a href="#packages">Victory & Protection</a></li><li><a href="#packages">Spiritual Empowerment</a></li><li><a href="#packages">Prosperity & Growth</a></li><li><a href="#packages">Special Havan</a></li></ul></div>
            <div id="contact"><h3>Contact Us</h3><ul className="contact-list"><li><FaWhatsapp /><a href="https://wa.me/919425428725" target="_blank" rel="noreferrer">+91 94254 28725</a></li></ul></div>
          </div>
        </div>
        <div className="copyright">Baglamukhi Mataji © 2026. All rights reserved.</div>
      </footer>
      <a className="floating-whatsapp" href="https://wa.me/919425428725?text=Jai%20Maa%20Baglamukhi%2C%20mujhe%20seva%20aur%20booking%20ki%20jaankari%20chahiye." target="_blank" rel="noreferrer" aria-label="Chat with Priyanshu Pujari on WhatsApp"><FaWhatsapp /></a>
    </>
  )
}

export default App
