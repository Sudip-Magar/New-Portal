
import { useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Detail() {
    let {author}=useParams()
    const [news, setnews] = useState([])
  useEffect(() => {
    fetch(`https://newsapi.org/v2/top-headlines?category=${author}&apiKey=5dd2b8e1462c4cbbb8cee6f9c828e140`).then((data) => data.json()).then((res) => setnews(res.articles))
  })

  return (
    <div>
      <h3>{news}</h3>
    </div>
  )
}

export default Detail
