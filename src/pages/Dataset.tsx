import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Database, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";

const Dataset = () => {
  const sampleData = [
    { customerID: "7590-VHVEG", gender: "Female", tenure: 1, monthlyCharges: 29.85, churn: "No" },
    { customerID: "5575-GNVDE", gender: "Male", tenure: 34, monthlyCharges: 56.95, churn: "No" },
    { customerID: "3668-QPYBK", gender: "Male", tenure: 2, monthlyCharges: 53.85, churn: "Yes" },
    { customerID: "7795-CFOCW", gender: "Male", tenure: 45, monthlyCharges: 42.30, churn: "No" },
    { customerID: "9237-HQITU", gender: "Female", tenure: 2, monthlyCharges: 70.70, churn: "Yes" },
  ];

  const features = [
    { name: "customerID", type: "String", description: "Unique customer identifier" },
    { name: "gender", type: "Categorical", description: "Customer gender" },
    { name: "SeniorCitizen", type: "Binary", description: "Whether customer is senior (1) or not (0)" },
    { name: "Partner", type: "Binary", description: "Whether customer has partner" },
    { name: "Dependents", type: "Binary", description: "Whether customer has dependents" },
    { name: "tenure", type: "Numeric", description: "Number of months with company" },
    { name: "PhoneService", type: "Binary", description: "Whether customer has phone service" },
    { name: "InternetService", type: "Categorical", description: "Type of internet service" },
    { name: "MonthlyCharges", type: "Numeric", description: "Monthly bill amount" },
    { name: "TotalCharges", type: "Numeric", description: "Total amount charged" },
    { name: "Churn", type: "Binary", description: "Target variable - whether customer churned" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto space-y-8 animate-fade-in">
          <section className="text-center space-y-4">
            <Database className="h-16 w-16 text-primary mx-auto" />
            <h1 className="text-4xl md:text-5xl font-bold">
              Dataset Overview
            </h1>
            <p className="text-xl text-muted-foreground">
              Explore the customer data used for churn prediction
            </p>
          </section>

          <Card className="shadow-card">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Sample Data Preview</CardTitle>
                <Button variant="outline" size="sm" asChild>
                  <a href="/predict-and-persuade-main/predict-and-persuade-main/public/Telco_customer_churn1.xlsx" download="Telco_customer_churn1.xlsx">
                    <Download className="h-4 w-4 mr-2" />
                    Download Original Dataset
                  </a>
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Customer ID</TableHead>
                      <TableHead>Gender</TableHead>
                      <TableHead>Tenure</TableHead>
                      <TableHead>Monthly Charges</TableHead>
                      <TableHead>Churn</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {sampleData.map((row, i) => (
                      <TableRow key={i}>
                        <TableCell className="font-mono text-sm">{row.customerID}</TableCell>
                        <TableCell>{row.gender}</TableCell>
                        <TableCell>{row.tenure} months</TableCell>
                        <TableCell>${row.monthlyCharges}</TableCell>
                        <TableCell>
                          <span className={`inline-flex px-2 py-1 rounded-full text-xs font-medium ${
                            row.churn === "Yes" ? "bg-destructive/10 text-destructive" : "bg-green-500/10 text-green-600"
                          }`}>
                            {row.churn}
                          </span>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Feature Descriptions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {features.map((feature, i) => (
                  <div key={i} className="flex items-start space-x-4 p-4 rounded-lg bg-muted/50">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <h4 className="font-semibold">{feature.name}</h4>
                        <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                          {feature.type}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { label: "Total Records", value: "7,043", desc: "Customer entries" },
              { label: "Features", value: "20+", desc: "Data attributes" },
              { label: "Churn Rate", value: "26.5%", desc: "Historical average" },
            ].map((stat, i) => (
              <Card key={i} className="shadow-card text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="font-semibold mb-1">{stat.label}</div>
                  <div className="text-sm text-muted-foreground">{stat.desc}</div>
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

export default Dataset;
