import React from "react"
import {Link} from "react-router-dom"

function Card({card}) {
    return (
        <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="card-body">
                <div class="row">
                    <div class="col-6">
              <p class="card-text">{card.front}</p>
              </div>
              <div class="col-6">
              <p class="card-text">{card.back}</p>
              </div>
              </div>
              <div class="row mt-4">
<div class="col-12 text-right">
<Link to={`/decks/:deckId/cards/:cardId/edit`} className="btn btn-secondary mr-2">
        <span className="oi oi-pencil mr-1"></span>Edit
      </Link>
    <Link
        to={`DELETE`}
        className="btn btn-danger text-center float-right"
      >
        <span className="oi oi-trash"></span>
      </Link>
</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Card