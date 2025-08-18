import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import ServicePage from "./components/ServicePage/ServicePage";
import CloudBI from "../../pages/Services/CloudBI"
import DataAnalysis from "../../pages/Services/DataAnalysis";
import DataIntegration from "../../pages/Services/DataIntegration";
import DataManagement from "../../pages/Services/DataManagement";
import CorporateTraining from "../../pages/Services/CorporateTraining";
import AppDev from "../../pages/Services/AppDev";

function App() {
  return (
    <Router>
      <Routes>
        {/* Main services page */}
        <Route path="/services" element={<ServiceMain />} />

        {/* Individual service pages */}
        <Route path="/services/cloudbi" element={<CloudBI />} />
        <Route path="/services/dataanalysis" element={<DataAnalysis />} />
        <Route path="/services/dataintegration" element={<DataIntegration />} />
        <Route path="/services/datamanagement" element={<DataManagement />} />
        <Route path="/services/corporatetraining" element={<CorporateTraining />} />
        <Route path="/services/appdev" element={<AppDev />} />
      </Routes>
    </Router>
  );
}

export default App;
