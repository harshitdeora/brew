import { useState } from 'react'
import styles from './EmailSignup.module.css'

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function EmailSignup() {
  const [email, setEmail] = useState('')
  const [touched, setTouched] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const isValid = emailRegex.test(email)
  const showError = touched && !isValid && email.length > 0

  const handleSubmit = (event) => {
    event.preventDefault()
    setTouched(true)

    if (!isValid) return

    setSubmitted(true)
  }

  const handleChange = (event) => {
    if (submitted) setSubmitted(false)
    setEmail(event.target.value)
  }

  return (
    <section className={styles.section} aria-label="Email notification signup">
      <div className={styles.sectionInner}>
        <div className={styles.text}>
          <h2 className={styles.heading}>Be first to pour the very first cup</h2>
          <p className={styles.subcopy}>
            Leave your email to be among the first to experience our royal-style instant
            chai when we launch.
          </p>
        </div>

        <form className={styles.form} onSubmit={handleSubmit} noValidate>
          <div className={styles.fieldGroup}>
            <label htmlFor="email" className={styles.label}>
              Email address
            </label>
            <div className={styles.inputRow}>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                value={email}
                onChange={handleChange}
                onBlur={() => setTouched(true)}
                className={`${styles.input} ${
                  showError ? styles.inputError : submitted ? styles.inputSuccess : ''
                }`}
                placeholder="you@example.com"
                aria-invalid={showError ? 'true' : 'false'}
                aria-describedby="email-help email-error"
              />
              <button type="submit" className={styles.button}>
                Notify Me
              </button>
            </div>
            <div className={styles.supportingText}>
              <span id="email-help" className={styles.help}>
                No spam. Just a single note when the kettles are ready.
              </span>
              {showError && (
                <span id="email-error" className={styles.error}>
                  Please enter a valid email address.
                </span>
              )}
              {submitted && !showError && (
                <span className={styles.success}>
                  Thank you. You&apos;ll be among the first to know.
                </span>
              )}
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}



