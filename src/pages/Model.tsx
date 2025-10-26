import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Info } from "lucide-react";
import Footer from "@/components/Footer";

const Model = () => {
  // ==========================================
  // TODO: PASTE YOUR GRADIO/HUGGING FACE URL HERE
  // ==========================================
  // Step 1: Deploy your Gradio app to Hugging Face Spaces
  // Step 2: Copy the URL (e.g., https://your-username-your-space.hf.space)
  // Step 3: Paste it below, replacing the empty string
  // Example: const GRADIO_URL = "https://john-churn-predictor.hf.space";
  
  const GRADIO_URL = "https://goel-gg-customer-churn-predictor.hf.space"; // 👈 PUT YOUR URL HERE

  // ==========================================
  // END OF CONFIGURATION
  // ==========================================

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto space-y-8 animate-fade-in">
          <section className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold">
              Churn Prediction Model
            </h1>
            <p className="text-xl text-muted-foreground">
              Interactive machine learning interface powered by Gradio
            </p>
          </section>

          <Alert className="border-primary/50 bg-primary/5">
            <Info className="h-4 w-4 text-primary" />
            <AlertDescription>
              This interface uses Logistic Regression, Random Forest, and XGBoost algorithms 
              to predict customer churn probability based on customer features and service usage patterns.
            </AlertDescription>
          </Alert>

          {GRADIO_URL ? (
            <Card className="shadow-card animate-scale-in">
              <CardContent className="p-0">
                <iframe
                  src={GRADIO_URL}
                  className="w-full h-[800px] border-0 rounded-lg"
                  title="Gradio Model Interface"
                />
              </CardContent>
            </Card>
          ) : (
            <Card className="shadow-card">
              <CardContent className="p-12 text-center space-y-4">
                <div className="bg-muted/50 rounded-full w-20 h-20 flex items-center justify-center mx-auto">
                  <Info className="h-10 w-10 text-muted-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Configuration Required</h3>
                  <p className="text-muted-foreground max-w-md mx-auto">
                    Please add your Gradio/Hugging Face URL in the Model.tsx file. 
                    Check the code comments for detailed instructions.
                  </p>
                </div>
              </CardContent>
            </Card>
          )}

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { label: "Logistic Regression", desc: "Fast, interpretable baseline" },
              { label: "Random Forest", desc: "Ensemble learning, robust" },
              { label: "XGBoost", desc: "High accuracy, gradient boosting" },
            ].map((model, i) => (
              <Card key={i} className="shadow-card">
                <CardContent className="p-6 text-center">
                  <h4 className="font-semibold mb-2">{model.label}</h4>
                  <p className="text-sm text-muted-foreground">{model.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Model;