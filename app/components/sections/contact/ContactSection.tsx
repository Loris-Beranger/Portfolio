'use client'

import React, { useRef } from 'react'
import styles from './contactSection.module.scss'
import { useForm, SubmitHandler } from 'react-hook-form'
import emailjs from '@emailjs/browser'

type Inputs = {
  name: string
  mail: string
  object: string
  message: string
}
export const ContactSection = () => {
  const formRef = useRef<HTMLFormElement>(null)
  const { register, handleSubmit } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data)
    if (formRef.current) {
      emailjs
        .sendForm(
          'service_s09egjn',
          'template_mtvo8pq',
          formRef.current,
          'aNwpZROYgEo05D2f6'
        )
        .then(
          (result) => {
            console.log(result.text)
          },
          (error) => {
            console.log(error.text)
          }
        )
    }
  }

  return (
    <section id={'contact'} className={styles.contactContainer}>
      <h2 className={styles.title}>Contact</h2>
      <form
        ref={formRef}
        className={styles.formContainer}
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className={styles.inputContainer}>
          <label className={styles.labelName} htmlFor="name">
            Nom
          </label>
          <input
            className={styles.inputName}
            type="text"
            placeholder="Beranger"
            {...register('name')}
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
            {...register('mail')}
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
            {...register('object')}
          />
        </div>
        <div className={styles.inputContainer}>
          <label className={styles.labelMessage} htmlFor="message">
            Message
          </label>
          <textarea
            className={styles.inputMessage}
            placeholder="Bonjour..."
            {...register('message')}
          />
        </div>
        <input className={styles.inputSubmit} type="submit" value="Envoyer" />
      </form>
    </section>
  )
}
