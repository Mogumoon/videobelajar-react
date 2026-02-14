import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import api from "../utils/api";
import CourseCard from "../components/CourseCard";
import Footer from "../components/Footer";

const Home = () => {
  const [courses, setCourses] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    fetchCourses();
    fetchCategories();
  }, []);

  const fetchCourses = async () => {
    try {
      const response = await api.get("/videos");
      setCourses(response.data);
    } catch (error) {
      console.error("Error fetching courses:", error);
      // Set dummy data untuk demo
      setCourses(generateDummyCourses());
    } finally {
      setLoading(false);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await api.get("/categories");
      setCategories(response.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
      setCategories([
        { id: 1, name: "Pemasaran" },
        { id: 2, name: "Desain" },
        { id: 3, name: "Pengembangan Diri" },
        { id: 4, name: "Bisnis" },
      ]);
    }
  };

  const generateDummyCourses = () => {
    return [
      {
        id: 1,
        title: "Big 4 Auditor Financial Analyst",
        description:
          "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan...",
        thumbnail: "/img/card1.jpg",
        instructor_name: "Jenna Ortega",
        instructor_title: "Senior Accountant di Gojek",
        instructor_avatar: "/img/ava1.png",
        rating: 3.5,
        total_reviews: 86,
        price: 300000,
        category_id: 1,
      },
      {
        id: 2,
        title: "Digital Marketing Mastery",
        description: "Pelajari strategi marketing digital dari ahlinya...",
        thumbnail: "/img/card2.jpg",
        instructor_name: "Jenna Ortega",
        instructor_title: "Marketing Director di Tokopedia",
        instructor_avatar: "/img/ava2.png",
        rating: 4.5,
        total_reviews: 120,
        price: 450000,
        category_id: 1,
      },
      {
        id: 3,
        title: "UI/UX Design Fundamentals",
        description: "Kuasai prinsip desain yang baik...",
        thumbnail: "/img/card3.jpg",
        instructor_name: "Jenna Ortega",
        instructor_title: "Lead Designer di Gojek",
        instructor_avatar: "/img/ava3.png",
        rating: 4.8,
        total_reviews: 95,
        price: 500000,
        category_id: 2,
      },
      {
        id: 4,
        title: "Fullstack Web Development with MERN",
        description: "Bangun aplikasi web modern dari nol sampai deployment...",
        thumbnail: "/img/card4.jpg",
        instructor_name: "Angela Yu",
        instructor_title: "Software Engineer di Google",
        instructor_avatar: "/img/ava4.png",
        rating: 4.9,
        total_reviews: 210,
        price: 750000,
        category_id: 3,
      },
      {
        id: 5,
        title: "Data Science for Beginners",
        description:
          "Pelajari Python, Pandas, dan cara mengolah data raksasa...",
        thumbnail: "/img/card5.jpg",
        instructor_name: "Andrew Ng",
        instructor_title: "AI Researcher di Stanford",
        instructor_avatar: "/img/ava5.png",
        rating: 4.7,
        total_reviews: 340,
        price: 600000,
        category_id: 3,
      },
      {
        id: 6,
        title: "Professional Human Resources Management",
        description:
          "Langkah taktis mengelola talenta di perusahaan startup...",
        thumbnail: "/img/card6.jpg",
        instructor_name: "Maudy Ayunda",
        instructor_title: "HR Consultant",
        instructor_avatar: "/img/ava6.png",
        rating: 4.2,
        total_reviews: 55,
        price: 250000,
        category_id: 4,
      },
      {
        id: 7,
        title: "Mastering Excel for Business",
        description: "Dari rumus dasar sampai Pivot Table dan Dashboard...",
        thumbnail: "/img/card7.jpg",
        instructor_name: "Ken Willboy",
        instructor_title: "Data Analyst di Shopee",
        instructor_avatar: "/img/ava7.png",
        rating: 4.0,
        total_reviews: 150,
        price: 150000,
        category_id: 1,
      },
      {
        id: 8,
        title: "Copywriting yang Menjual",
        description:
          "Teknik menulis iklan yang bikin orang langsung checkout...",
        thumbnail: "/img/card8.jpg",
        instructor_name: "Raditya Dika",
        instructor_title: "Content Strategist",
        instructor_avatar: "/img/ava8.png",
        rating: 4.6,
        total_reviews: 98,
        price: 350000,
        category_id: 2,
      },
      {
        id: 9,
        title: "Cyber Security Essentials",
        description:
          "Lindungi sistem dari serangan hacker dengan teknik terbaru...",
        thumbnail: "/img/card9.jpg",
        instructor_name: "Kevin Mitnick",
        instructor_title: "Security Consultant",
        instructor_avatar: "/img/ava9.png",
        rating: 4.8,
        total_reviews: 125,
        price: 850000,
        category_id: 3,
      },
    ];
  };

  const filteredCourses =
    selectedCategory === "all"
      ? courses
      : courses.filter((course) => course.category_id === selectedCategory);

  return (
    <div className="min-h-screen bg-[#FFF8EE] pt-16">
{/* Hero Section */}
<section className="relative h-full flex flex-col items-center justify-center text-center text-white px-4 sm:px-6">
  {/* Background Image Container - ukuran tetap */}
  <div className="absolute h-[300px] sm:h-[360px] md:h-[420px] rounded-2xl overflow-hidden left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] sm:w-[calc(100%-4rem)] md:w-[calc(100%-6rem)] lg:w-[calc(100%-8rem)] max-w-7xl">
    <img
      src="/img/hero.jpg"
      alt="Hero"
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-black/50"></div>
  </div>

  {/* Konten - dengan padding yang disesuaikan untuk mobile */}
  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 lg:py-32">
    <div className="text-center max-w-4xl mx-auto">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 sm:mb-4 leading-tight px-2 sm:px-0">
        Revolusi Pembelajaran: Temukan Ilmu Baru melalui Platform Video
        Interaktif!
      </h1>
      <p className="text-sm sm:text-base md:text-lg text-white/90 mb-6 sm:mb-8 max-w-3xl mx-auto px-2 sm:px-0">
        Temukan ilmu baru yang menarik dan mendalam melalui koleksi video
        pembelajaran berkualitas tinggi. Tidak hanya itu, Anda juga dapat
        berpartisipasi dalam latihan interaktif yang akan meningkatkan
        pemahaman Anda.
      </p>
      <a
        href="#kelas"
        className="inline-block w-full sm:w-auto bg-green-500 hover:bg-green-600 px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold transition shadow-lg hover:shadow-xl text-sm sm:text-base"
      >
        Temukan Video Course untuk Dipelajari
      </a>
    </div>
  </div>
</section>

      {/* Course Section */}
      <section id="kelas" className="py-16">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="section-title">
              Koleksi Video Pembelajaran Unggulan
            </h2>
            <p className="section-subtitle">
              Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <button
              onClick={() => setSelectedCategory("all")}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                selectedCategory === "all"
                  ? "bg-orange-600 text-white shadow-lg"
                  : "bg-white text-gray-700 hover:bg-gray-100 shadow-md"
              }`}
            >
              Semua Kelas
            </button>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  selectedCategory === category.id
                    ? "bg-orange-600  text-white shadow-lg"
                    : "bg-white text-gray-700 hover:bg-gray-100 shadow-md"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Courses Grid */}
          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-sky-600"></div>
            </div>
          ) : filteredCourses.length === 0 ? (
            <div className="text-center py-20">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-200 rounded-full mb-6">
                <ChevronDown className="h-10 w-10 text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Tidak ada kelas ditemukan
              </h3>
              <p className="text-gray-600">
                Coba pilih kategori lain atau cari dengan kata kunci berbeda
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCourses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section dengan Background Image */}
      <section className="relative py-16 text-white overflow-hidden">
        {/* Background Image dengan Overlay */}
        <div className="absolute h-[360px] md:h-[420px] rounded-2xl overflow-hidden left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] sm:w-[calc(100%-4rem)] md:w-[calc(100%-6rem)] lg:w-[calc(100%-8rem)] max-w-7xl">
          <img
            src="/img/cta.jpg"
            alt="Background"
            className="w-full h-full object-cover"
          />
          {/* Overlay gelap agar teks terbaca */}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Konten - berada di atas background */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative text-center text-white px-6 md:px-16 py-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Mau Belajar Lebih Banyak?
            </h3>

            <p className="mb-6 text-gray-200">
              Daftarkan email kamu untuk update course terbaru.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <input
                type="email"
                placeholder="Email kamu"
                className="px-4 py-3 rounded-lg text-gray-800 w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <button className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-lg font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
