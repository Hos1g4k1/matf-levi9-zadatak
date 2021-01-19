import React, {Component} from 'react'
import './ItemList.css';

export default class ItemList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tableRows: []
    }

    this.renderCallback = this.renderCallback.bind(this);
  }

  componentDidMount() {
    this.renderCallback();
  }

  // Ispisivanje svih proizvoda iz mape
  renderCallback() {
    fetch('http://localhost:33337/admin/proizvodi')
    .then((res) => res.json())
    .then((res) => {
      let tableRows = []
      for (const [key, value] of Object.entries(res)) {
        let item = {
          id: parseInt(key),
          name: value.name,
          description: value.description
        };

        tableRows.push(item)
      }

      this.setState({tableRows: tableRows})
    })
    .catch((err) => console.error(err));
  }

  // Poziv metoda za brisanje jednog proizvoda
  // Prosledi se id proizvoda i nakon toga
  // Se ispisu preostali proizvodi
  deleteCallback = async(id) => {
    const res = await fetch('http://localhost:33337/admin/proizvodi', {
      method: 'DELETE',
      headers: {'Content-Type': 'application/json',},
      body: JSON.stringify({id: id}),
    });

    res
    .json()
    .then((res) => {
        let tableRows = []
        for (const [key, value] of Object.entries(res)) {
            const item = {id: parseInt(key), name: value.name, description: value.description};

            tableRows.push(item);
        }

        this.setState({tableRows: tableRows});
    })
  }

  render() {
    return (
      <div id="ItemList">
        {this.props.children}
        <table>
          <thead>
            <tr key={""}>
              <th>ID</th>
              <th>Name</th>
              <th>Description</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.tableRows.map((row) => (
                <tr key={row.name + row.description}>
                  <td>{row.id}</td>
                  <td>{row.name}</td>
                  <td>{row.description}</td>
                  <td>
                    <button onClick={() => this.deleteCallback(row.id)}>Delete</button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    );
  }
};
