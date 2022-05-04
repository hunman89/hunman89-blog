import React from "react";

const FloatingButtons = ({
  setTheme,
  theme,
}: {
  setTheme: (arg0: string) => {};
  theme: string;
}) => {
  React.useEffect(() => {
    const storageTheme = localStorage.getItem("color-theme");
    if (storageTheme) {
      setTheme(storageTheme);
    }
  }, []);
  const onMailClick = () => {
    alert("메일 주소는 hunman89@gmail.com 입니다");
  };
  const themeToggle = () => {
    if (localStorage.getItem("color-theme")) {
      if (localStorage.getItem("color-theme") === "light") {
        setTheme("dark");
        localStorage.setItem("color-theme", "dark");
      } else {
        setTheme("light");
        localStorage.setItem("color-theme", "light");
      }
    } else {
      setTheme("dark");
      localStorage.setItem("color-theme", "dark");
    }
  };
  return (
    <div className=" fixed bottom-5 right-5 sm:bottom-20 sm:right-[5%] flex space-x-5">
      <button
        className="text-gray-500 hover:text-gray-700 dark:hover:text-white items-center aspect-square transition-colors"
        onClick={themeToggle}
      >
        {theme === "dark" ? (
          <svg
            className="w-10 h-10"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            ></path>
          </svg>
        ) : (
          <svg
            className="w-10 h-10"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            ></path>
          </svg>
        )}
      </button>
      <button
        className="text-gray-500 hover:text-gray-700 dark:hover:text-white items-center aspect-square transition-colors"
        onClick={onMailClick}
      >
        <svg
          className="w-10 h-10"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          ></path>
        </svg>
      </button>
      <a
        className="text-gray-500 hover:text-gray-700 dark:hover:text-white items-center aspect-square transition-colors"
        href="https://github.com/hunman89"
      >
        <svg
          className="w-10 h-10"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
      </a>
    </div>
  );
};

export default FloatingButtons;
