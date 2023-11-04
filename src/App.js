import "./app.styles.scss"; // Import styles for the entire app.
import { Route, Routes } from "react-router-dom"; // Import routing components from react-router-dom.
import Navigation from "./routes/navigation/navigation.component"; // Import Navigation component.
import Home from "./routes/home/home.component"; // Import Home component.
import AddProd from "./routes/addProductForm/addProd.component"; // Import AddProd component.
import Cart from "./routes/cart/cart.component"; // Import Cart component.
import ProductDetail from "./components/product-detail/product-detail.component"; // Import ProductDetail component.
import { ToastContainer } from "react-toastify"; // Import ToastContainer from react-toastify.
import HomeComponent from "./components/home-component/home.component"; // Import HomeComponent from components.

function App() {
  return (
    <div>
      <Routes>
        {/* Set up the routes using the Routes and Route components */}
        <Route path="/" element={<Navigation />}>
          {/* Render the Navigation component for all routes */}
          <Route index element={<Home />} /> {/* Render Home component for the root route */}
          <Route path="addProd" element={<AddProd />} /> {/* Render AddProd component for the "addProd" route */}
          <Route path="cart" element={<Cart />} /> {/* Render Cart component for the "cart" route */}
          <Route path="allProds" element={<HomeComponent />} /> {/* Render HomeComponent for the "allProds" route */}
          <Route path="product/:id" element={<ProductDetail />} /> {/* Render ProductDetail component for the "product/:id" route */}
        </Route>
      </Routes>

      {/* Set up the ToastContainer with specific options */}
      <ToastContainer
        position="bottom-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
}

export default App;
