import React from "react"

function DeckListItem({deck}) {
return (
<div class="card">
  <div class="card-body">
    <h5 class="card-title">{deck.name}</h5>
    <p class="card-text">{deck.description}</p>
    <a href={`/decks/${deck.id}`} class="btn btn-secondary">View</a>
    <a href={`/decks/${deck.id}/study`} class="btn btn-primary">View</a>
  </div>
</div>
)
}

export default DeckListItem