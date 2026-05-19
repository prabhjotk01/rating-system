
function Dialog(props) {
  return (
    <div className="dialog-overlay">
            <div className="dialog-box">
                <h2>Thank You</h2>
                <p>Your rating has been submitted successfully.</p>
                <button 
                    className="dialog-btn" 
                    onClick={props.closeDialog}>Close
                </button>
            </div>
        </div>
  );
}

export default Dialog;
