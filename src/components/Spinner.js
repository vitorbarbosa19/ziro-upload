//the spinner that shows when the page is 'loading'
import React from 'react'

export default class Spinner extends React.Component {
  render () {
    return (
      <div className="spinner">
        <svg width={'40px'} height={'40px'} viewBox={'0 0 50 50'}>
          <path fill={'#566270'} d={'M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z'}>
            <animateTransform 
              attributeType={'xml'}
              attributeName={'transform'}
              type={'rotate'}
              from={'0 25 25'}
              to={'360 25 25'}
              dur={'0.6s'}
              repeatCount={'indefinite'}
            />
          </path>
        </svg>
      </div>
    )
  }
}