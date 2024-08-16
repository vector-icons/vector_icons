const selector = document.getElementById("icon-selector");
const iconCount = document.getElementById("icon-count");
const viewer = document.getElementById("viewer");
const iconSize = "32px";

fetch("../assets/icons.json").then(async response => {
    const iconJson = await response.json();
    const icons = Object.entries(iconJson);

    let itemCount = 0;

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
            const divWrapper = document.createElement("div");
            div.style.display = "flex";
            div.style.flexDirection = "column";
            div.style.gap = "5px";
            div.style.color = "var(--foreground3)";
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

                itemCount++;
            }
            if (svg2) {
                const wrapper = document.createElement("div");
                wrapper.appendChild(svg2)

                svg2.style.width = iconSize;
                svg2.style.height = iconSize;
                div.appendChild(wrapper);

                itemCount++;
            }
            
            divWrapper.appendChild(div);
            viewer.appendChild(divWrapper);

            {
                const wrapper = document.createElement("div");
                wrapper.textContent = name;
                wrapper.style.maxWidth = `calc(${iconSize} + 30px)`;
                wrapper.style.overflow = "hidden";
                wrapper.style.textOverflow = "ellipsis";
                wrapper.style.fontSize = "12px";
                wrapper.style.color = "var(--foreground3)"

                divWrapper.appendChild(wrapper);
            }
        }

        iconCount.textContent = `${icons.length} Units (All ${itemCount})`;
    }
});