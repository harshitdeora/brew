import styles from './Logo.module.css'

export function Logo() {
  return (
    <div className={styles.logoWrapper} aria-label="Royal chai brand logo">
      <div className={styles.emblem}>
        <span className={styles.emblemInner}>RC</span>
      </div>
      <div className={styles.textBlock}>
        <span className={styles.brandName}>Royal Chai House</span>
        <span className={styles.tagline}>Brew the Royal Tradition</span>
      </div>
    </div>
  )
}



