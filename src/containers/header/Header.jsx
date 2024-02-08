import React from 'react'
import './header.css'
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'
import Brand from '../../components/brand/Brand'
import google from '../../assets/google.png'
import slack from '../../assets/slack.png'
import atlasian from '../../assets/atlassian.png'
import dropbox from '../../assets/dropbox.png'
import shopify from '../../assets/shopify.png'

const Header = () => {
  return (
    <div className='header' id='home'>
      <h1 className='header--title gradient-text'>
        Let’s Build Something
        amazing with GPT-3
        OpenAI
      </h1>

      <p className='header--description'>
        generate coherent and contextually relevant text, answer questions, translate languages, assist in coding by providing code snippets, summarize content, engage in dynamic conversational interactions for chatbots, and facilitate interactive storytelling experiences.      
      </p>

      <div className='header--email-input-div flex'>
        <input className='header--email-input-div--input' type="email" placeholder='Your Email Adderss'/>
        <button className='header--email-input-div--button'>Get Started</button>
      </div>

      <div className='header--people flex'>
        <img src={people} alt="people requested access" />
        <p>16,000 people requested access a visit in last 24 hours</p>
      </div>

      <img className='header--ai-img' src={ai} alt="ai face image"/>

      <div className='header--companies'>
        <img src={google} alt="google" />
        <img src={slack} alt="slack" />
        <img src={atlasian} alt="atlasian" />
        <img src={dropbox} alt="dropbox" />
        <img src={shopify} alt="shopify" />
      </div>
    </div>

      // {/* <Brand /> */}
  )
}

export default Header
