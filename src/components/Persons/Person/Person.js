import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styles from './Person.module.css';
import Aux from '../../../hoc/Auxiliary';
import withClasses from '../../../hoc/withClass';

class Person extends Component {
    render() {
        console.log('[Person.js] rendering...');
        return (
            <Aux>
                {/*<div className={styles.Person}>*/}
                <h1>{this.props.name}</h1>
                <p>Age: {this.props.age}</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name}/>
                <button onClick={this.props.click}>Delete me!</button>
                {/*</div>*/}
            </Aux>
        );
    }
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default withClasses(Person, styles.Person); //export person function ES6 feature