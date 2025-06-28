import React from 'react';

const Footer: React.FC = () => (
  <footer className="bg-black py-8">
    <div className="max-w-6xl mx-auto px-6 lg:px-8">
      <div className="text-center">
        <div className="flex items-center justify-center space-x-3 mb-4">
          <div className="w-6 h-6 bg-gray-700 rounded-lg flex items-center justify-center">
            <span className="text-white font-medium text-xs">AN</span>
          </div>
          <span className="text-gray-400 font-medium">Avinash N</span>
        </div>
        <p className="text-gray-500 text-sm">&copy; 2024 Avinash N. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;