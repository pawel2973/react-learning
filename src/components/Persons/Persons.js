import React from 'react';
import Person from "./Person/Person";

const persons = (props) => props.persons.map((p, index) => {
    return <Person
        name={p.name}
        age={p.age}
        key={p.id}
        click={() => props.clicked(index)}
        changed={(event) => props.changed(event, p.id)}/>
});

export default persons;