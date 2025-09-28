import { motion } from 'framer-motion';
import { MatrixBackground } from './MatrixBackground';
import profilePhoto from '@/assets/profile-photo.jpg';

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <MatrixBackground />
      
      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full opacity-30"
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto"
        >
          {/* Profile Card */}
          <motion.div
            className="glass-card rounded-2xl max-w-md mx-auto mb-8 floating-card overflow-hidden relative h-80"
            whileHover={{ 
              rotateY: 5, 
              rotateX: 5,
              scale: 1.05,
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img
              src={profilePhoto}
              alt="Developer Profile"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-primary opacity-20"></div>
            <div className="absolute top-4 left-4">
              <h1 className="text-2xl font-bold text-white drop-shadow-lg">
                Jashank
              </h1>
            </div>
          </motion.div>

          {/* Main Content */}
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Code
            </span>
            <span className="text-foreground"> the </span>
            <span className="bg-gradient-secondary bg-clip-text text-transparent">
              Future
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
          >
            Building innovative web applications with cutting-edge technologies.
            Passionate about creating seamless user experiences and robust backend systems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-primary text-background font-semibold rounded-lg neon-glow hover:shadow-neon transition-all duration-300"
            >
              View My Work
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 glass-card border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-background transition-all duration-300"
            >
              Get In Touch
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </motion.div>
    </section>
  );
};