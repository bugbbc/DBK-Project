import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light"
  );

  // 导航栏滚动变色
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 暗黑模式切换逻辑
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const toggleMenu = () => setIsOpen(!isOpen);

  const closeMenu = () => {
    if (isOpen) {
      setIsOpen(false);
    }
  };

  const navLinks = [
    { name: "首页", path: "/" },
    { name: "项目介绍", path: "/project-intro" },
    { name: "技术展示", path: "/tech-demo" },
    { name: "交互体验", path: "/interaction" },
    { name: "功能使用", path: "/integrated" },
    { name: "团队介绍", path: "/team-detail" },
    { name: "联系我们", path: "/contact" },
  ];

  const navClasses = `fixed top-0 left-0 w-full z-[999] transition-all duration-300 ease-in-out ${
    isScrolled || isOpen
      ? "bg-gray-100/95 shadow-lg backdrop-blur-sm dark:bg-gray-800/95"
      : "bg-gray-100/80 backdrop-blur-sm dark:bg-gray-800/80"
  }`;

  const textClasses = "text-gray-800 dark:text-gray-200";

  return (
    <header className={navClasses}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center cursor-pointer">
            <img src={logo} alt="DBK 智撰工坊 Logo" className="h-10 w-auto" />
            <span className={`ml-3 text-xl font-bold ${textClasses}`}>
              DBK 智撰工坊
            </span>
          </Link>

          {/* 桌面端导航 */}
          <nav className="hidden md:flex items-center space-x-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={closeMenu}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 relative group ${
                  location.pathname === link.path
                    ? "text-brand-primary"
                    : textClasses
                }`}
              >
                {link.name}
                <span
                  className={`absolute bottom-0 left-0 w-full h-0.5 bg-brand-primary transition-transform duration-300 ease-out ${
                    location.pathname === link.path
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </Link>
            ))}
            <button
              onClick={toggleTheme}
              className={`ml-4 p-2 rounded-full transition-colors duration-300 ${textClasses} hover:bg-gray-200/50 dark:hover:bg-gray-700/50`}
            >
              {theme === "light" ? <FaMoon size={18} /> : <FaSun size={18} />}
            </button>
          </nav>

          {/* 移动端菜单按钮 */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleTheme}
              className={`mr-2 p-2 rounded-full transition-colors duration-300 ${textClasses} hover:bg-gray-200/50 dark:hover:bg-gray-700/50`}
            >
              {theme === "light" ? <FaMoon size={18} /> : <FaSun size={18} />}
            </button>
            <button
              onClick={toggleMenu}
              className={`p-2 rounded-md inline-flex items-center justify-center transition-colors duration-300 ${textClasses} hover:bg-gray-200/50 dark:hover:bg-gray-700/50`}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* 移动端下拉菜单 */}
      {isOpen && (
        <div className="md:hidden bg-gray-100/95 dark:bg-gray-800/95 shadow-lg backdrop-blur-sm">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={closeMenu}
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${
                  location.pathname === link.path
                    ? "text-brand-primary bg-gray-200/50 dark:bg-gray-700/50"
                    : `${textClasses} hover:bg-gray-200/50 dark:hover:bg-gray-700/50`
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
