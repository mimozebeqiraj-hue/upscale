import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Calendar, Clock, User, ArrowLeft, ChevronRight } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';

export default function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return (
      <div className="min-h-screen bg-slate-50 pt-32 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-display text-4xl font-bold text-slate-900 mb-4">Article Not Found</h1>
          <Link to="/blog" className="text-amber-600 hover:text-amber-700 font-semibold">
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  const relatedPosts = blogPosts.filter(p => p.id !== post.id && p.category === post.category).slice(0, 3);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="pt-32 pb-12 px-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="max-w-4xl mx-auto">
          <Link 
            to="/blog" 
            className="inline-flex items-center text-amber-400 hover:text-amber-300 mb-6 transition-colors"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Blog
          </Link>
          
          <div className="inline-block px-4 py-2 bg-amber-600/20 border border-amber-600/30 rounded-sm mb-6">
            <span className="text-amber-400 text-sm font-medium tracking-wide">{post.category.toUpperCase()}</span>
          </div>
          
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-6 leading-tight">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap gap-4 text-slate-300">
            <div className="flex items-center">
              <User size={18} className="mr-2 text-amber-400" />
              {post.author}
            </div>
            <div className="flex items-center">
              <Calendar size={18} className="mr-2 text-amber-400" />
              {new Date(post.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
            </div>
            <div className="flex items-center">
              <Clock size={18} className="mr-2 text-amber-400" />
              {post.readTime}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="px-6 -mt-6">
        <div className="max-w-4xl mx-auto">
          <img 
            src={post.image} 
            alt={post.title}
            className="w-full h-96 object-cover rounded-sm shadow-2xl"
          />
        </div>
      </section>

      {/* Article Content */}
      <article className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-sm p-8 md:p-12 shadow-lg">
            <div 
              className="prose prose-lg max-w-none prose-headings:font-display prose-headings:text-slate-900 prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-4 prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-3 prose-p:text-slate-600 prose-p:leading-relaxed prose-p:mb-6 prose-ul:my-6 prose-li:text-slate-600 prose-strong:text-slate-900 prose-a:text-amber-600 prose-a:no-underline hover:prose-a:text-amber-700"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>

          {/* CTA */}
          <div className="mt-12 bg-gradient-to-br from-slate-900 to-slate-800 rounded-sm p-8 md:p-12 text-white text-center">
            <h2 className="font-display text-3xl font-bold mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-slate-300 mb-6 max-w-2xl mx-auto">
              Get expert advice and a free, no-obligation quote for your home improvement project.
            </p>
            <Link 
              to="/#contact" 
              className="inline-flex items-center justify-center bg-amber-600 text-white px-8 py-4 rounded-sm hover:bg-amber-700 transition-all font-semibold text-lg group"
            >
              Book Free Consultation
              <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-20 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
              Related Articles
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  to={`/blog/${relatedPost.slug}`}
                  className="bg-white rounded-sm shadow-lg overflow-hidden hover-lift group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={relatedPost.image} 
                      alt={relatedPost.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-amber-600 text-white px-3 py-1 rounded-sm text-sm font-semibold">
                        {relatedPost.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-xl font-bold text-slate-900 mb-2 group-hover:text-amber-600 transition-colors line-clamp-2">
                      {relatedPost.title}
                    </h3>
                    <div className="flex items-center text-xs text-slate-600 mt-3">
                      <Clock size={14} className="mr-1 text-amber-600" />
                      {relatedPost.readTime}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <div className="text-center mt-12">
              <Link 
                to="/blog" 
                className="inline-flex items-center text-amber-600 hover:text-amber-700 font-semibold text-lg"
              >
                View All Articles
                <ChevronRight size={20} className="ml-1" />
              </Link>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
