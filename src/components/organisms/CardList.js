import React, { Component } from "react";

import Card from "../molecules/Card";
import Button from "../atoms/Button";

class CardList extends Component {
  constructor(props) {
    super(props);
    this.state = { cards: this.props.cards };
  }

  _delete = id => {
    this.setState({
      cards: this.state.cards.filter(x => x.id !== id)
    });
  };

  _select = id => {
    this.setState({
      cards: this.state.cards.map(x => {
        if (x.id !== id) {
          return x;
        }

        x.selected = true;
        return x;
      })
    });
  };

  _deleteSelectedCards = id => {
    this.setState({
      cards: this.state.cards.filter(x => !x.selected)
    });
  };

  render() {
    const cards = this.state.cards.map(item => (
      <Card
        key={item.id}
        image={item.image}
        title={item.name}
        body={item.description}
        onDelete={() => {
          this._delete(item.id);
        }}
        onSelect={() => {
          this._select(item.id);
        }}
      />
    ));

    return (
      <div className="card-list">
        <ul>{cards}</ul>
        <Button
          onClick={() => {
            this._deleteSelectedCards();
          }}
        >
          Delete selected
        </Button>
      </div>
    );
  }
}

export default CardList;
