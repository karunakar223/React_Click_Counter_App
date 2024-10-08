// Write your code here
import {Component} from 'react'
import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  onIncrease = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <div className="main-container">
          <h1 className="main-heading">
            The Button has been clicked <span className="count">{count} </span>
            times
          </h1>
          <p className="description">Click the button to increase the count!</p>
          <button type="button" onClick={this.onIncrease} className="button">
            Click Me!
          </button>
        </div>
      </div>
    )
  }
}

export default ClickCounter
