import styles from './HeroSection.module.css'
import { Logo } from '../Logo/Logo'

export function HeroSection() {
  return (
    <section className={styles.hero} aria-labelledby="hero-heading">
      <header className={styles.headerRow}>
        <Logo />
        <span className={styles.launchBadge}>Coming Soon</span>
      </header>

      <div className={styles.mainContent}>
        <div className={styles.copy}>
          <p className={styles.kicker}>Premium Indian Chai Premix</p>
          <h1 id="hero-heading" className={styles.heading}>
            Brew the Royal Tradition
          </h1>
          <p className={styles.subcopy}>
            Instant chai inspired by the slow-brewed rituals of Indian royal households—
            layered with cardamom, Assam tea, and warmth in every cup.
          </p>

          <div className={styles.dividerWrapper}>
            <span className={styles.dividerLeft} />
            <span className={styles.dividerCenter}>Launching Soon</span>
            <span className={styles.dividerRight} />
          </div>
        </div>

        <div className={styles.visual}>
          <div className={styles.cup}>
            <div className={styles.steam}>
              <span />
              <span />
              <span />
            </div>
            <div className={styles.cupInner}>
              <div className={styles.teaSurface} />
              <div className={styles.cupRim} />
            </div>
            <div className={styles.handle} />
            <div className={styles.saucer} />
          </div>
          <p className={styles.visualCaption}>
            Crafted for unhurried evenings, boardrooms, and every ritual in between.
          </p>
        </div>
      </div>
    </section>
  )
}



