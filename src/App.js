import { useState } from "react";
import StarRating from "./components/StarRating";
import Dialog from "./components/Dialog";

function App() {
      const [showDialog, setShowDialog] = useState(false);
    
      const closeDialog = () => {
        setShowDialog(false);
      };
      return (
      <div className="container">
            <StarRating />
            
            <button 
                className="show-dialog-btn"
                onClick={() => setShowDialog(true)}>
                Submit Rating
            </button>

            {showDialog && <Dialog closeDialog={closeDialog} />}
        </div>
  );
}

export default App;
