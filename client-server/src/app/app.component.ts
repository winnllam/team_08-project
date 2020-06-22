import { Component } from '@angular/core';
import { faSearch, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import {
  faFacebookSquare,
  faTwitter,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'client-server';
  faSearch = faSearch;
  faUserCircle = faUserCircle;
  faFacebook = faFacebookSquare;
  faTwitter = faTwitter;
  faInstagram = faInstagram;
}
