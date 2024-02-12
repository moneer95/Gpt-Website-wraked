import React from 'react'
import { Article } from '../../components'
import './blog.css'

import blog1 from '../../assets/blog01.png'
import blog2 from '../../assets/blog02.png'
import blog3 from '../../assets/blog03.png'
import blog4 from '../../assets/blog04.png'
import blog5 from '../../assets/blog05.png'

const Blog = () => {
  return (
    <div className='blog section-padding' id='blog'>
      <Article 
        img= {blog1}
        title='What do unusual power devices tell us about the tech industry?'
        href='https://www.insights.onegiantleap.com/blogs/what-do-unusual-power-devices-tell-us-about-the-tech-industry/'
      />
      <Article 
        img= {blog2}
        title='Does gaining something new mean losing everything old?'
        href='https://www.insights.onegiantleap.com/does-gaining-something-new-mean-losing-everything-old/'
      />
      <Article 
        img= {blog3}
        title='Coming of age in the metaverse'
        href='https://www.insights.onegiantleap.com/blogs/coming-of-age-in-the-metaverse/'
      />
      <Article 
        img= {blog4}
        title='Bioinformatics: An emerging field enabled by tech'
        href='https://www.insights.onegiantleap.com/bioinformatics-an-emerging-field-enabled-by-tech/'
      />
      <Article 
        img= {blog5}
        title='Why AI will drive tech investments in 2024'
        href='https://www.insights.onegiantleap.com/blogs/why-ai-will-drive-tech-investments-in-2024/'
      />
    </div>
  )
}

export default Blog
