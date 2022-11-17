import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../screens/Dashboard/Dashboard";
import { Layout, Menu } from 'antd';
import Sidebar from "../components/Layout/Sidebar/Sidebar";
import MyClients from "../screens/MyClients/MyClients";
import Reports from "../screens/Reports/Reports";
import Commissions from "../screens/Commissions/Commissions";
import BankDetails from "../screens/BankDetails/BankDetails";
import Contact from "../screens/Contact/Contact";
import Updatedetails from "../screens/UpdateDetails/Updatedetails";
import AddUser from "../screens/AddUser/AddUser";
import StartForm from "../screens/StartForm/StartForm";
import Resources from "../screens/Resources/Resources";
import Login from "../screens/Login/Login";
import Forgot from "../screens/Forgot/Forgot";
import Leads from "../screens/Leads/Leads";
// 15 Nov change Start
import ClientList from "../screens/ClientList/ClientList";
import ClientDetail from "../screens/ClientDetail/ClientDetail";
import ClientFiles from "../screens/ClientFiles/ClientFiles";
// 15 Nov change End

const AppMain = () => {
    return (
        <>
            <Suspense fallback={<span>loading</span>}>
                <Layout>
                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/clients" element={<MyClients />} />
                        <Route path="/reports" element={<Reports />} />
                        <Route path="/commissions" element={<Commissions />} />
                        <Route path="/bankdetails" element={<BankDetails />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/updatedetails" element={<Updatedetails />} />
                        <Route path="/adduser" element={<AddUser />} />
                        <Route path="/startform" element={<StartForm />} />
                        <Route path="/resources" element={<Resources />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/forgot" element={<Forgot />} />
                        <Route path="/clients/leads" element={<Leads />} />
                        {/* 15 Nov change Start */}
                        <Route path="/clients/clients" element={<ClientList />} />
                        <Route path="/clients/detail" element={<ClientDetail />} />
                        <Route path="/clients/detail/files" element={<ClientFiles />} />
                        {/* 15 Nov change Start */}
                    </Routes>
                </Layout>
            </Suspense>
        </>
    );
};

export default AppMain;
