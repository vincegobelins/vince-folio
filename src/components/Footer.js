import React, { Component, PropTypes } from 'react'
import './Footer.css'

export default class Footer extends Component {

  render() {
    const{posts} = this.props;

    return (
      <footer>
        <p className="text-footer">Made by vincegobelins with React and Redux.</p>
      </footer>
    )
  }
}
