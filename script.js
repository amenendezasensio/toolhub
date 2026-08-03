const tools = [
    {
        name: "Generador de Contraseñas",
        description: "Crea contraseñas seguras en segundos.",
        icon: "🔐",
        url: "tools/password/index.html",
        category: "Seguridad"
    },
    {
        name: "Generador QR",
        description: "Convierte enlaces en códigos QR.",
        icon: "📱",
        url: "tools/qr/index.html",
        category: "Utilidades"
    },
    {
    name: "Calculadora de Edad",
    description: "Calcula tu edad exacta en años, meses y días.",
    icon: "🎂",
    url: "tools/age/index.html",
    category: "Calculadoras"
    },
    {
        name: "Contador de Palabras",
        description: "Cuenta palabras y caracteres.",
        icon: "📝",
        url: "tools/word-counter/index.html",
        category: "Texto"
    },
    {
    name: "Calculadora de Porcentajes",
    description: "Calcula porcentajes de forma rápida.",
    icon: "📊",
    url: "tools/percentage/index.html",
    category: "Calculadoras"
    },
    {
        name: "Cronómetro",
        description: "Cronómetro online gratuito.",
        icon: "⏱️",
        url: "#",
        category: "Utilidades"
    }
];

const container = document.getElementById("toolContainer");
const searchInput = document.getElementById("searchInput");

function showTools(search = "", category = "Todas") {

    container.innerHTML = "";

    const filtered = tools.filter(tool => {

        const matchesSearch = tool.name.toLowerCase().includes(search.toLowerCase());

        const matchesCategory =
            category === "Todas" || tool.category === category;

        return matchesSearch && matchesCategory;

    });

    filtered.forEach(tool => {

        container.innerHTML += `
            <div class="card" onclick="openTool('${tool.url}')">
                <h2>${tool.icon}</h2>
                <h3>${tool.name}</h3>
                <p>${tool.description}</p>
            </div>
        `;

    });

}

let currentCategory = "Todas";

showTools("", currentCategory);

searchInput.addEventListener("input", function () {
    showTools(this.value, currentCategory);
});
function openTool(url) {

    if (url === "#") {
        alert("🚧 Esta herramienta estará disponible muy pronto.");
        return;
    }

    window.location.href = url;

}
const categoryButtons = document.querySelectorAll(".category");

categoryButtons.forEach(button => {

    button.addEventListener("click", () => {

        categoryButtons.forEach(btn => btn.classList.remove("active"));

        button.classList.add("active");

        currentCategory = button.textContent.replace(/^[^\p{L}]+/u, "").trim();

        showTools(searchInput.value, currentCategory);

    });

});