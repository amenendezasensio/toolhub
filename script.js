const tools = [
    {
        name: "Generador de Contraseñas",
        description: "Crea contraseñas seguras en segundos.",
        icon: "🔐",
        url: "tools/password/index.html",
        category: "Seguridad",
        badge: "🔥 Popular"
    },
    {
        name: "Generador QR",
        description: "Convierte enlaces en códigos QR.",
        icon: "📱",
        url: "tools/qr/index.html",
        category: "Utilidades",
        badge: "⭐ Destacada"
    },
    {
        name: "Calculadora de Edad",
        description: "Calcula tu edad exacta en años, meses y días.",
        icon: "🎂",
        url: "tools/age/index.html",
        category: "Calculadoras",
        badge: "🆕 Nuevo"
    },
    {
        name: "Contador de Palabras",
        description: "Cuenta palabras y caracteres.",
        icon: "📝",
        url: "tools/word-counter/index.html",
        category: "Texto",
        badge: "🔥 Popular"
    },
    {
        name: "Calculadora de Porcentajes",
        description: "Calcula porcentajes de forma rápida.",
        icon: "📊",
        url: "tools/percentage/index.html",
        category: "Calculadoras",
        badge: "⭐ Destacada"
    },
    {
    name: "Cronómetro",
    description: "Cronómetro online gratuito.",
    icon: "⏱️",
    url: "tools/stopwatch/index.html",
    category: "Utilidades",
    badge: "⭐ Destacada"
    },
    {
    name: "Temporizador",
    description: "Cuenta atrás online con minutos y segundos.",
    icon: "⏲️",
    url: "tools/timer/index.html",
    category: "Utilidades",
    badge: "🆕 Nuevo"
    },
    {
    name: "Conversor de Unidades",
    description: "Convierte longitud, peso y temperatura al instante.",
    icon: "📏",
    url: "tools/unit-converter/index.html",
    category: "Calculadoras",
    badge: "⭐ Destacada"
    },
    {
    name: "Calculadora de Días",
    description: "Calcula los días entre dos fechas.",
    icon: "📅",
    url: "tools/date-difference/index.html",
    category: "Calculadoras",
    badge: "🔥 Popular"
    },
    {
    name: "Calculadora de IMC",
    description: "Calcula tu índice de masa corporal.",
    icon: "⚖️",
    url: "tools/bmi/index.html",
    category: "Salud",
    badge: "🆕 Nuevo"
    },
    {
    name: "Formateador JSON",
    description: "Valida y formatea archivos JSON.",
    icon: "📦",
    url: "tools/json-formatter/index.html",
    category: "Desarrollo",
    badge: "⭐ Destacada"
    },
    {
    name: "Generador de UUID",
    description: "Genera identificadores UUID v4 aleatorios.",
    icon: "🆔",
    url: "tools/uuid/index.html",
    category: "Desarrollo",
    badge: "🆕 Nuevo"
    }
];

const container = document.getElementById("toolContainer");
const searchInput = document.getElementById("searchInput");
const toolCount = document.getElementById("toolCount");
const categoryCount = document.getElementById("categoryCount");

if (toolCount) {
    toolCount.textContent = tools.filter(tool => tool.url !== "#").length;
}

if (categoryCount) {
    const categories = [...new Set(tools.map(tool => tool.category))];
    categoryCount.textContent = categories.length;
}
const featuredContainer = document.getElementById("featuredTool");

if (featuredContainer) {

    const featured = tools.find(tool => tool.badge === "🔥 Popular") || tools[0];

    featuredContainer.innerHTML = `
        <div class="featuredCard">

            <div class="featuredIcon">${featured.icon}</div>

            <div>

                <h3>${featured.name}</h3>

                <p>${featured.description}</p>

                <a href="${featured.url}" class="featuredButton">
                    Usar herramienta →
                </a>

            </div>

        </div>
    `;
}

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

        ${tool.badge ? `<span class="badge">${tool.badge}</span>` : ""}

        <div class="icon">${tool.icon}</div>

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