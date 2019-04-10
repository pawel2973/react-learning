import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styles from './Person.module.css';
import Aux from '../../../hoc/Auxiliary';
import withClasses from '../../../hoc/withClass';
import AuthContext from '../../../context/auth-context';

class Person extends Component {
    inputElementRef = React.createRef(); //ES7 APPROACH

    // SECOND APPROACH
    // constructor(props) {
    //     super(props);
    //     this.inputElementRef = React.createRef();
    //     // React.createRef(): this is any reference object React gives me
    // }

    static contextType = AuthContext;
    // this allows React to automatically connect this component here,
    // this class-based component to your context behind the scenes and it gives you a new property in this
    // component, the this context property

    componentDidMount() {
        // this.inputElement.focus(); //OLD STYLE
        this.inputElementRef.current.focus();
        //current - gives access to current ref
        //current el. stored in this reference
        console.log(this.context.authenticated)
    }

    render() {
        console.log('[Person.js] rendering...');
        //<AuthContext.Consumer>
        //We wrap a function instead of JSX code
        //This function get context arg. and return JSX code
        return (
            <Aux>
                {this.context.authenticated ? <p>Authenticated</p> : <p>Please log in!</p>}
                <h1>{this.props.name}</h1>
                <p>Age: {this.props.age}</p>
                <p>{this.props.children}</p>
                <input
                    // ref={(inputEl) => {this.inputElement = inputEl}} //OLD STYLE
                    ref={this.inputElementRef}
                    type="text"
                    onChange={this.props.changed}
                    value={this.props.name}
                />
                <button onClick={this.props.click}>Delete me!</button>
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