import React, {useEffect, useRef} from 'react';
import styles from "./Cockpit.module.css";
import AuthContext from '../../context/auth-context';

const cockpit = (props) => {
    const toggleBtnRef = useRef(null);

    //Combined componentDidMount & componentDidUpdate
    useEffect(() => {
        console.log('[Cockpit.js] useEffect input: props.persons');
        // //Http request...
        // setTimeout(() => {
        //     alert('Fake http request...')
        // }, 1000);
    }, [props.persons]);
    //Second arg decides when the function should update
    //In this example when the person changed
    //You can use different useEffect for different data

    //Only run once
    useEffect(() => {
        console.log('[Cockpit.js] useEffect ONCE...');
        // //Http request...
        // setTimeout(() => {
        //     alert('Fake http request run ONCE...')
        // }, 1000);
        toggleBtnRef.current.click();
        return () => {
            console.log('[Cockpit.js] cleanup work in useEffect ONCE...');
            //it runs BEFORE the main useEffect function runs, but after the !!!(first) render cycle!!!
            //that runs right when useEffect runs for the last time depends on second arg you passed to use effect []
        };
    }, []);
    //If you have no dependencies, they can never change and therefore this can never rerun

    useEffect(() => {
        console.log('[Cockpit.js] 2nd useEffect: every update cycle');
        return () => {
            console.log('[Cockpit.js] cleanup work in 2nd useEffect');
        };
    });
    //It will run for every update cycle
    //this can also be useful in case you have some operation which actually should be canceled whenever the component re-renders so after it updated

    const classes = [];
    let btnClass = '';
    if (props.showPersons) {
        btnClass = styles.redBtn;
    }

    if (props.personsLength >= 1)
        classes.push(styles.bold);
    if (props.personsLength >= 2)
        classes.push(styles.shadow);
    if (props.personsLength >= 3)
        classes.push(styles.red);

    return (
        <div className={styles.Cockpit}>
            <h1>{props.title}</h1>
            <p className={classes.join(' ')}>--- What's up? ---</p>
            <button ref={toggleBtnRef}
                    className={btnClass}
                    onClick={props.clicked}>Toggle ON/OFF
            </button>
            <br/> <br/>
            <AuthContext.Consumer>
                {(context) => <button onClick={context.login}> {context.authenticated ? 'Log out' : 'Log in'} </button>}
            </AuthContext.Consumer>

        </div>
    );
};

export default React.memo(cockpit);
//Store a snopshot of this component and only if its inputs changes, it will re-render it