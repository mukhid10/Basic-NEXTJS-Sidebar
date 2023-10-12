import React from 'react'

import CcardList from '../components/posts/CcardList'
import Cbutton from '../components/Cbutton'

const base_url = 'https://jsonplaceholder.typicode.com/posts';

interface Iposts {
  userId: number,
  id: number,
  title: string,
  body: string,
}

async function Posts() {
  const response = await fetch(base_url, {
    cache: 'no-store'
  });
  const posts: Iposts[] = await response.json();

  return (
    <>
        <h1 className='text-fuchsia-500'>POSTINGAN PAGE</h1>
        {
          posts.map(post=>(
            <CcardList>
              <p>{post?.id}</p>
              <p>{post?.title}</p>
              <p>{post?.body}</p>
              <Cbutton userId={post?.userId}/>
            </CcardList>
          ))
        }
    </>
  )
}

export default Posts