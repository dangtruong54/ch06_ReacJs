import * as configs from './../constant/ActionTypes'

export const actChangeQuery = (query) => {
    return {
        type: configs.CHANGE_QUERY,
        query
    }
}

export const actGoHome = () => {
    return {
        type: configs.GO_HOME
    }
}

export const actGoArtist = (name, to) => {

}