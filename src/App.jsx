
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function Home() {
  return (
    <div className="text-center">
      <div className="text-6xl mb-5">🏠</div>
      <h1 className="text-4xl font-bold text-indigo-700 mb-4">
        Welcome to Home Page!
      </h1>
      <p className="text-gray-600 text-lg">
        This is the home page of my React Router application.
      </p>
    </div>
  );
}

function About() {
  return (
    <div className="text-center">
      <div className="text-6xl mb-5">💡</div>
      <h1 className="text-4xl font-bold text-purple-700 mb-4">
        About Us
      </h1>
      <p className="text-gray-600 text-lg">
        This application demonstrates React Router navigation.
      </p>
    </div>
  );
}

function Contact() {
  return (
    <div className="text-center">
      <div className="text-6xl mb-5">📩</div>
      <h1 className="text-4xl font-bold text-pink-700 mb-4">
        Contact Us
      </h1>
      <p className="text-gray-600 text-lg">
        Email: contact@example.com
      </p>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-purple-100">
        <nav className="bg-indigo-700 text-white shadow-lg">
          <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col sm:flex-row justify-between items-center gap-4">
            <h2 className="text-2xl font-bold">
              React Router App
            </h2>

            <div className="flex gap-3 sm:gap-5">
              <Link className="px-4 py-2 rounded-lg hover:bg-indigo-500" to="/">
                Home
              </Link>
              <Link className="px-4 py-2 rounded-lg hover:bg-indigo-500" to="/about">
                About
              </Link>
              <Link className="px-4 py-2 rounded-lg hover:bg-indigo-500" to="/contact">
                Contact
              </Link>
            </div>
          </div>
        </nav>

        <main className="max-w-4xl mx-auto px-6 py-20">
          <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-14 min-h-72 flex items-center justify-center">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route
                path="*"
                element={
                  <div className="text-center">
                    <h1 className="text-4xl font-bold text-red-600">
                      404 - Page Not Found
                    </h1>
                    <Link className="text-indigo-700 underline mt-4 inline-block" to="/">
                      Go to Home
                    </Link>
                  </div>
                }
              />
            </Routes>
          </div>
        </main>

      </div>
    </BrowserRouter>
  );
}

export default App;
