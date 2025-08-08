import React, { useState } from 'react';
import { 
  Code, 
  Palette, 
  Layout, 
  Monitor, 
  Smartphone, 
  Globe, 
  BookOpen, 
  Zap,
  CheckCircle,
  ArrowRight,
  Github,
  ExternalLink,
  Menu,
  X,
  Play,
  User,
  LogOut,
  BarChart3,
  Clock,
  Award,
  Target,
  TrendingUp,
  Users
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showDashboard, setShowDashboard] = useState(false);
  const [loginData, setLoginData] = useState({ email: '', password: '' });

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (loginData.email && loginData.password) {
      setIsLoggedIn(true);
      setShowLogin(false);
      setShowDashboard(true);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setShowDashboard(false);
    setLoginData({ email: '', password: '' });
  };

  const htmlFeatures = [
    { 
      icon: <Layout className="w-6 h-6" />, 
      title: "Elementos Semánticos", 
      desc: "Header, nav, main, section, article, aside, footer",
      details: "HTML5 introduce elementos que dan significado estructural al contenido, mejorando la accesibilidad y SEO."
    },
    { 
      icon: <Globe className="w-6 h-6" />, 
      title: "Formularios Interactivos", 
      desc: "Input, select, textarea, button con validación",
      details: "Crea formularios robustos con validación HTML5 nativa y tipos de input específicos."
    },
    { 
      icon: <BookOpen className="w-6 h-6" />, 
      title: "Multimedia y Enlaces", 
      desc: "Imágenes, videos, audio y navegación",
      details: "Integra contenido multimedia y crea sistemas de navegación intuitivos."
    }
  ];

  const cssFeatures = [
    { 
      icon: <Palette className="w-6 h-6" />, 
      title: "Flexbox y Grid", 
      desc: "Sistemas de layout modernos y flexibles",
      details: "Domina los sistemas de layout más potentes para crear diseños complejos y responsive."
    },
    { 
      icon: <Monitor className="w-6 h-6" />, 
      title: "Animaciones CSS", 
      desc: "Transiciones, keyframes y transformaciones",
      details: "Crea experiencias interactivas con animaciones fluidas y efectos visuales."
    },
    { 
      icon: <Zap className="w-6 h-6" />, 
      title: "Variables CSS", 
      desc: "Custom properties y temas dinámicos",
      details: "Utiliza variables CSS para crear sistemas de diseño mantenibles y temas personalizables."
    }
  ];

  const youtubeVideos = [
    {
      id: "UB1O30fR-EE",
      title: "HTML Crash Course For Absolute Beginners",
      channel: "Traversy Media",
      duration: "1:00:41"
    },
    {
      id: "yfoY53QXEnI",
      title: "CSS Crash Course For Absolute Beginners",
      channel: "Traversy Media", 
      duration: "1:25:06"
    },
    {
      id: "G3e-cpL7ofc",
      title: "HTML & CSS Full Course - Beginner to Pro",
      channel: "SuperSimpleDev",
      duration: "6:31:04"
    },
    {
      id: "OXGznpKZ_sA",
      title: "CSS Flexbox Course",
      channel: "freeCodeCamp",
      duration: "1:15:33"
    },
    {
      id: "jV8B24rSN5o",
      title: "Learn CSS Grid - A 13 Minute Deep Dive",
      channel: "Web Dev Simplified",
      duration: "13:26"
    },
    {
      id: "1Rs2ND1ryYc",
      title: "Build a Responsive Website | HTML, CSS Grid, Flexbox & More",
      channel: "Traversy Media",
      duration: "1:17:26"
    }
  ];

  const codeExamples = {
    html: `<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mi Primera Página</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header class="header">
        <nav class="navbar">
            <div class="logo">
                <h1>Mi Sitio Web</h1>
            </div>
            <ul class="nav-links">
                <li><a href="#inicio">Inicio</a></li>
                <li><a href="#servicios">Servicios</a></li>
                <li><a href="#contacto">Contacto</a></li>
            </ul>
        </nav>
    </header>
    
    <main class="main-content">
        <section id="inicio" class="hero">
            <h2>Bienvenido a mi sitio web</h2>
            <p>Creando experiencias digitales increíbles</p>
            <button class="cta-button">Comenzar</button>
        </section>
        
        <section id="servicios" class="services">
            <h2>Nuestros Servicios</h2>
            <div class="service-grid">
                <article class="service-card">
                    <h3>Desarrollo Web</h3>
                    <p>Sitios web modernos y responsive</p>
                </article>
                <article class="service-card">
                    <h3>Diseño UX/UI</h3>
                    <p>Interfaces intuitivas y atractivas</p>
                </article>
            </div>
        </section>
    </main>
    
    <footer class="footer">
        <p>&copy; 2025 Mi Sitio Web. Todos los derechos reservados.</p>
    </footer>
</body>
</html>`,
    css: `/* Variables CSS para consistencia */
:root {
    --primary-color: #3b82f6;
    --secondary-color: #1e40af;
    --text-color: #1f2937;
    --bg-color: #ffffff;
    --border-radius: 8px;
    --shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    --transition: all 0.3s ease;
}

/* Reset y configuración base */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    line-height: 1.6;
    color: var(--text-color);
    background-color: var(--bg-color);
}

/* Header y navegación */
.header {
    background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
    color: white;
    padding: 1rem 0;
    position: sticky;
    top: 0;
    z-index: 100;
    box-shadow: var(--shadow);
}

.navbar {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
}

.nav-links {
    display: flex;
    list-style: none;
    gap: 2rem;
}

.nav-links a {
    color: white;
    text-decoration: none;
    font-weight: 500;
    transition: var(--transition);
}

.nav-links a:hover {
    opacity: 0.8;
    transform: translateY(-2px);
}

/* Sección hero */
.hero {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    text-align: center;
    padding: 6rem 2rem;
    min-height: 60vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.hero h2 {
    font-size: 3rem;
    margin-bottom: 1rem;
    font-weight: 700;
}

.hero p {
    font-size: 1.25rem;
    margin-bottom: 2rem;
    opacity: 0.9;
}

.cta-button {
    background: white;
    color: var(--primary-color);
    border: none;
    padding: 1rem 2rem;
    border-radius: var(--border-radius);
    font-size: 1.1rem;
    font-weight: 600;
    cursor: pointer;
    transition: var(--transition);
    box-shadow: var(--shadow);
}

.cta-button:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
}

/* Grid de servicios */
.services {
    padding: 4rem 2rem;
    max-width: 1200px;
    margin: 0 auto;
}

.services h2 {
    text-align: center;
    margin-bottom: 3rem;
    font-size: 2.5rem;
}

.service-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
}

.service-card {
    background: white;
    padding: 2rem;
    border-radius: var(--border-radius);
    box-shadow: var(--shadow);
    transition: var(--transition);
    border: 1px solid #e5e7eb;
}

.service-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
}

/* Responsive Design */
@media (max-width: 768px) {
    .navbar {
        flex-direction: column;
        gap: 1rem;
    }
    
    .nav-links {
        flex-direction: column;
        text-align: center;
        gap: 1rem;
    }
    
    .hero h2 {
        font-size: 2rem;
    }
    
    .service-grid {
        grid-template-columns: 1fr;
    }
}`
  };

  if (showLogin && !isLoggedIn) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <User className="w-8 h-8 text-blue-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Iniciar Sesión</h2>
            <p className="text-gray-600 mt-2">Accede a tu cuenta de WebDev Academy</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Correo Electrónico
              </label>
              <input
                type="email"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                placeholder="tu@email.com"
                value={loginData.email}
                onChange={(e) => setLoginData({...loginData, email: e.target.value})}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Contraseña
              </label>
              <input
                type="password"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                placeholder="••••••••"
                value={loginData.password}
                onChange={(e) => setLoginData({...loginData, password: e.target.value})}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Iniciar Sesión
            </button>
          </form>

          <div className="mt-6 text-center">
            <button
              onClick={() => setShowLogin(false)}
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              Volver al sitio
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (showDashboard && isLoggedIn) {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Dashboard Header */}
        <header className="bg-white shadow-sm border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center space-x-3">
                <Code className="w-8 h-8 text-blue-600" />
                <span className="text-xl font-bold text-gray-900">Dashboard</span>
              </div>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setShowDashboard(false)}
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Volver al sitio
                </button>
                <button
                  onClick={handleLogout}
                  className="flex items-center space-x-2 text-gray-600 hover:text-red-600 transition-colors"
                >
                  <LogOut className="w-4 h-4" />
                  <span>Cerrar Sesión</span>
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">¡Bienvenido de vuelta!</h1>
            <p className="text-gray-600 mt-2">Aquí tienes un resumen de tu progreso de aprendizaje</p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Lecciones Completadas</p>
                  <p className="text-2xl font-bold text-gray-900">24</p>
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-blue-600" />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Tiempo de Estudio</p>
                  <p className="text-2xl font-bold text-gray-900">45h</p>
                </div>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <Clock className="w-6 h-6 text-green-600" />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Certificados</p>
                  <p className="text-2xl font-bold text-gray-900">3</p>
                </div>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Award className="w-6 h-6 text-purple-600" />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Progreso General</p>
                  <p className="text-2xl font-bold text-gray-900">78%</p>
                </div>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-orange-600" />
                </div>
              </div>
            </div>
          </div>

          {/* Progress Section */}
          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Progreso por Tema</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-700">HTML Básico</span>
                    <span className="text-sm text-gray-500">100%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{width: '100%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-700">CSS Fundamentals</span>
                    <span className="text-sm text-gray-500">85%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{width: '85%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-700">Responsive Design</span>
                    <span className="text-sm text-gray-500">60%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-yellow-500 h-2 rounded-full" style={{width: '60%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-700">JavaScript Básico</span>
                    <span className="text-sm text-gray-500">30%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-red-500 h-2 rounded-full" style={{width: '30%'}}></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Actividad Reciente</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Completaste "CSS Flexbox"</p>
                    <p className="text-xs text-gray-500">Hace 2 horas</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <Play className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Viste "HTML Semántico"</p>
                    <p className="text-xs text-gray-500">Ayer</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                    <Award className="w-4 h-4 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Obtuviste certificado HTML</p>
                    <p className="text-xs text-gray-500">Hace 3 días</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Recommended Content */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Contenido Recomendado</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <h4 className="font-medium text-gray-900 mb-2">CSS Grid Layout</h4>
                <p className="text-sm text-gray-600 mb-3">Aprende a crear layouts complejos con CSS Grid</p>
                <button className="text-blue-600 text-sm font-medium hover:text-blue-700">
                  Comenzar →
                </button>
              </div>
              <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <h4 className="font-medium text-gray-900 mb-2">Animaciones CSS</h4>
                <p className="text-sm text-gray-600 mb-3">Crea efectos visuales impresionantes</p>
                <button className="text-blue-600 text-sm font-medium hover:text-blue-700">
                  Comenzar →
                </button>
              </div>
              <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <h4 className="font-medium text-gray-900 mb-2">Proyecto Final</h4>
                <p className="text-sm text-gray-600 mb-3">Construye tu primera página web completa</p>
                <button className="text-blue-600 text-sm font-medium hover:text-blue-700">
                  Comenzar →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Code className="w-8 h-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">WebDev Academy</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#inicio" className="text-gray-700 hover:text-blue-600 transition-colors">Inicio</a>
              <a href="#html" className="text-gray-700 hover:text-blue-600 transition-colors">HTML</a>
              <a href="#css" className="text-gray-700 hover:text-blue-600 transition-colors">CSS</a>
              <a href="#ejemplos" className="text-gray-700 hover:text-blue-600 transition-colors">Ejemplos</a>
              <a href="#videos" className="text-gray-700 hover:text-blue-600 transition-colors">Videos</a>
              <a href="#recursos" className="text-gray-700 hover:text-blue-600 transition-colors">Recursos</a>
              {isLoggedIn ? (
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => setShowDashboard(true)}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                  >
                    Dashboard
                  </button>
                  <button
                    onClick={handleLogout}
                    className="text-gray-700 hover:text-red-600 transition-colors"
                  >
                    <LogOut className="w-5 h-5" />
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setShowLogin(true)}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                >
                  Iniciar Sesión
                </button>
              )}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={toggleMenu} className="text-gray-700 hover:text-blue-600">
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200">
              <div className="flex flex-col space-y-2">
                <a href="#inicio" className="text-gray-700 hover:text-blue-600 py-2 transition-colors" onClick={toggleMenu}>Inicio</a>
                <a href="#html" className="text-gray-700 hover:text-blue-600 py-2 transition-colors" onClick={toggleMenu}>HTML</a>
                <a href="#css" className="text-gray-700 hover:text-blue-600 py-2 transition-colors" onClick={toggleMenu}>CSS</a>
                <a href="#ejemplos" className="text-gray-700 hover:text-blue-600 py-2 transition-colors" onClick={toggleMenu}>Ejemplos</a>
                <a href="#videos" className="text-gray-700 hover:text-blue-600 py-2 transition-colors" onClick={toggleMenu}>Videos</a>
                <a href="#recursos" className="text-gray-700 hover:text-blue-600 py-2 transition-colors" onClick={toggleMenu}>Recursos</a>
                {!isLoggedIn && (
                  <button
                    onClick={() => {setShowLogin(true); toggleMenu();}}
                    className="text-left text-gray-700 hover:text-blue-600 py-2 transition-colors"
                  >
                    Iniciar Sesión
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="pt-16 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                  Aprende a <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">construir</span> páginas web
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Domina HTML y CSS desde cero. Crea sitios web modernos, responsive y profesionales con nuestras guías paso a paso.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2">
                  <span>Comenzar Ahora</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-300 flex items-center justify-center space-x-2">
                  <Github className="w-5 h-5" />
                  <span>Ver en GitHub</span>
                </button>
              </div>

              <div className="flex items-center space-x-8 pt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">50K+</div>
                  <div className="text-sm text-gray-600">Estudiantes</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">100+</div>
                  <div className="text-sm text-gray-600">Lecciones</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">4.9</div>
                  <div className="text-sm text-gray-600">Rating</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-w-16 aspect-h-12 rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Desarrollo web con código HTML y CSS"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-700">Aprendiendo en vivo</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HTML Section */}
      <section id="html" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <Code className="w-6 h-6 text-orange-600" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900">HTML: La Estructura</h2>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  HTML (HyperText Markup Language) es el lenguaje de marcado que define la estructura y el contenido de las páginas web. Es la base sobre la cual se construye todo sitio web.
                </p>
              </div>

              <div className="space-y-6">
                {htmlFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <div className="text-blue-600">{feature.icon}</div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                      <p className="text-gray-600 mb-2">{feature.desc}</p>
                      <p className="text-sm text-gray-500">{feature.details}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-xl border border-orange-100">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Elementos HTML5 Modernos:</h4>
                <div className="grid grid-cols-2 gap-3">
                  {['<header>', '<nav>', '<main>', '<section>', '<article>', '<aside>', '<footer>', '<figure>'].map((tag, index) => (
                    <div key={index} className="bg-white px-3 py-2 rounded-lg text-sm font-mono text-orange-700 border border-orange-200">
                      {tag}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="aspect-w-16 aspect-h-10 rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Código HTML en editor"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-1 gap-4">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100">
                  <Layout className="w-8 h-8 text-blue-600 mb-3" />
                  <h4 className="font-semibold text-blue-900 mb-2">Estructura Semántica</h4>
                  <p className="text-sm text-blue-700">HTML5 introduce elementos que describen el significado del contenido, mejorando la accesibilidad y SEO de tu sitio web.</p>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border border-green-100">
                  <Globe className="w-8 h-8 text-green-600 mb-3" />
                  <h4 className="font-semibold text-green-900 mb-2">Accesibilidad Web</h4>
                  <p className="text-sm text-green-700">Crea páginas web que funcionen para todos los usuarios, incluyendo personas con discapacidades y diferentes dispositivos.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CSS Section */}
      <section id="css" className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="lg:order-2 space-y-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Palette className="w-6 h-6 text-purple-600" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900">CSS: El Diseño</h2>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  CSS (Cascading Style Sheets) es el lenguaje que define la presentación visual de las páginas web. Controla colores, layouts, tipografías y animaciones.
                </p>
              </div>

              <div className="space-y-6">
                {cssFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 rounded-lg hover:bg-white/50 transition-colors">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <div className="text-purple-600">{feature.icon}</div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                      <p className="text-gray-600 mb-2">{feature.desc}</p>
                      <p className="text-sm text-gray-500">{feature.details}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-100">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Técnicas CSS Avanzadas:</h4>
                <div className="grid grid-cols-2 gap-3">
                  {['flexbox', 'grid', 'transform', 'animation', 'variables', 'media-queries', 'pseudo-classes', 'gradients'].map((prop, index) => (
                    <div key={index} className="bg-white px-3 py-2 rounded-lg text-sm font-mono text-purple-700 border border-purple-200">
                      {prop}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:order-1 space-y-6">
              <div className="aspect-w-16 aspect-h-10 rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.pexels.com/photos/1591061/pexels-photo-1591061.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Diseño web responsive en diferentes dispositivos"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-1 gap-4">
                <div className="bg-gradient-to-br from-pink-50 to-rose-50 p-6 rounded-xl border border-pink-100">
                  <Monitor className="w-8 h-8 text-pink-600 mb-3" />
                  <h4 className="font-semibold text-pink-900 mb-2">Responsive Design</h4>
                  <p className="text-sm text-pink-700">Crea layouts que se adapten perfectamente a cualquier tamaño de pantalla, desde móviles hasta pantallas 4K.</p>
                </div>
                <div className="bg-gradient-to-br from-indigo-50 to-blue-50 p-6 rounded-xl border border-indigo-100">
                  <Zap className="w-8 h-8 text-indigo-600 mb-3" />
                  <h4 className="font-semibold text-indigo-900 mb-2">Animaciones Fluidas</h4>
                  <p className="text-sm text-indigo-700">Implementa transiciones y animaciones que mejoren la experiencia del usuario sin comprometer el rendimiento.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Code Examples Section */}
      <section id="ejemplos" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ejemplos de Código</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Aprende con ejemplos prácticos y código real que puedes usar en tus proyectos
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* HTML Example */}
            <div className="bg-gray-800 rounded-2xl overflow-hidden shadow-2xl">
              <div className="bg-gradient-to-r from-orange-500 to-red-500 px-6 py-4">
                <div className="flex items-center space-x-3">
                  <Code className="w-6 h-6 text-white" />
                  <h3 className="text-lg font-semibold text-white">Estructura HTML Completa</h3>
                </div>
              </div>
              <div className="p-6">
                <pre className="text-sm text-gray-300 overflow-x-auto">
                  <code>{codeExamples.html}</code>
                </pre>
              </div>
            </div>

            {/* CSS Example */}
            <div className="bg-gray-800 rounded-2xl overflow-hidden shadow-2xl">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-4">
                <div className="flex items-center space-x-3">
                  <Palette className="w-6 h-6 text-white" />
                  <h3 className="text-lg font-semibold text-white">Estilos CSS Modernos</h3>
                </div>
              </div>
              <div className="p-6">
                <pre className="text-sm text-gray-300 overflow-x-auto">
                  <code>{codeExamples.css}</code>
                </pre>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <a 
              href="#videos"
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center space-x-2"
            >
              <Play className="w-5 h-5" />
              <span>Ver Videos Tutoriales</span>
            </a>
          </div>
        </div>
      </section>

      {/* YouTube Videos Section */}
      <section id="videos" className="py-20 bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Videos Tutoriales</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Aprende con los mejores tutoriales de YouTube seleccionados especialmente para ti
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {youtubeVideos.map((video, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative">
                  <img 
                    src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                    alt={video.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={`https://www.youtube.com/watch?v=${video.id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-red-600 text-white p-4 rounded-full hover:bg-red-700 transition-colors"
                    >
                      <Play className="w-8 h-8" />
                    </a>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white px-2 py-1 rounded text-sm">
                    {video.duration}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                    {video.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">{video.channel}</p>
                  <a
                    href={`https://www.youtube.com/watch?v=${video.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-red-600 font-medium hover:text-red-700 transition-colors"
                  >
                    <Play className="w-4 h-4" />
                    <span>Ver en YouTube</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">¿Quieres más contenido?</h3>
              <p className="text-gray-600 mb-6">
                Suscríbete a nuestro canal de YouTube para recibir los últimos tutoriales y tips de desarrollo web.
              </p>
              <button className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors inline-flex items-center space-x-2">
                <Play className="w-5 h-5" />
                <span>Suscribirse al Canal</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section id="recursos" className="py-20 bg-gradient-to-br from-green-50 via-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Recursos Adicionales</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Herramientas, documentación y recursos para acelerar tu aprendizaje
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <BookOpen className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">MDN Web Docs</h3>
              <p className="text-gray-600 mb-6">La documentación más completa y actualizada sobre HTML, CSS y tecnologías web.</p>
              <div className="flex items-center space-x-2 text-blue-600 font-medium">
                <span>Explorar</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">CodePen</h3>
              <p className="text-gray-600 mb-6">Editor de código en línea para experimentar con HTML, CSS y JavaScript en tiempo real.</p>
              <div className="flex items-center space-x-2 text-green-600 font-medium">
                <span>Practicar</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <Github className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">GitHub Templates</h3>
              <p className="text-gray-600 mb-6">Repositorios con plantillas y proyectos de ejemplo para comenzar rápidamente.</p>
              <div className="flex items-center space-x-2 text-purple-600 font-medium">
                <span>Descargar</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">CSS Tricks</h3>
              <p className="text-gray-600 mb-6">Guías, trucos y técnicas avanzadas de CSS para llevar tus diseños al siguiente nivel.</p>
              <div className="flex items-center space-x-2 text-yellow-600 font-medium">
                <span>Aprender</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Stack Overflow</h3>
              <p className="text-gray-600 mb-6">La comunidad más grande de desarrolladores donde puedes hacer preguntas y encontrar soluciones.</p>
              <div className="flex items-center space-x-2 text-red-600 font-medium">
                <span>Preguntar</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                <BarChart3 className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Can I Use</h3>
              <p className="text-gray-600 mb-6">Verifica la compatibilidad de características CSS y HTML en diferentes navegadores.</p>
              <div className="flex items-center space-x-2 text-indigo-600 font-medium">
                <span>Verificar</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </div>

          <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">¿Listo para comenzar tu journey?</h3>
                <p className="text-gray-600 mb-6">
                  Únete a miles de desarrolladores que han transformado sus carreras aprendiendo HTML y CSS con nuestras guías paso a paso.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-4">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Contenido actualizado constantemente</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Soporte de la comunidad 24/7</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Certificado de finalización oficial</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Proyectos prácticos incluidos</span>
                  </div>
                </div>
              </div>
              <div className="aspect-w-16 aspect-h-12 rounded-xl overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=600" 
                  alt="Equipo de desarrolladores trabajando"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <Code className="w-8 h-8 text-blue-400" />
                <span className="text-xl font-bold">WebDev Academy</span>
              </div>
              <p className="text-gray-400 leading-relaxed mb-6">
                Tu plataforma de confianza para aprender desarrollo web. Desde HTML y CSS hasta frameworks modernos, te acompañamos en cada paso de tu journey como desarrollador.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
                  <Github className="w-5 h-5" />
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-red-600 transition-colors cursor-pointer">
                  <Play className="w-5 h-5" />
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
                  <Globe className="w-5 h-5" />
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6">Recursos</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Documentación</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Tutoriales</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Ejemplos</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Videos</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6">Comunidad</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Discord</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Forum</a></li>
                <li><a href="#" className="hover:text-white transition-colors">GitHub</a></li>
                <li><a href="#" className="hover:text-white transition-colors">YouTube</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Newsletter</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 mt-12">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400">© 2025 WebDev Academy. Todos los derechos reservados.</p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Privacidad</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Términos</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Contacto</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;