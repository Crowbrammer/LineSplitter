addEventListener("keyup", e => {
    if (e.key === "Enter" && e.ctrlKey) {
        const text = document.querySelector("textarea").value;
        const lines = text.split(/[?|.|!]\s/);
        console.log(lines);
        lines.forEach(line => {
            const p = document.createElement("p");
            p.textContent = line + ".";
            document.body.append(p);
        });
    }
});