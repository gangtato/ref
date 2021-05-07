import { combineReducers, createStore, applyMiddleware, compose } from
'redux';
import thunk from 'redux-thunk';
import authReducer from './Auth/reducer';
import contactReducer from './Contacts/reducer';
import menuReducer from './Menu/reducer';
import favoriteReducer from './Favorite/reducer';

const composerEnhancer = compose;

const rootReducers = combineReducers({
   auth: authReducer,
   contact: contactReducer,
   menu: menuReducer,
   fav: favoriteReducer,
});

const store = createStore(
    rootReducers, composerEnhancer(applyMiddleware(thunk)));

export default store;
