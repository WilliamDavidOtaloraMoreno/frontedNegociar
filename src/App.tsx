import React, { Suspense } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { CompleteRouting } from './app/utilities/routes/CompleteRouting';
import WhatsAppButton from './app/views/shared/WhatsApp';


const loading = (
  <div className="justify-content-center align-item-center">
    <div className="spinner"></div>
  </div>
);

function App() {
  return (
    <BrowserRouter>
        {/* time to loading information to aplication */}
        <Suspense fallback={loading}>
          {/* Go to routes where init aplication */}
          <CompleteRouting />
          <WhatsAppButton/>
        </Suspense>
      </BrowserRouter>
  );
}

export default App;
