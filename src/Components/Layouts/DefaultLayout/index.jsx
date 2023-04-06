import Sidebar from "./Sidebar/Sidebar";
import "./DefaultLayout.scss";

function DefaultLayout({ children }) {
  return (
    <div className="container">
      <Sidebar />
      <div className="content">{children}</div>
    </div>
  );
}

export default DefaultLayout;
