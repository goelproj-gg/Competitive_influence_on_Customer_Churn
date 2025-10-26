import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingDown, Users, DollarSign, Target, AlertTriangle, BarChart } from "lucide-react";
import Footer from "@/components/Footer";

const Introduction = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-12 animate-fade-in">
          <section className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold">
              Understanding Customer Churn
            </h1>
            <p className="text-xl text-muted-foreground">
              Why predicting customer churn is critical for business success....
            </p>
          </section>

          <Card className="shadow-card">
            <CardContent className="p-8 space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <TrendingDown className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold mb-3">What is Customer Churn?</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Customer churn refers to the phenomenon where customers stop doing business with a company. 
                    It's measured as the percentage of customers who discontinue their subscriptions or stop purchasing 
                    products within a given time period. Understanding and preventing churn is crucial for maintaining 
                    sustainable business growth.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-center">Key Factors Influencing Churn</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: DollarSign,
                  title: "Pricing & Value",
                  desc: "Customers leave when they perceive poor value for money or find better alternatives.",
                  color: "white"
                },
                {
                  icon: Users,
                  title: "Customer Experience",
                  desc: "Poor service quality, difficult interfaces, or unresponsive support drive customers away.",
                  color: "White"
                },
                {
                  icon: Target,
                  title: "Product Fit",
                  desc: "Misalignment between product features and customer needs leads to dissatisfaction.",
                  color: "White"
                },
                {
                  icon: AlertTriangle,
                  title: "Engagement Level",
                  desc: "Low usage patterns and decreased interaction often signal upcoming churn.",
                  color: "White"
                },
              ].map((factor, i) => (
                <Card key={i} className="shadow-card hover:shadow-elegant transition-all duration-300 animate-slide-in" style={{ animationDelay: `${i * 0.1}s` }}>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className={`${factor.color} bg-secondary p-3 rounded-lg`}>
                        <factor.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">{factor.title}</h3>
                        <p className="text-sm text-muted-foreground">{factor.desc}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <Card className="bg-gradient-primary text-white shadow-elegant">
            <CardContent className="p-8">
              <div className="flex items-start space-x-4">
                <BarChart className="h-8 w-8 flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold mb-3">Why Prediction Matters</h3>
                  <p className="leading-relaxed opacity-90">
                    Acquiring new customers costs 5-25x more than retaining existing ones. By predicting churn 
                    early, businesses can implement targeted retention strategies, reduce costs, and maintain 
                    revenue stability. Machine learning models can identify at-risk customers before they leave, 
                    enabling proactive intervention.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Introduction;
