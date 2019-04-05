import React from 'react';
import styles from "./Cockpit.module.css";

const cockpit = (props) => {
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