import { useState } from "react";
import StarRating from "./components/StarRating";
import Dialog from "./components/Dialog";
function App() {
      const [showDialog, setShowDialog] = useState(false);
    
    const closeDialog = () => {
        setShowDialog(false);
    };
  return (
   <></>
  );
}

export default App;
