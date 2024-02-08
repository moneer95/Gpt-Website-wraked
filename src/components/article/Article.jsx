import React from 'react'
import './article.css'

const Article = (props) => {
  return (
    <div className='article'>
      <a href={props.href}>
        <figure>
          <img src={props.img} alt="" />
          <figcaption>
            <h2>{props.title}</h2>
          </figcaption>
        </figure>
      </a>
    </div>
  )
}

export default Article
