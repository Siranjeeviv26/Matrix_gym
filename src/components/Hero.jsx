export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="absolute inset-0 bg-black/50"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')"
        }}
      ></div>
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="mb-8">
          <div className="inline-block bg-primary-500/20 border border-primary-500 rounded-full px-4 py-2 mb-6">
            <span className="text-primary-400 font-semibold">MATRIX FITNESS</span>
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          LET'S GET
          <br />
          <span className="text-primary-500">MOVING</span>
        </h1>
        
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
          Your Journey to Fitness Starts Here
          <br />
          Unleash Your Full Potential
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#workoutsession">
            <button className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
              Start Your Journey
            </button>
          </a>
          <a href="#workoutgallery">
            <button className="border border-white text-white hover:bg-white hover:text-black px-8 py-4 rounded-lg font-semibold transition-all duration-300">
              Explore Classes
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
