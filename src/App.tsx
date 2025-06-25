import { Fragment, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import routes from './routes/routes'

// Functionalities && Context States
import UserState from './context/user/userState'
import routil from './utils/routes.util';

// Pages
import MainLoader from './pages/MainLoader'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import ResetPassword from './pages/auth/ResetPassword'
import VerifyPage from './pages/auth/Verify'
import ForgotPage from './pages/auth/ForgotPassword'
import ErrorPage from './pages/ErrorPage'
import NotFound from './pages/NotFound'
import OnboardingPage from './pages/onboarding';

function App() {

    const errorHandler = (err: any, info: any) => {
        console.log(err, 'logged error');
        console.log(info, 'logged error info');
    }

    const getAppPages = (name: string) => {

        switch (name) {

            case '/':
                return <Register />
            case 'login':
                return <Login />
            case 'register':
                return <Register />
            case 'verify':
                return <VerifyPage />
            case 'forgot-password':
                return <ForgotPage />
            case 'reset-password':
                return <ResetPassword />
            case 'onboarding':
                return <OnboardingPage />


            default:
                return <NotFound />
        }

    }

    return (
        <>
            <Router>

                <UserState>

                    <ErrorBoundary FallbackComponent={() => (<ErrorPage />)} onReset={() => { window.location.reload() }} onError={errorHandler}>

                        <Suspense fallback={<MainLoader />}>

                            <Routes>

                                {
                                    routes.map((route, index) =>
                                        <Fragment key={`route-${index + 1}`}>

                                            {
                                                !route.isAuth &&
                                                <Route
                                                    path={routil.computeAppRoute(route)}
                                                    element={getAppPages(route.name)}
                                                />
                                            }

                                        </Fragment>
                                    )
                                }

                            </Routes>

                        </Suspense>

                    </ErrorBoundary>

                </UserState>

            </Router>
        </>
    )
}

export default App
