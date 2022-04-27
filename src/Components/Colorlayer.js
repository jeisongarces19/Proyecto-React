import React from 'react';
import './Colorlayer.css';


class TodoList extends React.Component {
  render() {
    return (
      <h>
        {this.props.items.map(item => (
          <div className={item.text}>
          </div>
        ))}
      </h>
    );
  }
}

class TodoList1 extends React.Component {
  render() {
    return (
      <h1>
        
      </h1>
    );
  }
}



class Colorlayer extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = { items: [], text: '' };
    this.state2 ={ items2: [], op: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <div>
        <br></br>
        <br></br>
        <br></br>

        <TodoList items={this.state.items} />

        <form onSubmit={this.handleSubmit}>
          {this.state.text="Fondoc"}
          <button  className="afuera" id="new-todo" onChange={this.handleChange} >
              Añadir 
          </button>
        </form>

       



 
               
        



      </div>
    );
  }


  handleChange(e) {  
    this.setState({ text: e.target.value });
  }

  handleChange2(e) {
     this.setState({ op: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.text.length === 0) {
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Date.now()
    };
    this.setState(state => ({
      items: state.items.concat(newItem),
      text: ''
    }));
  }



  
}
export default Colorlayer;