export default function Footer() {
  return (
    <footer className="bg-black py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <div className="text-primary-500 font-bold text-2xl mb-4">MATRIX FITNESS</div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Transform your body, transform your life. Join thousands of members 
              who have achieved their fitness goals with our world-class facilities 
              and expert guidance.
            </p>
            <div className="flex space-x-4">
              {/* YouTube */}
              <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors" aria-label="YouTube">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M21.8 8.001a2.75 2.75 0 0 0-1.93-1.94C18.2 6 12 6 12 6s-6.2 0-7.87.06A2.75 2.75 0 0 0 2.2 8.001 28.6 28.6 0 0 0 2 12a28.6 28.6 0 0 0 .2 3.999 2.75 2.75 0 0 0 1.93 1.94C5.8 18 12 18 12 18s6.2 0 7.87-.06a2.75 2.75 0 0 0 1.93-1.94A28.6 28.6 0 0 0 22 12a28.6 28.6 0 0 0-.2-3.999zM10 15.5v-7l6 3.5-6 3.5z"/>
                </svg>
              </a>

              {/* Instgram */}
              <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7.75 2h8.5A5.76 5.76 0 0 1 22 7.75v8.5A5.76 5.76 0 0 1 16.25 22h-8.5A5.76 5.76 0 0 1 2 16.25v-8.5A5.76 5.76 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zm5.25-.88a1.13 1.13 0 1 1 0 2.25 1.13 1.13 0 0 1 0-2.25z"/>
                </svg>
              </a>

              {/* Facebook */}
              <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12a10 10 0 1 0-11.5 9.87v-6.99H8.41V12h2.09V9.8c0-2.06 1.23-3.2 3.11-3.2.9 0 1.84.16 1.84.16v2.03h-1.04c-1.02 0-1.33.63-1.33 1.28V12h2.26l-.36 2.88h-1.9v6.99A10 10 0 0 0 22 12z"/>
                </svg>
              </a>

              {/* X */}
              <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.5 3h3.2l-7.03 8.04L22 21h-7l-4.54-5.89L5.3 21H2.1l7.57-8.65L2 3h7l4.05 5.27L17.5 3zM16.1 19h2.2L8 5H5.7l10.4 14z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#featuredbootcamps" className="text-gray-400 hover:text-white transition-colors">Programs</a></li>
              <li><a href="#plans" className="text-gray-400 hover:text-white transition-colors">Plans</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Info</h3>
            <div className="space-y-2 text-gray-400">
              <p>123 Fitness Street</p>
              <p>New York, NY 10001</p>
              <p>+1 (555) 123-4567</p>
              <p>info@matrixfitness.com</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 Matrix Fitness. All rights reserved. | 
            <a href="#" className="hover:text-white transition-colors"> Privacy Policy</a> | 
            <a href="#" className="hover:text-white transition-colors"> Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
}