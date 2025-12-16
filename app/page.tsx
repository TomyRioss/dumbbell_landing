"use client";

import { useState } from "react";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FaChevronLeft, FaChevronRight, FaPause, FaPlay } from "react-icons/fa";

export default function Home() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    gimnasio: "",
    telefono: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [swiperRef, setSwiperRef] = useState<SwiperType | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const params = new URLSearchParams({
      nombre: formData.nombre,
      email: formData.email,
      gimnasio: formData.gimnasio,
      telefono: formData.telefono,
    });

    const img = new window.Image();
    img.src = `https://script.google.com/macros/s/AKfycbyjnC-HpnlQhXyfsShlwgAqJl90-JxNAH3XKqn4436YOp3YPzg2t_3a6QTg9KJaQme2XA/exec?${params.toString()}`;

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  const features = [
    {
      title: "Gestión de Turnos",
      description: "Administra turnos y paquetes de clases de forma eficiente",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920",
    },
    {
      title: "Rutinas Personalizadas",
      description: "Crea y asigna rutinas de entrenamiento a tus miembros",
      image: "https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?w=1920",
    },
    {
      title: "Membresías",
      description: "Control total de membresías y planes de suscripción",
      image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=1920",
    },
    {
      title: "Cobros Automáticos",
      description: "Gestiona cobros mensuales y controla ingresos",
      image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=1920",
    },
    {
      title: "Contenido Exclusivo",
      description: "Publica contenido para tus miembros",
      image: "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=1920",
    },
    {
      title: "App Web y Móvil",
      description: "Accede desde cualquier dispositivo",
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1920",
    },
    {
      title: "Página Web Promocional",
      description: "Diseño único con animaciones, efectos visuales y links a redes sociales",
      image: "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?w=1920",
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      {/* Hero Section */}
      <header className="relative overflow-hidden min-h-[90vh]">
        {/* Background Images */}
        <div className="absolute inset-0 grid grid-cols-3 gap-1 opacity-30">
          <div className="relative">
            <Image
              src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800"
              alt="Gimnasio"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="relative">
            <Image
              src="https://images.unsplash.com/photo-1581009146145-b5ef050c149a?w=800"
              alt="Persona entrenando"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="relative">
            <Image
              src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=800"
              alt="Pesas"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/80 via-neutral-950/90 to-neutral-950" />

        <nav className="relative z-10 flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold">Dumbbell</span>
          </div>
          <a
            href="#registro"
            className="bg-white text-neutral-950 hover:bg-neutral-200 px-4 py-2 rounded-lg font-medium transition-colors"
          >
            Obtener Descuento
          </a>
        </nav>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 text-center flex flex-col items-center justify-center min-h-[70vh]">
          <div className="inline-block bg-white/10 text-neutral-300 px-4 py-1 rounded-full text-sm font-medium mb-6 border border-neutral-700">
            Próximo lanzamiento
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Gestiona tu gimnasio
            <br />
            <span className="text-neutral-400">de forma inteligente</span>
          </h1>
          <p className="text-xl text-neutral-500 max-w-2xl mx-auto mb-8">
            Turnos, membresías, rutinas, cobros y contenido. Todo en una sola
            plataforma. Integración en solo 1 día.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#registro"
              className="bg-white text-neutral-950 hover:bg-neutral-200 px-8 py-4 rounded-xl font-bold text-lg transition-colors"
            >
              Inscribirme Ahora
            </a>
            <div className="text-neutral-500">
              <span className="line-through">$35.000/mes</span>
              <span className="text-white font-bold ml-2">
                $17.500/mes
              </span>
              <span className="text-sm ml-1">(6 meses)</span>
            </div>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="h-[50vh] w-full relative group">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          onSwiper={setSwiperRef}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop={true}
          className="h-full w-full"
        >
          {features.map((feature, index) => (
            <SwiperSlide key={index}>
              <div className="relative h-full w-full">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/60" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                  <h3 className="text-3xl md:text-5xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-neutral-300 text-lg md:text-xl max-w-2xl">{feature.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <button
          onClick={() => swiperRef?.slidePrev()}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 p-3 rounded-full transition-all opacity-0 group-hover:opacity-100"
        >
          <FaChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={() => swiperRef?.slideNext()}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 p-3 rounded-full transition-all opacity-0 group-hover:opacity-100"
        >
          <FaChevronRight className="w-5 h-5" />
        </button>
        <button
          onClick={() => {
            if (isPlaying) {
              swiperRef?.autoplay.stop();
            } else {
              swiperRef?.autoplay.start();
            }
            setIsPlaying(!isPlaying);
          }}
          className="absolute bottom-4 right-4 z-10 bg-black/50 hover:bg-black/70 p-3 rounded-full transition-all"
        >
          {isPlaying ? <FaPause className="w-4 h-4" /> : <FaPlay className="w-4 h-4" />}
        </button>
      </section>

      {/* Pricing Section */}
      <section className="py-16 md:py-24 px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4">
            Precio de lanzamiento
          </h2>
          <p className="text-neutral-500 text-sm md:text-base mb-8 md:mb-12">
            Inscríbete ahora y obtén 50% OFF durante los primeros 6 meses
          </p>
          <div className="bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700 rounded-2xl md:rounded-3xl p-6 md:p-12">
            <div className="flex flex-col md:flex-row items-center justify-center gap-1 md:gap-4 mb-4 md:mb-6">
              <span className="text-neutral-600 line-through text-lg md:text-2xl">
                $35.000
              </span>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl md:text-6xl font-bold text-white">
                  $17.500
                </span>
                <span className="text-neutral-500 text-sm md:text-base">/mes</span>
              </div>
            </div>
            <div className="inline-block bg-red-500/20 text-red-400 px-3 py-1 rounded-full text-xs md:text-sm font-medium mb-4">
              Solo 100 cupos disponibles
            </div>
            <p className="text-neutral-300 font-medium text-sm md:text-base mb-6 md:mb-8">
              50% OFF por 6 meses para early adopters
            </p>
            <ul className="text-left max-w-md mx-auto space-y-2 md:space-y-3 mb-6 md:mb-8 text-sm md:text-base">
              <li className="flex items-center gap-3">
                <span className="text-white">✓</span>
                Integración en 1 día
              </li>
              <li className="flex items-center gap-3">
                <span className="text-white">✓</span>
                App Web + App Móvil
              </li>
              <li className="flex items-center gap-3">
                <span className="text-white">✓</span>
                Soporte prioritario
              </li>
              <li className="flex items-center gap-3">
                <span className="text-white">✓</span>
                Actualizaciones incluidas
              </li>
            </ul>
            <a
              href="#registro"
              className="inline-block bg-white text-neutral-950 hover:bg-neutral-200 px-6 md:px-8 py-3 md:py-4 rounded-xl font-bold text-base md:text-lg transition-colors w-full md:w-auto"
            >
              Quiero el descuento
            </a>
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section id="registro" className="py-24 px-6 bg-neutral-900">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Registra tu interés
          </h2>
          <p className="text-neutral-500 text-center mb-8">
            Sé de los primeros en acceder y asegura tu descuento del 50%
          </p>

          {submitted ? (
            <div className="bg-neutral-800 border border-neutral-700 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold mb-2">Gracias por registrarte</h3>
              <p className="text-neutral-400">
                Te contactaremos cuando lancemos con tu descuento exclusivo.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Nombre completo
                </label>
                <input
                  type="text"
                  required
                  value={formData.nombre}
                  onChange={(e) =>
                    setFormData({ ...formData, nombre: e.target.value })
                  }
                  className="w-full bg-neutral-800 border border-neutral-700 rounded-lg px-4 py-3 focus:outline-none focus:border-white transition-colors"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full bg-neutral-800 border border-neutral-700 rounded-lg px-4 py-3 focus:outline-none focus:border-white transition-colors"
                  placeholder="tu@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Nombre del gimnasio
                </label>
                <input
                  type="text"
                  required
                  value={formData.gimnasio}
                  onChange={(e) =>
                    setFormData({ ...formData, gimnasio: e.target.value })
                  }
                  className="w-full bg-neutral-800 border border-neutral-700 rounded-lg px-4 py-3 focus:outline-none focus:border-white transition-colors"
                  placeholder="Mi Gimnasio"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Teléfono (opcional)
                </label>
                <input
                  type="tel"
                  value={formData.telefono}
                  onChange={(e) =>
                    setFormData({ ...formData, telefono: e.target.value })
                  }
                  className="w-full bg-neutral-800 border border-neutral-700 rounded-lg px-4 py-3 focus:outline-none focus:border-white transition-colors"
                  placeholder="+54 9 11 1234-5678"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-white text-neutral-950 hover:bg-neutral-200 py-4 rounded-xl font-bold text-lg transition-colors mt-6 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Enviando..." : "Preinscribirme"}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-neutral-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-bold">Dumbbell</span>
          </div>
          <p className="text-neutral-600 text-sm">
            © {new Date().getFullYear()} Dumbbell. Todos los derechos reservados.
          </p>
        </div>
      </footer>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/5491134083140"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-[#25D366] hover:bg-[#20bd5a] h-14 px-4 rounded-full flex items-center gap-3 shadow-lg transition-colors z-50"
        aria-label="Contactar por WhatsApp"
      >
        <span className="text-white font-medium text-sm">¿Tenés preguntas?</span>
        <FaWhatsapp className="w-7 h-7 text-white" />
      </a>
    </div>
  );
}
