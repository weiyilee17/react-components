// TODO

var App = () => (
  <div>
    <h1>Grocery list
    </h1>
    <GroceryList groceryItems = {['bacon', 'HotDogs', 'Cucumber']}/>
  </div>
);

var Cucumber = () => (
  <li>Cucumber</li>
);

var HotDogs = () => (
  <li>HotDogs</li>
);

var GroceryListItem = (props) => (

  <li>{props.name}</li>
);

var GroceryList = (props) => (
  <ul>
  {props.groceryItems.map(function(item, index) {
    return <GroceryListItem name = {item} key = {index}/>
  })}
  </ul>
);

ReactDOM.render(<App />, document.getElementById('app'));
