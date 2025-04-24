import { useState } from 'react';
import { aboutMeData } from '../../data/aboutMeData';
import { motion } from 'framer-motion';
import Button from '../reusable/Button'; // Asegurate que esté en la ruta correcta

function AboutMeBio() {
  const [aboutMe] = useState(aboutMeData);

  return (
    <section id="about" className="py-20 px-6 md:px-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Línea divisoria */}
      <div className="border-t border-gray-300 dark:border-gray-700 mb-16"></div>

      <motion.div
        className="max-w-5xl mx-auto text-left"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 dark:text-white mb-10">
          Sobre Nosotros
        </h2>

        <div className="space-y-6 text-lg sm:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
          {aboutMe.map((bio) => (
            <p key={bio.id}>{bio.bio}</p>
          ))}
        </div>

        {/* Frase destacada */}
        <motion.div
          className="mt-12 text-center sm:text-left"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="text-2xl sm:text-3xl font-semibold text-indigo-600 dark:text-indigo-400 italic">
            “Hacemos que la tecnología trabaje para vos.”
          </p>
        </motion.div>

        
      </motion.div>
    </section>
  );
}

export default AboutMeBio;
