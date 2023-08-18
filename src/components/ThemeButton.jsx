import darkThemeSwitch from "/assets/images/icon-moon.svg";
import lightThemeSwitch from "/assets/images/icon-sun.svg";

export const ThemeButton = ({ switchTheme, isDarkTheme }) => {
  return (
    <>
      <button onClick={() => switchTheme()}>
        {/* TODO switch img depending on theme */}
        {isDarkTheme ? (
          <img src={lightThemeSwitch} alt="Theme switch" />
        ) : (
          <img src={darkThemeSwitch} alt="Theme switch" />
        )}
      </button>
    </>
  );
};
