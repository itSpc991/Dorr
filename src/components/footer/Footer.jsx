import React from 'react'
import styles from './footer.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {

  return (
    <div className={styles.container}>
      <div>@2023 DORR. 也许未来是走那边</div>
      <div className={styles.social}>
        <Link href="https://www.facebook.com/" >
          <Image src="/facebook.png" width={17} height={17} className={styles.icon} alt="facebook" />
        </Link>
        <Link href="https://www.instagram.com/shushenmebieshuxinqing/">
          <Image src="/instagram.png" width={17} height={17} className={styles.icon} alt="ins" />
        </Link>
        <Link href="https://github.com/itSpc991">
          <Image src="/GitHub.png" width={17} height={17} className={styles.icon} alt="github" />
        </Link>
      </div>
    </div>
  )
}

export default Footer
