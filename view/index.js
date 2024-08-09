const selector = document.getElementById("icon-selector");

fetch("../assets/icons.json").then(async response => {
    const iconJson = await response.json();
    const icons = Object.entries(iconJson);

    for (const icon of icons) {
        const name = icon[0];
        const path = icon[1];

        const option = document.createElement("option");
        option.textContent = name;
        option.setAttribute("path", path);
        
        selector.appendChild(option);
    }
});