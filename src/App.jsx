import Header from './components/Header';
import Hero from './components/Hero';
import WorkoutSession from './components/WorkoutSession';
import FeaturedBootcamps from './components/FeaturedBootcamps';
import WorkoutGallery from './components/WorkoutGallery';
import FitnessPlans from './components/FitnessPlans';
import ContactForm from './components/ContactForm';
import BMICalculator from './components/BMICalculator';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <Hero />
      <WorkoutSession />
      <FeaturedBootcamps />
      <WorkoutGallery />
      <FitnessPlans />
      <ContactForm />
      <BMICalculator />
      <Footer />
    </div>
  );
}

export default App;