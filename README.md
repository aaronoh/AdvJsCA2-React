### CA2 - Advanced JavaScript - React Web App Development
#### N00143888 - Aaron O'Hare
---
This project was constructed using ReactJS, Materialize CSS, Materialize React, JavaScript, HTML and CSS.  It is a web app that provides users with live availability information of the Dublin Bikes service. The user can sort the list of stations by name, search for a specific station and choose to only show stations with certain levels of availability. They can also view their chosen station on a map and identify whether payment services are available at their chosen station.

This application was built for the purposes of a college assignment and is currently hosted on [FireBase ](https://dbikes-react-1523440340962.firebaseapp.com/ "ReactDublinBikes").

#### User Stories
---

The users of DublinBikesReact can be split into two groups - frequent and infrequent. These users will have slight variations in their requirements based on their familiarity with the service.

* As a user I want to be able to view live availability information for Dublin Bikes services so that I can plan my commute

* As a frequent user I want to be able to search for a station using its' name so that I can check the availability of my preferred stations

* As an infrequent user I want to be able to sort stations by name so that I can quickly find a known station without relying on my spelling abilities

* As a user I want to be able to view stations with actual availability so that I can plan accordingly

* As an infrequent user I want to be able to view my chosen station on a map so that I can easily locate it

* As an infrequent user I want to be able to determine the availability of payment facilities at my chosen station so that I can plan accordingly.

#### Wireframes
---

Wireframes allow the developer to plan the layout of their code. This application was developed using react. React allows code to be split into components. This increases the reusability of code and makes the application modular. The images below depict the structure of DublinBikesReact.

#### Home
![Wireframe](https://i.imgur.com/sFvhDvu.jpg)

#### Map Modal
![Wireframe](https://i.imgur.com/6GaTGeo.jpg)

### Requirements
---

This section will discuss how the project met the requirements of the brief.

**Components**

Components are used to make code modular, allowing for reuse. This application is built using a number of components as shown in the wireframes above, e.g the `<Station/>` component is used to build the card UI and modal for each individual station. These components are then **exported** (`export default Station`)
and **imported** (`import Station from './components/station'`) based on their usage.

**State**
State allows dynamic components to be created using react. The state is initialized in the constructor of a component.

 ```
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
```

It can then be manipulated using setState.

`this.setState({stations: stations});`

Any change to state will trigger the component to re-render - causing the UI to update.

**Props**

Props allow components to share data.

The city, name, bikes, stands, banking, num lat & lng props are passed into the Station component.

`<Station key={uuidv1()} contract = {station.city} name={station.name} bikes={station.bikes} stands={station.slots} lat = {station.lat} lng = {station.lng} banking = {station.banking} num ={station.num}/>`

Within the station component, these props are then used to create a map, passing them into the Map component.

`<Map center={{lat: this.props.lat, lng: this.props.lng}} name={this.props.name} lat={this.props.lat}
                      lng={this.props.lng}/>`

**Conditional Rendering**

Conditional rendering is used when rendering the modal window. This prevents the Google Maps API from being polled every time the state is changed (search/sort/filter). Clicking the button to show the map changes the state of show from false to true, the Modal is then rendered based on the state.

[Code](https://github.com/aaronoh/AdvJsCA2-React/blob/master/src/components/station.js#L32)


**API**

The API used in this project is the JcDecaux DublinBikes API. It provides all availability information for the Dublin Bikes Scheme via JSON with one endpoint. The API is authenticated with an API key.

**Firebase**

The application is available [here](https://dbikes-react-1523440340962.firebaseapp.com/) via FireBase or at dbikes.site.

The deployment process is very straight forward - once you [create an application](https://console.firebase.google.com/) and install the CLI (`npm install -g firebase-tools`). You then login to your account using `firebase login`. You then create a production build of your project using `npm build` and prepare it for deployment to firebase using `firebase init`, form there the CLI steps you through the process before providing you with the [url](https://dbikes-react-1523440340962.firebaseapp.com/) of your application.

**React Router**

React Router is used to match URLs' with pages within the application. DublinBikesReact uses it to provide a tabbed navigation system with a quick welcome message, usage instructions and contact section.

[Code](https://github.com/aaronoh/AdvJsCA2-React/blob/master/src/components/router.js)

**Materialize CSS/React-Materialize**

Materialize CSS and React-Materialize are used to provide styling to the application. These libraries provide UI elements including the cards used for the station component, input fields, icons, modals and the grid system.

**Type Checking - PropTypes**

Type checking in react can be achieved through PropTypes. PropTypes allow the developer to specify which props are required in order for the component to render and which variable type they should be.

```
Search.propTypes ={
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string,
    placeholder: PropTypes.string
}
```


### Discussion
---

Overall I was satisfied with the progression of this project. This is my first time using React and I did find that it had a bit of a learning curve. Once I became comfortable with components/states/props it became clear that this method of programming was much more efficient, this application did benefit greatly from state/props and in a larger scale/slightly more advanced application I would have benefited even more from the modularity offered by components.

If I had additional time to work on this project I would allow the user to search through bike schemes in multiple cities - as provided by the API. I would also like to go further with the features offered by react and possibly react native.

This project did not make use of a tutorial etc. although the foundations of the project were based on in-class labs.


### Running
---

The application can be accessed  [here](https://dbikes-react-1523440340962.firebaseapp.com/).


If you wish to run it locally, assuming you have [git](https://git-scm.com/) and [node](https://nodejs.org/en/) installed:

* Clone this repository `git clone https://github.com/aaronoh/AdvJsCA2-React`

* Run `npm install` to install dependencies

* Run `npm start` and the application will launch in a new tab in your default browser. If you are having difficulty at this step, manually navigate to http://localhost:3000/

* You can now use the application. You are presented with all stations, use the search, sort and range input fields to narrow your results. Click 'Show Map' to view a modal window containing google map showing your chosen station.

### References
---

1. http://materializecss.com/
2. https://react-materialize.github.io/#/
3. https://reactjs.org/
4. https://iadt-advancedjs.github.io/

