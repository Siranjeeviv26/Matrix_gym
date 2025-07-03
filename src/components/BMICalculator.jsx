import { useState } from 'react';

export default function BMICalculator() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState('');

  const calculateBMI = () => {
    if (height && weight) {
      const heightInMeters = height / 100;
      const bmiValue = weight / (heightInMeters * heightInMeters);
      setBmi(bmiValue.toFixed(1));
      
      if (bmiValue < 18.5) {
        setCategory('Underweight');
      } else if (bmiValue < 25) {
        setCategory('Normal');
      } else if (bmiValue < 30) {
        setCategory('Overweight');
      } else {
        setCategory('Obese');
      }
    }
  };

  const getBMIColor = () => {
    if (!bmi) return 'text-gray-400';
    const bmiValue = parseFloat(bmi);
    if (bmiValue < 18.5) return 'text-blue-400';
    if (bmiValue < 25) return 'text-green-400';
    if (bmiValue < 30) return 'text-yellow-400';
    return 'text-red-400';
  };

  return (
    <section className="py-20 bg-gradient-to-r from-primary-900 via-primary-800 to-primary-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-white mb-6">BMI CALCULATOR</h2>
            <p className="text-primary-100 mb-8 leading-relaxed">
              Calculate your Body Mass Index to understand your current fitness level 
              and get personalized recommendations for your fitness journey.
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 space-y-4">
              <div>
                <label className="block text-primary-100 font-medium mb-2">Height (cm)</label>
                <input
                  type="number"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/60 focus:ring-2 focus:ring-white/50"
                  placeholder="Enter your height"
                />
              </div>
              
              <div>
                <label className="block text-primary-100 font-medium mb-2">Weight (kg)</label>
                <input
                  type="number"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/60 focus:ring-2 focus:ring-white/50"
                  placeholder="Enter your weight"
                />
              </div>
              
              <button
                onClick={calculateBMI}
                className="w-full bg-white text-primary-900 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors"
              >
                Calculate BMI
              </button>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 text-center">
              <div className="mb-8">
                <img 
                  src="https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                  alt="Fitness measurement"
                  className="w-full h-64 object-cover rounded-lg opacity-80"
                />
              </div>
              
              {bmi && (
                <div className="space-y-4">
                  <div className="text-center">
                    <div className={`text-6xl font-bold ${getBMIColor()}`}>
                      {bmi}
                    </div>
                    <div className="text-white text-xl mt-2">Your BMI</div>
                  </div>
                  
                  <div className={`inline-block px-6 py-2 rounded-full font-semibold ${getBMIColor().replace('text-', 'bg-').replace('-400', '-500/20')} ${getBMIColor()}`}>
                    {category}
                  </div>
                  
                  <div className="text-primary-100 text-sm mt-4">
                    <p>BMI Categories:</p>
                    <div className="grid grid-cols-2 gap-2 mt-2 text-xs">
                      <div>Underweight: &lt;18.5</div>
                      <div>Normal: 18.5-24.9</div>
                      <div>Overweight: 25-29.9</div>
                      <div>Obese: ≥30</div>
                    </div>
                  </div>
                </div>
              )}
              
              {!bmi && (
                <div className="text-center py-12">
                  <div className="text-6xl font-bold text-gray-400">45%</div>
                  <div className="text-white text-xl mt-2">Ready to Calculate</div>
                  <p className="text-primary-100 text-sm mt-4">
                    Enter your height and weight to get your BMI score
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}