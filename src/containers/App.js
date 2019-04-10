import React, {Component} from 'react';
import styles from './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass'; //function that returns a component function but not a component itself
import Aux from '../hoc/Auxiliary';

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
        showCockpit: true,
        changeCounter: 0,
        authenticated: false
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

        this.setState((prevState, props) => {
            return {
                persons: personsArray,
                changeCounter: prevState.changeCounter + 1
            };
        });
    };

    loginHandler = () => {
        if (this.state.authenticated) {
            this.setState({authenticated: false});
        } else {
            this.setState({authenticated: true});
        }
    };

    render() {
        console.log('[App.js] render');

        let persons = null;

        if (this.state.showPersons === true) {
            persons = <Persons
                persons={this.state.persons}
                clicked={this.deletePersonHandler}
                changed={this.nameChangeHandler}
                isAuthenticated={this.state.authenticated}
            />;
        }

        return (
            <Aux>
                <button onClick={() => this.setState({showCockpit: false})}>
                    Remove Cockpit
                </button>
                {this.state.showCockpit ?
                    <Cockpit
                        title={this.props.title}
                        personsLength={this.state.persons.length}
                        showPersons={this.state.showPersons}
                        clicked={this.tooglePersonHandler}
                        login={this.loginHandler}
                        isAuthenticated={this.state.authenticated}
                    />
                    : null
                }
                {persons}
            </Aux>
        );
    }
}

export default withClass(App, styles.App);
