import React from "react";
import {Link} from "react-router-dom"

function DeckListItem({ deck }) {
  return (
    <div className="card my-4">
      <div className="card-body">
        <h5 className="card-title">
          <small className="text-muted float-right">{`${deck.cards.length} cards`}</small>
          {deck.name}
        </h5>
        <p className="card-text">{deck.description}</p>
        <Link to={`/decks/${deck.id}`} className="btn btn-secondary mr-2">
          <span className="oi oi-eye mr-1"></span>View
        </Link>
        <Link to={`/decks/${deck.id}/study`} className="btn btn-primary mr-2">
          <span className="oi oi-book mr-1"></span>Study
        </Link>
        <Link to={`/decks/${deck.id}/edit`} className="btn btn-info mr-2">
          <span className="oi oi-list mr-1"></span>Edit
        </Link>
        <Link
          to={`/decks/${deck.id}/DELETE`}
          className="btn btn-danger text-center float-right"
        >
          <span className="oi oi-trash"></span>
        </Link>
      </div>
    </div>
  );
}

export default DeckListItem;
