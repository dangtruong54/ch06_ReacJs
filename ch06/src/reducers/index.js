import { combineReducers } from 'redux';
import query from './query';
import breadcrumb from './breadcrumb'

const appReduces = combineReducers({
    query,
    breadcrumb
})

export default appReduces;