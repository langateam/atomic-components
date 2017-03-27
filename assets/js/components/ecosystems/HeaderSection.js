import React, { Component } from 'react'

export default class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {modalDisplay: false}
  }

  static get propTypes () {
    return {
      query: React.PropTypes.object
    }
  }

  toggleModalDisplay() {
    this.setState({modalDisplay: !this.state.modalDisplay})
  }

  renderContactHeader () {
    const contacted = this.props.query.state === 'submitted'

    if (!contacted) return

    return (
      <div className="contact-header">
        <h3>
          Thanks for contacting Langa! We'll get back to you shortly.
        </h3>
      </div>
    )
  }

  render() {
    return (
      <div className="header">
        {this.renderContactHeader()}

        <div className="navbar">
          <i onClick={this.toggleModalDisplay} className="hamburger fa fa-bars"></i>
          <a className="navlink" href="/">Home</a>
          <a className="navlink" href="/services/node-js-development">Backend</a>
          <a className="navlink" href="/services/front-end-development">Frontend</a>
          <a className="navlink" href="/services/design">Design</a>
          <a className="navlink" href="/opensource">Open Source</a>
          <a className="navlink" href="/contact">Contact Us</a>
        </div>


        {this.state.modalDisplay ?
          <div className="navbar-mobile">
            <i onClick={this.toggleModalDisplay} className="hamburger fa fa-times"></i>
            <a className="navlink" href="/">Home</a>
            <a className="navlink" href="/services/node-js-development">Backend</a>
            <a className="navlink" href="/services/front-end-development">Frontend</a>
            <a className="navlink" href="/services/design">Design</a>
            <a className="navlink" href="/opensource">Open Source</a>
            <a className="navlink" href="/contact">Contact Us</a>
          </div>
          : null}

        <div className="banner">
          <div className="flexLeft" />
          <div className="flexMiddle mainContent">
            <img className="logo logo-mobile" src="//cdn.langa.io/art/logos/Langa%20Identity.svg" />
            <img className="logo" src="//cdn.langa.io/art/logos/logomain.svg" />
            <img className="skyline" src="//cdn.langa.io/art/backgrounds/skyline.svg" />
          </div>
          <div className="flexRight" />
        </div>
      </div>
    )
  }
}
