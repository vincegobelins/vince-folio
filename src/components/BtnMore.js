import React, { Component, PropTypes } from 'react'
import './BtnMore.css'

export default class BtnMore extends Component {

  render() {
    const{isFetching, handleGetMoreClick} = this.props;

    return (
      <div>
      {isFetching
        ? ''
        :
        <div className="get-more">
          <button
             onClick={handleGetMoreClick}
             className="btn-get-more">
            Voir plus de projets
          </button>
        </div>
      }
      </div>

    )
  }
}

BtnMore.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  handleGetMoreClick: PropTypes.func.isRequired
}
