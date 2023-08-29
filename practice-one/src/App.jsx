import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home/Home';
import Analytics from './pages/Analytics/Analytics';
import DefaultLayout from './layouts/DefaultLayout/DefaultLayout';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path='/'
                    element={
                        <DefaultLayout>
                            <Home />
                        </DefaultLayout>
                    }
                />
                <Route
                    path='/analytics'
                    element={
                        <DefaultLayout>
                            <Analytics />
                        </DefaultLayout>
                    }
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
