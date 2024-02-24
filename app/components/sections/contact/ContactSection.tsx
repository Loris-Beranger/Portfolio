'use client'

import React, { useEffect, useRef } from 'react'
import styles from './contactSection.module.scss'
import { useForm, SubmitHandler } from 'react-hook-form'
import emailjs from '@emailjs/browser'
import toast, { Toaster } from 'react-hot-toast'
import { useAnimation, useInView, motion } from 'framer-motion'

type Inputs = {
  name: string
  mail: string
  object: string
  message: string
}
export const ContactSection = ({ controlSection, animationSection }: any) => {
  const formRef = useRef<HTMLFormElement>(null)
  const { register, handleSubmit } = useForm<Inputs>()
  const controls = useAnimation()
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref)

  const animation = {
    hidden: { transform: 'translateY(100px)', opacity: 0 },
    visible: { transform: 'translateY(0)', opacity: 1 },
  }
  const animation2 = {
    hidden: { width: '50%', opacity: 0 },
    visible: { width: '100%', opacity: 1 },
  }
  useEffect(() => {
    if (inView) {
      controls.start('visible')
    } else {
      controls.start('hidden')
    }
  }, [controls, inView])
  const onSubmit: SubmitHandler<Inputs> = (data) => {
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
            toast.success('Message envoyé !')
          },
          (error) => {
            toast.success(error.text)
          }
        )
    }
  }

  return (
    <motion.section
      id={'contact'}
      className={styles.contactContainer}
      initial="hidden"
      animate={controlSection}
      variants={animationSection}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className={styles.formSectionContainer}>
        <motion.h2
          ref={ref}
          initial="hidden"
          animate={controlSection}
          variants={animation}
          transition={{ duration: 0.4, ease: 'easeOut', delay: 0.2 }}
          className={styles.title}
        >
          Contact
        </motion.h2>
        <form
          ref={formRef}
          className={styles.formContainer}
          onSubmit={handleSubmit(onSubmit)}
        >
          <motion.div
            initial="hidden"
            animate={controlSection}
            variants={animation}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.4 }}
            className={styles.inputContainer}
          >
            <label className={styles.labelName} htmlFor="name">
              Nom
            </label>
            <input
              className={styles.inputName}
              type="text"
              placeholder="Beranger"
              {...(register('name'), { required: true, maxLength: 20 })}
            />
          </motion.div>
          <motion.div
            initial="hidden"
            animate={controlSection}
            variants={animation}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.4 }}
            className={styles.inputContainer}
          >
            <label className={styles.labelMail} htmlFor="email">
              Email
            </label>
            <input
              className={styles.inputMail}
              type="email"
              placeholder="loris.beranger1@gmail.com"
              {...(register('mail'), { required: true, maxLength: 60 })}
            />
          </motion.div>
          <motion.div
            initial="hidden"
            animate={controlSection}
            variants={animation}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.5 }}
            className={styles.inputContainer}
          >
            <label className={styles.labelObject} htmlFor="Site web">
              Objet
            </label>
            <input
              className={styles.inputObject}
              type="text"
              placeholder="Objet"
              {...(register('object'), { required: true, maxLength: 60 })}
            />
          </motion.div>
          <motion.div
            initial="hidden"
            animate={controlSection}
            variants={animation}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.6 }}
            className={styles.inputContainer}
          >
            <label className={styles.labelMessage} htmlFor="message">
              Message
            </label>
            <textarea
              className={styles.inputMessage}
              placeholder="Bonjour..."
              {...(register('message'), { required: true })}
            />
          </motion.div>
          <motion.input
            initial="hidden"
            animate={controlSection}
            variants={animation2}
            transition={{ duration: 0.4, ease: 'easeOut', delay: 0.7 }}
            className={styles.inputSubmit}
            type="submit"
            value="Envoyer"
          />
        </form>
      </div>
      <div className={styles.labelContainer}>
        <motion.h3
          initial="hidden"
          animate={controlSection}
          variants={animation}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.8 }}
        >
          Une Requête ?
        </motion.h3>
        <motion.h3
          initial="hidden"
          animate={controlSection}
          variants={animation}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 1 }}
        >
          Contactez moi !
        </motion.h3>
      </div>
      <Toaster />
    </motion.section>
  )
}
