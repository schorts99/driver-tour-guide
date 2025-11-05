"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.injectDriverStyles = injectDriverStyles;
function injectDriverStyles() {
    const id = "driverjs-styles";
    if (!document.getElementById(id)) {
        const link = document.createElement("link");
        link.id = id;
        link.rel = "stylesheet";
        link.href = "https://unpkg.com/driver.js/dist/driver.css";
        document.head.appendChild(link);
    }
}
//# sourceMappingURL=inject-driver-styles.js.map