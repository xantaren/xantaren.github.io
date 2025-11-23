document.addEventListener("DOMContentLoaded", () => {
        const toggleButton = document.getElementById("theme-toggle")
        const body = document.body

        function setTheme(isDark) {
          if (isDark) {
            body.classList.add("dark-mode")
            toggleButton.textContent = "🌙"
            toggleButton.setAttribute("aria-label", "Toggle light mode")
          } else {
            body.classList.remove("dark-mode")
            toggleButton.textContent = "☀️"
            toggleButton.setAttribute("aria-label", "Toggle dark mode")
          }
        }

        toggleButton.addEventListener("click", () => {
          const isCurrentlyDark = body.classList.contains("dark-mode")
          setTheme(!isCurrentlyDark)
        })

        // Set initial theme based on system preference
        const prefersDark =
          window.matchMedia &&
          window.matchMedia("(prefers-color-scheme: dark)").matches
        setTheme(prefersDark)
      })