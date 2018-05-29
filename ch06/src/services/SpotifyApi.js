import queryString from 'query-string';
import * as configs from './../constant/Configs';

export default class SpotifyApi {

    static config = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + configs.API_KEY
        }
    }

    static getSpotifyApiArtist(query) {
        let params = queryString.stringify({type: 'artist', limit: 4, offset: 0})
        let nameQuery = encodeURI(query);
            let url = `${configs.BASE_URL}search?q=${nameQuery}&${params}`;     
        return fetch(url, SpotifyApi.config).then(res => res.json())
    }
}