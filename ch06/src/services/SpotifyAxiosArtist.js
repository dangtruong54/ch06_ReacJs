import queryString from 'query-string';

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
        let argString = queryString.stringify({
            offset: 0,
            limit: 5
        });
        let url = `${configs.BASE_URL}artists/${id}/albums?${argString}`;
        
        return axios(url, SpotifyAxiosArtist.config);
    }

    static getSpotifyAxioTracks(id) {
        let argString = queryString.stringify({
            offset: 0,
            limit: 5
        });
        let url = `${configs.BASE_URL}albums/${id}/tracks?${argString}`;       
        
        return axios(url, SpotifyAxiosArtist.config);
    }

    static getSpotifyAxioAnAlbum(id) {
        let url = `${configs.BASE_URL}albums/${id}`;       
        
        return axios(url, SpotifyAxiosArtist.config);
    }
}