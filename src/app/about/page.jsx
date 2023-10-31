"use client"

import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Button from '@/components/button/Button';

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="海"
          fill={true}
          // width={600}
          // height={400}
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Dorrの海</h1>
          <h2 className={styles.imgDesc}>愿我们都能找到心中的那片海</h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>我们来自？</h1>
          <p className={styles.desc}>
            人性的背后是白云苍狗,愿你我都是生活的高手
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>我们去往？</h1>
          <p className={styles.desc}>
            海是自由意志的载体,手上戒指太多,我无法靠近,只能观望
          </p>
          <Button url="/contact" text="Contact" />
        </div>
      </div>
    </div>
  );
};

export default About
