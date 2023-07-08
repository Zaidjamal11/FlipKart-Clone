import { Box } from "@mui/material";
import { BrowserRouter, Routes , Route} from "react-router-dom";

//components
import Header from "./components/Header/Header";
import Home from "./components/home/Home";
import DetailView from "./components/details/DetailView";

import DataProvider from "./context/DataProvider";

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Header />
        <Box style={{ marginTop: 55 }}>
          <Routes>

           <Route path="/" element={ <Home />} />
            <Route path='/product/:id' element={ <DetailView /> } />
          </Routes>
        </Box>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
