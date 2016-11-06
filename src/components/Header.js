import React, { Component } from 'react'
import './Header.css'

export default class Header extends Component {

  render() {
    return (
      <header className="header">
        <h2 className="subtitle-header">Vincent Aguettaz</h2>
        <h1 className="title-header">Mes projets</h1>
        <ul className="list-header">
          <li className="item-header">
            <h3 className="title-item-header">A propos</h3>
            <p>Vous trouverez sur cette page une sélection de mes projets. Ils ont été réalisés dans le cadre de projets d'école, en freelance ou en agence.</p>
          </li>
          <li className="item-header">
            <h3 className="title-item-header">Me contacter</h3>
            <p><i className="fa fa-file-pdf-o" aria-hidden="true"></i> <a className="link-header" href="mailto:contact@vincentaguettaz.com">contact@vincentaguettaz.com</a></p>
          </li>
          <li className="item-header">
            <h3 className="title-item-header">Télécharger mon CV</h3>
            <p><i className="fa fa-envelope-o" aria-hidden="true"></i><a target="_blank" className="link-header" href="http://www.vincentaguettaz.com/CV_VincentAguettaz.pdf">CV_VincentAguettaz.pdf</a></p>
          </li>
        </ul>
      </header>
    )
  }
}
