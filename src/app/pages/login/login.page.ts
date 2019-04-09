import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  private form = {
    username: '',
    password: ''
  }
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

  fnLogin() {
    // consulta no banco this.form.username que daria um resultado
    // resultado.username == this.form.username && resultado.password == this.form.password
    if((this.form.username == 'admin') && (this.form.password == 'admin123')) {
      this.router.navigateByUrl('/tabs');
    }
  }
}
