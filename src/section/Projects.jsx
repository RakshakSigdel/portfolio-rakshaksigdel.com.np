import React from 'react'
import BubbleText from '../component/BubbleHover'
export default function Projects() {
  return (
    <div className='mx-20'>
      <div className="mockup-browser bg-base-300 border">
        <div className="mockup-browser-toolbar">
          <div className="input">https://daisyui.com</div>
        </div>
        <div className="bg-base-200 flex justify-center px-4 py-16">Hello!</div>
      </div>

      <div className="mockup-phone border-primary">
        <div className="camera"></div>
        <div className="display">
          <div className="artboard artboard-demo phone-1">Hi.</div>
        </div>
      </div>

      <div className="mockup-window bg-base-300 border">
        <div className="bg-base-200 flex justify-center px-4 py-16">Hello!</div>
      </div>
    </div>
  )
}
