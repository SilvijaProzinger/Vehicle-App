import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'mobx-react';
import rootStore from './stores/RootStore.js';


const Root = (
	<Provider 
		rootStore={rootStore}
		vehicleMakeModuleStore={rootStore.vehicleMakeModuleStore}
		vehicleMakeListViewStore={rootStore.vehicleMakeModuleStore.vehicleMakeListViewStore}
		vehicleMakeAddStore={rootStore.vehicleMakeModuleStore.vehicleMakeAddStore}
		vehicleMakeEditViewStore={rootStore.vehicleMakeModuleStore.vehicleMakeEditViewStore}
		vehicleModelModuleStore={rootStore.vehicleModelModuleStore}
		vehicleModelListViewStore={rootStore.vehicleModelModuleStore.vehicleModelListViewStore}
		vehicleModelAddStore={rootStore.vehicleModelModuleStore.vehicleModelAddStore}
		vehicleModelEditViewStore={rootStore.vehicleModelModuleStore.vehicleModelEditViewStore}
	>
		<App/>
	</Provider>
)

ReactDOM.render(Root, document.getElementById('root'));
serviceWorker.unregister();
