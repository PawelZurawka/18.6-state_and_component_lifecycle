var Counter = React.createClass({
  getInitialState: function() {
    return {
      counter: 0
    };
  },

  increment: function() {
    this.setState({
      counter: this.state.counter + 1
    });
  },

  decrement: function() {
    this.setState({
      counter: this.state.counter -1
    });
  },

  render: function() {
    return React.createElement('div', {},
      React.createElement('button', {onClick: this.decrement}, '-'),
      React.createElement('span', {}, 'Licznik: ' + this.state.counter),
      React.createElement('button', {onClick: this.increment}, '+')
      
    );
  },

  getDefaultProps: function() {
    console.log('Wstawianie domyślnych wartości propsów');
  },

  /*getInitialState: function() {
    console.log('Pobieranie początkowego stanu naszego komponentu');
  },*/

  componentWillMount: function () {
    console.log('Podłączenie komponentu przed wykonaniem renderu');
  },
  
  /*render: function () {
    console.log('Renderuje komponent w stanie początkowy lub go aktualizuje');
  },*/

  componentDidMount: function () {
    console.log('Po wyrenderowaniu umożliwia dalsze operacje na utworzonym komponencie');
  },

  componentWillReceiveProps: function () {
    console.log('Stan komponentu zostaje odświeżony po zmianie właściwości');
  },

  shouldComponentUpdate: function () {
    console.log('Porównuje propsy, jeżeli się zmieniły powtórnie renderuje komponent');
    return true;
  },

  componentWillUpdate: function () {
    console.log('Aktualizuje komponent w przypadku gdy shouldComponentUpdate ma wartość true');
  },

  componentDidUpdate: function () {
    console.log('Jak w componentDidMount umożliwia dalsze operacje na komponencie');
  },

  componentWillUnmount: function () {
    console.log('Pozbywa się już niepotrzebnego komponentu.');
  },
});

var element = React.createElement('div', {},
    React.createElement(Counter),
    React.createElement(Counter),
    React.createElement(Counter)
);

ReactDOM.render(element, document.getElementById('app'));
