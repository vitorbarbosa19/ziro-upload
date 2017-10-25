import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import { Image } from 'cloudinary-react'
import brandsApi from '../utils/brandsApi'

import './index.css'

const Header = (props) => (
  <div
    style={{
      background: '#364657',
      marginBottom: '1.45rem',
      boxShadow: '0 1px 6px 1px rgba(0,0,0,0.3)'
    }}>
    <div
      style={{
        margin: '0 auto',
        maxWidth: 400,
        padding: '1.45rem 1.0875rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
      <Image
        style={{margin: '0'}}
        cloudName='ziro' 
        width='100' 
        publicId='logo-original_lork1u'
        version='1508000699'
        format='png'
        secure='true'
      />
      <div
        style={{
          display: 'flex',
        }}>
        <Link
          className={props.route === '/' ? 'nav-link-active' : null}
          to="/" 
          style={{
            color: '#fff',
            fontFamily: 'karla',
            marginRight: '30px',
            paddingTop: '8px',
            paddingBottom: '8px'
          }}>
          Upload
        </Link>
        <Link
          className={props.route === '/bot' ? 'nav-link-active' : null}
          to="/bot" 
          style={{
            color: '#fff',
            fontFamily: 'karla',
            paddingTop: '8px',
            paddingBottom: '8px'
          }}>
          Bot
        </Link>
      </div>
    </div>
  </div>
)

export default class TemplateWrapper extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      allBrandNames: null,
      allBrandAccounts: null
    }
  }
  componentDidMount() {
    brandsApi.allBrandNamesAndAccounts()
      .then( (response) => {
        const namesAndAccounts = response.data.values.splice(1, response.data.values.length)
        this.setState({
          allBrandNames: namesAndAccounts.map((brand) => { return brand[0] }).sort(),
          allBrandAccounts: namesAndAccounts.map((brand) => { return brand[1] }).sort()
        })
        console.log('IG Accounts:',this.state.allBrandNames)
      })
      .catch( (error) => {
        console.log(error)
      })
  }
  render() {
    return (
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
        <Header route={this.props.location.pathname}/>
        <div
          style={{
            margin: '0 auto',
            maxWidth: 400,
            padding: '0px 1.0875rem 1.45rem',
            paddingTop: 0,
          }}>
          {this.state.allBrandNames ?
            this.props.children({...this.props, ...this.state})
          :
            null
          }
        </div>
      </div>
    )
  }
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}
