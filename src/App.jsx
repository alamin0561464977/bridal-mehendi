import { useEffect, useState } from 'react'
import './App.css'

const name = 'রংরেখা';

const services = [
  {
    number: '০১',
    title: 'ব্রাইডাল মেহেদি',
    text: 'তোমার গল্প, পছন্দ আর সাজের সঙ্গে মিলিয়ে একদম নিজের মতো নকশা।',
    icon: '✳',
  },
  {
    number: '০২',
    title: 'গায়ে হলুদের আয়োজন',
    text: 'উৎসবের দিনে পরিবার ও বন্ধুদের জন্য সুন্দর মেহেদির আয়োজন।',
    icon: '❋',
  },
  {
    number: '০৩',
    title: 'কাস্টম ডিজাইন',
    text: 'নাম, স্মৃতি কিংবা পছন্দের মোটিফ—ছোট্ট ডিটেইলেই থাকুক তোমার ছোঁয়া।',
    icon: '✿',
  },
]

const designs = [
  {
    kind: 'mandala',
    title: 'রাজকীয় মণ্ডল',
    description: 'পূর্ণ হাতজুড়ে মণ্ডল, পেসলি আর সূক্ষ্ম ফুলেল নকশা।',
    price: '৳ ৪,৫০০',
    size: 'পূর্ণ হাত',
    image: '/images/bridal-mehndi-01.jpg',
    alt: 'দুই হাতে গাঢ় মেহেদির ফুলেল নকশা',
  },
  {
    kind: 'vine',
    title: 'ফুলেল লতা',
    description: 'হাতের এক পাশজুড়ে নরম লতা ও ঐতিহ্যবাহী মোটিফ।',
    price: '৳ ৩,০০০',
    size: 'অর্ধেক হাত',
    image: '/images/bridal-mehndi-02.jpg',
    alt: 'হাতের তালুতে পেসলি ও মণ্ডলের মেহেদি নকশা',
  },
  {
    kind: 'minimal',
    title: 'মিনিমাল ছোঁয়া',
    description: 'আঙুল ও কবজিতে হালকা, সহজ আর পরিপাটি নকশা।',
    price: '৳ ১,৫০০',
    size: 'ছোট ডিজাইন',
    image: '/images/mehndi-full-hand.jpg',
    alt: 'দুই হাতজুড়ে পূর্ণ মেহেদির নকশা',
  },
]

const moments = [
  {
    title: 'ব্রাইডাল ফুল-হ্যান্ড',
    image: '/images/bridal-mehndi-01.jpg',
    alt: 'দুই হাতে গাঢ় মেহেদির ফুলেল নকশা',
    artist: 'Goutam1962',
    source: 'https://commons.wikimedia.org/wiki/File:Bridal_mehndi_(henna)_is_a_central_wedding_tradition_02.jpg',
    license: 'CC BY-SA 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
    className: 'moment-card moment-card-left',
  },
  {
    title: 'পেসলি ও মণ্ডলের ছোঁয়া',
    image: '/images/bridal-mehndi-02.jpg',
    alt: 'হাতের তালুতে পেসলি ও মণ্ডলের মেহেদি নকশা',
    artist: 'Goutam1962',
    source: 'https://commons.wikimedia.org/wiki/File:Bridal_mehndi_(henna)_is_a_central_wedding_tradition_05.jpg',
    license: 'CC BY-SA 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
    className: 'moment-card moment-card-center',
  },
  {
    title: 'পূর্ণ হাতের ঐতিহ্য',
    image: '/images/mehndi-full-hand.jpg',
    alt: 'দুই হাতজুড়ে পূর্ণ মেহেদির জ্যামিতিক ও ফুলেল নকশা',
    artist: 'Manju Thilagavathi',
    source: 'https://commons.wikimedia.org/wiki/File:Full_hand_Mehendi_design.jpg',
    license: 'CC0',
    licenseUrl: 'https://creativecommons.org/publicdomain/zero/1.0/',
    className: 'moment-card moment-card-right',
  },
]

const formatBengaliNumber = (number) =>
  new Intl.NumberFormat('bn-BD').format(number)
