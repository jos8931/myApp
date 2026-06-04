import { BrowserRouter, Routes, Route, Link, useParams } from "react-router-dom";
import ProductDetails from "../components/ProductDetails";
import Error from "../components/Error";

function Home(){
    return <h1>home</h1>;
}



export default function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/product/:category/:id" element={<ProductDetails/>} />
                <Route path="*" element={<Error/>}/>
            </Routes>
        </BrowserRouter>
    );
}