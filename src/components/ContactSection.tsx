import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

export const ContactSection = () => {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-6">
            <span className="bg-gradient-secondary bg-clip-text text-transparent">
              Let's Build Something Amazing
            </span>
          </h2>
          <p className="text-muted-foreground text-lg mb-12">
            Ready to bring your ideas to life? Let's connect and create something extraordinary together.
          </p>

          {/* Contact Methods */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <motion.div
              whileHover={{ scale: 1.05, rotateY: 5 }}
              className="glass-card p-8 rounded-xl hover:shadow-neon transition-all duration-300"
            >
              <Mail className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Email Me</h3>
              <p className="text-muted-foreground mb-4">
                Drop me a line and I'll get back to you within 24 hours
              </p>
              <a
                href="mailto:alex.developer@email.com"
                className="text-primary hover:text-primary-glow transition-colors"
              >
                alex.developer@email.com
              </a>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, rotateY: -5 }}
              className="glass-card p-8 rounded-xl hover:shadow-purple transition-all duration-300"
            >
              <Github className="w-12 h-12 text-secondary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Collaborate</h3>
              <p className="text-muted-foreground mb-4">
                Check out my projects and let's collaborate on something cool
              </p>
              <a
                href="#"
                className="text-secondary hover:text-secondary-glow transition-colors"
              >
                github.com/alexdev
              </a>
            </motion.div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6">
            {[
              { icon: Github, href: '#', label: 'GitHub' },
              { icon: Linkedin, href: '#', label: 'LinkedIn' },
              { icon: Twitter, href: '#', label: 'Twitter' },
              { icon: Mail, href: 'mailto:alex.developer@email.com', label: 'Email' },
            ].map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ 
                  scale: 1.2,
                  y: -5,
                }}
                className="p-4 glass-card rounded-full hover:shadow-neon transition-all duration-300 group"
              >
                <social.icon className="w-6 h-6 text-primary group-hover:text-primary-glow transition-colors" />
              </motion.a>
            ))}
          </div>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-16 pt-8 border-t border-border"
          >
            <p className="text-muted-foreground">
              © 2024 Alex Developer. Built with React, Framer Motion & TailwindCSS
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};