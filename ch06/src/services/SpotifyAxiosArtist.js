import * as configs from './../constant/Configs';
import axios from 'axios'

export default class SpotifyAxiosArtist {

    static config = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + configs.API_KEY
        }
    }

    static getSpotifyAxio(id) {
       
        let url = `${configs.BASE_URL}artists/${id}`;
        return axios(url, SpotifyAxiosArtist.config);
    }

    static getSpotifyAxioAlbums(id) {
        
        let url = `${configs.BASE_URL}artists/${id}/albums?limit=5`;
        return axios(url, SpotifyAxiosArtist.config);
    }
}