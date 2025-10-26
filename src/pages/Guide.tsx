import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Upload, Play, BarChart3, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";

const Guide = () => {
  const steps = [
    {
      icon: Upload,
      title: "Prepare Your Data",
      description: "Ensure your customer data includes key features like tenure, contract type, monthly charges, and service usage patterns.",
      details: [
        "Customer demographics",
        "Service subscription details",
        "Payment information",
        "Usage patterns and history"
      ]
    },
    {
      icon: Play,
      title: "Use the Model",
      description: "Navigate to the Model page and input customer information through our interactive Gradio interface.",
      details: [
        "Fill in customer attributes",
        "Review input data",
        "Click predict button",
        "View churn probability"
      ]
    },
    {
      icon: BarChart3,
      title: "Interpret Results",
      description: "The model outputs a churn probability score indicating the likelihood of customer departure.",
      details: [
        "0-0.3: Low risk - Customer likely to stay",
        "0.3-0.7: Medium risk - Monitor closely",
        "0.7-1.0: High risk - Immediate action needed",
        "Review contributing factors"
      ]
    },
    {
      icon: CheckCircle,
      title: "Take Action",
      description: "Based on predictions, implement targeted retention strategies for at-risk customers.",
      details: [
        "Personalized offers",
        "Enhanced customer support",
        "Service upgrades",
        "Feedback collection"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-12 animate-fade-in">
          <section className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold">
              How to Use the Model
            </h1>
            <p className="text-xl text-muted-foreground">
              Step-by-step guide to predicting customer churn
            </p>
          </section>

          <Card className="shadow-card bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
            <CardContent className="p-8 space-y-6">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">About This Project</h2>
                <p className="text-muted-foreground leading-relaxed">
                  This Customer Churn Prediction system leverages machine learning to identify customers at risk of discontinuing their services. 
                  Built specifically for telecommunication services analysis, it helps businesses proactively retain valuable customers through 
                  data-driven insights and predictive analytics.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Understanding the Dataset</h2>
                <div className="space-y-3 text-muted-foreground">
                  <p className="leading-relaxed">
                    <strong className="text-foreground">Geographic Coverage:</strong> The dataset comprises customer records from the United States, 
                    specifically focused on California state, spanning multiple cities across California.
                  </p>
                  
                  <div className="space-y-2">
                    <p className="font-semibold text-foreground">Customer Demographics:</p>
                    <ul className="list-disc list-inside space-y-1 pl-4">
                      <li>Gender (Male/Female)</li>
                      <li>Senior Citizen status</li>
                      <li>Partner status</li>
                      <li>Dependents</li>
                      <li>Tenure (duration of service subscription)</li>
                    </ul>
                  </div>

                  <div className="space-y-2">
                    <p className="font-semibold text-foreground">Service Subscriptions:</p>
                    <ul className="list-disc list-inside space-y-1 pl-4">
                      <li>Phone Service</li>
                      <li>Multiple Lines</li>
                      <li>Internet Service</li>
                      <li>Online Security</li>
                      <li>Online Backup</li>
                      <li>Device Protection</li>
                      <li>Tech Support</li>
                      <li>Streaming TV</li>
                      <li>Streaming Movies</li>
                    </ul>
                  </div>

                  <div className="space-y-2">
                    <p className="font-semibold text-foreground">Payment Information:</p>
                    <ul className="list-disc list-inside space-y-1 pl-4">
                      <li>Bank Transfer (automatic)</li>
                      <li>Credit Card (automatic)</li>
                      <li>Mailed Cheque</li>
                      <li>Electronic Cheque</li>
                      <li>Paperless Billing preference</li>
                    </ul>
                  </div>

                  <p className="leading-relaxed mt-4">
                    These features work together to create a comprehensive profile of customer behavior. The model analyzes 
                    correlations between demographic factors, service usage patterns, and payment methods to predict churn likelihood.
                  </p>
                </div>
              </div>

              <Card className="bg-amber-500/10 border-amber-500/30">
                <CardContent className="p-4">
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 mt-1">
                      <div className="bg-amber-500/20 p-2 rounded-full">
                        <CheckCircle className="h-5 w-5 text-amber-600 dark:text-amber-400" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-semibold text-amber-900 dark:text-amber-100">Important Disclaimer</h3>
                      <p className="text-sm text-amber-800 dark:text-amber-200 leading-relaxed">
                        Before using the model, we strongly recommend downloading and thoroughly understanding the dataset from the Dataset page. 
                        Pay careful attention to the real-life weightage and significance of each feature. Features like tenure, contract type, 
                        and monthly charges often carry more predictive power than others. Understanding these correlations will help you 
                        interpret predictions more accurately and make better business decisions.
                      </p>
                      <Button asChild variant="outline" size="sm" className="mt-2 border-amber-500/50 hover:bg-amber-500/10">
                        <Link to="/dataset">View Dataset</Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CardContent>
          </Card>

          <div className="space-y-8">
            {steps.map((step, index) => (
              <Card key={index} className="shadow-card animate-slide-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-8">
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <div className="bg-primary/10 p-4 rounded-lg">
                        <step.icon className="h-8 w-8 text-primary" />
                      </div>
                      <div className="mt-4 text-center">
                        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white font-bold">
                          {index + 1}
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex-1 space-y-4">
                      <div>
                        <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                        <p className="text-muted-foreground">{step.description}</p>
                      </div>
                      
                      <ul className="space-y-2">
                        {step.details.map((detail, i) => (
                          <li key={i} className="flex items-start space-x-2">
                            <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-sm">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-gradient-primary text-white shadow-elegant">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Predict?</h3>
              <p className="mb-6 opacity-90">
                Try our model with your customer data and get instant predictions
              </p>
              <Button asChild size="lg" variant="secondary">
                <Link to="/model">Go to Model</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Guide;