import {  useTheme } from '../theme-toggler/theme-toggler'

function ThemeButton() {
    const { toggleTheme, isDarkMode } =  useTheme();

    return (
        <button
            onClick={toggleTheme}
            style={{
                padding: "0.5rem 1rem",
                marginBottom: "1rem",
                border: "none",
                borderRadius: "8px",
                background: isDarkMode ? "#444" : "#ddd",
                color: isDarkMode ? "#fff" : "#000",
                cursor: "pointer",
            }}
        >
            {isDarkMode ? "Modo Claro ☀️" : "Modo Escuro 🌙"}
        </button>
    )
}

export default ThemeButton