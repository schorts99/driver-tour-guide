export function injectDriverStyles(): void {
  const id = "driverjs-styles";

  if (!document.getElementById(id)) {
    const link = document.createElement("link");
    link.id = id;
    link.rel = "stylesheet";
    link.href = "https://unpkg.com/driver.js/dist/driver.css";

    document.head.appendChild(link);
  }
}
