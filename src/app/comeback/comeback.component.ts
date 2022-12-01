import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AnySoaRecord } from 'dns';
import { UserService } from '../core/user.service';

@Component({
  selector: 'app-comeback',
  templateUrl: './comeback.component.html',
  styleUrls: ['./comeback.component.scss']
})
export class ComebackComponent implements OnInit, OnDestroy {
  os: string = ""
  message: string = "¡Hola!"
  email: any = ""
  constructor(private router: Router, private route: ActivatedRoute, private userService: UserService) { }

  ngOnInit(): void {
    this.check();
    this.getMail();
    this.validate();

  }

  ngOnDestroy(): void {

  }


  check() {
    this.os = window.navigator.platform;
  }

  comebackApp() {
    window.location.replace(`ebloqsurl://18.117.101.148`);
  }

  async getMail() {
    try {
      const id: any = this.route.snapshot.paramMap.get('id')
      this.userService.getMail(id).subscribe((data: any) => { this.email = data.email })
    } catch (e: any) {
      console.log(e.message)
      this.message = e.message
    }
  }

  async validate() {
    try {
      const id: any = this.route.snapshot.paramMap.get('id')
      this.userService.validate(id).subscribe(async (res: any) => {
        this.message = "ha sido verificado correctamente"
      })
    } catch (e: any) {
      console.log(e.message)
      this.message = e.message
    }

  }

}
