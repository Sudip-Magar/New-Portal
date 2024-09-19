
import { useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Category() {
  let { cid } = useParams()
  const [news, setnews] = useState([])
  useEffect(() => {
    fetch(`https://newsapi.org/v2/top-headlines?category=${cid}&apiKey=5dd2b8e1462c4cbbb8cee6f9c828e140`).then((data) => data.json()).then((res) => setnews(res.articles))
  })
  return (
    <div className='px-10 py-3'>
      <h2 className='uppercase text-3xl mx-5 text-violet-500'>{cid}</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
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
    </div>
  )
}

export default Category
