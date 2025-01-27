
// Função para abrir o pop-up
function openPopup() {
    document.getElementById("popup").style.display = "flex";
}

// Função para fechar o pop-up
function closePopup() {
    document.getElementById("popup").style.display = "none";
}

// Envio do formulário
document
    .getElementById("contactForm")
    .addEventListener("submit", function (event) {
        event.preventDefault(); // Impede o envio padrão do formulário

        // Exibe o pop-up de sucesso
        openPopup();

        // Limpa o formulário (opcional)
        document.getElementById("contactForm").reset();
    });
