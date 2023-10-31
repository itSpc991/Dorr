"use client"

import Link from 'next/link'
import React from 'react'
import styles from './navbar.module.css'
import DarkModeToggle from '../darkModeToggle/DarkModeToggle';
import { signOut, useSession } from 'next-auth/react';

const links = [
  {
    id: 1,
    title: 'Home',
    path: '/'
  },
  {
    id: 2,
    title: 'Portfolio',
    path: '/portfolio'
  },
  {
    id: 3,
    title: 'Blog',
    path: '/blog'
  },
  {
    id: 4,
    title: 'About',
    path: '/about'
  },
  {
    id: 5,
    title: 'Contact',
    path: '/contact'
  },
  {
    id: 6,
    title: 'Dashboard',
    path: '/dashboard'
  },
];
const Navbar = () => {
  const session = useSession();

  return (
    <div className={styles.container} >
      <Link href="/" className={styles.logo}>
        DORR
      </Link>
      <div className={styles.links}>
        <DarkModeToggle />
        {links.map(link=>(
          <Link key={link.id} href={link.path} className={styles.link}>
            {link.title}
          </Link>
        ))}
        {
          session.status === 'authenticated' && (
          <button
            className={styles.logout}
            onClick={signOut}
          >
            Logout
          </button> 
        )}
      </div>
    </div>
  );
};

export default Navbar
