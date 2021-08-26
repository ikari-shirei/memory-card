/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'

function App() {
  const [score, setScore] = useState(0)
  const [highestScore, setHighestScore] = useState(0)
  const [countries, setCountries] = useState([
    { name: 'Belgium', flag: 'https://www.countryflags.io/be/flat/64.png' },
    { name: 'Turkey', flag: 'https://www.countryflags.io/tr/flat/64.png' },
    { name: 'Taiwan', flag: 'https://www.countryflags.io/tw/flat/64.png' },
    {
      name: 'Cyprus',
      flag: 'https://www.countryflags.io/ny/flat/64.png',
    },
    { name: 'Macedonia', flag: 'https://www.countryflags.io/mk/flat/64.png' },
    {
      name: 'Madagascar',
      flag: 'https://www.countryflags.io/mg/flat/64.png',
    },
    { name: 'Luxemburg', flag: 'https://www.countryflags.io/lu/flat/64.png' },
    {
      name: 'Netherlands',
      flag: 'https://www.countryflags.io/nl/flat/64.png',
    },
    { name: 'Rwanda', flag: 'https://www.countryflags.io/rw/flat/64.png' },
    { name: 'Panama', flag: 'https://www.countryflags.io/pa/flat/64.png' },
    { name: 'Poland', flag: 'https://www.countryflags.io/pl/flat/64.png' },
    { name: 'Somalia', flag: 'https://www.countryflags.io/so/flat/64.png' },
    { name: 'Chad', flag: 'https://www.countryflags.io/td/flat/64.png' },
    { name: 'Romania', flag: 'https://www.countryflags.io/ro/flat/64.png' },
    { name: 'Singapore', flag: 'https://www.countryflags.io/sg/flat/64.png' },
  ])
  const [savedCountries, setSavedCountries] = useState([])

  const changeHighest = () => {
    if (score > highestScore) {
      setHighestScore(score)
    }
  }

  const shuffleCountries = () => {
    const countriesCopy = [].concat(countries)
    const shuffledCountries = countriesCopy.sort(function () {
      return 0.5 - Math.random()
    })

    setCountries(shuffledCountries)
  }

  const countCountries = (event) => {
    const targetCountry = event.target.id
    if (!savedCountries.includes(targetCountry)) {
      setSavedCountries(savedCountries.concat(targetCountry))
      setScore(score + 1)
    } else {
      setSavedCountries([])
      setScore(0)
    }

    shuffleCountries()
  }

  useEffect(changeHighest, [score])

  return (
    <div className="App">
      <div className="header">
        <h1>Flag Memory Game</h1>
        <div>
          <p>Score: {score}</p>
          <p>Highest Score: {highestScore}</p>
        </div>
      </div>
      <div className="countries-container">
        {countries.map((obj) => {
          return (
            <div
              id={obj.name}
              key={obj.name}
              className="country-container"
              onClick={(event) => countCountries(event)}
            >
              <img src={obj.flag} alt={obj.name} />
              <h2>{obj.name}</h2>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default App
