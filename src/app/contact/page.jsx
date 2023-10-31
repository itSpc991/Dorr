import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Button from '@/components/button/Button'

export const metadata = {
  title: 'Dorr Dev - Contact',
  description: 'This is the contact page of Dorr Dev.',
}


const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Let&apos;s Keep in Touch</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image 
            src="https://images.pexels.com/photos/4449868/pexels-photo-4449868.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="沙漠"
            fill={true}
            // width={300}
            // height={500}
            className={styles.image}
          />
          {/* <video src="/Rain.mp4" width="640" height="360" controls autoplay loop></video> */}
        </div>
        <form action="" className={styles.form}>
          <input type="text" placeholder='name' className={styles.input}  />
          <input type="text" placeholder='email' className={styles.input} />
          <textarea cols="30" rows="10" className={styles.textArea} placeholder='message' />
          <Button url="#" text="Send" />
        </form>
      </div>
    </div>
  )
}

export default Contact
