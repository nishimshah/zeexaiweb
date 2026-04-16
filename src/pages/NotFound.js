import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
const NotFound = () => {
    const location = useLocation();
    useEffect(() => {
        console.error("404 Error: User attempted to access non-existent route:", location.pathname);
    }, [location.pathname]);
    return (_jsxs("div", { className: "container-default py-20 text-center", children: [_jsx("h1", { className: "text-4xl font-bold mb-4", children: "404" }), _jsx("p", { className: "text-xl text-gray-600 mb-4", children: "Oops! Page not found" }), _jsx(Link, { to: "/", className: "btn-primary", children: "Return to Home" })] }));
};
export default NotFound;
//# sourceMappingURL=NotFound.js.map