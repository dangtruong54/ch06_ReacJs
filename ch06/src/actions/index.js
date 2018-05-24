import * as configs from './../constant/ActionTypes'

export const actChangeQuery = (query) => {
    return {
        type: configs.CHANGE_QUERY,
        query
    }
}