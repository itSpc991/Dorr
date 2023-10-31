import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Button from '@/components/button/Button'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>
          怎么身处广阔无垠,仍觉头顶的天空是四角
        </h1>
        <p className={styles.desc}>
          知识改变命运不假,但对知识的一知半解可能会让命运更加坎坷
          <br />
          希望我们都能做到“道路曲折我看不见,前途光明我走不完”
          <br />
          我与诸位共勉
        </p>
        <Button url="/portfolio" text="了解更多" />
      </div>
      <div className={styles.item}>
        <div className={styles.imgContainer}>
          <Image alt='男人与海' width={400} height={500} className={styles.img}
            src='https://images.pexels.com/photos/789549/pexels-photo-789549.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          // https://images.pexels.com/photos/11044666/pexels-photo-11044666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1
          />
        </div>
      </div>
    </div>
  )
}