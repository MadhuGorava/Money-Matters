import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import FrameComponent from "./pages/FrameComponent";
import FrameComponent1 from "./pages/FrameComponent1";
import Debit from "./pages/Debit";
import Credit from "./pages/Credit";
import Edit from "./pages/Edit";
import Add from "./pages/Add";
import Logout from "./pages/Logout";
import Delete from "./pages/Delete";
import AdminAllTransactions from "./pages/AdminAllTransactions";
import AllTransactions from "./pages/AllTransactions";
import AdminDashboard from "./pages/AdminDashboard";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/frame-8955":
        title = "";
        metaDescription = "";
        break;
      case "/debit":
        title = "";
        metaDescription = "";
        break;
      case "/credit":
        title = "";
        metaDescription = "";
        break;
      case "/edit":
        title = "";
        metaDescription = "";
        break;
      case "/add":
        title = "";
        metaDescription = "";
        break;
      case "/logout":
        title = "";
        metaDescription = "";
        break;
      case "/delete":
        title = "";
        metaDescription = "";
        break;
      case "/admin-all-transactions":
        title = "";
        metaDescription = "";
        break;
      case "/all-transactions":
        title = "";
        metaDescription = "";
        break;
      case "/admin-dashboard":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<FrameComponent />} />
      <Route path="/frame-8955" element={<FrameComponent1 />} />
      <Route path="/debit" element={<Debit />} />
      <Route path="/credit" element={<Credit />} />
      <Route path="/edit" element={<Edit />} />
      <Route path="/add" element={<Add />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="/delete" element={<Delete />} />
      <Route
        path="/admin-all-transactions"
        element={<AdminAllTransactions />}
      />
      <Route path="/all-transactions" element={<AllTransactions />} />
      <Route path="/admin-dashboard" element={<AdminDashboard />} />
    </Routes>
  );
}
export default App;
