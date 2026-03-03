"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from "@/components/navbar/NavbarLayoutFloatingInline";
import HeroSplitKpi from "@/components/sections/hero/HeroSplitKpi";
import TextAbout from "@/components/sections/about/TextAbout";
import FeatureCardNineteen from "@/components/sections/feature/FeatureCardNineteen";
import MetricCardOne from "@/components/sections/metrics/MetricCardOne";
import TestimonialCardFive from "@/components/sections/testimonial/TestimonialCardFive";
import FeatureCardTen from "@/components/sections/feature/FeatureCardTen";
import ContactText from "@/components/sections/contact/ContactText";
import FooterCard from "@/components/sections/footer/FooterCard";
import {
  Award,
  BarChart3,
  Briefcase,
  Code,
  FileText,
  Globe,
  Github,
  Heart,
  Instagram,
  Linkedin,
  Palette,
  Pencil,
  Search,
  Share2,
  Sparkles,
  Target,
  TrendingUp,
  Twitter,
  Users,
  Zap,
} from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="entrance-slide"
      borderRadius="pill"
      contentWidth="medium"
      sizing="medium"
      background="aurora"
      cardStyle="layered-gradient"
      primaryButtonStyle="gradient"
      secondaryButtonStyle="glass"
      headingFontWeight="medium"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          brandName="Webild"
          navItems={[
            { name: "Work", id: "work" },
            { name: "About", id: "about" },
            { name: "Services", id: "services" },
            { name: "Contact", id: "contact" },
          ]}
          button={{ text: "Get Started", href: "#contact" }}
          animateOnLoad={true}
          navItemClassName="text-sm font-medium"
          buttonClassName="px-6 py-2"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplitKpi
          title="Creative Excellence Delivered"
          description="We craft digital experiences that inspire, engage, and convert. From strategy to execution, we bring your vision to life with precision and creativity."
          tag="Award-Winning Agency"
          tagIcon={Sparkles}
          tagAnimation="slide-up"
          background={{ variant: "aurora" }}
          kpis={[
            { value: "500+", label: "Projects Completed" },
            { value: "98%", label: "Client Satisfaction" },
            { value: "12y", label: "Industry Experience" },
          ]}
          enableKpiAnimation={true}
          buttons={[
            { text: "View Our Work", href: "#work" },
            { text: "Start a Project", href: "#contact" },
          ]}
          buttonAnimation="slide-up"
          imageSrc="http://img.b2bpic.net/free-photo/group-business-executives-interacting-with-each-other_1170-760.jpg"
          imageAlt="Creative workspace and design process"
          mediaAnimation="slide-up"
          imagePosition="right"
        />
      </div>

      <div id="about" data-section="about">
        <TextAbout
          tag="Who We Are"
          tagIcon={Award}
          tagAnimation="slide-up"
          title="We are a team of creative strategists, designers, and developers obsessed with solving complex problems through innovative digital solutions."
          useInvertedBackground={false}
          buttons={[{ text: "Learn Our Story", href: "#" }]}
          buttonAnimation="slide-up"
        />
      </div>

      <div id="work" data-section="work">
        <FeatureCardNineteen
          features={[
            {
              id: 1,
              tag: "Discovery",              title: "Strategy & Insights",              subtitle: "Understanding Your Vision",              description: "We dive deep into your business, market, and audience to uncover opportunities and define a winning strategy that guides every creative decision.",              imageSrc: "http://img.b2bpic.net/free-photo/coworkers-team-working-brainstorming-concept_329181-12040.jpg",              imageAlt: "Strategy and discovery phase"},
            {
              id: 2,
              tag: "Creation",              title: "Design & Concept",              subtitle: "Bringing Ideas to Life",              description: "Our designers craft stunning visual concepts that not only look beautiful but also align with your brand values and user expectations.",              imageSrc: "http://img.b2bpic.net/free-photo/representations-user-experience-interface-design_23-2150038907.jpg",              imageAlt: "Design and creative concept development"},
            {
              id: 3,
              tag: "Development",              title: "Build & Optimize",              subtitle: "Technical Excellence",              description: "Our developers transform designs into high-performance digital products using cutting-edge technologies and best practices.",              imageSrc: "http://img.b2bpic.net/free-photo/programming-software-code-application-technology-concept_53876-123931.jpg",              imageAlt: "Development and technical implementation"},
            {
              id: 4,
              tag: "Launch",              title: "Deploy & Measure",              subtitle: "Success & Growth",              description: "We launch your project with precision and continuously monitor performance to ensure it achieves your business objectives.",              imageSrc: "http://img.b2bpic.net/free-photo/businessman-celebrating-his-success-after-presenting-project-proposal-his-multiethnic-partners_181624-33367.jpg",              imageAlt: "Project launch and success measurement"},
          ]}
          title="Our Creative Process"
          description="We follow a proven methodology that combines strategic thinking with creative execution to deliver measurable results."
          tag="Methodology"
          tagIcon={Zap}
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={true}
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardOne
          metrics={[
            {
              id: "1",              value: "150",              title: "Global Clients",              description: "Trusted by leading brands worldwide",              icon: Globe,
            },
            {
              id: "2",              value: "2.5",              title: "Million Users",              description: "Active users across our projects",              icon: Users,
            },
            {
              id: "3",              value: "45",              title: "Awards Won",              description: "Recognition for creative excellence",              icon: Award,
            },
            {
              id: "4",              value: "300%",              title: "Avg ROI Increase",              description: "For our clients' digital investments",              icon: BarChart3,
            },
          ]}
          title="Our Impact by Numbers"
          description="Track record of success across diverse industries and market segments."
          tag="Results"
          tagIcon={TrendingUp}
          tagAnimation="slide-up"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardFive
          testimonials={[
            {
              id: "1",              name: "Sarah Mitchell, CEO of TechFlow",              date: "Date: 15 November 2024",              title: "Transformed Our Digital Presence",              quote: "Webild took our vision and exceeded every expectation. Their strategic approach combined with flawless execution resulted in a 250% increase in user engagement within the first quarter.",              tag: "SaaS Platform",              avatarSrc: "http://img.b2bpic.net/free-photo/close-up-portrait-young-handsome-successful-man_1163-5475.jpg",              avatarAlt: "Sarah Mitchell",              imageSrc: "http://img.b2bpic.net/free-photo/close-up-portrait-young-handsome-successful-man_1163-5475.jpg?_wi=1"},
            {
              id: "2",              name: "James Rodriguez, Founder of BrandCo",              date: "Date: 20 October 2024",              title: "Best Investment We Made",              quote: "The team's creative thinking and technical expertise helped us stand out in a crowded market. They didn't just build a website; they built a brand experience.",              tag: "E-commerce",              avatarSrc: "http://img.b2bpic.net/free-photo/confident-beautiful-young-businesswoman-looking-camera-head-shot-portrait_1163-4928.jpg",              avatarAlt: "James Rodriguez",              imageSrc: "http://img.b2bpic.net/free-photo/confident-beautiful-young-businesswoman-looking-camera-head-shot-portrait_1163-4928.jpg"},
            {
              id: "3",              name: "Emma Johnson, Marketing Director",              date: "Date: 05 September 2024",              title: "Exceptional Creative Partnership",              quote: "Working with Webild was like having a dedicated creative extension of our team. Their insights and deliverables consistently exceeded our expectations.",              tag: "Brand Strategy",              avatarSrc: "http://img.b2bpic.net/free-photo/close-up-portrait-young-handsome-successful-man_1163-5475.jpg",              avatarAlt: "Emma Johnson",              imageSrc: "http://img.b2bpic.net/free-photo/close-up-portrait-young-handsome-successful-man_1163-5475.jpg?_wi=2"},
            {
              id: "4",              name: "Michael Chen, CTO of InnovateLabs",              date: "Date: 12 August 2024",              title: "Technical Excellence",              quote: "The quality of code and attention to performance was outstanding. They delivered a scalable solution that's grown with our business seamlessly.",              tag: "Tech Startup",              avatarSrc: "http://img.b2bpic.net/free-photo/close-up-portrait-young-handsome-successful-man_1163-5475.jpg",              avatarAlt: "Michael Chen",              imageSrc: "http://img.b2bpic.net/free-photo/close-up-portrait-young-handsome-successful-man_1163-5475.jpg?_wi=3"},
            {
              id: "5",              name: "Lisa Anderson, VP of Design at CreativeHub",              date: "Date: 28 July 2024",              title: "Creative Brilliance",              quote: "Their designers have an incredible eye for detail and understanding of user experience. Every pixel serves a purpose.",              tag: "Design Studio",              avatarSrc: "http://img.b2bpic.net/free-photo/smiling-young-businessman-suit-looking-camera-meeting_1163-4654.jpg",              avatarAlt: "Lisa Anderson",              imageSrc: "http://img.b2bpic.net/free-photo/smiling-young-businessman-suit-looking-camera-meeting_1163-4654.jpg?_wi=1"},
            {
              id: "6",              name: "David Park, CEO of GrowthVentures",              date: "Date: 10 June 2024",              title: "Strategic Thinking + Execution",              quote: "Webild combines strategic planning with flawless execution. They've been instrumental in our growth trajectory.",              tag: "Venture Capital",              avatarSrc: "http://img.b2bpic.net/free-photo/smiling-young-businessman-suit-looking-camera-meeting_1163-4654.jpg",              avatarAlt: "David Park",              imageSrc: "http://img.b2bpic.net/free-photo/smiling-young-businessman-suit-looking-camera-meeting_1163-4654.jpg?_wi=2"},
          ]}
          title="What Our Clients Say"
          description="Real feedback from brands we've had the pleasure of partnering with."
          tag="Client Love"
          tagIcon={Heart}
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={true}
        />
      </div>

      <div id="services" data-section="services">
        <FeatureCardTen
          features={[
            {
              id: "1",              title: "Web Design & Development",              description: "Beautiful, responsive websites that convert visitors into customers. We combine stunning design with robust backend development.",              media: {
                imageSrc: "http://img.b2bpic.net/free-vector/task-manager-kit_1284-44716.jpg?_wi=1",                imageAlt: "Web design interface"},
              items: [
                { icon: Palette, text: "Custom UI/UX Design" },
                { icon: Code, text: "Full-Stack Development" },
                { icon: Zap, text: "Performance Optimization" },
              ],
              reverse: false,
            },
            {
              id: "2",              title: "Brand Strategy & Identity",              description: "Crafting cohesive brand identities that resonate with your audience. From logo design to brand guidelines, we build lasting impressions.",              media: {
                imageSrc: "http://img.b2bpic.net/free-vector/collection-creative-business-stationery_23-2147570461.jpg",                imageAlt: "Brand identity and stationery"},
              items: [
                { icon: Pencil, text: "Logo & Visual Identity" },
                { icon: FileText, text: "Brand Guidelines" },
                { icon: Target, text: "Market Positioning" },
              ],
              reverse: true,
            },
            {
              id: "3",              title: "Digital Marketing",              description: "Data-driven strategies to amplify your reach and engagement. From SEO to social campaigns, we deliver measurable results.",              media: {
                imageSrc: "http://img.b2bpic.net/free-vector/task-manager-kit_1284-44716.jpg?_wi=2",                imageAlt: "Digital marketing analytics"},
              items: [
                { icon: Search, text: "SEO Optimization" },
                { icon: Share2, text: "Social Media Strategy" },
                { icon: BarChart3, text: "Analytics & Reporting" },
              ],
              reverse: false,
            },
          ]}
          title="Services We Offer"
          description="Comprehensive creative solutions tailored to elevate your brand and drive measurable business results."
          tag="Capabilities"
          tagIcon={Briefcase}
          tagAnimation="slide-up"
          textboxLayout="default"
          animationType="slide-up"
          useInvertedBackground={false}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactText
          text="Ready to bring your digital vision to life? Let's create something extraordinary together."
          animationType="entrance-slide"
          background={{ variant: "glowing-orb" }}
          useInvertedBackground={false}
          buttons={[
            { text: "Start Your Project", href: "https://calendly.com" },
            { text: "Schedule a Consultation", href: "mailto:hello@webild.io" },
          ]}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterCard
          logoText="Webild"
          copyrightText="© 2025 Webild Creative Agency. All rights reserved."
          socialLinks={[
            { icon: Twitter, href: "https://twitter.com/webild", ariaLabel: "Follow us on Twitter" },
            { icon: Linkedin, href: "https://linkedin.com/company/webild", ariaLabel: "Connect on LinkedIn" },
            { icon: Instagram, href: "https://instagram.com/webild", ariaLabel: "Follow us on Instagram" },
            { icon: Github, href: "https://github.com/webild", ariaLabel: "View our GitHub" },
          ]}
        />
      </div>
    </ThemeProvider>
  );
}
