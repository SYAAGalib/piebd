import { useState } from "react";
import { Search, Download, RefreshCw } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import certificateSample from "@/assets/certificate-sample.png";

// Certificate database - Add your certificates here
const certificates: Record<string, {
  valid: true;
  name: string;
  role: string;
  duration: string;
  from: string;
  to: string;
  issuedDate: string;
  photo?: string;
  certificateId: string;
  certificateImage: string;
}> = {
  "CERT-2025-001": {
    valid: true,
    name: "Aiman Al Mahmud",
    role: "Software Engineer",
    duration: "9 months",
    from: "01 January, 2025",
    to: "30 September, 2025",
    issuedDate: "06 October, 2025",
    photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aiman",
    certificateId: "PI-SE-1787755330",
    certificateImage: certificateSample,
  },
  "CERT-2025-002": {
    valid: true,
    name: "SK. Yeasin Ahsanullah Al-Galib",
    role: "Software Engineer",
    duration: "9 months",
    from: "01 January, 2025",
    to: "30 September, 2025",
    issuedDate: "06 October, 2025",
    photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=Nusrat",
    certificateId: "CERT-2025-002",
    certificateImage: certificateSample,
  },
  "CERT-2025-003": {
    valid: true,
    name: "Aiman Al Mahmud",
    role: "Intern Software Engineer",
    duration: "3 months",
    from: "01 October, 2024",
    to: "31 December, 2024",
    issuedDate: "06 October, 2025",
    photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rafiul",
    certificateId: "CERT-2025-003",
    certificateImage: certificateSample,
  },
  "CERT-2025-004": {
    valid: true,
    name: "SK. Yeasin Ahsanullah Al-Galib",
    role: "Intern Software Engineer",
    duration: "3 months",
    from: "01 October, 2024",
    to: "31 December, 2024",
    issuedDate: "06 October, 2025",
    photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sadia",
    certificateId: "CERT-2025-004",
    certificateImage: certificateSample,
  },
  "CERT-2025-005": {
    valid: true,
    name: "Kamal Hossain",
    role: "Brand Strategy Consultant",
    duration: "10 months",
    from: "01 April, 2025",
    to: "31 January, 2026",
    issuedDate: "31 January, 2026",
    photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=Kamal",
    certificateId: "CERT-2025-005",
    certificateImage: certificateSample,
  },
  "CERT-2025-006": {
    valid: true,
    name: "Tahmina Akter",
    role: "Content Writer Intern",
    duration: "4 months",
    from: "01 May, 2025",
    to: "31 August, 2025",
    issuedDate: "31 August, 2025",
    photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=Tahmina",
    certificateId: "CERT-2025-006",
    certificateImage: certificateSample,
  },
};

const Verify = () => {
  const [certificateId, setCertificateId] = useState("");
  const [searchResult, setSearchResult] = useState<any>(null);

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Search for certificate in database
    const certificate = certificates[certificateId.toUpperCase()];
    
    if (certificate) {
      setSearchResult(certificate);
    } else if (certificateId) {
      setSearchResult({
        valid: false,
      });
    }
  };

  const handleRefresh = () => {
    setCertificateId("");
    setSearchResult(null);
  };

  const handleDownload = () => {
    if (searchResult?.valid && searchResult.certificateImage) {
      const link = document.createElement('a');
      link.href = searchResult.certificateImage;
      link.download = `${searchResult.certificateId}-certificate.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
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
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle className={searchResult.valid ? "text-green-600" : "text-destructive"}>
                    {searchResult.valid ? "✓ Certificate Verified" : "✗ Certificate Not Found"}
                  </CardTitle>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={handleRefresh}
                    className="gap-2"
                  >
                    <RefreshCw className="h-4 w-4" />
                    Refresh
                  </Button>
                </CardHeader>
                <CardContent>
                  {searchResult.valid ? (
                    <div className="space-y-6">
                      {/* Photo and Basic Info */}
                      <div className="flex items-start gap-6">
                        {searchResult.photo && (
                          <Avatar className="h-24 w-24">
                            <AvatarImage src={searchResult.photo} alt={searchResult.name} />
                            <AvatarFallback>{searchResult.name.split(' ').map((n: string) => n[0]).join('')}</AvatarFallback>
                          </Avatar>
                        )}
                        <div className="flex-grow">
                          <h3 className="text-2xl font-bold text-foreground mb-1">{searchResult.name}</h3>
                          <p className="text-lg text-muted-foreground">{searchResult.role}</p>
                        </div>
                      </div>

                      {/* Certificate Details */}
                      <div className="grid grid-cols-2 gap-4 border-t pt-4">
                        <div>
                          <p className="text-sm text-muted-foreground">Certificate ID</p>
                          <p className="font-semibold">{searchResult.certificateId}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Issued Date</p>
                          <p className="font-semibold">{searchResult.issuedDate}</p>
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

                      {/* Issuer Information */}
                      <div className="border-t pt-4">
                        <p className="text-sm text-muted-foreground mb-2">Issued by:</p>
                        <p className="font-semibold">PiBD - Pi Brand Identity</p>
                        <p className="text-sm text-muted-foreground">01, Central Road, West Tutpara, Khulna, Bangladesh</p>
                      </div>

                      {/* Certificate Image */}
                      <div className="border-t pt-6">
                        <h3 className="text-xl font-bold text-foreground mb-4">Certificate</h3>
                        <Card className="shadow-card overflow-hidden">
                          <CardContent className="p-0">
                            <img 
                              src={searchResult.certificateImage} 
                              alt={`Certificate for ${searchResult.name}`}
                              className="w-full h-auto"
                            />
                          </CardContent>
                        </Card>
                        <div className="mt-4 flex justify-center">
                          <Button 
                            onClick={handleDownload}
                            className="bg-gradient-primary hover:opacity-90 gap-2"
                          >
                            <Download className="h-5 w-5" />
                            Download Certificate
                          </Button>
                        </div>
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
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Verify;
