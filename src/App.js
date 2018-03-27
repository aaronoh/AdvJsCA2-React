import React from 'react';
import ReactDOM from 'react-dom';
import Search from './components/search'

const uuidv1 = require('uuid/v1');

class GetStations extends React.Component {
    constructor(){
        super();
        this.state = {
            stations: [],
            contract: 'all',
            bikes: [],
            stands: [],
            searchText:'a'
        };
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    componentWillMount() {
        fetch('https://api.jcdecaux.com/vls/v1/stations?contract=Dublin&apiKey=2eb0463a8d6feabf397cf5babdc21d4e764701a9')
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

        this.setState({
            [name]: value
        });
    }

    render() {
        const data = this.state.stations;
        let list = data.map(station => {
            const nameMatch = station.name.startsWith(this.state.searchText);
                return <Station key={uuidv1()} contract = {station.city} name={station.name} bikes={station.bikes} stands={station.slots}/>;
        });
        console.log(list)
        // return (
        //     <div>
        //         <h1>Dublin Bikes:</h1>
        //         <select
        //             name="contract"
        //             type="select"
        //             value={this.state.contract}
        //             onChange={this.handleInputChange}>
        //             <option value ='Dublin'>Dublin</option>
        //             <option value='Paris'>Paris</option>
        //             <option value='Berlin'>Berlin</option>
        //         </select>
        //         {list}
        //     </div>
        // );
        return (
            <div>
            <Search name="searchText" label="Search by station name" value={this.state.searchText} handleChange={this.handleChange} placeholder={"e.g. alberto"} />
            <div style={{'borderStyle': 'dotted'}}>
                <h3>{this.props.name}</h3>
                <p>Bikes Available: {this.props.bikes}</p>
                <p>Stands Available: {this.props.stands}</p>
            </div>
            </div>
        );
    }
}

ReactDOM.render(
    <GetStations />,
    document.getElementById('root')
);