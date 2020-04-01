//code for a simple ReactJS component!

class MySomething extends React.Component{
  render() {
      return (
        <div className="shopping-list">
          <h1>Shopping List for {this.props.name}</h1>    //line 18 - affects this
          <ul>
            <li>Instagram</li>
            <li>WhatsApp</li>
            <li>Oculus</li>
          </ul>
        </div>
      );
    }
}

ReactDOM.render(<MySomething name="Personal" document.getElementById('button'));
