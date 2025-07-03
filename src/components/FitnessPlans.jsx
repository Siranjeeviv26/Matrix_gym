export default function FitnessPlans() {
  const plans = [
    {
      name: "QUARTERLY PACKAGE",
      price: "18000",
      duration: "3 Months",
      features: [
        "Unlimited Access",
        "Personal Training",
        "Group Classes",
        "Nutrition Plan",
        "24/7 Gym Access",
        "Progress Tracking"
      ],
      popular: false
    },
    {
      name: "HALF YEARLY PACKAGE",
      price: "34000",
      duration: "6 Months",
      features: [
        "Unlimited Access",
        "Personal Training",
        "Group Classes",
        "Nutrition Plan",
        "24/7 Gym Access",
        "Progress Tracking",
        "Free Supplements"
      ],
      popular: true
    },
    {
      name: "YEARLY PACKAGE",
      price: "67000",
      duration: "12 Months",
      features: [
        "Unlimited Access",
        "Personal Training",
        "Group Classes",
        "Nutrition Plan",
        "24/7 Gym Access",
        "Progress Tracking",
        "Free Supplements",
        "Priority Support"
      ],
      popular: false
    }
  ];

  return (
    <section id="plans" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">FITNESS PLANS</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Choose the perfect plan that fits your fitness goals and budget. 
            All plans include access to our world-class facilities and expert guidance.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative bg-gray-900 rounded-2xl p-8 flex flex-col justify-between transition-all duration-500 ease-out transform hover:scale-105 hover:shadow-2xl hover:shadow-primary-500/20 hover:bg-gray-800 cursor-pointer group ${
                plan.popular ? 'ring-2 ring-primary-500 scale-105' : 'hover:ring-2 hover:ring-primary-400'
              }`}
            >
              {/* Reserve space for badge */}
              <div className="h-10 mb-4 relative">
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary-500 text-white px-4 py-2 rounded-full text-sm font-semibold group-hover:bg-primary-400 transition-colors duration-300">
                      Most Popular
                    </span>
                  </div>
                )}
              </div>

              <div className="flex flex-col flex-grow">
                <div className="text-center mb-8">
                  <h3 className="text-white font-bold text-xl mb-2 group-hover:text-primary-300 transition-colors duration-300">
                    {plan.name}
                  </h3>
                  <div className="text-4xl font-bold text-primary-500 mb-2 group-hover:text-primary-400 transition-colors duration-300">
                    Rs {plan.price}
                  </div>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    {plan.duration}
                  </p>
                </div>

                <ul className="space-y-4 mb-8 flex-grow">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300 group-hover:text-white transition-colors duration-300">
                      <svg className="w-5 h-5 text-green-500 mr-3 group-hover:text-green-400 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 transform group-hover:scale-105 ${
                plan.popular 
                  ? 'bg-primary-500 hover:bg-primary-400 text-white shadow-lg hover:shadow-primary-500/30' 
                  : 'bg-gray-800 hover:bg-primary-500 text-white hover:shadow-lg hover:shadow-primary-500/30'
              }`}>
                Choose Plan
              </button>

              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary-500/0 via-primary-500/5 to-primary-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
