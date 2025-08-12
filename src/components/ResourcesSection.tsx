import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, FileText, BookOpen, TrendingUp } from "lucide-react";

const ResourcesSection = () => {
  const resources = [
    {
      icon: <FileText className="h-8 w-8" />,
      title: "Programme Brochures",
      description: "Detailed information about all our executive education programmes",
      items: ["INSEAD LEAD Programme Brochure", "Board Directors Development Guide", "Human Capital Development Overview"],
      color: "bg-primary"
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: "Research & Insights",
      description: "Latest research publications and executive education insights",
      items: ["Leadership Trends Report 2025", "Digital Transformation Guide", "Governance Best Practices"],
      color: "bg-accent"
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Industry Reports",
      description: "Comprehensive analysis of industry trends and market insights",
      items: ["Executive Education Market Analysis", "Asia-Pacific Leadership Report", "Future Skills Assessment"],
      color: "bg-gradient-primary"
    }
  ];

  const blogPosts = [
    {
      title: "The Future of Executive Education in Asia",
      excerpt: "Exploring how digital transformation is reshaping executive learning across the region.",
      date: "March 15, 2025"
    },
    {
      title: "Building Resilient Leadership Teams",
      excerpt: "Key strategies for developing adaptive leadership capabilities in uncertain times.",
      date: "March 10, 2025"
    },
    {
      title: "The ROI of Executive Development",
      excerpt: "Measuring the tangible business impact of investment in leadership development.",
      date: "March 5, 2025"
    }
  ];

  return (
    <section id="resources" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Resources & Insights
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Access comprehensive resources, research publications, and exclusive insights 
            to stay informed about the latest trends in executive education and leadership development.
          </p>
        </div>

        {/* Resource Categories */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {resources.map((resource, index) => (
            <Card key={index} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 border-0">
              <CardHeader>
                <div className={`w-16 h-16 rounded-full ${resource.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {resource.icon}
                </div>
                <CardTitle className="text-2xl font-bold text-foreground">
                  {resource.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {resource.description}
                </p>
                <div className="space-y-3 mb-6">
                  {resource.items.map((item, idx) => (
                    <div key={idx} className="flex items-center space-x-3 text-sm">
                      <Download className="h-4 w-4 text-primary" />
                      <span className="text-muted-foreground hover:text-primary cursor-pointer transition-colors">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  View All Resources
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Blog Section */}
        <div>
          <h3 className="text-3xl font-bold text-center text-foreground mb-8">Latest Insights</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {blogPosts.map((post, index) => (
              <Card key={index} className="hover:shadow-elegant transition-all duration-300 hover:-translate-y-2">
                <CardHeader>
                  <CardTitle className="text-lg font-bold text-foreground line-clamp-2">
                    {post.title}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">{post.date}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <Button variant="outline" size="sm">
                    Read More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-subtle border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">Stay Informed</h3>
              <p className="text-lg text-muted-foreground mb-6">
                Subscribe to our newsletter for the latest insights, programme updates, and exclusive content.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-md border border-input bg-background"
                />
                <Button variant="primary">
                  Subscribe
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;