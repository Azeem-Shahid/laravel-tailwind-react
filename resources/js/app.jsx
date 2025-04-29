import React from 'react';
import ReactDOM from 'react-dom/client';
import '../css/app.css'; // Tailwind CSS import

function App() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-500">Hello React with Tailwind and Laravel 9!</h1>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('app')).render(<App />);
