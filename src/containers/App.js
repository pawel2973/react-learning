import React, {Component} from 'react';
import styles from './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
    state = {
        persons: [
            {id: 'unique1', name: 'Mike', age: 31},
            {id: 'unique2', name: 'Pablo', age: 18},
            {id: 'unique3', name: 'Larry', age: 23}
        ],
        showPersons: true
    };

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
        let persons = null;

        if (this.state.showPersons === true) {
            persons = <Persons
                persons={this.state.persons}
                clicked={this.deletePersonHandler}
                changed={this.nameChangeHandler}/>;
        }

        return (
            <div className={styles.App}>
                <Cockpit
                    persons={this.state.persons}
                    showPersons={this.state.showPersons}
                    clicked={this.tooglePersonHandler}/>
                {persons}
            </div>
        );
    }
}

export default App;