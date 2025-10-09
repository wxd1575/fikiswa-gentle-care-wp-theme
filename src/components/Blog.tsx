import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from "lucide-react";

const Blog = () => {
  const posts = [
    {
      title: "Preparing for Your Home Birth",
      excerpt: "Everything you need to know about creating a safe and comfortable home birth environment.",
      date: "March 15, 2024",
      image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=600&h=400&fit=crop",
    },
    {
      title: "Benefits of Breastfeeding",
      excerpt: "Understanding the incredible benefits of breastfeeding for both mother and baby.",
      date: "March 10, 2024",
      image: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=600&h=400&fit=crop",
    },
    {
      title: "Antenatal Care Guide",
      excerpt: "A comprehensive guide to prenatal care and what to expect during your pregnancy journey.",
      date: "March 5, 2024",
      image: "https://images.unsplash.com/photo-1555252332-17b5d6b8c0c8?w=600&h=400&fit=crop",
    },
  ];

  return (
    <section id="blog" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Latest from Our Blog
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tips, insights, and guidance for your pregnancy and motherhood journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {posts.map((post, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardHeader>
                <div className="flex items-center text-sm text-muted-foreground mb-2">
                  <Calendar size={16} className="mr-2" />
                  {post.date}
                </div>
                <CardTitle className="text-xl">{post.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4 leading-relaxed">
                  {post.excerpt}
                </CardDescription>
                <Button variant="link" className="p-0 h-auto text-primary">
                  Read More <ArrowRight size={16} className="ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg">
            View All Posts
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
