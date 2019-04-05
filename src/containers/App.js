import React, {Component} from 'react';
import styles from './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
    constructor(props) {
        super(props);
        console.log('[App.js] constructor');
    }

    state = {
        persons: [
            {id: 'unique1', name: 'Mike', age: 31},
            {id: 'unique2', name: 'Pablo', age: 18},
            {id: 'unique3', name: 'Larry', age: 23}
        ],
        showPersons: false,
        showCockpit: true
    };

    static getDerivedStateFromProps(props, state) {
        console.log('[App.js] getDerivedStateFromProps', props);
        return state;
    }

    componentDidMount() {
        console.log('[App.js] componentDidMount');
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log('[App.js] shouldComponentUpdate');
        return true;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[App.js] componentDidUpdate');
    }

    tooglePersonHandler = () => {
        let showPersons = this.state.showPersons;
        this.setState({showPersons: !showPersons})
    };

    deletePersonHandler = (personIndex) => {
        //Copy original array
        const personsArray = [...this.state.persons];

        //Delete person from array
        personsArray.splice(personIndex, 1);

        this.setState({persons: personsArray});
    };

    nameChangeHandler = (event, id) => {
        //Find array index for specific person
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        });

        //Copy specific person object
        const person = {...this.state.persons[personIndex]};
        person.name = event.target.value;

        //Copy original Array
        const personsArray = [...this.state.persons];
        personsArray[personIndex].name = person.name;

        this.setState({
            persons: personsArray
        })
    };

    render() {
        console.log('[App.js] render');

        let persons = null;

        if (this.state.showPersons === true) {
            persons = <Persons
                persons={this.state.persons}
                clicked={this.deletePersonHandler}
                changed={this.nameChangeHandler}/>;
        }

        return (
            <div className={styles.App}>
                <button onClick={() => this.setState({showCockpit: false})}>
                    Remove Cockpit
                </button>
                {this.state.showCockpit ?
                    <Cockpit
                        title={this.props.title}
                        persons={this.state.persons}
                        showPersons={this.state.showPersons}
                        clicked={this.tooglePersonHandler}/>
                    : null
                }
                {persons}
            </div>
        );
    }
}

export default App;
