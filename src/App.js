import React from 'react';
import ReactDOM from 'react-dom';
import Search from './components/search'
import Station from './components/station'
import Nav from './components/router'
import Contract from './components/contract'

const uuidv1 = require('uuid/v1');
function cardClicked(){
    console.log('clicked');
}


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
                console.log(data);

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
        const value = target.type === 'select-one' ? target.selected : target.value;
        const name = target.name;
        console.log(`Input name ${name}. Input value ${value}.`);
        console.log(target.type)


        this.setState({
            [name]: value,
        });

    }

    render() {
        const data = this.state.stations;
        let list = data.map(station => {
            let search = this.state.searchText.toUpperCase();
            const nameMatch = station.name.startsWith(search);
                return (nameMatch)? (
                    <Station key={uuidv1()} contract = {station.city} name={station.name} bikes={station.bikes} stands={station.slots}/>
                ) : null;
        });
        console.log(list)
        return (
            <div>
                <div className = 'container'>
                <Nav/>
                {/*<Contract options={['Dublin','Paris']} name = 'city' handleChange  = {this.handleInputChange} label = "Select City" selected = {this.state.contract}/>*/}
                <Search name="searchText" id = 'searchField' value={this.props.value} handleChange={this.handleInputChange} placeholder={"e.g. Smithfield North"} />

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