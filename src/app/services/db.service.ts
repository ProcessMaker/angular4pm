import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  constructor() { }

  public save(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  public load(key: string) {
    return localStorage.getItem(key)
  }
  public remove(key: string) {
    localStorage.removeItem(key);
  }

  public clear() {
    localStorage.clear();
  }
}
