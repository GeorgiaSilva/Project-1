import './styles.css'
export const PostCard = ({post}) => {
  return (
    <div className='post'>
      <div className='post-content'>
        <img src={post.img} alt={post.title}/>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
      </div>
    </div>
  )
}




