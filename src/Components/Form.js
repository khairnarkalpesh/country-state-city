import React from 'react'
import { Country, State, City }  from 'country-state-city';

function Form() {
    const [selectedCountry, setSelectedCountry] = React.useState();
    const [selectedState, setSelectedState] = React.useState();
    const [selectedCity, setSelectedCity] = React.useState();
    const countries = Country.getAllCountries();
    const [states, setStates] = React.useState();
    const [countryDetails, setcountryDetails] = React.useState();
    const [cities, setCities] = React.useState();
    const [countryCode, setcountryCode] = React.useState();
    const [stateCode, setStateCode] = React.useState();

    // console.log(State.getAllStates())  
    const setCountryDetails = (e) =>{
      setcountryCode(e.target.value);
      setSelectedCountry(Country.getCountryByCode(countryCode).name);
    }

    const stateList = State.getStatesOfCountry(countryCode);
    const cityList = City.getCitiesOfState(countryCode, stateCode);

    const setStateDetails = (e) =>{
      setStateCode(e.target.value)
      setSelectedCountry(State.getStateByCodeAndCountry(stateCode, countryCode).name);
    }

  return (
    <div className="container">
      <div className='row my-5'>
      <div className='col-3'>
        <label>Country</label>
        <select 
          placeholder="Country"
          onChange={setCountryDetails}
        >
          <option>--Choose Country--</option>
          {countries.map((value, key) => {
            return (
              <option value={value.isoCode}>
                {value.name}
                
              </option>
            );
          })}
        </select>
      </div>

      <div className='col-3'>
        <label>State</label><br/>
        <select
          placeholder="State"
          onChange={setStateDetails}
        >
          <option>--Choose State--</option>
          {stateList.map((states, key) => {
            return (
              <option value={states.isoCode} key={key}>
                {states.name}
              </option>
            );
          })}
        </select>
      </div>

      <div className='col-3'>
        <label>City</label><br/>
        <select
          placeholder="City"
          onChange={(e) => setSelectedCity(e.target.value)}
        >
          <option>--Choose City--</option>
          {cityList.map((city, key) => {
            return (
              <option value={city.name} key={key}>
                {city.name}
              </option>
            );
          })}
        </select>
      </div>

      {console.log(selectedCountry)}
      {/* {console.log(selectedState)}
      {console.log(selectedCity)} */}
      </div>
    </div>
  )
}

export default Form