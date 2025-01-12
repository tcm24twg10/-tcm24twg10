const pecadosData = {
    Gula: {
        description: "Descubra a riqueza gastronómica em destinos como França, Itália e Japão.",
        countries: [
            { name: "França", price: "1200€" },
            { name: "Itália", price: "1000€" },
            { name: "Japão", price: "2500€" },
            { name: "Espanha", price: "1300€" },
            { name: "Portugal", price: "900€" },
            { name: "Bélgica", price: "1100€" },
            { name: "Áustria", price: "1200€" },
            { name: "Suíça", price: "2000€" }
        ]
    },
    Luxúria: {
        description: "Explore a sensualidade das paisagens tropicais no Brasil, Maldivas e Tailândia.",
        countries: [
            { name: "Brasil", price: "2000€" },
            { name: "Maldivas", price: "3000€" },
            { name: "Tailândia", price: "1800€" },
            { name: "Cuba", price: "1700€" },
            { name: "Seychelles", price: "3200€" },
            { name: "Maurícia", price: "2800€" },
            { name: "Zanzibar", price: "2400€" },
            { name: "Havaí", price: "2600€" }
        ]
    },
    Avareza: {
        description: "Visite metrópoles como Nova Iorque, Dubai e Hong Kong.",
        countries: [
            { name: "Nova Iorque", price: "1500€" },
            { name: "Dubai", price: "2500€" },
            { name: "Hong Kong", price: "2300€" },
            { name: "Zurique", price: "2700€" },
            { name: "Londres", price: "1800€" },
            { name: "Tóquio", price: "3000€" },
            { name: "Xangai", price: "2400€" },
            { name: "Singapura", price: "2900€" }
        ]
    },
    Ira: {
        description: "Sinta a força da natureza em destinos como Islândia, Havaí e Patagónia.",
        countries: [
            { name: "Islândia", price: "1800€" },
            { name: "Havaí", price: "2800€" },
            { name: "Patagónia", price: "2500€" },
            { name: "Noruega", price: "2200€" },
            { name: "Alasca", price: "2700€" },
            { name: "Nepal", price: "1600€" },
            { name: "Canadá", price: "2100€" },
            { name: "Nova Zelândia", price: "3000€" }
        ]
    },
    Inveja: {
        description: "Inspire-se nas vidas glamorosas de Beverly Hills, Mônaco e Paris.",
        countries: [
            { name: "Beverly Hills", price: "2200€" },
            { name: "Mônaco", price: "2700€" },
            { name: "Paris", price: "1300€" },
            { name: "Los Angeles", price: "2100€" },
            { name: "Miami", price: "1900€" },
            { name: "Dubai", price: "2500€" },
            { name: "Las Vegas", price: "2300€" },
            { name: "San Francisco", price: "2400€" }
        ]
    },
    Preguiça: {
        description: "Relaxe em destinos como Bali, Fiji e Ilhas Gregas.",
        countries: [
            { name: "Bali", price: "2000€" },
            { name: "Fiji", price: "3200€" },
            { name: "Ilhas Gregas", price: "1500€" },
            { name: "Maldivas", price: "3100€" },
            { name: "Phuket", price: "1800€" },
            { name: "Sardenha", price: "2200€" },
            { name: "Polinésia Francesa", price: "3500€" },
            { name: "Havai", price: "2800€" }
        ]
    },
    Vaidade: {
        description: "Maravilhe-se com a grandeza cultural de Roma, Cairo e Pequim.",
        countries: [
            { name: "Roma", price: "1100€" },
            { name: "Cairo", price: "1400€" },
            { name: "Pequim", price: "2200€" },
            { name: "Milão", price: "1500€" },
            { name: "Nova Iorque", price: "2500€" },
            { name: "Paris", price: "1800€" },
            { name: "Los Angeles", price: "2100€" },
            { name: "Londres", price: "2000€" }
        ]
    }
};


const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalDescription = document.getElementById("modal-description");
const modalCountries = document.getElementById("modal-countries");
const closeModal = document.querySelector(".close");


document.querySelectorAll(".pecado-card").forEach(card => {
    card.addEventListener("click", () => {
        const pecadoTitle = card.dataset.title;
        const pecadoData = pecadosData[pecadoTitle];

        modalTitle.textContent = pecadoTitle;
        modalDescription.textContent = pecadoData.description;

        modalCountries.innerHTML = ""; 

        
        pecadoData.countries.forEach(country => {
            const li = document.createElement("li");
            li.innerHTML = `
                <span>${country.name} - ${country.price}</span>
                <button>Vou Pecar!</button>
            `;
            modalCountries.appendChild(li);
        });

       
        const note = document.createElement("p");
        note.textContent = "Nota: Os preços são para uma pessoa e incluem alojamento e voo.";
        note.style.fontStyle = "italic";
        note.style.fontSize = "0.9rem";
        note.style.marginTop = "10px";
        note.style.color = "#666";
        note.style.textAlign = "center";
        modalCountries.appendChild(note);

        modal.style.display = "flex"; 
    });
});


closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});


window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});



function carregarCombos() {
    console.log("Iniciando o carregamento dos combos...");

    
    fetch('combos.xml')
        .then(response => {
            if (!response.ok) {
                throw new Error(`Erro ao carregar XML: ${response.statusText}`);
            }
            return response.text();
        })
        .then(data => {
            console.log("XML carregado com sucesso!");
            console.log("Dados XML recebidos:", data);

            
            const parser = new DOMParser();
            const xml = parser.parseFromString(data, 'application/xml');
            const combos = xml.getElementsByTagName('combo');
            const container = document.getElementById('combos-container');

            
            container.innerHTML = '';

            
            for (let i = 0; i < combos.length; i++) {
                const combo = combos[i];
                const titulo = combo.getElementsByTagName('titulo')[0].textContent;
                const destino = combo.getElementsByTagName('destino')[0].textContent;
                const descricao = combo.getElementsByTagName('descricao')[0].textContent;

                console.log(`Criando combo: ${titulo} em ${destino}`);

               
                const comboCard = document.createElement('div');
                comboCard.classList.add('combo-card');
                comboCard.innerHTML = `
                    <h3>${titulo} em ${destino}</h3>
                    <p>${descricao}</p>
                    <button class="combo-btn">Pecar em dobro!</button>
                `;

                
                container.appendChild(comboCard);
            }
        })
        .catch(error => console.error('Erro ao carregar XML:', error));
}


window.onload = carregarCombos;
