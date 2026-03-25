import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground';
import Hero from './components/Hero';
import About from './components/About';
import YouTubeVideos from './components/YouTubeVideos';
import Playlists from './components/Playlists';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <ParticleBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <YouTubeVideos />
        <Playlists />
        <Stats />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
