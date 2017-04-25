import React, { Component } from 'react'

export default class ClientsSection extends Component {

  render () {
    return (
      <div className="client-section">
        <h1>Our Clients</h1>
        <div className="client-logos">
          <img src="//cdn.langa.io/3rdparty/ibmwatson-logo.png" alt="IBM Watson" />
          <img src="//cdn.langa.io/3rdparty/qualcomm-logo.png" alt="Qualcomm" />
          <img src="//cdn.langa.io/3rdparty/ge-logo.jpg" alt="General Electric" />
          <img src="//cdn.langa.io/3rdparty/homeaway-logo.svg" alt="HomeAway" />
          <img src="//cdn.langa.io/3rdparty/xogroup-logo.png" alt="XO Group" />
          <img src="//cdn.langa.io/3rdparty/mco-logo.png" alt="Michigan Colleges Online" />
          <img src="//cdn.langa.io/3rdparty/itprotv-logo.png" alt="ITPro.TV" />
          <img src="//cdn.langa.io/3rdparty/oxfordroad-logo.png" alt="Oxford Road" />
          <img src="//cdn.langa.io/3rdparty/underbuilt-logo.png" alt="Underbuilt" />
        </div>
      </div>
    )
  }
}

