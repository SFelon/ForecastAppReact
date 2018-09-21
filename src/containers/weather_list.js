import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Sparklines, SparklinesLine } from 'react-sparklines';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {
    
    renderWeather(cityData) {
        const name = cityData.city.name;
        const temps = cityData.list.map( weather => weather.main.temp);
        const pressures = cityData.list.map( weather => weather.main.pressure);
        const humidities = cityData.list.map( weather => weather.main.humidity);
        const {lon, lat} = cityData.city.coord;
        

        return (
            <tr key={name}>
                <td><GoogleMap lon={lon} lat={lat} /></td>
                <td><Chart data={temps} color="orange"/></td>
                <td><Chart data={pressures} color="green"/></td>
                <td><Chart data={humidities} color="blue"/></td>
            </tr>
        );
    }
    
    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Miasto</th>
                        <th>Temperatura (*C)</th>
                        <th>Ciśnienie (hPa)</th>
                        <th>Wilgotność (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }
}

// connecting to redux state
function mapStateToProps({ weather }) {
    return { weather }; 
} 
// same as // fn(state) return {weather: state.weather};

export default connect(mapStateToProps)(WeatherList);
// exporting connected version of weatherlist