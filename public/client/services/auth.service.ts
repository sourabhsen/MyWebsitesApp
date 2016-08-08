import { Injectable }    from 'angular2/core';
import { Headers, Http } from 'angular2/http';

import 'rxjs/add/operator/toPromise';


@Injectable()
export class AuthService {
  API_KEY: string = '75nwsrs8dwshgk';
  API_URL: string =  'https://www.linkedin.com/oauth/v2/authorization';
  params: string;
  state: Number = 996302;
  requestUrl: string = "http://localhost:3000";
  data: Array<Object>;
  constructor(private http: Http) {
     
     this.params = `?response_type=code&client_id=${this.API_KEY}&redirect_uri=${this.requestUrl}&state=${this.state}&scope=r_basicprofile`;
     this.requestUrl = this.API_URL + this.params;
  }

  fetch() {
     let self = this;
      return this.http.get(this.requestUrl)
               .toPromise()
               .then(response => response.json().data)
               .catch(this.handleError);
    }

private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
} 