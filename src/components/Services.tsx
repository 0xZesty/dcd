import React from 'react';
import { Shield, Code2, Cloud, Lock, Database, Terminal } from 'lucide-react';

const services = [
  {
    title: 'Security Auditing',
    description: 'Comprehensive security assessments and vulnerability testing to protect your digital assets.',
    icon: Shield,
  },
  {
    title: 'Custom Development',
    description: 'Tailored software solutions built with cutting-edge technologies and best practices.',
    icon: Code2,
  },
  {
    title: 'Cloud Solutions',
    description: 'Scalable and secure cloud infrastructure design and implementation.',
    icon: Cloud,
  },
  {
    title: 'Penetration Testing',
    description: 'Advanced penetration testing to identify and address security vulnerabilities.',
    icon: Lock,
  },
  {
    title: 'Database Management',
    description: 'Efficient database design, optimization, and security implementation.',
    icon: Database,
  },
  {
    title: 'DevSecOps',
    description: 'Integration of security practices within your development lifecycle.',
    icon: Terminal,
  },
];

export function Services() {
  return (
    <div id="services" className="bg-zinc-900 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-4 text-xl text-gray-300">
            Comprehensive solutions for your development and security needs
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative group bg-zinc-800 p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-purple-500 rounded-lg transition-all hover:bg-zinc-700"
            >
              <div>
                <span className="rounded-lg inline-flex p-3 bg-purple-500 text-white ring-4 ring-zinc-800">
                  <service.icon className="h-6 w-6" aria-hidden="true" />
                </span>
              </div>
              <div className="mt-8">
                <h3 className="text-lg font-medium text-white">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-gray-300">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}