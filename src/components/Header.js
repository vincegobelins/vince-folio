import React, { Component, PropTypes } from 'react'
import './Header.css'

export default class Header extends Component {

  render() {
    const{posts} = this.props;

    return (
      <header>
        <h2 className="subtitle">Vincent Aguettaz</h2>
        <h1 className="title">Mes projets</h1>
      </header>
    )
  }
}
