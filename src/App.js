import React from 'react';
import ReactDOM from 'react-dom';
import Search from './components/search'
import Station from './components/station'
import Nav from './components/router'
import SortButton from './components/sort'
import Range from './components/range'

const uuidv1 = require('uuid/v1');

class GetStations extends React.Component {
    constructor(){
        super();
        this.state = {
            stations: [],
            contract: 'Dublin',
            bikes: [],
            banking: 'false',
            stands: [],
            searchText:'',
            lat: '',
            lng:'',
            sort:'No',
            range: '0'
        };
        this.handleInputChange = this.handleInputChange.bind(this);
    }


    componentWillMount() {
        let contract = (this.state.contract)
        fetch(`https://api.jcdecaux.com/vls/v1/stations?contract=${contract}&apiKey=2eb0463a8d6feabf397cf5babdc21d4e764701a9`)
            .then(response => {
                if(response.ok) return response.json();
                throw new Error('Request failed.');
            })
            .then(data => {
                console.log(data)

                const stations = data.map(station => {
                    return {name: station.name,
                        bikes: station.available_bikes,
                        slots: station.available_bike_stands,
                        banking: station.banking,
                        lat: station.position.lat,
                        lng: station.position.lng,
                        num: station.number};

                });
                this.setState({stations: stations});

            })
            .catch(error => {
                console.log(error);
            });
    }
    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'select-one' ? target.selected : target.value;
        const name = target.name;

        this.setState({
            [name]: value,
        });

    }

    render() {
        // if results are to be sorted, create a copy of the user data and sort it,
        // otherwise just use the original data from the state
        const data = this.state.sort === 'no' ? this.state.stations : [].concat(this.state.stations)
            .sort((a, b) => {
                if(a.name < b.name) return -1;
                if(a.name > b.name) return 1;
                return 0;
            });
        let list = data.map(station => {
            const rangeMatch = (this.state.range <= station.bikes);
            let search = this.state.searchText.toUpperCase();
            const nameMatch = station.name.startsWith(search);
                return (rangeMatch && nameMatch)? (
                    <Station key={uuidv1()} contract = {station.city} name={station.name} bikes={station.bikes} stands={station.slots} lat = {station.lat} lng = {station.lng} banking = {station.banking} num ={station.num}/>
                ) : null;
        });
        return (
            <div>
                <Nav/>
                <div className = 'container'>

                {/*<Contract options={['Dublin','Paris']} name = 'city' handleChange  = {this.handleInputChange} label = "Select City" selected = {this.state.contract}/>*/}
                <Search name="searchText" id = 'searchField' value={this.props.value} handleChange={this.handleInputChange} placeholder={"e.g. Smithfield North"} />
                <SortButton handleChange={this.handleInputChange} checked={this.state.sort}/>
                <Range handleChange={this.handleInputChange} range ={this.state.range} />
                    <div className = 'row'>
                {list}
                    </div>
                </div>
            </div>
        );
    }

}


ReactDOM.render(
    <GetStations />,
    document.getElementById('root')
);