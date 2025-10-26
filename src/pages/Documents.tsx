import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Download, BookOpen, Code, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";

const Documents = () => {
  const documents = [
    {
      icon: BookOpen,
      title: "Research Paper",
      description: "Academic paper on customer churn prediction using machine learning techniques",
      size: "1.8 MB",
      type: "PDF",
      color: "White",
      downloadUrl: "/Research_Paper.pdf"
    },
    {
      icon: Code,
      title: "Model Architecture",
      description: "Technical documentation of the machine learning models and their configurations",
      size: "856 KB",
      type: "PDF",
      color: "white",
      downloadUrl: "/Model_Architecture.pdf"
    },
    {
      icon: FileText,
      title: "Data Dictionary",
      description: "Detailed description of all features and variables in the dataset",
      size: "512 KB",
      type: "PDF",
      color: "White",
      downloadUrl: "/Data_Dictionary.xlsx"
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          <section className="text-center space-y-4">
            <FileText className="h-16 w-16 text-primary mx-auto" />
            <h1 className="text-4xl md:text-5xl font-bold">
              Project Documents
            </h1>
            <p className="text-xl text-muted-foreground">
              Access technical documentation and research materials
            </p>
          </section>

          <div className="space-y-4">
            {documents.map((doc, i) => (
              <Card key={i} className="shadow-card hover:shadow-elegant transition-all duration-300 animate-slide-in" style={{ animationDelay: `${i * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4 flex-1">
                      <div className={`${doc.color} bg-secondary p-3 rounded-lg`}>
                        <doc.icon className="h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h3 className="font-semibold text-lg">{doc.title}</h3>
                          <span className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground">
                            {doc.type}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">{doc.description}</p>
                        <p className="text-xs text-muted-foreground">{doc.size}</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" asChild>
                      <a href={doc.downloadUrl} download>
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          

          <Card className="shadow-card bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <Briefcase className="h-6 w-6 text-primary" />
                <CardTitle>Management & Strategic Consulting</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <Card className="shadow-card hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4 flex-1">
                      <div className="text-black bg-secondary p-3 rounded-lg">
                        <Briefcase className="h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h3 className="font-semibold text-lg">Strategic Consulting Portfolio</h3>
                          <span className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground">
                            PDF
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">
                          Comprehensive portfolio showcasing strategic consulting insights, business analysis frameworks, 
                          and management consulting methodologies applied to customer retention strategies
                        </p>
                        <p className="text-xs text-muted-foreground">1.2 MB</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" asChild>
                      <a href="/Consulting.pdf" download>
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </CardContent>
          </Card>

          
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Documents;