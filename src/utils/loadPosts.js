export const loadPosts = async () => {
    const postsResponse = fetch('https://jsonplaceholder.typicode.com/posts')
    const imgResponse = fetch('https://jsonplaceholder.typicode.com/photos') 
    const [posts] = await Promise.all([postsResponse])
    const [photos] = await Promise.all([imgResponse])
    const postsJson = await posts.json()
    const imgJson = await photos.json()
    const postsEImgs = postsJson.map((post,index) =>{
        return {...post,img: imgJson[index].url}
    })
    return postsEImgs

}