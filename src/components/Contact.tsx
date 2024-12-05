import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export function Contact() {
  return (
    <div id="contact" className="bg-black py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Get in Touch
          </h2>
          <p className="mt-4 text-xl text-gray-300">
            Let's discuss how we can help secure and enhance your digital presence
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-zinc-800 p-8 rounded-lg">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="mt-1 block w-full bg-zinc-700 border-zinc-600 rounded-md shadow-sm text-white focus:ring-purple-500 focus:border-purple-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="mt-1 block w-full bg-zinc-700 border-zinc-600 rounded-md shadow-sm text-white focus:ring-purple-500 focus:border-purple-500"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="mt-1 block w-full bg-zinc-700 border-zinc-600 rounded-md shadow-sm text-white focus:ring-purple-500 focus:border-purple-500"
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>

            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <Mail className="h-6 w-6 text-purple-500 mt-1" />
                <div>
                  <h3 className="text-lg font-medium text-white">Email</h3>
                  <p className="mt-1 text-gray-300">contact@devcrowdynamics.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Phone className="h-6 w-6 text-purple-500 mt-1" />
                <div>
                  <h3 className="text-lg font-medium text-white">Phone</h3>
                  <p className="mt-1 text-gray-300">+55 (11) 123-4567</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-purple-500 mt-1" />
                <div>
                  <h3 className="text-lg font-medium text-white">Location</h3>
                  <p className="mt-1 text-gray-300">SEXO!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}