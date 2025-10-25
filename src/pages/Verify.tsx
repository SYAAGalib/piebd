import { useState } from "react";
import { Search } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import certificateSample from "@/assets/certificate-sample.png";

const Verify = () => {
  const [certificateId, setCertificateId] = useState("");
  const [searchResult, setSearchResult] = useState<any>(null);

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Mock verification - in production, this would call your backend
    if (certificateId.toLowerCase().includes("sample") || certificateId === "123") {
      setSearchResult({
        valid: true,
        name: "Aiman Al Mahmud",
        role: "Junior Software Engineer",
        duration: "9 months",
        from: "01 January, 2025",
        to: "30 September, 2025",
        certificateId: certificateId,
      });
    } else if (certificateId) {
      setSearchResult({
        valid: false,
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
                Certificate Verification
              </h1>
              <p className="text-xl text-muted-foreground">
                Verify the authenticity of PiBD certificates for students, interns, and employees
              </p>
            </div>

            {/* Search Form */}
            <Card className="mb-8 shadow-card">
              <CardContent className="p-8">
                <form onSubmit={handleVerify} className="space-y-4">
                  <div>
                    <label htmlFor="certificateId" className="block text-sm font-medium text-foreground mb-2">
                      Certificate ID or Credential Code
                    </label>
                    <div className="flex gap-2">
                      <Input
                        id="certificateId"
                        placeholder="Enter certificate ID..."
                        value={certificateId}
                        onChange={(e) => setCertificateId(e.target.value)}
                        className="flex-grow"
                      />
                      <Button type="submit" className="bg-gradient-primary hover:opacity-90">
                        <Search className="h-5 w-5 mr-2" />
                        Verify
                      </Button>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">
                      You can find the certificate ID on the certificate document or QR code
                    </p>
                  </div>
                </form>
              </CardContent>
            </Card>

            {/* Results */}
            {searchResult && (
              <Card className="shadow-card animate-fade-in">
                <CardHeader>
                  <CardTitle className={searchResult.valid ? "text-green-600" : "text-destructive"}>
                    {searchResult.valid ? "✓ Certificate Verified" : "✗ Certificate Not Found"}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {searchResult.valid ? (
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm text-muted-foreground">Name</p>
                          <p className="font-semibold">{searchResult.name}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Role</p>
                          <p className="font-semibold">{searchResult.role}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Duration</p>
                          <p className="font-semibold">{searchResult.duration}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Period</p>
                          <p className="font-semibold">{searchResult.from} - {searchResult.to}</p>
                        </div>
                      </div>
                      <div className="border-t pt-4">
                        <p className="text-sm text-muted-foreground mb-2">Issued by:</p>
                        <p className="font-semibold">PiBD - Pi Brand Identity</p>
                        <p className="text-sm text-muted-foreground">01, Central Road, West Tutpara, Khulna, Bangladesh</p>
                      </div>
                    </div>
                  ) : (
                    <p className="text-muted-foreground">
                      The certificate ID you entered could not be found in our system. Please check the ID and try again.
                    </p>
                  )}
                </CardContent>
              </Card>
            )}

            {/* Sample Certificate */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-foreground mb-4 text-center">
                Sample Certificate
              </h2>
              <Card className="shadow-card overflow-hidden">
                <CardContent className="p-0">
                  <img 
                    src={certificateSample} 
                    alt="Sample PiBD Certificate" 
                    className="w-full h-auto"
                  />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Verify;
