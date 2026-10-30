import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Equipment from "./pages/Equipment";
import Rentals from "./pages/Rentals";
import RentalCalendar from "./pages/RentalCalendar";
import Dispatch from "./pages/Dispatch";
import Tracking from "./pages/Tracking";
import Maintenance from "./pages/Maintenance";
import Contractors from "./pages/Contractors";
import Reports from "./pages/Reports";
function App() {

  return (
    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Navigate to="/login" />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/dashboard"
          element={<Dashboard />}
        />
        <Route
  path="/equipment"
  element={<Equipment />}
/>
<Route path="/rentals" element={<Rentals />} />
<Route
  path="/rental-calendar"
  element={<RentalCalendar />}
/>
<Route
  path="/dispatch"
  element={<Dispatch />}
/>
<Route
  path="/tracking"
  element={<Tracking />}
/>
<Route
  path="/maintenance"
  element={<Maintenance />}
/>
<Route
  path="/contractors"
  element={<Contractors />}
/>
<Route
  path="/reports"
  element={<Reports />}
/>

      </Routes>

    </BrowserRouter>
  );
}

export default App;