import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here

class Capitals extends Component {
  state = {countryName: countryAndCapitalsList[0].country}

  onChangingCapital = event => {
    const capitalSelected = event.target.value
    const capitalCountry = countryAndCapitalsList.filter(
      eachCountry => eachCountry.id === capitalSelected,
    )
    this.setState({countryName: capitalCountry[0].country})
  }

  render() {
    const {countryName} = this.state

    return (
      <div className="app-container">
        <div className="card-container">
          <h1 className="heading">Countries And Capitals</h1>
          <select className="option-value" onChange={this.onChangingCapital}>
            {countryAndCapitalsList.map(eachCountry => (
              <option value={eachCountry.id} key={eachCountry.id}>
                {eachCountry.capitalDisplayText}
              </option>
            ))}
          </select>
          <span className="span-text">is capital of which country?</span>
          <p className="country-name">{countryName}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
