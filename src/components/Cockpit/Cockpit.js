import React, {useEffect} from 'react';
import styles from "./Cockpit.module.css";

const cockpit = (props) => {

    //Combined componentDidMount & componentDidUpdate
    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        //Http request...
        setTimeout(() => {
            alert('Fake http request...')
        }, 1000);
    }, [props.persons]);
    //Second arg decides when the function should update
    //In this example when the person changed
    //You can use different useEffect for different data

    //Only run once
    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        //Http request...
        const timer = setTimeout(() => {
            alert('Fake http request run ONCE...')
        }, 1000);
        return () => {
            clearTimeout(timer); //example cleanup work in use effect
            console.log('[Cockpit.js] cleanup work in useEffect');
            //it runs BEFORE the main useEffect function runs, but after the (first) render cycle
            //that runs right when useEffect runs for the last time depends on second arg you passed to use effect []
        };
    }, []);
    //If you have no dependencies, they can never change and therefore this can never rerun

    useEffect(() => {
        console.log('[Cockpit.js] 2nd useEffect');
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

    if (props.persons.length >= 1)
        classes.push(styles.bold);
    if (props.persons.length >= 2)
        classes.push(styles.shadow);
    if (props.persons.length >= 3)
        classes.push(styles.red);

    return (
        <div className={styles.Cockpit}>
            <h1>{props.title}</h1>
            <p className={classes.join(' ')}>--- What's up? ---</p>
            <button className={btnClass}
                    onClick={props.clicked}>Toggle ON/OFF
            </button>
        </div>
    );
};

export default cockpit;