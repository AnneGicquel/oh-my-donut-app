import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import AppRouter from './routes/AppRouter';
import MobileProvider from 'contexts/MobileContext';
import { CartProvider } from 'contexts/CartContext';
import CommandeProvider from 'contexts/CommandContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  // <React.StrictMode>
    <MobileProvider>
      <CartProvider>
        <CommandeProvider>
        <AppRouter />
        </CommandeProvider>
      </CartProvider>
    </MobileProvider> 
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
