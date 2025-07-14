// export default function WorkoutSession() {
//   return (
//     <section id="workoutsession" className="py-20 bg-gray-900">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid lg:grid-cols-2 gap-12 items-center">
//           <div>
//             <h2 className="text-4xl font-bold text-white mb-6">TOP WORKOUT SESSION</h2>
//             <p className="text-gray-400 mb-8 leading-relaxed">
//               Lorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur 
//               adipiscing elit Lorem ipsum dolor sit amet consectetur adipiscing elit. 
//               Consectetur adipiscing elit Lorem ipsum dolor sit amet consectetur.
//             </p>
            
//             <div className="space-y-6">
//               <div className="flex items-center gap-4">
//                 <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center">
//                   <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
//                   </svg>
//                 </div>
//                 <div>
//                   <h3 className="text-white font-semibold">High-Intensity Training</h3>
//                   <p className="text-gray-400 text-sm">Maximum results in minimum time</p>
//                 </div>
//               </div>
              
//               <div className="flex items-center gap-4">
//                 <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center">
//                   <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
//                   </svg>
//                 </div>
//                 <div>
//                   <h3 className="text-white font-semibold">Expert Guidance</h3>
//                   <p className="text-gray-400 text-sm">Professional trainers at your service</p>
//                 </div>
//               </div>
//             </div>
//           </div>
          
//           <div className="relative">
//             <div className="relative rounded-2xl overflow-hidden">
//               <img 
//                 src="https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
//                 alt="Workout session"
//                 className="w-full h-96 object-cover"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              
//               <div className="absolute top-6 left-6">
//                 <div className="bg-orange-500 text-white px-4 py-2 rounded-full font-bold text-2xl">
//                   357
//                 </div>
//                 <p className="text-white text-sm mt-1">Calories Burned</p>
//               </div>
              
//               <div className="absolute bottom-6 left-6 right-6">
//                 <div className="flex justify-between items-center text-white">
//                   <div className="text-center">
//                     <div className="text-2xl font-bold">45</div>
//                     <div className="text-xs">MIN</div>
//                   </div>
//                   <div className="text-center">
//                     <div className="text-2xl font-bold">12</div>
//                     <div className="text-xs">EXERCISES</div>
//                   </div>
//                   <div className="text-center">
//                     <div className="text-2xl font-bold">8</div>
//                     <div className="text-xs">SETS</div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


export default function WorkoutSession() {
  return (
    <section id="workoutsession" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-white mb-6">TOP WORKOUT SESSION</h2>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Push your limits with this high-intensity full-body workout. 
              Burn fat, build strength, and boost endurance with a mix of cardio, bodyweight drills, and core crushers. 
              Perfect for all fitness levels. 
              Get ready to sweat, grind, and feel the burn!
            </p>

            <div className="space-y-6">
              {/* High-Intensity Training */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center">
                  <i className="fa-sharp fa-solid fa-bolt text-white text-xl" style={{ color: '#74C0FC' }}></i>
                </div>
                <div>
                  <h3 className="text-white font-semibold">High-Intensity Training</h3>
                  <p className="text-gray-400 text-sm">Maximum results in minimum time</p>
                </div>
              </div>

              {/* Expert Guidance */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center">
                  <i className="fa-sharp-duotone fa-solid fa-circle-check text-white text-xl" style={{ "--fa-primary-color": "#63E6BE", "--fa-secondary-color": "#63E6BE" }}></i>
                </div>
                <div>
                  <h3 className="text-white font-semibold">Expert Guidance</h3>
                  <p className="text-gray-400 text-sm">Professional trainers at your service</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Workout session"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

              <div className="absolute top-6 left-6">
                <div className="bg-orange-500 text-white px-4 py-2 rounded-full font-bold text-2xl w-fit">
                  357
                </div>
                <p className="text-white text-sm mt-1">Calories Burned</p>
              </div>

              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex justify-between items-center text-white">
                  <div className="text-center">
                    <div className="text-2xl font-bold">45</div>
                    <div className="text-xs">MIN</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">12</div>
                    <div className="text-xs">EXERCISES</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">8</div>
                    <div className="text-xs">SETS</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
