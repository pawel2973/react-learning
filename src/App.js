import React, {Component} from 'react';
import styles from './App.module.css';
import Person from './Person/Person';

class App extends Component {
    state = {
        persons: [
            {id: 'unique1', name: 'Mike', age: 31},
            {id: 'unique2', name: 'Pablo', age: 18},
            {id: 'unique3', name: 'Larry', age: 23}
        ],
        isHidden: true
    };

    tooglePersonHandler = () => {
        let isHidden = this.state.isHidden;
        this.setState({isHidden: !isHidden})
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
        let btnClass = '';

        if (this.state.isHidden === true) {
            persons = (
                <div>
                    {this.state.persons.map((p, index) => {
                        return <Person
                            name={p.name}
                            age={p.age}
                            key={p.id}
                            click={() => this.deletePersonHandler(index)}
                            changed={(event) => this.nameChangeHandler(event, p.id)}/>
                    })}
                </div>
            );
            btnClass = styles.redBtn;
        }

        const classes = [];

        if (this.state.persons.length >= 1)
            classes.push(styles.bold);
        if (this.state.persons.length >= 2)
            classes.push(styles.shadow);
        if (this.state.persons.length >= 3)
            classes.push(styles.red);

        return (
            <div className={styles.App}>
                <h1>Hello, world!</h1>
                <p className={classes.join(' ')}>--- What's up? ---</p>
                <button className={btnClass}
                        onClick={this.tooglePersonHandler}>Toggle ON/OFF
                </button>
                {persons}
            </div>
        );
    }
}

export default App;
