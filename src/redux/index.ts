/*
 * Copyright (C) 2018 Matus Zamborsky
 * This file is part of The Ontology Wallet&ID.
 *
 * The The Ontology Wallet&ID is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * The Ontology Wallet&ID is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with The Ontology Wallet&ID.  If not, see <http://www.gnu.org/licenses/>.
 */
import { wrapStore } from 'react-chrome-redux';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'remote-redux-devtools';
import { authReducer } from './auth/authReducer';
import { loaderReducer } from './loader/loaderReducer';
import { settingsReducer } from './settings/settingsReducer';
import { walletReducer } from './wallet/walletReducer';

export { GlobalState } from './state';

export const globalReducer = combineReducers({
    auth: authReducer,
    loader: loaderReducer,
    settings: settingsReducer,
    wallet: walletReducer
});

const reduxStore = createStore(globalReducer, composeWithDevTools(applyMiddleware(thunk)));

wrapStore(reduxStore, { portName: 'ONT_EXTENSION' });
