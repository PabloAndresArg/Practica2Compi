import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-regreso',
  templateUrl: './regreso.component.html',
  styleUrls: ['./regreso.component.css']
})
export class RegresoComponent implements OnInit {

  constructor(private router:Router) {

   }

  ngOnInit(): void {
  }
  ir_principal(){
    this.router.navigate(['/principal']);
  }
  ir_lexico(){
    this.router.navigate(['/lexico']);
  }

  ir_sitactico(){
    this.router.navigate(['/sintactico']);
  }
    
}
