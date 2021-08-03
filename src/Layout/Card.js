import React from "react"
import {Link} from "react-router-dom"

function Card({card}) {
    return (
        <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-body">
                <div className="row">
                    <div className="col-6">
              <p className="card-text">{card.front}</p>
              </div>
              <div className="col-6">
              <p className="card-text">{card.back}</p>
              </div>
              </div>
              <div className="row mt-4">
<div className="col-12 text-right">
<Link to={`/decks/:deckId/cards/:cardId/edit`} className="btn btn-secondary mr-2">
        <span className="oi oi-pencil mr-1"></span>Edit
      </Link>
      <button
          type="button"
          onClick={() => {
            if (
              window.confirm(
                "Delete this card? \n\nYou will not be able to recover it."
              )
            ) {
            }
          }}
          className="btn btn-danger text-center float-right"
        >
          <span className="oi oi-trash"></span>
        </button>
</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Card