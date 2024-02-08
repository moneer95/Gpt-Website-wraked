import React from 'react'
import './features.css'
import { Feature } from '../../components'

const Features = () => {
  return (
    <div className='features section-margin' id='features'>
      <div className='features--motivation'>
        <h3 className='gradient-text'>
          The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.
        </h3>
        <a href="https://chat.openai.com" target='_blank' className='gradient-text'>Give It A Try</a>
      </div>
      <div className='features--details'>
        <Feature
          question="Transformer Architecture"
          answer="GPT is built upon the Transformer architecture, which allows it to capture complex dependencies and relationships in data."
          flexDirection="row"
        />
        <Feature 
          question="Pre-trained Model"
          answer="GPT is pre-trained on a massive amount of diverse data from the internet. This pre-training enables the model to understand and generate human-like text."
          flexDirection="row"
        />
        <Feature 
          question="Unsupervised Learning"
          answer="GPT is trained in an unsupervised manner, meaning it learns from the data without explicit labels or annotations."
          flexDirection="row"
        />
        <Feature 
          question="Generative"
          answer="GPT is capable of generating coherent and contextually relevant text based on the input it receives. It can be used for various natural language generation tasks."
          flexDirection="row"
        />
      </div>
    </div>
  )
}

export default Features
