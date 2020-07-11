import { Injectable } from '@angular/core';

const KEY = 'token';

@Injectable()
export class TokenService {

    hasToken() {
        return !!this.getToken();
    }
    removeToken() {
        window.localStorage.removeItem(KEY);
    }

    setToken(token) {
        window.localStorage.setItem(KEY, token);
    }

    getToken() {
        return window.localStorage.getItem(KEY);
    }
    
}