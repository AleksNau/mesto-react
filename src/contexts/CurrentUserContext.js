import React from 'react';

const {Provider :CurrentUserProvider,Consumer: CurrentUserContext} = React.createContext();

export default {CurrentUserProvider, CurrentUserContext};