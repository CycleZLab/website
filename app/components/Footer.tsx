import Link from 'next/link';
import { Github, MessageCircle, Youtube } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Column */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">CycleZLab</h3>
            <p className="text-gray-400 mb-4">
              Building and connecting the FIRST community in China through content, 
              resources, and experiences for FTC participants.
            </p>
            <p className="text-sm text-gray-500">
              CycleZLab belongs to all of its contributors.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-blue-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-blue-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/initiatives" className="hover:text-blue-400 transition-colors">
                  Initiatives
                </Link>
              </li>
              <li>
                <Link href="/get-involved" className="hover:text-blue-400 transition-colors">
                  Get Involved
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <div className="space-y-3">
              <a
                href="https://github.com/cyclezlab"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 hover:text-blue-400 transition-colors"
              >
                <Github size={20} />
                <span>GitHub</span>
              </a>
              <a
                href="https://discord.gg/cyclezlab"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 hover:text-blue-400 transition-colors"
              >
                <MessageCircle size={20} />
                <span>Discord</span>
              </a>
              <a
                href="https://space.bilibili.com/cyclezlab"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 hover:text-blue-400 transition-colors"
              >
                <Youtube size={20} />
                <span>Bilibili</span>
              </a>
            </div>
            <div className="mt-4">
              <a
                href="mailto:contact@cyclezlab.org"
                className="text-sm hover:text-blue-400 transition-colors"
              >
                contact@cyclezlab.org
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">
            © {currentYear} CycleZLab. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link
              href="/policies"
              className="text-sm text-gray-500 hover:text-blue-400 transition-colors"
            >
              Policies
            </Link>
            <Link
              href="/policies#privacy"
              className="text-sm text-gray-500 hover:text-blue-400 transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="/policies#licensing"
              className="text-sm text-gray-500 hover:text-blue-400 transition-colors"
            >
              Licensing
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
