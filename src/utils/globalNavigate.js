import { useNavigate } from "react-router-dom";
function GlobalNavigate(routes) {
    const navigate = useNavigate();
    return {
        to: (path, state) => navigate(path, state),
        ...routes,
    };
};
export default GlobalNavigate;
