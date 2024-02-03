import {Component} from 'react'

import './index.css'

class Home extends Component {
  state = {isChange: false, text: '', userInput: ''}

  savetext = () => {
    const {userInput} = this.state
    this.setState(prevState => ({
      isChange: !prevState.isChange,
      text: userInput,
    }))
  }
  edittext = () => {
    this.setState(prevState => ({isChange: !prevState.isChange, text: ''}))
  }
  takinput = event => {
    this.setState({userInput: event.target.value})
  }
  render() {
    const {isChange, text, userInput} = this.state
    return (
      <div className="bg-container">
        <div className="bg1">
          <h1>Editable Text Input</h1>
          {!isChange && (
            <div>
              <input
                type="text"
                onChange={this.takeinput}
                value={userInput}
                className="inputel"
              />
              <button type="button" className="btn" onClick={this.savetext}>
                Save
              </button>
            </div>
          )}
          {isChange && (
            <div>
              <p>{text}</p>
              <button type="button" className="btn" onClick={this.edittext}>
                Edit
              </button>
            </div>
          )}
        </div>
      </div>
    )
  }
}
export default Home
