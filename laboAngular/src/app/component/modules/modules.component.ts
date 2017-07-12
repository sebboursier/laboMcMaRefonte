import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Module, Modules } from '../../properties/modules';

@Component({
  selector: 'app-modules',
  templateUrl: './modules.component.html',
  styleUrls: ['./modules.component.css']
})
export class ModulesComponent implements OnInit {

  modules;

  constructor(private router: Router) { }

  ngOnInit() {
    this.modules = Modules;
  }

  navigate(module: Module): void {
    this.router.navigate([module.path]);
  }

}
