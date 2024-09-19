import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Block1(props) {
    const [news, setnews] = useState([])
    useEffect(() => {
        fetch(`https://newsapi.org/v2/top-headlines?category=${props.type1}&apiKey=5dd2b8e1462c4cbbb8cee6f9c828e140`).then((data) => data.json()).then((res) => setnews(res.articles))
    })
    return (
        <div>
            {news.slice(5, 6).map((data) => (
                <div className='flex flex-col lg:flex-row gap-1' key={data.id}>
                    <img className='lg:w-2/4' src={data.urlToImage} alt="" />

                    <div className='pt-3  px-3 '>
                        <h3 className='font-semibold text-2xl line-clamp-2'>{data.title}</h3>
                        <p className='pt-2  line-clamp-5'>{data.description}</p>
                        <Link className='bg-violet-700 my-2 py-1 px-3 text-white   inline-block' to={data.url} target='_blank'>Read More</Link>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Block1
