import { Component } from '@angular/core';

@Component({
  selector: 'app-mensagem',
  standalone: true,
  imports: [],
  templateUrl: './mensagem.component.html',
  styleUrl: './mensagem.component.css'
})
export class MensagemComponent {

  title = 'my-app-1505';
  hidden = false;
  textoAlert = "Ocultado";
  exibicaoParagrafo02 = "Ocultar";
  mensagem = "Teste de Mensagem - exibida via property binding interpolação"
  textoMensagemParagrafo02 = "Mensagem 02 - exibida via property binding interpolação - com hidden"

  botaoClicado() {
    // Aqui desenvolveremos a lógica para ocultar ou exibir o paragrafo 02
    this.hidden = !this.hidden
    if(this.hidden){
      this.exibicaoParagrafo02 = "Exibir";
      this.textoAlert = "ocultado";
    } else {
      this.exibicaoParagrafo02 = "Ocultar";
      this.textoAlert = "reexibido";
    }
    alert('Paragrafo 02 ' + this.textoAlert );
  }


}
