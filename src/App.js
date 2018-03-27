import React from 'react';
import ReactDOM from 'react-dom';
import Search from './components/search'
import Station from './components/station'
import Contract from './components/contract'

const uuidv1 = require('uuid/v1');

class GetStations extends React.Component {
    constructor(){
        super();
        this.state = {
            stations: [],
            contract: 'Dublin',
            bikes: [],
            stands: [],
            searchText:''
        };
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    componentWillMount() {
        let contract = (this.state.contract)
        console.log('Contract is : ' + contract)
        fetch(`https://api.jcdecaux.com/vls/v1/stations?contract=${contract}&apiKey=2eb0463a8d6feabf397cf5babdc21d4e764701a9`)
            .then(response => {
                if(response.ok) return response.json();
                throw new Error('Request failed.');
            })
            .then(data => {
                console.log(data.results);

                const stations = data.map(station => {
                    return {name: station.name,
                        bikes: station.available_bikes,
                        slots: station.available_bike_stands,
                        lat: station.location,
                        long: station.location,
                        city: station.contract_name};
                });
                this.setState({stations: stations});

            })
            .catch(error => {
                console.log(error);
            });
    }
    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'select' ? target.selected : target.value;
        const name = target.name;
        const bikes = target.bikes;
        const stands = target.stands;
        console.log(`Input name ${name}. Input value ${value}.`);
        console.log(target.type)
        if (target.type ==='select-one'){
            console.log('kfghjkhkihkjhkljkhjkhj')
        }

        this.setState({
            [name]: value,
        });

    }

    render() {
        const data = this.state.stations;
        let list = data.map(station => {
            const nameMatch = station.name.startsWith(this.state.searchText);
                return <Station key={uuidv1()} contract = {station.city} name={station.name} bikes={station.bikes} stands={station.slots}/>;
        });
        console.log(list)
        return (
            <div>
                <h1>Dublin Bikes:</h1>
                <Contract options={['Dublin','Paris']} name = 'city' handleChange = {this.handleInputChange} label = "Select City" selected = {this.state.contract}/>
                <Search name="searchText" label="Search by station name" value={''} handleChange={this.handleInputChange} placeholder={"e.g. alberto"} />
                {list}
            </div>
        );
    }

}


ReactDOM.render(
    <GetStations />,
    document.getElementById('root')
);