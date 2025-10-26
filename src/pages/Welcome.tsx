import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, TrendingDown, Users } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";

const Welcome = () => {
  return (
    <div className="min-h-screen bg-gradient-hero flex flex-col items-center justify-center p-4">
      <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
        <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
          <BarChart3 className="h-4 w-4 text-primary" />
          <span className="text-sm font-medium text-primary">Machine Learning Powered</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
          Customer Churn
          <span className="bg-gradient-primary bg-clip-text text-transparent"> Prediction</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
          Advanced machine learning models to predict and prevent customer churn with data-driven insights
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 pt-8">
          <Button asChild size="lg" className="shadow-elegant text-lg px-8 py-6">
            <Link to="/introduction" className="flex items-center space-x-2">
              <span>Get Started</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12">
          {[
            { icon: TrendingDown, title: "Predict Churn", desc: "Identify at-risk customers" },
            { icon: BarChart3, title: "ML Models", desc: "Logistic, RF, XGBoost" },
            { icon: Users, title: "Retain Customers", desc: "Data-driven strategies" },
          ].map((feature, i) => (
            <div key={i} className="bg-card/50 backdrop-blur p-6 rounded-lg border border-border shadow-card animate-scale-in" style={{ animationDelay: `${i * 0.1}s` }}>
              <feature.icon className="h-10 w-10 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Welcome;
