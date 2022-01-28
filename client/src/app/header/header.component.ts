import { Component, OnInit } from '@angular/core';
import { SessionService } from '../api/session/session.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less', './header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private sessionService:SessionService) { }
  userRole : String = ''
  userEmail : String = ''
  title = ''
  logo = 'assets/logo.png'
  client_logo = 'assets/client_logo.svg'



  logout = () => {
		this.sessionService.logout()
	}
  
  ngOnInit(): void {

	this.sessionService.activeSession.subscribe(data => {
				if(typeof(data) == "object" && data !== null) {
					this.userEmail = data.email
					this.userRole = data.credential
				}
			}
		)
	}

}