// TODO

var App = () => (
  <div>
    <h1>Grocery list
    </h1>
    <ul>
      < Cucumber />
      < HotDogs />
    </ul>
  </div>
);

var Cucumber = () => (
  <li>Cucumber</li>
);

var HotDogs = () => (
  <li>HotDogs</li>
);

ReactDOM.render(<App />, document.getElementById('app'));
