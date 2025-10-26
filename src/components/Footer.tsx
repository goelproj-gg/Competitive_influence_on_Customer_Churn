import { Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full border-t border-border bg-card/50 backdrop-blur mt-auto">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Customer Churn Prediction. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/sailesh-goel-46b665259/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-300 group"
            >
              <Linkedin className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
              <span>Connect on LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
