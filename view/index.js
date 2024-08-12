const selector = document.getElementById("icon-selector");
const viewer = document.getElementById("viewer");
const iconSize = "32px";

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
            const r2 = await fetch("../assets/" + path["active"]);

            const div = document.createElement("div");
            div.style.display = "flex";
            div.style.flexDirection = "column";
            div.style.gap = "5px";
            div.tabIndex = 1;

            const svg1 = new DOMParser().parseFromString(await r1.text(), "text/html")
                .getElementsByTagName("svg")[0];

            const svg2 = new DOMParser().parseFromString(await r2.text(), "text/html")
                .getElementsByTagName("svg")[0];

            if (svg1) {
                const wrapper = document.createElement("div");
                wrapper.appendChild(svg1)

                svg1.style.width = iconSize;
                svg1.style.height = iconSize;
                div.appendChild(wrapper);
            }
            if (svg2) {
                const wrapper = document.createElement("div");
                wrapper.appendChild(svg2)

                svg2.style.width = iconSize;
                svg2.style.height = iconSize;
                div.appendChild(wrapper);
            }

            viewer.appendChild(div);
        }
    }
});