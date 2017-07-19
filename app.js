// TODO

var App = () => (
  <div>
    <h1>Grocery list
    </h1>
    <GroceryList groceryItems = {['bacon', 'HotDogs', 'Cucumber', 'chicken']}/>
  </div>
);

var GroceryList = (props) => (
  <ul>
  {props.groceryItems.map(function(item, index) {
    return <GroceryListItem name = {item} key = {index}/>
  })}
  </ul>
);

// A class component can be defined as an ES6 class
// that extends the base Component class included in the React library
class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);

    // `state` is just an object literal
    this.state = {
      done: false
    };
  }

  // When a list item is hovered, we will toggle the `done`
  // boolean, and our component's `render` method will run again
  onListItemMouseOver() {
    this.setState({
      done: !this.state.done
    });
  }

  render() {
    // Making the style conditional on our `state` lets us
    // update it based on user interactions.
    var style = {
      'font-weight': this.state.done ? 'bold' : 'normal'
    };

    // You can pass inline styles using React's `style` attribute to any component
    // snake-cased css properties become camelCased this this object
    return (
      <li style={style} onMouseOver={this.onListItemMouseOver.bind(this)}>{this.props.name}</li>
    );
  }
}


ReactDOM.render(<App />, document.getElementById('app'));
