const selector = document.getElementById("icon-selector");
const viewer = document.getElementById("viewer");

fetch("../assets/icons.json").then(async response => {
    const iconJson = await response.json();
    const icons = Object.entries(iconJson);

    for (const icon of icons) {
        const name = icon[0];
        const path = icon[1];

        {
            const option = document.createElement("option");
            option.textContent = name;
            option.setAttribute("path", path);
            
            selector.appendChild(option);
        }
        {
            const r1 = await fetch("../assets/" + path["normal"]);
            const r2 = await fetch("../assets/" + path["filled"]);

            const div = document.createElement("div");
            div.style.display = "flex";
            div.style.flexDirection = "column";
            div.style.width = "32px";
            div.style.width = "32px";
            div.style.justifyContent = "center";
            div.style.gap = "5px";

            const svg1 = await r1.text();
            const svg2 = await r2.text();

            div.innerHTML = `
                ${svg1}
                ${svg2}
            `;

            viewer.append(div);
        }
    }
});