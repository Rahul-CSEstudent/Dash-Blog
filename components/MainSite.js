import React from 'react';
import Image from 'next/image';
import styles from './Mainsite.module.css';
import bg from './assets/bg.png'
import moon from './assets/moon.png'
import mountain from './assets/mountain.png'
import road from './assets/road.png'


const MainSite = () => {
  return (
    <div className={styles.body}>
        <section className={styles.section}>
          <Image src={bg} id='bg'></Image>
          <Image src={moon} id='moon'></Image>
          <Image src={mountain} id='mountain'></Image>
          <Image src={road} id='road'></Image>
          <h2 id = "text">DASH BLOG</h2>
        </section>
    </div>
  )
}

export default MainSite