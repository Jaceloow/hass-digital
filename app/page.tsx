import { FaArrowRight, FaCheck, FaCode, FaMobileAlt, FaPalette, FaRocket } from "react-icons/fa";
import ContactForm from "@/components/contact-form";

const services = [
  {
    title: "Brand & UI Design",
    text: "High-impact interfaces and brand systems that make your business instantly recognizable.",
    icon: <FaPalette />,
  },
  {
    title: "Web Development",
    text: "Modern, conversion-focused websites built to look premium and perform smoothly.",
    icon: <FaCode />,
  },
  {
    title: "App Design",
    text: "User-centered mobile experiences for iOS and Android that feel polished from day one.",
    icon: <FaMobileAlt />,
  },
  {
    title: "Growth Launches",
    text: "Strategy, messaging, and product direction that help your digital presence convert faster.",
    icon: <FaRocket />,
  },
];

const highlights = [
  "Premium brand-first digital experiences",
  "Responsive websites and mobile app concepts",
  "Clear UX strategy for real business growth",
  "Fast, collaborative execution",
];

const portfolio = [
  { name: "Luna Studio", category: "Brand & Web Design", result: "+42% engagement" },
  { name: "Venture Atlas", category: "App UX Design", result: "2x demo signups" },
  { name: "Nairobi Eats", category: "Foodtech Website", result: "+3x inquiries" },
];

export default function Home() {
  return (
    <main className="page-shell">
      <header className="topbar">
        <div className="container nav-wrap">
          <div className="brand-mark">
            <span className="brand-dot" />
            Hass Digital
          </div>
          <nav className="nav-links">
            <a href="#services">Services</a>
            <a href="#work">Work</a>
            <a href="#process">Process</a>
            <a href="#contact">Contact</a>
          </nav>
          <a className="primary-btn small" href="#contact">
            Book a Call
          </a>
        </div>
      </header>

      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Web & App Design Studio</p>
            <h1>We design digital experiences that help brands grow.</h1>
            <p className="hero-text">
              Hass Digital creates modern websites and mobile app experiences for businesses ready to stand out online.
            </p>
            <div className="hero-actions">
              <a className="primary-btn" href="#contact">
                Start Your Project <FaArrowRight />
              </a>
              <a className="secondary-btn" href="#work">
                View Our Work
              </a>
            </div>
            <div className="hero-meta">
              <span>Based in Nairobi</span>
              <span>UI/UX + Branding</span>
              <span>Web + App</span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="dashboard-card large">
              <div className="card-head">
                <span className="dot red" />
                <span className="dot amber" />
                <span className="dot green" />
              </div>
              <div className="stat-block">
                <p>Brand Lift</p>
                <h3>+86%</h3>
              </div>
              <div className="mini-grid">
                <div className="mini-box">
                  <span>Web</span>
                  <strong>Conversion</strong>
                </div>
                <div className="mini-box highlight">
                  <span>App</span>
                  <strong>Retention</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="trust-strip">
        <div className="container trust-row">
          <span>Brand strategy</span>
          <span>Web design</span>
          <span>App design</span>
          <span>Product UX</span>
          <span>Launch support</span>
        </div>
      </section>

      <section id="services" className="section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">What we do</p>
            <h2>Creative services for businesses that need a stronger digital presence.</h2>
          </div>

          <div className="service-grid">
            {services.map((service) => (
              <article className="service-card" key={service.title}>
                <div className="icon-wrap">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section split-section">
        <div className="container split-grid">
          <div className="split-copy">
            <p className="eyebrow">Why Hass Digital</p>
            <h2>We turn ideas into clear, premium digital products.</h2>
            <p>
              Whether you need a new website, a modern app concept, or a full brand refresh, we combine strategy, design, and user-focused thinking to help your business grow with confidence.
            </p>
            <ul className="feature-list">
              {highlights.map((item) => (
                <li key={item}>
                  <FaCheck />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="stats-panel">
            <div className="stat-box">
              <strong>150+</strong>
              <span>Design screens</span>
            </div>
            <div className="stat-box">
              <strong>30+</strong>
              <span>Projects launched</span>
            </div>
            <div className="stat-box">
              <strong>8+</strong>
              <span>Years of creativity</span>
            </div>
          </div>
        </div>
      </section>

      <section id="work" className="section alt-section">
        <div className="container">
          <div className="section-heading compact">
            <p className="eyebrow">Featured work</p>
            <h2>Selected projects built for modern brands.</h2>
          </div>

          <div className="portfolio-grid">
            {portfolio.map((item) => (
              <article className="portfolio-card" key={item.name}>
                <div className="portfolio-thumb" />
                <div className="portfolio-copy">
                  <span>{item.category}</span>
                  <h3>{item.name}</h3>
                  <p>{item.result}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="section">
        <div className="container">
          <div className="section-heading compact">
            <p className="eyebrow">Our process</p>
            <h2>Simple, strategic, and built around your goals.</h2>
          </div>

          <div className="process-grid">
            <div className="process-card">
              <span>01</span>
              <h3>Discover</h3>
              <p>We learn your business, audience, and differentiators.</p>
            </div>
            <div className="process-card">
              <span>02</span>
              <h3>Design</h3>
              <p>We shape the visual direction and user flows.</p>
            </div>
            <div className="process-card">
              <span>03</span>
              <h3>Develop</h3>
              <p>We turn the concept into a polished digital experience.</p>
            </div>
            <div className="process-card">
              <span>04</span>
              <h3>Launch</h3>
              <p>We refine details, support rollout, and help you grow.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="section contact-section">
        <div className="container contact-grid">
          <div className="contact-info">
            <p className="eyebrow">Let’s build something bold</p>
            <h2>Ready to create your next website or app experience?</h2>
            <p>
              We help brands in Nairobi and beyond create premium digital experiences that are clear, modern, and built to convert.
            </p>
            <ul>
              <li>Nairobi, Kenya</li>
              <li>hello@hassdigital.co.ke</li>
              <li>+254 722 290 328</li>
            </ul>
          </div>

          <ContactForm />
        </div>
      </section>
    </main>
  );
}
