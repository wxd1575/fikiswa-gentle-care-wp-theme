import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight, Clock } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const BlogPage = () => {
  const posts = [
    {
      title: "Preparing for Your Home Birth: A Complete Checklist",
      excerpt: "Everything you need to know about creating a safe, comfortable home birth environment. From supplies to support people, we cover it all.",
      date: "March 15, 2024",
      readTime: "8 min read",
      category: "Home Birth",
      image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=600&h=400&fit=crop",
    },
    {
      title: "The Benefits of Breastfeeding: What Every Mother Should Know",
      excerpt: "Understanding the incredible benefits of breastfeeding for both mother and baby, plus practical tips for successful breastfeeding.",
      date: "March 10, 2024",
      readTime: "6 min read",
      category: "Postnatal Care",
      image: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=600&h=400&fit=crop",
    },
    {
      title: "Your Complete Antenatal Care Guide",
      excerpt: "A comprehensive guide to prenatal care and what to expect during your pregnancy journey, from first trimester to delivery.",
      date: "March 5, 2024",
      readTime: "10 min read",
      category: "Prenatal Care",
      image: "https://images.unsplash.com/photo-1555252332-17b5d6b8c0c8?w=600&h=400&fit=crop",
    },
    {
      title: "Natural Pain Management During Labor",
      excerpt: "Explore effective natural pain relief techniques including breathing exercises, positions, water therapy, and more.",
      date: "February 28, 2024",
      readTime: "7 min read",
      category: "Birth Support",
      image: "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=600&h=400&fit=crop",
    },
    {
      title: "The Fourth Trimester: Postpartum Recovery Essentials",
      excerpt: "What to expect in the weeks after birth and how to support your physical and emotional recovery during the postpartum period.",
      date: "February 20, 2024",
      readTime: "9 min read",
      category: "Postnatal Care",
      image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=600&h=400&fit=crop",
    },
    {
      title: "Creating Your Birth Plan: Questions to Consider",
      excerpt: "A thoughtful guide to creating a birth plan that reflects your preferences while remaining flexible for the unexpected.",
      date: "February 15, 2024",
      readTime: "8 min read",
      category: "Birth Planning",
      image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&h=400&fit=crop",
    },
    {
      title: "Nutrition During Pregnancy: Eating for Two",
      excerpt: "Evidence-based nutritional guidance for pregnancy, including what to eat, what to avoid, and managing common concerns.",
      date: "February 10, 2024",
      readTime: "7 min read",
      category: "Prenatal Health",
      image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&h=400&fit=crop",
    },
    {
      title: "Partner Support: How to Be Present During Labor",
      excerpt: "Practical advice for birth partners on providing physical, emotional, and practical support during labor and delivery.",
      date: "February 5, 2024",
      readTime: "6 min read",
      category: "For Partners",
      image: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=600&h=400&fit=crop",
    },
    {
      title: "Common Pregnancy Discomforts and Natural Remedies",
      excerpt: "Safe, effective natural remedies for common pregnancy discomforts like morning sickness, back pain, and fatigue.",
      date: "January 30, 2024",
      readTime: "8 min read",
      category: "Pregnancy Wellness",
      image: "https://images.unsplash.com/photo-1505968409348-bd000797c92e?w=600&h=400&fit=crop",
    },
  ];

  const categories = ["All", "Home Birth", "Prenatal Care", "Postnatal Care", "Birth Support", "For Partners"];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-muted/50 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Birth & Wellness <span className="text-primary">Blog</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Expert guidance, tips, and insights for your pregnancy, birth, and motherhood journey
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="pb-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center max-w-4xl mx-auto">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="pb-12">
        <div className="container mx-auto px-4">
          <Card className="max-w-6xl mx-auto overflow-hidden border-primary/20 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="relative h-64 md:h-auto">
                <img
                  src={posts[0].image}
                  alt={posts[0].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </span>
                </div>
              </div>
              <CardContent className="p-8 flex flex-col justify-center">
                <span className="text-primary font-medium mb-2">{posts[0].category}</span>
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  {posts[0].title}
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {posts[0].excerpt}
                </p>
                <div className="flex items-center text-sm text-muted-foreground mb-6">
                  <Calendar size={16} className="mr-2" />
                  {posts[0].date}
                  <Clock size={16} className="ml-4 mr-2" />
                  {posts[0].readTime}
                </div>
                <Button className="w-full sm:w-auto">
                  Read Full Article <ArrowRight size={18} className="ml-2" />
                </Button>
              </CardContent>
            </div>
          </Card>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {posts.slice(1).map((post, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-border"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-center text-sm text-muted-foreground mb-2">
                    <Calendar size={14} className="mr-2" />
                    {post.date}
                    <Clock size={14} className="ml-3 mr-2" />
                    {post.readTime}
                  </div>
                  <CardTitle className="text-xl leading-tight">{post.title}</CardTitle>
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

          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto border-primary/20 shadow-lg">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Never Miss an Update
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Subscribe to our newsletter for weekly tips, birth stories, and expert advice 
                delivered straight to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <Button size="lg">Subscribe</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPage;
