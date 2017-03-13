import React, { Component } from 'react'
import ContactForm from './../organisms/ContactForm'

import { sections } from '../../strings'

export default class ContactSection extends Component {

  static get propTypes () {
    return {
      page: React.PropTypes.bool
    }
  }

  render () {
    const strings = sections.contact

    return (
      <div className="Contact">
        <div className="section flexMiddle">
          <h1>{strings.title}</h1>
          <h2>
            {strings.blurb}
          </h2>
          <div className="contactTower">
            <div id="contact-form"> {/* A div for the purposes of rerendering the form */}
              <ContactForm />
            </div>
            <img src="//cdn.langa.io/art/diagrams/tower.svg" className="tower" />
          </div>
          <img src="//cdn.langa.io/art/backgrounds/teamblue-small-png8.png" className="teamimage" />
        </div>
      </div>
    )
  }
}
