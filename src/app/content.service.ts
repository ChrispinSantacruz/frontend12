import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://127.0.0.1:8000/api/';

  constructor(private http: HttpClient) {}

  createContent(data: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      // Add other headers as needed
    });
    return this.http.post<any>(`${this.apiUrl}contents/`, data, {
      headers: headers,
      withCredentials: true  // Important for CORS with credentials
    });
  }
}
