import React, { Component } from 'react';
import Earthquakes from '../data/earthquakes.js';
import moment from 'moment';

export default class EarthquakeList extends Component {
  render() {
    let earthquakeData = Earthquakes.features.map((result) => {
      return (

        <div className="col-sm-6" key={result.id}>
          <div className="card">
            <div className="card-block">
              <h4 className="card-title">{result.place}</h4>
              <h6 className="card-subtitle mb-2 text-muted">Magnitude: {result.mag}</h6>
              <h6 className="card-subtitle mb-2 text-muted">Time: {moment(result.time).format('llll')}</h6>
              <p className="card-text">Coordinates: {result.coordinates}</p>

              <a href={result.url} className="card-link">USGS Event Link</a>

            </div>
          </div>
        </div>

      )
    });
    return (
      <div className="quake-list">
        <div className="row">
          {earthquakeData}
        </div>
      </div>

    );
  }
}
