import React from 'react'
import './whatGPT3.css'
import { Feature } from '../../components'

const WhatGPT3 = () => {
  return (
    <div id='wgpt4'>
      <div className='wgpt section-margin section-padding'>
        <div className='wgpt--main-question'>
          <Feature 
            question="What is GPT-3"
            answer="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by."
          />
        </div>

        <div className='wgpt--middle-title flex gradient-text'>
          <h2>The possibilities are beyond your imagination</h2>
        </div>

        <div className='wgpt--more-info flex'>
          <Feature 
            question="Chatbots"
            answer="00000aaaaaaaaaaaaaannnnnnnnnnsssssssssssssssswwwwwwwwwwwwwwweeeeeeeeeeeeeeerrrrrrrrrrrrrr"
          />

          <Feature 
            question="Knowledgebase"
            answer="aaaaaaaaaaaaaannnnnnnnnnsssssssssssssssswwwwwwwwwwwwwwweeeeeeeeeeeeeeerrrrrrrrrrrrrr"
          />

          <Feature 
            question="Education"
            answer="aaaaaaaaaaaaaannnnnnnnnnsssssssssssssssswwwwwwwwwwwwwwweeeeeeeeeeeeeeerrrrrrrrrrrrrr"
          />
        </div>
      </div>
    </div>
  )
}

export default WhatGPT3
