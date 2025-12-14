import { useNavigate } from 'react-router-dom';

export function AboutPage() {
  const navigate = useNavigate();
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-neutral-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl mb-6">About Geek Audiophile</h1>
          <p className="text-xl text-neutral-300 max-w-3xl">
            Your trusted source for premium audio peripherals since 2020
          </p>
        </div>
      </div>

      {/* Story Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl mb-6">Our Story</h2>
          <div className="space-y-4 text-neutral-600">
            <p>
              Geek Audiophile was founded by a group of passionate audio enthusiasts who believed 
              that everyone deserves access to high-quality audio equipment without compromise.
            </p>
            <p>
              What started as a small collection of curated headphones has grown into a 
              comprehensive destination for audiophiles and music lovers worldwide. We've built 
              relationships with leading manufacturers and emerging brands to bring you the 
              best audio peripherals at competitive prices.
            </p>
            <p>
              Our team tests every product we sell, ensuring that only the finest audio gear 
              makes it to our catalog. We're not just selling products—we're sharing our passion 
              for pure, uncompromising sound.
            </p>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-neutral-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl mb-12 text-center">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg">
              <h3 className="text-xl mb-4">Quality First</h3>
              <p className="text-neutral-600">
                Every product in our catalog is carefully selected and tested to meet our 
                rigorous quality standards.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg">
              <h3 className="text-xl mb-4">Customer Focus</h3>
              <p className="text-neutral-600">
                Your satisfaction is our priority. We offer expert guidance, responsive support, 
                and hassle-free returns.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg">
              <h3 className="text-xl mb-4">Audio Passion</h3>
              <p className="text-neutral-600">
                We're audiophiles serving audiophiles. Our team lives and breathes high-fidelity 
                audio every day.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl mb-6">Our Mission</h2>
          <p className="text-xl text-neutral-600 mb-8">
            To make premium audio accessible to everyone who values exceptional sound quality, 
            while providing expert guidance and unparalleled customer service.
          </p>
          <button
            onClick={() => navigate('/products')}
            className="bg-neutral-900 text-white px-8 py-3 rounded-md hover:bg-neutral-800 transition-colors"
          >
            Shop Our Collection
          </button>
        </div>
      </div>
    </div>
  );
}