import React, {Component} from 'react'
import './ItemAdd.css';

export default class ItemAdd extends Component {
    constructor(props) {
        super(props);

        this.sendCallback = this.sendCallback.bind(this);
        this.onNameChange = this.onNameChange.bind(this);
        this.onDescriptionChange = this.onDescriptionChange.bind(this);
        this.state = {
          name: "",
          description: ""
        }
    }

    // Akcija prilikom unosa imena
    onNameChange(event) {
      this.setState({ name: event.target.value });
    }

    // Akcija prilikom unosa opisa
    onDescriptionChange(event) {
      this.setState({ description: event.target.value });
    }

    // Metoda za slanje zahteva za dodavanje 
    // proizvoda u mapu
    sendCallback = async() => {
      console.log("Dodjoh ovde!")
      if (this.state.name === "" || this.state.description === "") {
        console.log("Unos ne bi smeo biti prazan!")
      } else {
        await fetch('http://localhost:33338/admin/unos-novog-proizvoda', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: this.state.name,
            description: this.state.description
          })
        });
      }

      document.querySelectorAll('input').forEach(input => (input.value = ""));
      this.setState({name: "", description: ""});
    }

    render() {
        return (
          <div className="create-entry">
            <h2>New entry</h2>
            <div className="field">
              <label>Product name:</label>
              <input
                type="text"
                onChange={this.onNameChange}
                value={this.state.name}
              ></input>
            </div>
            <div className="field">
              <label>Product description:</label>
              <textarea
                onChange={this.onDescriptionChange}
                value = {this.state.description}
              ></textarea>
            </div>
            
            <button onClick = {this.sendCallback}>
              Add product
            </button>
            <p>{this.state.description}</p>
          </div>
        );
    }
}