import React from 'react';

const authContext = React.createContext({
    authenticated: false,
    login: () => {}
    //for better autocompletion in IDE
    //Deafault vlaue don't really matter: will apply when you don't set any other value
});

export default authContext;