const currentYear = new Date().getFullYear()
const contactEmail = 'amin23435678901315@gmail.com'
const createGmailLink = (subject, body = '') =>
  `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(contactEmail)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

function FlowerMark({ className = '' }) {
  return (
    <svg
      aria-hidden="true"
      className={`flower-mark ${className}`}
      fill="none"
      viewBox="0 0 42 42"
    >
      <path
        d="M21 4c3 7 3 9.5 0 12.5C18 13.5 18 11 21 4Zm0 34c-3-7-3-9.5 0-12.5 3 3 3 5.5 0 12.5ZM4 21c7-3 9.5-3 12.5 0C13.5 24 11 24 4 21Zm34 0c-7 3-9.5 3-12.5 0 3-3 5.5-3 12.5 0Z"
        fill="currentColor"
      />
      <circle cx="21" cy="21" r="3" fill="currentColor" />
      <circle cx="21" cy="21" r="15.5" stroke="currentColor" />
    </svg>
  )
}

function ThemeIcon({ theme }) {
  return theme === 'dark' ? (
    <svg aria-hidden="true" fill="none" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.7" />
      <path
        d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.7"
      />
    </svg>
  ) : (
    <svg aria-hidden="true" fill="none" viewBox="0 0 24 24">
      <path
        d="M20.2 15.3A8.8 8.8 0 0 1 8.7 3.8 8.9 8.9 0 1 0 20.2 15.3Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.7"
      />
      <path
        d="m16.5 4 .5 1.5 1.5.5-1.5.5-.5 1.5L16 6.5l-1.5-.5 1.5-.5.5-1.5Z"
        fill="currentColor"
      />
    </svg>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [theme, setTheme] = useState(() => {
    const savedTheme = window.localStorage.getItem('rongrekha-theme')
    if (savedTheme === 'dark' || savedTheme === 'light') return savedTheme
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light'
  })
  const closeMenu = () => setMenuOpen(false)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    window.localStorage.setItem('rongrekha-theme', theme)
  }, [theme])

  return (
    <>
      <header className="site-header">
        <a className="brand" href="#home" aria-label="রংরেখা — শুরুতে যান">
          <FlowerMark />
          <span>রংরেখা</span>
          <small>মেহেদি স্টুডিও</small>
        </a>

        <nav
          className={menuOpen ? 'nav-links nav-open' : 'nav-links'}
          id="main-navigation"
        >
          <a href="#about" onClick={closeMenu}>আমাদের সম্পর্কে</a>
          <a href="#services" onClick={closeMenu}>সেবাসমূহ</a>
          <a href="#designs" onClick={closeMenu}>ডিজাইন ও দাম</a>
          <a href="#gallery" onClick={closeMenu}>গ্যালারি</a>
          <a className="nav-cta" href="#booking" onClick={closeMenu}>
            বুকিং জানতে <span aria-hidden="true">↗</span>
          </a>
        </nav>

        <div className="header-actions">
          <button
            aria-label={theme === 'dark' ? 'লাইট মোড চালু করুন' : 'ডার্ক মোড চালু করুন'}
            aria-pressed={theme === 'dark'}
            className="theme-toggle"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            type="button"
          >
            <ThemeIcon theme={theme} />
          </button>
          <button
            aria-controls="main-navigation"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'মেনু বন্ধ করুন' : 'মেনু খুলুন'}
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            type="button"
          >
            <span />
            <span />
          </button>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-copy">
            <p className="eyebrow"><span /> তোমার বিশেষ দিনের জন্য</p>
            <h1>
              মেহেদির রঙে
              <br />
              আঁকা থাকুক
              <br />
              <em>তোমার গল্প।</em>
            </h1>
            <p className="hero-description">
              যত্নে আঁকা নকশা, মনের মতো আয়োজন—তোমার জীবনের সুন্দর মুহূর্তগুলো
              হোক আরও রঙিন।
            </p>
            <div className="hero-actions">
              <a
                className="button button-dark"
                href={createGmailLink('মেহেদি বুকিং')}
                rel="noreferrer"
                target="_blank"
              >
                Gmail-এ যোগাযোগ করো <span aria-hidden="true">↗</span>
              </a>
              <a className="text-link" href="#designs">ডিজাইন দেখুন</a>
            </div>
            <div className="hero-note">
              <span className="note-line" />
              <span>ভালোবাসা দিয়ে আঁকা, তোমার জন্যই</span>
            </div>
          </div>

          <div className="hero-visual">
            <img
              alt="বিয়ের দিনের আনন্দময় মুহূর্ত"
              className="hero-image"
              fetchPriority="high"
              src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1400&q=90"
            />
            <div className="hero-image-caption">
              <span>একটি দিন, অনেক গল্প</span>
              <span aria-hidden="true">✳</span>
            </div>
            <div className="hero-stamp">
              <FlowerMark />
              <span>যত্নে আঁকা<br />প্রতিটি রেখা</span>
            </div>
          </div>
          <span className="hero-index">০১ <i /> ০৩</span>
        </section>

        <section className="story section-wrap" id="story">
          <div className="story-label">
            <p className="eyebrow"><span /> আমাদের গল্প</p>
            <FlowerMark />
          </div>
          <div className="story-content">
            <h2>শুধু নকশা নয়,<br /><em>মুহূর্তের স্মৃতি।</em></h2>
            <div className="story-aside">
              <p>
                প্রতিটি মেহেদির নকশা হোক তোমার নিজের মতো। তোমার পছন্দ, তোমার
                গল্প আর তোমার বিশেষ দিন—সবকিছুকে সাথে নিয়ে আমরা সাজাই প্রতিটি
                রেখা।
              </p>
              <a className="text-link" href="#services">
                আমাদের কাজ সম্পর্কে <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </section>

        <section className="about section-wrap" id="about">
          <div className="about-copy">
            <p className="eyebrow"><span /> আমাদের সম্পর্কে</p>
            <h2>পরিচালনায় <em>Bristy</em></h2>
            <p>
              রংরেখা মেহেদি স্টুডিওর প্রতিটি আয়োজন ও যোগাযোগের দায়িত্বে
              আছেন Bristy। ডিজাইন, বুকিং কিংবা যেকোনো প্রশ্নে সরাসরি যোগাযোগ
              করুন।
            </p>
          </div>
          <aside className="about-card">
            <div className="about-card-top">
              <span>স্টুডিও পরিচালনায়</span>
              <FlowerMark />
            </div>
            <h3>Bristy</h3>
            <div className="about-contact-list">
              <a
                href={createGmailLink('রংরেখা সম্পর্কে যোগাযোগ')}
                rel="noreferrer"
                target="_blank"
              >
                <svg aria-hidden="true" fill="none" viewBox="0 0 24 24">
                  <rect
                    height="15"
                    rx="2"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    width="19"
                    x="2.5"
                    y="4.5"
                  />
                  <path
                    d="m3.5 6 8.5 7 8.5-7"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  />
                </svg>
                <span>{contactEmail}</span>
                <span aria-hidden="true">↗</span>
              </a>
              <a href="tel:01953534853">
                <svg aria-hidden="true" fill="none" viewBox="0 0 24 24">
                  <path
                    d="M7.1 3.5H4.4c-.8 0-1.4.7-1.3 1.5.7 8.1 7.2 14.6 15.3 15.3.8.1 1.5-.5 1.5-1.3v-2.7c0-.7-.5-1.3-1.2-1.4l-3-.5c-.6-.1-1.2.1-1.5.6l-.7.9a15.5 15.5 0 0 1-5.9-5.9l.9-.7c.5-.4.7-.9.6-1.5l-.5-3c-.2-.8-.8-1.3-1.5-1.3Z"
                    stroke="currentColor"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  />
                </svg>
                <span>01953534853</span>
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </aside>
        </section>

        <section className="services section-wrap" id="services">
          <div className="section-heading">
            <div>
              <p className="eyebrow"><span /> আমাদের আয়োজন</p>
              <h2>তোমার দিনের <em>জন্যই।</em></h2>
            </div>
            <p className="section-note">
              ছোট্ট আয়োজন হোক কিংবা বড় উৎসব—প্রতিটি মুহূর্তে থাকুক যত্নের
              ছোঁয়া।
            </p>
          </div>

          <div className="service-list">
            {services.map((service) => (
              <article className="service-row" key={service.number}>
                <span className="service-number">{service.number}</span>
                <span aria-hidden="true" className="service-icon">{service.icon}</span>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <a
                  aria-label={`${service.title} সম্পর্কে বুকিং জানতে`}
                  className="service-arrow"
                  href="#booking"
                >
                  ↗
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="designs section-wrap" id="designs">
          <div className="section-heading">
            <div>
              <p className="eyebrow"><span /> পছন্দের নকশা বেছে নাও</p>
              <h2>তোমার জন্য <em>কিছু ডিজাইন।</em></h2>
            </div>
            <p className="section-note">
              নিজের পছন্দের ডিজাইনে অর্ডার করো। কাস্টমাইজ করতে চাইলে আমাদের
              জানাও।
            </p>
          </div>
          <div className="design-grid">
            {designs.map((design) => {
              const orderBody =
                `আমি "${design.title}" ডিজাইনটি অর্ডার করতে চাই। প্রদর্শিত মূল্য: ${design.price} থেকে।`

              return (
                <article
                  className={`design-card design-card-${design.kind}`}
                  key={design.kind}
                >
                  <div className="design-visual">
                    <img
                      alt={design.alt}
                      className="design-photo"
                      loading="lazy"
                      src={design.image}
                    />
                    <span className="design-size">{design.size}</span>
                  </div>
                  <div className="design-info">
                    <div className="design-title-row">
                      <h3>{design.title}</h3>
                      <FlowerMark />
                    </div>
                    <p>{design.description}</p>
                    <div className="design-order-row">
                      <div className="design-price">
                        <span>শুরু</span>
                        <strong>{design.price}</strong>
                      </div>
                      <a
                        className="design-order"
                        href={createGmailLink(
                          `মেহেদি অর্ডার: ${design.title}`,
                          orderBody,
                        )}
                        rel="noreferrer"
                        target="_blank"
                      >
                        অর্ডার করো <span aria-hidden="true">↗</span>
                      </a>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
          <p className="design-disclaimer">
            প্রদর্শিত মূল্য প্রাথমিক—নকশার বিস্তারিত অনুযায়ী চূড়ান্ত মূল্য নির্ধারিত হবে।
          </p>
        </section>

        <section className="gallery section-wrap" id="gallery">
          <div className="section-heading">
            <div className="gallery-heading">
              <p className="eyebrow"><span /> কিছু প্রিয় মুহূর্ত</p>
              <h2>রঙে রঙে <em>ভালোবাসা।</em></h2>
              <p className="gallery-intro">
                প্রতিটি নকশায় থাকুক ঐতিহ্যের ছোঁয়া আর তোমার নিজের গল্প।
              </p>
            </div>
            <FlowerMark className="gallery-flower" />
          </div>
          <div className="gallery-grid">
            {moments.map((moment, index) => (
              <figure className={moment.className} key={moment.title}>
                <div className="moment-image">
                  <img
                    alt={moment.alt}
                    decoding="async"
                    loading="lazy"
                    src={moment.image}
                  />
                  <span className="moment-tag">মেহেদি ডিজাইন</span>
                  <div className="moment-overlay">
                    <span className="moment-index">
                      {formatBengaliNumber(index + 1).padStart(2, '০')}
                    </span>
                    <span className="moment-title">{moment.title}</span>
                  </div>
                </div>
                <figcaption className="moment-credit">
                  ছবি: <a href={moment.source} rel="noreferrer" target="_blank">{moment.artist}</a>
                  <span aria-hidden="true">·</span>
                  <a href={moment.licenseUrl} rel="noreferrer" target="_blank">{moment.license}</a>
                </figcaption>
              </figure>
            ))}
          </div>
          <a className="gallery-cta" href="#designs">
            সব ডিজাইন দেখো <span aria-hidden="true">↗</span>
          </a>
        </section>

        <section className="booking" id="booking">
          <FlowerMark />
          <p className="eyebrow"><span /> তোমার গল্প শুরু হোক</p>
          <h2>চলো, তোমার দিনের<br /><em>জন্য আঁকি কিছু।</em></h2>
          <p className="booking-note">
            তোমার পরিকল্পনার কথা আমাদের জানাও—আমরা কথা বলতে আগ্রহী।
          </p>
          <div className="booking-actions">
            <a
              className="button button-light"
              href={createGmailLink('মেহেদি বুকিং')}
              rel="noreferrer"
              target="_blank"
            >
              Gmail-এ লিখুন <span aria-hidden="true">↗</span>
            </a>
            <a
              className="button button-booking-outline"
              href={`mailto:${contactEmail}?subject=${encodeURIComponent('মেহেদি বুকিং')}`}
            >
              ইমেইল অ্যাপে খুলুন <span aria-hidden="true">↗</span>
            </a>
          </div>
          <span className="booking-decoration" aria-hidden="true">✳</span>
        </section>
      </main>

      <footer className="site-footer">
        <a className="brand" href="#home">
          <FlowerMark />
          <span>রংরেখা</span>
          <small>মেহেদি স্টুডিও</small>
        </a>
        <p>ভালোবাসা দিয়ে আঁকা। <span>© {currentYear}</span></p>
        <a
          aria-label="GitHub ওয়েবসাইট খুলুন"
          className="github-link"
          href="https://github.com"
          rel="noreferrer"
          target="_blank"
        >
          <svg aria-hidden="true" viewBox="0 0 24 24">
            <path
              d="M12 .9C5.9.9 1 5.8 1 11.9c0 4.9 3.2 9 7.7 10.5.6.1.8-.2.8-.5v-2c-3.1.7-3.8-1.4-3.8-1.4-.5-1.2-1.2-1.6-1.2-1.6-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1.5 1 .8 1.4.3-.8.8-1.3 1.5-1.6-2.5-.3-5.1-1.2-5.1-5.4 0-1.2.4-2.1 1.1-2.9-.1-.3-.5-1.4.1-2.8 0 0 .9-.3 3 1.1.9-.2 1.8-.4 2.8-.4s1.9.1 2.8.4c2.1-1.4 3-1.1 3-1.1.6 1.4.2 2.5.1 2.8.7.8 1.1 1.7 1.1 2.9 0 4.2-2.6 5.1-5.1 5.4.4.3.8.9.8 1.9v2.8c0 .3.2.6.8.5 4.5-1.5 7.7-5.6 7.7-10.5C23 5.8 18.1.9 12 .9Z"
              fill="currentColor"
            />
          </svg>
          <span>GitHub ↗</span>
        </a>
        <a className="back-top" href="#home">উপরে ফিরে যাও ↑</a>
      </footer>
    </>
  )
}

export default App
