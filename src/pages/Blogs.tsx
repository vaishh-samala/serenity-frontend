import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, User, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const blogs = [
  {
    id: 1,
    title: "The Power of Yoga for Stress Relief",
    author: "Priya Sharma",
    date: "2025-09-14",
    readTime: "5 minutes",
    category: "Mindfulness",
    excerpt:
      "Discover how yoga, a time-tested mind-body practice, can help manage stress by calming the nervous system, lowering cortisol levels, and improving focus. Learn beginner-friendly poses and how Serenity Springs' guided sessions can nurture your mind, body, and spirit.",
    featured: false,
    content:
      "In a world where deadlines, responsibilities, and constant distractions often overwhelm us, stress has quietly become part of everyday life. While it’s impossible to eliminate stress completely, there are simple practices that help us manage it better. One of the most effective and time-tested methods is yoga.\n\n🧘 Why Yoga Works Against Stress\n\nYoga is more than just stretching or exercise—it is a mind-body practice that combines physical postures, controlled breathing, and mindfulness. Together, these elements work to:\n\n- Calm the nervous system and reduce anxiety.\n- Lower cortisol levels, the body’s main stress hormone.\n- Improve sleep quality and focus, making you more resilient to daily challenges.\n\n🌟 Simple Yoga Poses for Stress Relief\n\nYou don’t need to be an expert to enjoy yoga’s benefits. Here are a few beginner-friendly poses that instantly bring calm:\n\n- **Child’s Pose (Balasana)**\n  A gentle posture that helps release tension from the back, shoulders, and chest. It’s perfect for grounding yourself after a long day.\n\n- **Cat-Cow Stretch (Marjaryasana–Bitilasana)**\n  A flowing movement between arching and rounding your back, this stretch relaxes the spine and improves breathing rhythm.\n\n- **Legs-Up-the-Wall Pose (Viparita Karani)**\n  By simply lying on your back with legs elevated against a wall, this pose promotes circulation, reduces fatigue, and encourages deep relaxation.\n\n- **Corpse Pose (Savasana)**\n  Often practiced at the end of a yoga session, this pose focuses on mindful breathing and complete relaxation of the body.\n\n🌸 Beyond the Poses: Yoga as a Lifestyle\n\nYoga is not just about what happens on the mat—it’s a way of life. Regular practice improves your mental clarity, emotional balance, and physical strength. Pairing yoga with deep breathing, meditation, and mindful living creates long-lasting stress relief.\n\n🌱 Serenity Springs & Yoga Therapy\n\nAt Serenity Springs, our guided yoga sessions are designed for people of all levels. Whether you’re looking to reduce stress, improve flexibility, or simply find a moment of peace, our trained professionals are here to support you.\n\nWith the right guidance, yoga becomes more than an exercise—it becomes a healing practice that nurtures your mind, body, and spirit.\n\n✨ Takeaway:\nYoga is a powerful, natural, and accessible tool for stress relief. Even practicing for just 10–15 minutes a day can help you feel calmer, more centered, and ready to face life with renewed energy.",
  },
  {
    id: 2,
    title: "Healing Through Music: How Spiritual Sounds Calm the Mind",
    author: "Ananya Patel",
    date: "2025-09-14",
    readTime: "5 minutes",
    category: "Music",
    featured: false,
    excerpt:
      "Explore the transformative power of music therapy with spiritual sounds that reduce stress, balance emotions, and promote peace. Discover how Serenity Springs integrates music to support healing and relaxation.",
    content:
      "Have you ever noticed how a gentle melody can instantly change your mood, or how certain sounds make you feel lighter and calmer? That’s the power of music therapy. Music goes beyond entertainment—it is a form of healing that works directly on the mind, body, and spirit. At Serenity Springs, we embrace the power of spiritual music to guide you toward peace and emotional balance.\n\n🌿 Why Music Heals\n\nMusic affects the brain in unique ways:\n\n- Reduces stress hormones like cortisol.\n- Balances heart rate and blood pressure, creating calmness.\n- Boosts dopamine, the “feel-good” chemical that improves mood.\n- Helps with better sleep and relaxation after a stressful day.\n\nIt’s not just about listening—it’s about feeling the vibrations and rhythms that connect with your inner self.\n\n✨ The Power of Spiritual Sounds\n\nUnlike ordinary songs, spiritual music uses soothing tones, chants, and natural sounds that align with the body’s rhythm. This creates harmony and deep relaxation.\n\nSome popular forms include:\n\n- Mantras and Chants – Repetitive words or sounds that calm the mind.\n- Flute and String Instruments – Gentle tunes that soothe emotions.\n- Nature Sounds – Rain, waves, or birdsong that reconnect you with peace.\n\nSpiritual music is not just about listening; it’s about immersion—letting the sound carry your worries away.\n\n🎧 How to Try Music Therapy in Daily Life\n\nYou don’t need a special setup—just a little time for yourself:\n\n- Morning Calm – Start your day with 10 minutes of flute or meditation tracks.\n- Work Break Reset – Play soft instrumentals to refresh your mind.\n- Evening Relaxation – Replace screen time with calming chants before sleep.\n- During Yoga or Meditation – Use background music to deepen focus.\n\n🌸 Serenity Springs & Music Therapy\n\nAt Serenity Springs, we integrate live music therapy sessions and curated playlists created by professionals. Our goal is to help you explore how different sounds can:\n\n- Release stress,\n- Encourage self-expression, and\n- Support emotional healing.\n\nEach session is designed to make music not just something you hear, but something you experience deeply.\n\n✨ Takeaway:\nMusic is more than sound—it’s therapy. By adding spiritual music to your routine, you can transform stress into calm, chaos into peace, and tension into harmony.\n\nAt Serenity Springs, we invite you to discover the healing journey that begins with a single note. 🎶🌿",
  },
  {
    id: 3,
    title: "Creative Arts as Therapy: Expressing Emotions Without Words",
    author: "Rohan Mehra",
    date: "2025-09-14",
    readTime: "5 minutes",
    category: "Art",
    featured: false,
    excerpt:
      "Discover the healing power of creative arts therapy, where painting, music, dance, and crafts help express emotions beyond words. Learn simple activities to try at home and how Serenity Springs fosters self-discovery through art.",
    content:
      "Sometimes, emotions run so deep that words just aren’t enough. In such moments, creativity becomes a powerful outlet. Creative arts therapy uses activities like painting, drawing, music, dance, and crafts to help people express their inner feelings in ways that language cannot capture. At Serenity Springs, we believe in the healing magic of art as a form of self-discovery and stress relief.\n\n🌿 Why Creative Arts Heal\n\nArt has been used for centuries as a way to process emotions, and modern psychology has proven its therapeutic power. Creative expression can:\n\n- Release hidden emotions in a safe, non-judgmental space.\n- Reduce stress and anxiety through mindful focus.\n- Build confidence by turning thoughts into tangible creations.\n- Encourage self-awareness, helping individuals understand their feelings better.\n\nUnlike traditional therapy, art therapy does not require you to talk about your emotions—you simply let your hands, colors, and creativity do the work.\n\n🎨 Activities You Can Try at Home\n\nYou don’t have to be a professional artist to benefit from creative therapy. Here are some simple practices:\n\n- Color Journaling – Draw your emotions as shapes or colors instead of writing them down.\n- Clay or Craft Work – Molding clay or creating small crafts releases physical and mental tension.\n- Vision Boards – Collect images and words that represent your hopes, goals, or current feelings.\n- Music & Movement – Dance or move freely to music as a way of expressing bottled-up emotions.\n\nRemember: it’s not about making “good art.” It’s about making your art.\n\n🌸 Serenity Springs & Creative Arts Therapy\n\nAt Serenity Springs, our creative workshops provide safe spaces where participants can:\n\n- Paint emotions onto a canvas,\n- Create crafts that tell their stories, and\n- Join group art sessions to connect with others on the same journey.\n\nThese activities encourage relaxation, social bonding, and a deeper connection with the self.\n\n✨ Takeaway:\nCreative arts therapy shows us that healing doesn’t always require words. Sometimes, the most powerful form of expression is a brushstroke, a melody, or a simple craft.\n\nAt Serenity Springs, we empower you to express, heal, and grow—one creative step at a time. 🎨🌿",
  },
  {
    id: 4,
    title: "Why Group Therapy Helps You Feel Less Alone",
    author: "Vikram Desai",
    date: "2025-09-14",
    readTime: "5 minutes",
    category: "Group Therapy",
    featured: false,
    excerpt:
      "Discover how group therapy at Serenity Springs fosters connection, reduces isolation, and promotes healing through shared experiences, community support, and guided sessions in a safe, non-judgmental space.",
    content:
      "Healing can sometimes feel like a lonely journey. Many people struggle with stress, anxiety, or emotional challenges in silence, believing no one else could understand what they’re going through. But the truth is, you are not alone—and that’s exactly where group therapy makes a difference.\n\nAt Serenity Springs, we create safe and supportive group spaces where individuals can share, connect, and grow together.\n\n🌿 The Power of Shared Experiences\n\nGroup therapy works because it shows you that others face similar struggles. This sense of connection can:\n\n- Reduce feelings of isolation by reminding you that you’re not the only one.\n- Provide different perspectives on how to cope with challenges.\n- Build mutual support, where giving encouragement feels as healing as receiving it.\n\nHearing someone else’s story often sparks a moment of recognition: “I feel that too.”\n\n🌸 Benefits of Group Therapy\n\n- Community Support – You gain strength from being part of a group that truly understands.\n- Safe Expression – A non-judgmental space allows you to share thoughts freely.\n- Skill Building – Guided by a professional, sessions often include coping strategies and stress-management tools.\n- Increased Confidence – As you open up, your self-esteem and trust in others grow.\n\n🧑‍🤝‍🧑 What Happens in a Group Session?\n\nA group therapy session at Serenity Springs is led by a licensed therapist who:\n\n- Encourages members to share their stories.\n- Facilitates meaningful discussions.\n- Teaches relaxation and coping techniques.\n- Ensures a respectful, confidential environment.\n\nParticipants don’t just listen—they also engage, reflect, and encourage each other.\n\n🌱 Serenity Springs Approach\n\nWe design group therapy sessions around themes like stress management, emotional healing, and mindfulness. Each session is built to create:\n\n- A community of care where no one feels left behind.\n- Opportunities to build friendships and social bonds.\n- A reminder that healing doesn’t have to be a solo journey.\n\n✨ Takeaway:\nGroup therapy is a powerful reminder that we heal better together. It replaces isolation with belonging, fear with understanding, and silence with shared voices.\n\nAt Serenity Springs, our group therapy sessions create a safe circle of support—because sometimes, just knowing you’re not alone is the biggest step toward healing.",
  },
  {
    id: 5,
    title: "Holistic Healing: Blending Tradition with Modern Therapy",
    author: "Sanya Kapoor",
    date: "2025-09-14",
    readTime: "5 minutes",
    category: "Holistic Wellness",
    featured: false,
    excerpt:
      "Explore holistic healing at Serenity Springs, where ancient practices like yoga and meditation blend with modern therapy to nurture mind, body, and spirit for lasting balance and well-being.",
    content:
      "Wellness isn’t just about treating the body or calming the mind—it’s about caring for the whole person. This is the essence of holistic healing. By combining ancient wisdom with modern therapeutic practices, holistic healing offers a balanced path toward mental, emotional, and physical well-being. At Serenity Springs, we embrace this blend to create a truly transformative wellness experience.\n\n🌿 What Is Holistic Healing?\n\nHolistic healing looks beyond symptoms and focuses on the mind, body, and spirit as one system. Instead of asking, “What’s wrong with you?” it asks, “What happened to you, and how can we restore balance?”\n\nThis approach integrates traditional practices like yoga, meditation, and spiritual music with modern therapies such as counseling and guided group sessions.\n\n✨ Why Tradition Still Matters\n\nTraditional practices have stood the test of time:\n\n- Yoga improves both physical flexibility and emotional balance.\n- Meditation trains the mind to handle stress and anxiety.\n- Music and chants promote inner calm and spiritual connection.\n\nThese age-old practices provide natural tools to manage the stresses of modern life.\n\n💡 The Role of Modern Therapy\n\nWhile tradition offers grounding practices, modern therapy brings science, structure, and personalization. Professional therapists:\n\n- Provide strategies to cope with anxiety and depression.\n- Help individuals build resilience through talk therapy.\n- Create safe, structured environments for emotional healing.\n\nTogether, tradition and modern therapy create a complete healing framework.\n\n🌱 Serenity Springs Approach\n\nAt Serenity Springs, we weave both worlds together:\n\n- Yoga and meditation sessions to nurture the body and mind.\n- Spiritual music therapy for emotional healing.\n- Professional counseling and group therapy for guided support.\n\nThis combination ensures participants benefit from the wisdom of tradition and the effectiveness of modern science.\n\n✨ Takeaway:\nHolistic healing is about seeing wellness as a complete picture, not just one piece. By blending tradition with modern therapy, you can achieve balance, build resilience, and create lasting peace within yourself.\n\nAt Serenity Springs, we help you walk this path—one that honors the past while embracing the present. 🌸🌿",
  },
  {
    id: 6,
    title: "Investing in Yourself: Why Paying for Wellness is Worth It",
    author: "Nisha Gupta",
    date: "2025-09-14",
    readTime: "5 minutes",
    category: "Personal Growth",
    featured: true,
    excerpt:
      "Learn why investing in wellness is a lifelong commitment to your mental, emotional, and physical health. Discover how Serenity Springs’ personalized programs offer professional guidance and lasting benefits.",
    content:
      "In today’s world, people often spend money on gadgets, fashion, and entertainment—but when it comes to mental health and wellness, many hesitate. Yet, the truth is simple: your well-being is the best investment you can ever make. Paying for wellness is not an expense—it’s a commitment to your growth, peace, and happiness.\n\nAt Serenity Springs, we believe that prioritizing your wellness is the foundation for living a balanced, resilient, and fulfilling life.\n\n🌿 Why Wellness Is Worth Paying For\n\n- Access to Professionals – Paid wellness programs connect you with licensed therapists and skilled facilitators.\n- Personalized Guidance – Unlike generic free content, structured sessions are tailored to your unique needs.\n- Commitment to Growth – When you invest financially, you’re more motivated to stay consistent.\n- Premium Resources – Paid programs offer high-quality content, secure platforms, and continuous support.\n\n✨ The Real Value of Mental Wellness\n\nThink of the things we often spend money on—dining out, subscriptions, or shopping. These bring short-term happiness. But investing in wellness brings:\n\n- Better stress management,\n- Improved emotional health,\n- Stronger relationships, and\n- Greater productivity in everyday life.\n\nUnlike material purchases, the benefits of wellness stay with you for a lifetime.\n\n🌱 Serenity Springs Membership\n\nWith Serenity Springs, your membership goes beyond access to sessions—it’s an investment in yourself. You gain:\n\n- Live therapy sessions with trusted professionals.\n- Holistic experiences like yoga, music therapy, and creative workshops.\n- A private, secure platform where your healing journey is respected.\n\nEvery payment ensures that you receive personalized care and resources designed to help you thrive.\n\n🌸 A Change in Perspective\n\nInstead of asking, “Can I afford wellness?” ask, “Can I afford to ignore my wellness?” Stress, burnout, and unhealed emotions often cost far more—impacting health, relationships, and quality of life.\n\n✨ Takeaway:\nInvesting in your wellness is one of the wisest choices you can make. It’s not about spending money—it’s about choosing yourself, your peace, and your future.\n\nAt Serenity Springs, we’re here to ensure that every investment you make brings you closer to balance, resilience, and happiness. 💳🌿",
  },
];

