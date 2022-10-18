function themeSwitcher() {
    const supportsCSSCustomProperties =
      window.CSS && CSS.supports("color", "var(--property)");
  
    if (!supportsCSSCustomProperties) {
      return;
    }

    const lightModeMediaQuery = window.matchMedia('(prefers-color-scheme: light)');
    const preferedTheme = lightModeMediaQuery.matches ? "light" : "dark";

    const $themeSelect = document.querySelector("[data-theme-select]");
    $themeSelect.removeAttribute("hidden");
    $themeSelect.addEventListener("input", (event) =>
      setTheme(event.target.value)
    );
  
    const $defaultCheckedInput = document.querySelector("[name=theme][checked]");
    const defaultTheme =
      document.documentElement.dataset.theme || preferedTheme;
  
    $defaultCheckedInput.checked = false;
    $themeSelect.querySelector(
      `[name=theme][value="${defaultTheme}"]`
    ).checked = true;
    setTheme(defaultTheme);
  
    function getCSSCustomPropertyValue(name) {
      return window
        .getComputedStyle(document.documentElement)
        .getPropertyValue("--" + name)
        .trim();
    }
  
    function setTheme(name) {
      document.documentElement.dataset.theme = name;
      const $metaThemeColor = document.querySelector('meta[name="theme-color"]');
      $metaThemeColor.content = getCSSCustomPropertyValue("background-color");
      window.localStorage.setItem("theme", name);
    }
  }
  
  themeSwitcher();