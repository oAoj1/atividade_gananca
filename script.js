function injectCSS() {
    const CSS_HTML = `<link rel="stylesheet" href="./css/popup.css"/>`;
    document.head.insertAdjacentHTML('beforeend', CSS_HTML);
}

function injectPopup() {
    const popupHTML = `
        <div class="popup-janela" id="popup">
            <div class="popup-titulo">
                <div><span id="popt">Mensagem</span></div>
                <button class="popup-fechar branco" onclick="closePopup()">X </button>
            </div>
            <div class="popup-texto">
                <p id="popm">Padrão</p>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', popupHTML);
}

function openPopup(titulo, mensagem) { 

	var popup = document.getElementById('popup');
	var popt = document.getElementById('popt');
	var popm = document.getElementById('popm');

	if (titulo) { popt.innerHTML=titulo; };
	if (mensagem) { popm.innerHTML=""; popm.innerHTML=mensagem; };

	popup.style.display = 'block';
}

function closePopup() { 

	var popup = document.getElementById('popup');

	popup.style.display = 'none';
	document.getElementById('popt').innerHTML="Mensagem";
	document.getElementById('popm').innerHTML="Padrão";

}

document.addEventListener('DOMContentLoaded', (event) => {

    injectCSS();
    injectPopup();

});