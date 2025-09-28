import { motion } from 'framer-motion';
import { Download, Mail, MapPin, Calendar } from 'lucide-react';
import profilePhoto from '@/assets/profile-photo.jpg';

export const AboutSection = () => {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Passionate developer crafting digital experiences with modern technologies
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Photo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative glass-card p-8 rounded-2xl">
              <motion.img
                src={profilePhoto}
                alt="About Me"
                className="w-full max-w-sm mx-auto rounded-xl object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-secondary rounded-full opacity-20 animate-pulse" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-accent rounded-full opacity-30 animate-pulse" />
            </div>

            {/* Animated divider */}
            <motion.div
              className="mt-8 h-1 bg-gradient-primary rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              transition={{ delay: 0.5, duration: 1 }}
            />
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-secondary">
                Hi, I'm Alex Developer
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                With over 5 years of experience in full-stack development, I specialize in creating 
                innovative web applications that solve real-world problems. My journey in tech started 
                with a curiosity about how things work, which evolved into a passion for building 
                digital solutions that make a difference.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                I thrive on challenges and continuously learn new technologies to stay at the forefront 
                of the industry. Whether it's architecting scalable backend systems or crafting 
                intuitive user interfaces, I approach every project with dedication and attention to detail.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 py-6">
              <div className="glass-card p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="glass-card p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-secondary">5+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center text-muted-foreground">
                <Mail className="w-5 h-5 mr-3 text-primary" />
                alex.developer@email.com
              </div>
              <div className="flex items-center text-muted-foreground">
                <MapPin className="w-5 h-5 mr-3 text-primary" />
                San Francisco, CA
              </div>
              <div className="flex items-center text-muted-foreground">
                <Calendar className="w-5 h-5 mr-3 text-primary" />
                Available for freelance
              </div>
            </div>

            {/* Resume Button */}
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: 'var(--shadow-neon)' }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 inline-flex items-center px-8 py-4 bg-gradient-primary text-background font-semibold rounded-lg hover:shadow-neon transition-all duration-300"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Resume
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};