import React from "react";

class Input extends React.Component {

    state = { name : "", description : ""}

    render() {
        return (
          <div className="create-entry">
            <h2>New entry</h2>
            <form className="ui form">
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
              
              <button className="ui button" type="submit">
                Create
              </button>
            </form>

            <p>{this.state.description}</p>
          </div>
        );
    }
    
    onNameChange = event => {
        this.setState({ name: event.target.value });
    };
    
    onDescriptionChange = event => {
        this.setState({ description: event.target.value });
    };
    
    onPhoneChange = event => {
        this.setState({ phone: event.target.value });
    };
    
}
export default Input;