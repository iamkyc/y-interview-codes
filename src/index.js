import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import messageApp from './reducers/indexReducer';
import AppContainer from './containers/AppContainer';


const store = createStore(
	messageApp,
	applyMiddleware(thunk)
);

ReactDOM.render(
	<Provider store={store}>
		<AppContainer />
	</Provider>, document.getElementById('root')
);


