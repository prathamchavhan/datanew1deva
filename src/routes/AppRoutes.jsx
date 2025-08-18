import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';

// Home Page Sections
import HomePage from '../pages/Home/HomePage';

// // Careers Pages
import CareersMain from '../pages/Careers/CareersMain';
// import HRRepresentative from '../pages/Careers/HRRepresentative';
// import MarketingAssociate from '../pages/Careers/MarketingAssociate';
// import MicrostrategyDeveloper from '../pages/Careers/MicrostrategyDeveloper';
// import PowerBIDeveloper from '../pages/Careers/PowerBIDeveloper';
// import SQLDeveloper from '../pages/Careers/SQLDeveloper';
// import TableauDeveloper from '../pages/Careers/TableauDeveloper';

// // Courses Pages
// import CoursesMain from '../pages/Courses/CoursesMain';
// import Course1 from '../pages/Courses/Course1';
// import Course2 from '../pages/Courses/Course2';
// import Course3 from '../pages/Courses/Course3';

// // Industry Page
// import Industry from '../pages/Industry/Industry';

// // Projects Page
// import Projects from '../pages/Projects/Projects';

// Services Pages
import ServicesMain from '../pages/Services/ServicesMain.jsx';
import AppDev from '../pages/Services/AppDev';
import Cloudbi from '../pages/Services/CloudBI';
import CorpTraining from '../pages/Services/CorporateTraining';
import DataIntegration from '../pages/Services/DataIntegration';
import DataManagement from '../pages/Services/DataManagement';
import DataAnalysis from '../pages/Services/DataAnalysis';
import IndustrySection from '../pages/Industry/IndustrySection';
import ProjectPage from '../pages/Projects/Project_main';

function AppRoutes() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          {/* Home Page Routes */}
          <Route path="/" element={<HomePage />} />

          {/* Careers Routes */}
          <Route path="/careers" element={<CareersMain />} />
          {/* <Route path="/careers/hr-representative" element={<HRRepresentative />} />
          <Route path="/careers/marketing-associate" element={<MarketingAssociate />} />
          <Route path="/careers/microstrategy-developer" element={<MicrostrategyDeveloper />} />
          <Route path="/careers/powerbi-developer" element={<PowerBIDeveloper />} />
          <Route path="/careers/sql-developer" element={<SQLDeveloper />} />
          <Route path="/careers/tableau-developer" element={<TableauDeveloper />} /> */}

          {/* Courses Routes */}
          {/* <Route path="/courses" element={<CoursesMain />} />
          <Route path="/courses/course1" element={<Course1 />} />
          <Route path="/courses/course2" element={<Course2 />} />
          <Route path="/courses/course3" element={<Course3 />} /> */}

          {/* Industry Route */}
          <Route path="/Industry/IndustrySection" element={<IndustrySection />} />

          {/* Projects Route */}
          <Route path="/Projects/Project_main" element={<ProjectPage />} />

          {/* Services Routes */}
          <Route path="/services" element={<ServicesMain />} />
          <Route path="/services/AppDev" element={<AppDev />} />
          <Route path="/services/CloudBI" element={<Cloudbi />} />
          <Route path="/services/CorporateTraining" element={<CorpTraining />} />
          <Route path="/services/DataIntegration" element={<DataIntegration />} />
          <Route path="/services/DataManagement" element={<DataManagement />} />
          <Route path="/services/DataAnalysis" element={<DataAnalysis />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default AppRoutes;
