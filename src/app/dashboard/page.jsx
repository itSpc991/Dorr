"use client"

import React, { useEffect, useState } from 'react'
import styles from './page.module.css'
import useSWR from 'swr';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';


const Dashboard = () => {
  const session = useSession()

  const router = useRouter()

  // 使用SWR Hook 获取数据
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, mutate, error, isLoading } = useSWR(
    `/api/posts?username=${session?.data?.user.name}`,
    fetcher
    );

    console.log(data)

  if (session.status === 'loading') {
    return <p>Loading...</p>
  }

  if (session.status === 'unauthenticated') {
    router.push('/dashboard/login')
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const title = e.target[0].value;
    const desc = e.target[1].value;
    const img = e.target[2].value;
    const content = e.target[3].value;

    try {
      await fetch('/api/posts', {
        method: 'POST',
        body: JSON.stringify({
          title, 
          desc, 
          img, 
          content, 
          username: session.data.user.name
          }),
      });
      mutate();
      e.target.reset();
    } catch (err) {
      console.log(err);
    }
  }

  const handleDelete = async (id) => {
    try {
      await fetch(`/api/posts/${id}`, {
        method: 'DELETE',
      });
      mutate();
    } catch (err) {
      console.log(err);
    }
  }

    if (session.status === 'authenticated') {
  return( 
    <div className={styles.container}>
      <div className={styles.posts}>
        {isLoading ? "loading" : data.map((post) => (
          <div className={styles.post} key={post._id}>
            <div className={styles.imgContainer}>
              <Image src={post.img} alt="" width={200} height={100} />
            </div>
            <h2 className={styles.postTitle}>{post.title}</h2>
            <span className={styles.delete} onClick={() => handleDelete(post._id)}>X</span>
          </div>
        ))}
      </div>
      <div className={styles.new} onSubmit={handleSubmit}>
        <h1>Add New Post</h1>
        <input type="text" placeholder='Title' className={styles.input} />
        <input type="text" placeholder='Desc' className={styles.input} />
        <input type="text" placeholder='Image' className={styles.input} />
        <textarea placeholder='Content' className={styles.textArea} cols="30" rows="10" />
        <button className={styles.button}>Send</button>
      </div>
    </div>
)}}
export default Dashboard



// 使用Effect Hook 获取数据

//   const [data, setData] = useState({});
//   const [err, setErr] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);

//   useEffect(() => {
//     const getData = async () => {
//       setIsLoading(true);
//     const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
//       // 10秒后重新获取数据 ,如果数据需要改变，选择此种方式 
//       // next: { revalidate: 10},
//       // 不需要缓存数据
//       cache: 'no-cache',
//     });

//     if (!res.ok) {
//       setErr(true);
//     }
    
//     const data = await res.json();
//     setData(data);
//     setIsLoading(false);
//   };
//   getData();
// }, []);