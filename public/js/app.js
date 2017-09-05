class ProductList extends React.Component {
  render() {
    return (
      <div className="ui unstackable items">
         This is a React component.
      </div>
    );
  }
}

ReactDOM.render (
  <ProductList />,
  document.getElementById('content')
);
