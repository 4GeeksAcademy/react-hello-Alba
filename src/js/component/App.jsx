import React from "react";
import "../../styles/index.css"

function App({children}) {
  return (
    
    <div className="bg-img mt-3 ms-4 me-3 mb-4" 
     style={{ backgroundImage: "url(https://i.pinimg.com/564x/96/27/93/9627931ce425e9483e7c1c1647f53a5e.jpg)" }}>
      {children}
    </div>
  );
}

export default App;