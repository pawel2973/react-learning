import React from 'react';
import styles from './Person.module.css';

const person = (props) => {
    return (
        <div className={styles.Person}>
            <h1>{props.name}</h1>
            <p>Age: {props.age}</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
            <button onClick={props.click}>Delete me!</button>
        </div>
    );
};

export default person; //export person function ES6 feature