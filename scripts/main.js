var button_Expande = document.querySelector("#menuExpande");
var cabecalho_Menu = document.querySelector("#cabecalhoMenu");

button_Expande.addEventListener('click', function (event) {


  if (cabecalho_Menu.classList.contains('apareceMenuExpandido')) {
    cabecalho_Menu.classList.remove('apareceMenuExpandido');
  } else {
    cabecalho_Menu.classList.add('apareceMenuExpandido');
  }

}, false);