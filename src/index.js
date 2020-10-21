import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "bootstrap/dist/css/bootstrap.min.css"
import 'font-awesome/css/font-awesome.min.css'
import * as serviceWorker from './serviceWorker';
import {CourseManagerComponent} from "./components/CourseManagerComponent";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import widgetReducer from "./reducers/widgetReducer";
import moduleReducer from "./reducers/moduleReducer";
import courseReducer from "./reducers/courseReducer";
import {lessonReducer} from "./reducers/lessonReducer";
import {topicReducer} from "./reducers/topicReducer"

const reducers = combineReducers({
    widgetReducer, moduleReducer, courseReducer, lessonReducer, topicReducer
})

const store = createStore(reducers)

ReactDOM.render(
    <Provider store = {store}>
        {/*<WidgetListContainer/>*/}
        <CourseManagerComponent/>
    </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
