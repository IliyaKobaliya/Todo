import React, {lazy, Suspense} from 'react'
import {Switch, Route} from 'react-router-dom'
import {createGlobalStyle, ThemeProvider} from 'styled-components'

import {Loading} from './pages/Loading'
import theme from './themes/default'

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
	width: 100wh;
	height: 100vh;
	color: #fff;
	font-family:sans-serif;
}

`;

const Todo = lazy(
    () => import('./pages/Todo/exportForLazy')
);
const TodoItem = lazy(
    () => import('./pages/TodoSet/exportForLazy')
);
const NotFound = lazy(
    () => import('./pages/NotFound/exportForLazy')
);


const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <>
                <GlobalStyles/>
                <Suspense fallback={<Loading/>}>
                    <Switch>
                        <Route path="/" component={Todo} exact/>
                        <Route path="/todoItem/:id" component={TodoItem}/>
                        <Route component={NotFound}/>
                    </Switch>
                </Suspense>
            </>
        </ThemeProvider>
    )
};

export default App
