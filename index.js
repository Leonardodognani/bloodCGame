var numeroSecreto = parseInt(Math.random() * 10);
var tentativas = 3;

while(tentativas > 0) {

var chute = parseInt(('digite um numero entre 0 e 10'));

if (numeroSecreto == chute) {
  ('Acertou!');
  break;
} else if (chute > numeroSecreto ) {
  ('o numero secreto é menor');
  tentativas = tentativas -1;
} else if (chute < numeroSecreto) {
  ('o numero secreto é maior');
  tentativas = tentativas -1;
 if (tentativas == 0){
   ('Game Over');
 } 
} 
}