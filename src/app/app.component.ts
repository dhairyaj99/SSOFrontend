import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthService } from './auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'sso-demo';

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
    if (window.location.search.includes('code=')) {
      this.authService.handleLoginCallback();
    }

  }
}
