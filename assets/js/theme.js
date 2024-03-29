function themeSwitcher() {
  const supportsCSSCustomProperties =
    window.CSS && CSS.supports("color", "var(--property)");

  if (!supportsCSSCustomProperties) {
    return;
  }

  const lightModeMediaQuery = window.matchMedia(
    "(prefers-color-scheme: light)"
  );
  const preferedTheme = lightModeMediaQuery.matches ? "light" : "dark";

  const $themeSelect = document.querySelector("[data-theme-select]");
  $themeSelect.removeAttribute("hidden");
  $themeSelect.addEventListener("input", (event) =>
    setTheme(event.target.value)
  );

  const $defaultCheckedInput = document.querySelector("[name=theme][checked]");
  const defaultTheme = document.documentElement.dataset.theme || preferedTheme;

  $defaultCheckedInput.checked = false;
  $themeSelect.querySelector(
    `[name=theme][value="${defaultTheme}"]`
  ).checked = true;
  setTheme(defaultTheme);

  function setTheme(name) {
    document.documentElement.dataset.theme = name;
    window.localStorage.setItem("theme", name);
  }
}

themeSwitcher();
