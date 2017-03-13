'use strict'

/**
 * The only interactive component of Langa.io is the contact form, so we can
 * make a tiny bundle.
 */

import React from 'react'
import {render} from 'react-dom'
import ContactForm from './components/organisms/ContactForm'

render(<ContactForm />, document.querySelector('#contact-form'))
