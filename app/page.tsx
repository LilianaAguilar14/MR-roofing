"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Shield,
  Award,
  Users,
  Phone,
  Mail,
  MapPin,
  CheckCircle,
  Home,
  Wrench,
  PhoneIcon,
  User,
} from "lucide-react";
import Image from "next/image";
import { MRRoofingLogo } from "@/components/logo";

export default function MRRoofingWebsite() {
  const [activeSection, setActiveSection] = useState("home");

  const navigation = [
    { id: "home", label: "Home", icon: Home },
    { id: "about", label: "About", icon: User },
    { id: "systems", label: "Systems", icon: Wrench },
    { id: "contact", label: "Contact", icon: PhoneIcon },
  ];

  const services = [
    {
      title: "Slate & Tile Roofing",
      image: "/home3.jpg",
    },
    {
      title: "Cedar Wood Roofing & Siding",
      image: "/home4.jpg",
    },
    {
      title: "Copper Gutter Systems",
      image: "/home5.jpg",
    },
    {
      title: "Standing seam copper metal roof",
      image: "/home6.jpg",
    },
    {
      title: "Slate Roof",
      image: "/home7.jpeg",
    },
  ];

  const roofingSystems = [
    {
      name: "Slate & Tile Roofing",
      description:
        "A combination of premium natural slate and tile roofing, offering timeless elegance, durability, and exceptional protection against the elements.",
      features: [
        "100+ year lifespan",
        "Classic European aesthetic",
        "Extremely low water absorption",
        "Fire and mold resistant",
      ],
      image: "/home3.jpg",
    },
    {
      name: "Cedar Wood",
      description:
        "Cedar wood roofing and siding bring a warm, natural look to your home, with outstanding insulation and resistance to insects and decay.",
      features: [
        "Natural thermal insulation",
        "Repels insects and rot",
        "Eco-friendly and renewable",
        "Ages into a beautiful silvery-gray finish",
      ],
      image: "/home4.jpg",
    },
    {
      name: "Copper Gutter Systems",
      description:
        "Custom copper gutters provide reliable drainage, boost curb appeal, and age gracefully with a protective patina that lasts decades.",
      features: [
        "Corrosion resistant",
        "Low maintenance",
        "Adds property value",
        "Develops protective green patina",
      ],
      image: "/home5.jpg",
    },
    {
      name: "Standing Seam Copper Metal Roof",
      description:
        "A modern roofing solution made of interlocking copper panels, offering sleek aesthetics, energy efficiency, and long-term performance.",
      features: [
        "Hidden fasteners for clean look",
        "Excellent thermal reflectivity",
        "Minimal maintenance",
        "Wind and weather resistant",
      ],
      image: "/home6.jpg",
    },
    {
      name: "Slate Roof",
      description:
        "Slate roofs are known for their rich texture, fire resistance, and unmatched longevity—perfect for homeowners seeking elegance and reliability.",
      features: [
        "Durability over 100 years",
        "Natural stone composition",
        "High resistance to fire and frost",
        "Distinctive upscale appearance",
      ],
      image: "/home7.jpeg",
    },
  ];

  const renderHome = () => (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="relative h-[70vh] bg-gradient-to-br rounded-3xl mx-6 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/home2.jpg"
            alt="Premium roofing work by M&R Roofing"
            fill
            priority
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-r"></div>
        </div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white max-w-2xl px-6">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Discover Your Perfect
              <span className="block text-blue-400">Roof</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Service Icons Row */}
      <section className="container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <Badge className="bg-blue-100 text-blue-700 mb-4">
            WE SPECIALIZE IN
          </Badge>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Home className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">
              Slate & Tile Roofing
            </h3>
            <p className="text-sm text-gray-600">Premium natural materials</p>
          </div>
          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Wrench className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">
              Cedar Wood Roofing & Siding
            </h3>
            <p className="text-sm text-gray-600">Natural beauty & durability</p>
          </div>
          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Shield className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">
              Copper Gutter Systems
            </h3>
            <p className="text-sm text-gray-600">Superior water management</p>
          </div>
          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Award className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">& More</h3>
            <p className="text-sm text-gray-600">Complete roofing solutions</p>
          </div>
        </div>
      </section>

      {/* Middle Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-50 to-slate-50 rounded-3xl p-8 h-80">
              <Image
                src="/home.jpg"
                alt="Professional roofing craftsmanship"
                width={400}
                height={320}
                className="rounded-2xl object-cover w-full h-full"
              />
            </div>
          </div>
          <div className="space-y-6">
            <Badge className="bg-blue-100 text-blue-700">
              LICENSED & INSURED
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900 leading-tight">
              Expert craftsmanship with premium materials for Long Island homes
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Based in Greenlawn, NY, M&R Roofing Inc specializes in high-end
              roofing solutions including slate, tile, cedar wood roofing &
              siding, and copper gutter systems. Our expert craftsmanship and
              attention to detail ensure your home is protected with the finest
              materials available.
            </p>
            <div className="flex items-center gap-4"></div>
          </div>
        </div>
      </section>

      {/* Service Area Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl mx-6 py-16">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <Badge className="bg-white/20 text-white mb-6 px-4 py-2">
              SERVICE AREA
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Serving Long Island, NY
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Located in Greenlawn, we proudly serve Nassau and Suffolk Counties
              with premium roofing services. Our local expertise and commitment
              to quality have made us the trusted choice for discerning
              homeowners throughout Long Island.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="bg-white/20 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Nassau County
                </h3>
                <p className="text-blue-100">
                  Complete coverage across Nassau County
                </p>
              </div>
              <div className="text-center">
                <div className="bg-white/20 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Suffolk County
                </h3>
                <p className="text-blue-100">
                  Serving all Suffolk County communities
                </p>
              </div>
              <div className="text-center">
                <div className="bg-white/20 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Local Expertise
                </h3>
                <p className="text-blue-100">
                  Fast response throughout Long Island
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <Badge className="bg-blue-100 text-blue-700 mb-4">
            Our Specialties
          </Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Premium Roofing Services
          </h2>
        </div>
        <div className="grid md:grid-cols-5 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-0 bg-white rounded-3xl overflow-hidden"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={200}
                  height={200}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                  {service.title}
                </h3>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Testimonials */}
    </div>
  );

  const renderAbout = () => (
    <div className="space-y-16">
      <section className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <Badge className="bg-blue-100 text-blue-700 mb-6">
              About M&R Roofing Inc
            </Badge>
            <h1 className="text-5xl font-bold text-gray-900 mb-8 leading-tight">
              Premium roofing specialists serving Long Island
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Based in Greenlawn, NY, M&R Roofing Inc is your trusted partner
              for premium roofing solutions. We specialize in high-end materials
              including slate, tile, cedar wood, and copper systems, delivering
              exceptional craftsmanship for discerning Long Island homeowners.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <CheckCircle className="h-6 w-6 text-blue-600" />
                <span className="text-gray-700">
                  Licensed and fully insured
                </span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-6 w-6 text-blue-600" />
                <span className="text-gray-700">
                  Specializing in premium materials
                </span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-6 w-6 text-blue-600" />
                <span className="text-gray-700">
                  Expert craftsmanship guaranteed
                </span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-6 w-6 text-blue-600" />
                <span className="text-gray-700">
                  Local Long Island expertise
                </span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-3xl p-8">
              <Image
                src="/about.jpg"
                alt="M&R Roofing team at work"
                width={600}
                height={500}
                className="rounded-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl mx-6 py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Why Choose M&R Roofing?
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 bg-white rounded-3xl p-8 text-center">
              <Shield className="h-16 w-16 text-blue-600 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Premium Materials
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We work exclusively with the finest materials including natural
                slate, cedar wood, and copper systems.
              </p>
            </Card>
            <Card className="border-0 bg-white rounded-3xl p-8 text-center">
              <Award className="h-16 w-16 text-blue-600 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Expert Craftsmanship
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Our skilled craftsmen deliver exceptional results with
                meticulous attention to detail.
              </p>
            </Card>
            <Card className="border-0 bg-white rounded-3xl p-8 text-center">
              <Users className="h-16 w-16 text-blue-600 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Local Expertise
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Deep understanding of Long Island's climate and architectural
                styles ensures perfect results.
              </p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );

  const renderSystems = () => (
    <div className="space-y-16">
      <section className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge className="bg-blue-100 text-blue-700 mb-4">
            Premium Systems
          </Badge>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Our Specialty Roofing Solutions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We specialize in premium roofing materials that offer superior
            durability, beauty, and performance for Long Island's unique climate
            conditions.
          </p>
        </div>

        <div className="space-y-16">
          {roofingSystems.map((system, index) => (
            <div
              key={index}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
              }`}
            >
              <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  {system.name}
                </h2>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  {system.description}
                </p>
                <div className="space-y-4 mb-8">
                  {system.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <CheckCircle className="h-6 w-6 text-blue-600 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className={index % 2 === 1 ? "lg:col-start-1" : ""}>
                <div className="bg-gradient-to-br from-blue-50 to-slate-50 rounded-3xl p-8">
                  <Image
                    src={system.image || "/placeholder.svg"}
                    alt={system.name}
                    width={350}
                    height={250}
                    className="rounded-2xl object-cover w-full"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl mx-6 py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Need Help Choosing?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Our experts will help you select the perfect premium roofing system
            for your Long Island home.
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-full"
            onClick={() => setActiveSection("contact")}
          >
            Schedule Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  );

  const renderContact = () => (
    <div className="space-y-16">
      <section className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge className="bg-blue-100 text-blue-700 mb-4">Contact Us</Badge>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Get Your Free Estimate Today
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to enhance your Long Island home with premium roofing? Contact
            us for a free consultation and estimate.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <Card className="border-0 bg-gradient-to-br from-blue-50 to-white rounded-3xl p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-blue-600 p-3 rounded-2xl">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Phone</h3>
                  <p className="text-gray-600">
                    Call us for immediate assistance
                  </p>
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-2xl font-bold text-blue-600">
                  Office: (516) 624-0503
                </p>
                <p className="text-xl font-semibold text-blue-600">
                  Cell: (917) 414-6613
                </p>
              </div>
            </Card>

            <Card className="border-0 bg-gradient-to-br from-blue-50 to-white rounded-3xl p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-blue-600 p-3 rounded-2xl">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Email</h3>
                  <p className="text-gray-600">Send us your project details</p>
                </div>
              </div>
              <p className="text-xl font-semibold text-blue-600">
                matias.783nz@gmail.com
              </p>
            </Card>

            <Card className="border-0 bg-gradient-to-br from-blue-50 to-white rounded-3xl p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-blue-600 p-3 rounded-2xl">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Location</h3>
                  <p className="text-gray-600">
                    Serving Long Island from Greenlawn
                  </p>
                </div>
              </div>
              <p className="text-gray-700">
                166 Broadway
                <br />
                Greenlawn, NY 11740
              </p>
            </Card>
          </div>

          <Card className="border-0 bg-white rounded-3xl p-8 shadow-xl">
            <h3 className="text-3xl font-bold text-gray-900 mb-8">
              Request Free Estimate
            </h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Doe"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="(555) 123-4567"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Service Needed
                </label>
                <select className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option>Select a service</option>
                  <option>Slate Roofing</option>
                  <option>Tile Roofing</option>
                  <option>Cedar Wood Roofing & Siding</option>
                  <option>Copper Gutter Systems</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Project Details
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Tell us about your roofing project..."
                ></textarea>
              </div>
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl text-lg font-semibold">
                Send Message
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </form>
          </Card>
        </div>
      </section>

      <section className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl mx-6 py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Licensed & Insured
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            M&R Roofing Inc is fully licensed and insured for your peace of
            mind. We provide professional roofing services with complete
            protection for your property.
          </p>
          <div className="flex justify-center gap-4">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg"
            >
              Call Office: (516) 624-0503
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-full text-lg bg-transparent"
            >
              Call Cell: (917) 414-6613
            </Button>
          </div>
        </div>
      </section>
    </div>
  );

  const renderContent = () => {
    switch (activeSection) {
      case "home":
        return renderHome();
      case "about":
        return renderAbout();
      case "systems":
        return renderSystems();
      case "contact":
        return renderContact();
      default:
        return renderHome();
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            <Image
              src="/logo.jpg" // o la ruta real de tu logo
              alt="M&R Roofing Logo"
              width={150}
              height={50}
              className="object-contain"
            />

            <div className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveSection(item.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-200 ${
                      activeSection === item.id
                        ? "bg-blue-600 text-white"
                        : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    <span className="font-medium">{item.label}</span>
                  </button>
                );
              })}
            </div>

            <Button
              className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6"
              onClick={() => setActiveSection("contact")}
            >
              Get Estimate
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div className="md:hidden bg-white border-b border-gray-100 px-6 py-4">
        <div className="flex space-x-2 overflow-x-auto">
          {navigation.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full whitespace-nowrap transition-all duration-200 ${
                  activeSection === item.id
                    ? "bg-blue-600 text-white"
                    : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
                }`}
              >
                <Icon className="h-4 w-4" />
                <span className="font-medium">{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Content */}
      <main className="py-8">{renderContent()}</main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 mt-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div></div>
            <div>
              <h4 className="text-lg font-semibold mb-6">Specialties</h4>
              <ul className="space-y-3 text-gray-400">
                <li>Slate & Tile Roofing</li>
                <li>Cedar Wood Roofing & Siding</li>
                <li>Copper Gutter Systems</li>
                <li>Premium Materials</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  Office: (516) 624-0503
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  Cell: (917) 414-6613
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  matias.783nz@gmail.com
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  166 Broadway, Greenlawn, NY 11740
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-6">Service Area</h4>
              <ul className="space-y-3 text-gray-400">
                <li>Nassau County</li>
                <li>Suffolk County</li>
                <li>Long Island, NY</li>
                <li className="text-blue-400 font-semibold">
                  Licensed & Insured
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>
              &copy; 2024 M&R Roofing Inc. All rights reserved. Licensed &
              Insured.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
