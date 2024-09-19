import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Block3(props) {
  const [news, setnews] = useState([])
  useEffect(() => {
    fetch(`https://newsapi.org/v2/top-headlines?category=${props.type}&apiKey=5dd2b8e1462c4cbbb8cee6f9c828e140`).then((data) => data.json()).then((res) => setnews(res.articles))
  })
  return (
    <div className=''>
      {news.map((data) => (
        <Link to={data.url} target='_blank' key={data.id}>
          <div className='flex gap-1 items-start my-3 p-1 mx-3' >
            <img className='w-2/4' src={data.urlToImage} alt="" />

            <div className='  px-3 '>
              <h3 className='font-semibold text-sm line-clamp-2'>{data.title}</h3>
              <p className='pt-2 line-clamp-2 text-sm'>{data.description}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default Block3
