import React from "react";

function DeckListItem({ deck }) {
  return (
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">
          <small class="text-muted float-right">{`${deck.cards.length} cards`}</small>
          {deck.name}
        </h5>
        <p class="card-text">{deck.description}</p>
        <a href={`/decks/${deck.id}`} class="btn btn-secondary mr-2">
          <span class="oi oi-eye mr-1"></span>View
        </a>
        <a href={`/decks/${deck.id}/study`} class="btn btn-primary mr-2">
          <span class="oi oi-book mr-1"></span>Study
        </a>
        <a href={`/decks/${deck.id}/edit`} class="btn btn-info mr-2">
          <span class="oi oi-list mr-1"></span>Edit
        </a>
        <a href={`/decks/${deck.id}/DELETE`} 
        class="btn btn-danger text-center float-right">
          <span class="oi oi-trash"></span>
        </a>
      </div>
    </div>
  );
}

export default DeckListItem;
