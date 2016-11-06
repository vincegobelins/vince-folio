import React, { Component, PropTypes } from 'react'
import './BtnMore.css'

export default class BtnMore extends Component {

  render() {
    const{isFetching, page, handleGetMoreClick} = this.props;
    const isFull = page.fullLength - (page.cursor*6) < 0;
    console.log(this.props);

    return (
      <div>
      {isFetching || isFull
        ?
        <div className="get-more is-fetching">
          <button
             onClick={handleGetMoreClick}
             className="btn-get-more">
            Voir plus de projets
          </button>
        </div>
        :
        <div className="get-more">
          <button
             onClick={handleGetMoreClick}
             className="btn-get-more">
            Voir plus de projets <strong>({page.fullLength - (page.cursor*6)}+)</strong>
          </button>
        </div>
      }
      </div>

    )
  }
}

BtnMore.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  handleGetMoreClick: PropTypes.func.isRequired,
  page: PropTypes.object.isRequired,
}
