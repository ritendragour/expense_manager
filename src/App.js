import Navbar from "./components/Navbar"
import BalanceSection from "./components/BalanceSection"
import ExpenseSection from "./components/ExpenseSection"
import ListGroup from "./components/ListGroup"
import { GlobalProvider } from "./context/GlobalContext"
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  
  return (
   <GlobalProvider>
   <Navbar/>
   <div className="containerss">
    <ToastContainer />
    <BalanceSection />
    <ExpenseSection />
    <ListGroup />
   </div>
   </GlobalProvider>
  );
}

export default App;
