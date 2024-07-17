import { BrowserRouter, Routes, Route } from "react-router-dom";
import Authentication from "./pages/Authentication";
import Dashboard from "./pages/Dashboard";
import Reports from "./pages/Reports";
import Incidents from "./pages/Incidents";
import Cases from "./pages/Cases";
import Missing from "./pages/Missing";
import Wanted from "./pages/Wanted";
import Complaint from "./pages/Complaint";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";
import Officers from "./pages/Officers";


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Dashboard/>}/>
          <Route path="/reports" element={<Reports/>}/>
          <Route path="/incidents" element={<Incidents/>} />
          <Route path="/cases" element={<Cases/>}/>
          <Route path="/missing" element={<Missing/>} />
          <Route path="/wanted" element={<Wanted/>} />
          <Route path="/complaint" element={<Complaint/>} />
          <Route path="/officers" element={<Officers/>}/>
        </Route>
        
        <Route path="/authentication" element={<Authentication/>} />
        
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
