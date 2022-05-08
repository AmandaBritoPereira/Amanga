var button_Expande = document.querySelector("#menuExpande");
var cabecalho_Menu = document.querySelector("#cabecalhoMenu");

button_Expande.addEventListener('click', function (event) {

//addEventListener = Adiciona o evento "escutador", ele mantém a verificação do evento a qualquer momento, e não só no carregamento inicial da página

  if (cabecalho_Menu.classList.contains('apareceMenuExpandido')) {
    cabecalho_Menu.classList.remove('apareceMenuExpandido');
  } else {
    cabecalho_Menu.classList.add('apareceMenuExpandido');
  }

}, false);