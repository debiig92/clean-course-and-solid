// Hay que agregar la dependencia de axios ```yarn add axios```
//import axios from 'axios';

export class HttpClient {
    // async get(url: string) {
    //     return await axios.get(url);
    // }

    async get(url: string) {
        const resp = await fetch(url);
        const data = await resp.json();
        return {data};
    }
}