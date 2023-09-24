import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Redux/store';
import LandingPage from './Pages/LandingPage/LandingPage'
import CharacterDetails from './Pages/CharactrDetails/CharacterDetails';

import Home from './Pages/Home/Home'

function App() {
	return (
		<Provider store={store}>
			<Router>
				<Routes>
					<Route path = '/' element={<LandingPage/>}></Route>
					<Route path = '/home' element={<Home/>}></Route>
					<Route path = '/detail/:id' element={<CharacterDetails/>}></Route>
				</Routes>
			</Router>
		</Provider>
	);
}

export default App;
