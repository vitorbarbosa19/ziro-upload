import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import { Image } from 'cloudinary-react'

import './index.css'

const Header = () => (
  <div
    style={{
      background: '#364657',
      marginBottom: '1.45rem',
    }}>
    <div
      style={{
        margin: '0 auto',
        maxWidth: 400,
        padding: '1.45rem 1.0875rem',
      }}>
      <Image
        style={{margin: '0'}}
        cloudName='ziro' 
        width='120' 
        publicId='logo-original_lork1u'
        version='1508000699'
        format='png'
        secure='true'
      />
    </div>
  </div>
)

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Ziro Upload"
      meta={[
        { name: 'description', content: 'Upload de images para catalogo online' },
        { name: 'keywords', content: 'atacado, bom retiro, moda' },
      ]}
      script={[
        { src: '//widget.cloudinary.com/global/all.js', type: 'text/javascript' }
      ]}
    />
    <Header />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 400,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
