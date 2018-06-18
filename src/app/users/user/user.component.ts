import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: {id: number, name: string};

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // snapshot używamy jeśli wiemy na bank, że komponent będzie otwierany z innego komponentu
    this.user = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name']
    };
    // Poniższe będzie działało za każdym razem, gdy ścieżka się zmieni, więc używamy gdy nie zmieniamy komponentu, ale zmieniamy ścieżkę w przeglądarce
    this.route.params
      .subscribe(
        (params: Params) => {
          this.user.id = params['id'];
          this.user.name = params['name'];
        }
      );
  }

}
