import React, {PureComponent} from 'react';
import Person from "./Person/Person";

class Persons extends PureComponent {
    // static getDerivedStateFromProps(props, state) {
    //     console.log('[Persons.js] getDerivedStateFromProps');
    //     return state;
    // }

    // shouldComponentUpdate(nextProps, nextState, nextContext) {
    //     console.log('[Persons.js] shouldComponentUpdate');
    //
    //     if (nextProps.persons !== this.props.persons
    //         || nextProps.changed !== this.props.changed
    //         || nextProps.click !== this.props.click
    //     ) {
    //         return true;
    //     } else {
    //         return false;
    //     }
    // }
    // Example without PureComponents

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Persons.js] getSnapshotBeforeUpdate');
        return {message: 'Snapshot!'};
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[Persons.js] componentDidUpdate');
        console.log(snapshot);
    }

    componentWillUnmount() {
        console.log('[Persos.js] componentWillUnmount');
        //any code that needs to run before the component is removed
    }

    render() {
        console.log('[Persons.js] rendering...');
        return this.props.persons.map((p, index) => {
            return (
                    <Person
                        name={p.name}
                        age={p.age}
                        key={p.id}
                        click={() => this.props.clicked(index)}
                        changed={(event) => this.props.changed(event, p.id)}
                    />
            );
        });
    }
}

export default Persons;