const Blogs = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Posts");
  const categories = [...new Set(blogs.map((blog) => blog.category))];

  const filteredBlogs =
    selectedCategory === "All Posts"
      ? blogs
      : blogs.filter((blog) => blog.category === selectedCategory);

  const featured = filteredBlogs
    .filter((b) => b.featured)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())[0];

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Blogs
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Insights, tips, and resources to support your mental health journey
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          <Badge
            variant={selectedCategory === "All Posts" ? "default" : "secondary"}
            className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
            onClick={() => setSelectedCategory("All Posts")}
          >
            All Posts
          </Badge>
          {categories.map((category) => (
            <Badge
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Badge>
          ))}
        </div>

        {/* Featured Post */}
        {featured && (
          <Link to={`/blogs/${featured.id}`}>
            <Card className="mb-12 overflow-hidden border-primary/20 bg-gradient-soft group hover:shadow-large transition-all duration-300 cursor-pointer">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-2">
                  <Badge className="bg-primary/10 text-primary">Featured</Badge>
                  <Badge variant="outline">{featured.category}</Badge>
                </div>
                <CardTitle className="text-2xl md:text-3xl font-heading">
                  {featured.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  {featured.excerpt}
                </CardDescription>
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-1" />
                    {featured.author}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {new Date(featured.date).toLocaleDateString()}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {featured.readTime}
                  </div>
                </div>
                <Button className="group">
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          </Link>
        )}

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBlogs.map((blog) => (
            <Link to={`/blogs/${blog.id}`} key={blog.id}>
              <Card className="group hover:shadow-large transition-all duration-300 cursor-pointer border-border/50 h-full flex flex-col">
                <CardHeader className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="text-xs">
                      {blog.category}
                    </Badge>
                    {blog.featured && (
                      <Badge className="bg-primary/10 text-primary text-xs">
                        Featured
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-lg font-heading line-clamp-2">
                    {blog.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-3 mt-2">
                    {blog.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground mb-4">
                    <div className="flex items-center">
                      <User className="h-3 w-3 mr-1" />
                      {blog.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      {new Date(blog.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      {blog.readTime}
                    </div>
                  </div>
                  <Button variant="secondary" className="w-full group">
                    Read Article
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Newsletter CTA */}
        {/* <Card className="mt-12 border-primary/20 bg-gradient-soft">
          <CardContent className="py-8 text-center">
            <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
              Stay Informed
            </h2>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              Subscribe to our newsletter for weekly mental health tips and
              resources delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button>Subscribe</Button>
            </div>
          </CardContent>
        </Card> */}
      </div>
    </div>
  );
};

export default Blogs;
