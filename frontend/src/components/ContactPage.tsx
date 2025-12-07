import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { useState } from 'react';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-neutral-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl mb-6">Contact Us</h1>
          <p className="text-xl text-neutral-300 max-w-3xl">
            Have a question? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </div>

      {/* Contact Form and Info */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <h2 className="text-3xl mb-6">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm mb-2">Name</label>
                <Input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm mb-2">Email</label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm mb-2">Subject</label>
                <Input
                  id="subject"
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  required
                  placeholder="How can we help?"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm mb-2">Message</label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  placeholder="Your message..."
                  rows={6}
                />
              </div>
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-3xl mb-6">Get in Touch</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-neutral-100 p-3 rounded-lg">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="mb-1">Email</h3>
                  <p className="text-neutral-600">support@geek-audiophile.com</p>
                  <p className="text-neutral-600">sales@geek-audiophile.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-neutral-100 p-3 rounded-lg">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="mb-1">Phone</h3>
                  <p className="text-neutral-600">+1 (555) 123-4567</p>
                  <p className="text-neutral-600">Mon-Fri, 9am-6pm EST</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-neutral-100 p-3 rounded-lg">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="mb-1">Address</h3>
                  <p className="text-neutral-600">123 Audio Boulevard</p>
                  <p className="text-neutral-600">New York, NY 10001</p>
                  <p className="text-neutral-600">United States</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-neutral-100 p-3 rounded-lg">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="mb-1">Business Hours</h3>
                  <p className="text-neutral-600">Monday - Friday: 9am - 6pm</p>
                  <p className="text-neutral-600">Saturday: 10am - 4pm</p>
                  <p className="text-neutral-600">Sunday: Closed</p>
                </div>
              </div>
            </div>

            {/* FAQ Link */}
            <div className="mt-12 p-6 bg-neutral-50 rounded-lg">
              <h3 className="mb-2">Looking for quick answers?</h3>
              <p className="text-neutral-600 text-sm mb-4">
                Check out our FAQ section for answers to common questions about shipping, 
                returns, and product information.
              </p>
              <button className="text-sm underline">Visit FAQ</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
