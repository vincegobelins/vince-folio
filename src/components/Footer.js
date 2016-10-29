import React, { Component, PropTypes } from 'react'

export default class FooterOk extends Component {

  render() {
    const{posts} = this.props;

    return (
      <footer>
        <p>Made by vincegobelins with React and Redux.</p>
      </footer>
    )
  }
}
