import React, { Component } from "react";
import TodoList from "./components/TodoList";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      currentItem: {
        text: "",
        key: "",
      },
    };
  }

  handleInput = (e) => {
    this.setState({
      currentItem: {
        text: e.target.value,
        key: Date.now(),
      },
    });
  };

  addItem = (e) => {
    e.preventDefault();
    const newItem = this.state.currentItem;
    if (newItem.text !== "") {
      const newItems = [...this.state.items, newItem];
      this.setState({
        items: newItems,
        currentItem: {
          text: "",
          key: "",
        },
      });
    }
  };

  deleteItem = (key) => {
    const restItems = this.state.items.filter((item) => item.key !== key);
    this.setState({
      items: restItems,
    });
  };

  editUpdate = (text, key) => {
    const items = this.state.items;
    items.map((item) => (item.key === key ? (item.text = text) : item.text));
    this.setState({
      items: items,
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Myil's ToDo List</h1>
        <header>
          <form className="form" onSubmit={this.addItem}>
            <input
              onChange={this.handleInput}
              value={this.state.currentItem.text}
              type="text"
              placeholder="Add Todo Item"
            />
            <button type="submit">+</button>
          </form>
        </header>

        <TodoList
          items={this.state.items}
          deleteItem={this.deleteItem}
          editUpdate={this.editUpdate}
        />
      </div>
    );
  }
}

export default App;
