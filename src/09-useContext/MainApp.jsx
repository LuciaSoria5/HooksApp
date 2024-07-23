import { Navigate, Route, Routes } from "react-router-dom";
import { HomePage, AboutPage, LoginPage } from "./";
import { Navbar } from "./Navbar";

export const MainApp = () => {
  return (
    <>
        {/* <h1>MainApp</h1> */}
        
        <Navbar />

        <hr />
        
        <Routes>
            <Route path="/" element= { <HomePage /> } />
            <Route path="login" element= { <LoginPage /> } />
            <Route path="about" element= { <AboutPage /> } />

            {/* para rutas no definidas, vamos al login --> <Route path='/*' element={ <LoginPage />} /> */}
            <Route path='/*' element={ <Navigate to="/about" />} /> {/* Esta opcion te mueve al about */}
        </Routes>

    </>
  )
};