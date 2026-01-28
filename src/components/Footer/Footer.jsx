import styles from './Footer.module.css'

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.line} />
      <div className={styles.content}>
        <span className={styles.brandNote}>Royal Chai House</span>
        <div className={styles.spacer} />
        <div className={styles.socialGroup} aria-label="Social media links">
          <a
            href="#"
            aria-label="Visit our Instagram"
            className={styles.iconButton}
          >
            <span className={styles.icon}>
              <span className={styles.circle} />
            </span>
            <span className={styles.iconLabel}>Instagram</span>
          </a>
          <a href="#" aria-label="Visit our X profile" className={styles.iconButton}>
            <span className={styles.icon}>
              <span className={styles.xShape} />
            </span>
            <span className={styles.iconLabel}>X</span>
          </a>
          <a
            href="#"
            aria-label="Visit our LinkedIn"
            className={styles.iconButton}
          >
            <span className={styles.icon}>
              <span className={styles.linkedInShape}>in</span>
            </span>
            <span className={styles.iconLabel}>LinkedIn</span>
          </a>
        </div>
      </div>
    </footer>
  )
}



