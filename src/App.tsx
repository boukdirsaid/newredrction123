import React from 'react';
import { Home, Mail, Github } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-100">
      <div className="container mx-auto px-4 py-16">
        <header className="text-center mb-16">
          <div className="inline-block p-4 bg-white rounded-full shadow-lg mb-6">
            <Home className="w-8 h-8 text-indigo-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Welcome to Our Space
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A beautiful place to start your journey with modern web development.
          </p>
        </header>

        <main className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-md p-8 transform hover:scale-105 transition-transform duration-300">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"
              alt="Coding"
              className="w-full h-48 object-cover rounded-lg mb-6"
            />
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Modern Development
            </h2>
            <p className="text-gray-600">
              Built with React, TypeScript, and Tailwind CSS for a seamless development experience.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-8 transform hover:scale-105 transition-transform duration-300">
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
              alt="Design"
              className="w-full h-48 object-cover rounded-lg mb-6"
            />
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Beautiful Design
            </h2>
            <p className="text-gray-600">
              Clean and modern design principles with attention to detail and user experience.
            </p>
          </div>
        </main>

        <footer className="mt-16 text-center">
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors">
              <Mail className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors">
              <Github className="w-6 h-6" />
            </a>
          </div>
          <p className="mt-4 text-gray-600">
            © 2024 Our Space. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;