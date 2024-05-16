import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MensagemComponent } from "./mensagem/mensagem.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, MensagemComponent]
})
export class AppComponent {
  title = 'my-app-1505';
}
