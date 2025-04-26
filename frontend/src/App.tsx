import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.scss';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MultiStepForm from './pages/MultiStepForm.tsx';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<MultiStepForm />} />
        </Routes>
      </Router>
    </>
  );
}

export default App
