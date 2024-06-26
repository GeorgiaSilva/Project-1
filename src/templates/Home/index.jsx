
import './styles.css';
import {  useEffect, useState, useCallback } from 'react';

import { loadPosts } from '../../utils/loadPosts';
import { Posts } from '../../components/Posts/Posts';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';


const Home = () => {
  const [posts, setPosts] = useState([])
  const [page, setPage] = useState(0)
  const [allPosts, setAllPosts] = useState([])
  const [searchPost, setSearchPost] = useState('')
  const [postsPerPage] = useState(10)
  
  const noMorePosts = page + postsPerPage >= allPosts.length
  const filteredPost = !!searchPost ? allPosts.filter(post => {
    return post.title.toLowerCase().includes(
      searchPost.toLowerCase()
    )
  
     }) : posts

  const handleLoadPosts = useCallback(async (page, postsPerPage) => {

    const postsEImgs = await loadPosts()

    setPosts(postsEImgs.slice(page,postsPerPage))
    setAllPosts(postsEImgs)
   },[])

  const loadPages = () => {
    const nextPage = page + postsPerPage
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage)
    posts.push(...nextPosts)
    setPage(nextPage)
    setPosts(posts)
  }
  const handleChange = (e) => {
    const {value} = e.target
    setSearchPost(value)
   

  }

  useEffect(() => { 
    handleLoadPosts(0,postsPerPage)
  },[handleLoadPosts,postsPerPage])

  return (
      <section className='container'>
        <Input value={searchPost} handleChange={handleChange} />

        <Posts posts={filteredPost} />
        {!searchPost && (
          <Button onClick = {loadPages} text={'Load More Posts'} disabled={noMorePosts}/>
        )}
        
      </section>
  
    );
  


}

export default Home