import { motion } from 'framer-motion';
import { Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-8 relative border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <span>© 2024 S.M. Fahim Mahmud. Made with</span>
            <Heart size={16} className="text-destructive fill-destructive" />
          </div>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary/20 transition-colors"
          >
            <ArrowUp size={20} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
