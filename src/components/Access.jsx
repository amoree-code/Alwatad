import React from 'react';
import {
  TrendingUp,
  Building2,
  Users,
  Wifi,
  Coffee,
  Shield,
} from 'lucide-react';

function Access() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white">
      <div className="container mx-auto px-6 py-12">
        {/* Access to Funding & Investors Section */}
        <div className="grid md:grid-cols-2 gap-8 items-center mb-20">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Access to Funding
              <br />
              <span className="text-purple-300">& Investors</span>
            </h1>

            <p className="text-lg text-gray-300 leading-relaxed">
              We connect startups with the right capital to scale confidently.
              Through exclusive Pitch Days and Demo Days, founders showcase
              their progress to a curated pool of investors. Our network spans
              angel investors, venture capitalists, and corporate partners
              actively seeking innovation.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              Startups also gain access to investor networking events, 1-on-1
              warm introductions, and pitch refinement sessions—ensuring you're
              not just raising funds, but building lasting investor
              relationships.
            </p>
          </div>

          <div className="flex justify-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-12 w-80 h-80 flex items-center justify-center border border-white/20">
              <div className="text-center">
                <TrendingUp className="w-24 h-24 mx-auto mb-4 text-purple-300" />
                <div className="flex justify-center space-x-2">
                  <Users className="w-8 h-8 text-gray-400" />
                  <Building2 className="w-8 h-8 text-gray-400" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Workspace & Infrastructure Section */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="flex justify-center md:order-1">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-12 w-80 h-80 flex items-center justify-center border border-white/20">
              <div className="text-center">
                <Building2 className="w-24 h-24 mx-auto mb-4 text-purple-300" />
                <div className="flex justify-center space-x-2">
                  <Wifi className="w-8 h-8 text-gray-400" />
                  <Coffee className="w-8 h-8 text-gray-400" />
                  <Shield className="w-8 h-8 text-gray-400" />
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6 md:order-2">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Workspace &<br />
              <span className="text-purple-300">Infrastructure</span>
            </h2>

            <p className="text-lg text-gray-300 leading-relaxed">
              Our incubator provides a fully equipped, startup-friendly
              environment designed to boost productivity and collaboration.
              Enjoy access to modern coworking spaces, private meeting rooms,
              and blazing-fast internet—all included.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              Founders also benefit from premium software credits, cloud
              services, and shared technical infrastructure to build, test, and
              scale their solutions with confidence. Everything you need to grow
              is already here—just plug in and start building.
            </p>

            <div className="pt-4">
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 shadow-lg hover:shadow-purple-500/25">
                See Facility Features
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Access;
