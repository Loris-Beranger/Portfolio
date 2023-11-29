import React from 'react'
import styles from './contactSection.module.scss'

export const ContactSection = () => {
  return (
    <section id={'contact'} className={styles.contactContainer}>
      <h2 className={styles.title}>Contact</h2>
      <form className={styles.formContainer}>
        <div className={styles.inputContainer}>
          <label className={styles.labelName} htmlFor="name">
            Nom
          </label>
          <input
            className={styles.inputName}
            type="text"
            placeholder="Beranger"
          />
        </div>
        <div className={styles.inputContainer}>
          <label className={styles.labelMail} htmlFor="email">
            Email
          </label>
          <input
            className={styles.inputMail}
            type="email"
            placeholder="loris.beranger1@gmail.com"
          />
        </div>
        <div className={styles.inputContainer}>
          <label className={styles.labelObject} htmlFor="Site web">
            Objet
          </label>
          <input
            className={styles.inputObject}
            type="text"
            placeholder="Objet"
          />
        </div>
        <div className={styles.inputContainer}>
          <label className={styles.labelMessage} htmlFor="message">
            Message
          </label>
          <textarea className={styles.inputMessage} placeholder="Bonjour..." />
        </div>
        <input className={styles.inputSubmit} type="submit" value="Envoyer" />
      </form>
    </section>
  )
}
