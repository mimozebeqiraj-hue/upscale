import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, User, ChevronRight } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['all', ...new Set(blogPosts.map(post => post.category))];

  const filteredPosts = selectedCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const featuredPost = blogPosts[0];
  const otherPosts = filteredPosts.slice(1);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-block px-4 py-2 bg-amber-600/20 border border-amber-600/30 rounded-sm mb-6">
            <span className="text-amber-400 text-sm font-medium tracking-wide">OUR BLOG</span>
          </div>
          
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Expert Insights & Advice
          </h1>
          
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Discover tips, guides, and inspiration for your home improvement project. 
            Learn from our 15+ years of experience in transforming UK homes.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      {selectedCategory === 'all' && (
        <section className="py-12 px-6 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-display text-2xl font-bold text-slate-900 mb-8">Featured Article</h2>
            <Link 
              to={`/blog/${featuredPost.slug}`}
              className="grid md:grid-cols-2 gap-8 items-center group"
            >
              <div className="relative h-96 rounded-sm overflow-hidden">
                <img 
                  src={featuredPost.image} 
                  alt={featuredPost.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-amber-600 text-white px-3 py-1 rounded-sm text-sm font-semibold">
                    {featuredPost.category}
                  </span>
                </div>
              </div>
              
              <div>
                <h3 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-4 group-hover:text-amber-600 transition-colors">
                  {featuredPost.title}
                </h3>
                
                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                
                <div className="flex flex-wrap gap-4 text-sm text-slate-600 mb-6">
                  <div className="flex items-center">
                    <User size={16} className="mr-2 text-amber-600" />
                    {featuredPost.author}
                  </div>
                  <div className="flex items-center">
                    <Calendar size={16} className="mr-2 text-amber-600" />
                    {new Date(featuredPost.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
                  </div>
                  <div className="flex items-center">
                    <Clock size={16} className="mr-2 text-amber-600" />
                    {featuredPost.readTime}
                  </div>
                </div>
                
                <div className="flex items-center text-amber-600 font-semibold text-lg group-hover:translate-x-2 transition-transform">
                  Read Full Article
                  <ChevronRight size={20} className="ml-1" />
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Category Filter */}
      <section className="py-8 px-6 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-sm font-semibold transition-all text-sm ${
                  selectedCategory === category
                    ? 'bg-amber-600 text-white'
                    : 'bg-white text-slate-700 hover:bg-slate-100 shadow-sm'
                }`}
              >
                {category === 'all' ? 'All Articles' : category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(selectedCategory === 'all' ? otherPosts : filteredPosts).map((post) => (
              <Link
                key={post.id}
                to={`/blog/${post.slug}`}
                className="bg-white rounded-sm shadow-lg overflow-hidden hover-lift group"
              >
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-amber-600 text-white px-3 py-1 rounded-sm text-sm font-semibold">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="font-display text-2xl font-bold text-slate-900 mb-3 group-hover:text-amber-600 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-slate-600 mb-4 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-3 text-xs text-slate-600 mb-4">
                    <div className="flex items-center">
                      <User size={14} className="mr-1 text-amber-600" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar size={14} className="mr-1 text-amber-600" />
                      {new Date(post.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
                    </div>
                    <div className="flex items-center">
                      <Clock size={14} className="mr-1 text-amber-600" />
                      {post.readTime}
                    </div>
                  </div>
                  
                  <div className="flex items-center text-amber-600 font-semibold group-hover:translate-x-2 transition-transform">
                    Read More
                    <ChevronRight size={18} className="ml-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 px-6 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-4xl font-bold mb-6">
            Get Expert Home Improvement Tips
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Subscribe to our newsletter for the latest advice, project inspiration, and exclusive offers.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-6 py-3 rounded-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-600"
            />
            <button
              type="submit"
              className="bg-amber-600 text-white px-8 py-3 rounded-sm hover:bg-amber-700 transition-colors font-semibold whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
