import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import FormularioGoogleSheets from './components/forms/formCep.jsx';
import QueryCustomer from './components/queryCustomers/queryCustomer.jsx';

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to="/formulario" replace />} />
                <Route path="/formulario" element={<FormularioGoogleSheets />} />
                <Route path="/consulta" element={<QueryCustomer />} />
            </Routes>
        </BrowserRouter>
    );
}