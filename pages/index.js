import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getPosts } from '../store/actions/posts.action';


export default function Home() {
  const dispatch = useDispatch();


  useEffect(()=>{
    dispatch(getPosts())
  },[])

  return (
    <div>
     <h1>HOME</h1>
    </div>
  )
}
