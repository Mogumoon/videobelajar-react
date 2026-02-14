import { Star } from 'lucide-react';

const CourseCard = ({ course }) => {
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(
          <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
        );
      } else if (i === fullStars && hasHalfStar) {
        stars.push(
          <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" style={{ clipPath: 'inset(0 50% 0 0)' }} />
        );
      } else {
        stars.push(
          <Star key={i} className="h-4 w-4 text-gray-300" />
        );
      }
    }
    return stars;
  };

  // Handle image path - support both API URL and local images
  const getImagePath = (imagePath) => {
    if (!imagePath) return null;
    // If starts with http/https, use as is (from API)
    if (imagePath.startsWith('http')) return imagePath;
    // If starts with /, use as is (from public folder)
    if (imagePath.startsWith('/')) return imagePath;
    // Otherwise, assume it's in /images/ folder
    return `/images/${imagePath}`;
  };

  return (
    <div className="course-card cursor-pointer group">
      {/* Course Image */}
      <div className="aspect-video overflow-hidden bg-gray-200">
        {course.thumbnail ? (
          <img
            src={getImagePath(course.thumbnail)}
            alt={course.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="225"%3E%3Crect fill="%230ea5e9" width="400" height="225"/%3E%3Ctext fill="white" font-family="sans-serif" font-size="40" font-weight="bold" x="50%25" y="50%25" text-anchor="middle" dy=".3em"%3E' + (course.title?.charAt(0) || 'C') + '%3C/text%3E%3C/svg%3E';
            }}
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-orange-400 to-sky-600 flex items-center justify-center">
            <span className="text-white text-2xl font-bold">
              {course.title?.charAt(0) || 'C'}
            </span>
          </div>
        )}
      </div>

      {/* Course Info */}
      <div className="p-5">
        <h3 className="font-bold text-lg text-gray-900 mb-2 line-clamp-2 group-hover:text-orange-600 transition-colors">
          {course.title || 'Nama Course'}
        </h3>
        <p className="text-sm text-gray-600 mb-4 line-clamp-2">
          {course.description || 'Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan...'}
        </p>

        {/* Instructor Info */}
        <div className="flex items-center mb-4">
          <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-300 mr-3">
            {course.instructor_avatar ? (
              <img
                src={getImagePath(course.instructor_avatar)}
                alt={course.instructor_name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.style.display = 'none';
                  e.target.parentElement.innerHTML = `<div class="w-full h-full bg-sky-600 flex items-center justify-center text-white font-semibold">${course.instructor_name?.charAt(0) || 'I'}</div>`;
                }}
              />
            ) : (
              <div className="w-full h-full bg-sky-600 flex items-center justify-center text-white font-semibold">
                {course.instructor_name?.charAt(0) || 'I'}
              </div>
            )}
          </div>
          <div>
            <p className="font-semibold text-sm text-gray-900">
              {course.instructor_name || 'Jenna Ortega'}
            </p>
            <p className="text-xs text-gray-500">
              {course.instructor_title || 'Senior Accountant di Gojek'}
            </p>
          </div>
        </div>

        {/* Rating and Price */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-200">
          <div className="flex items-center space-x-2">
            <div className="flex items-center">
              {renderStars(course.rating || 3.5)}
            </div>
            <span className="text-sm font-semibold text-gray-900">
              {course.rating || '3.5'}
            </span>
            <span className="text-sm text-gray-500">
              ({course.total_reviews || '86'})
            </span>
          </div>
          <div className="text-green-600 font-bold text-lg">
            Rp {course.price ? course.price.toLocaleString('id-ID') : '300K'}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
