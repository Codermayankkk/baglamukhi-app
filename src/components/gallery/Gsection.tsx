import { useMemo, useState } from 'react';
import { mandir } from '../../assets/imageConstants';

type GalleryCategory = 'all' | 'temple' | 'hawan-pooja' | 'guest-house';

interface GalleryImage {
  id: number;
  title: string;
  category: Exclude<GalleryCategory, 'all'>;
  image: string;
}

const categories: { id: GalleryCategory; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'temple', label: 'Temple' },
  { id: 'hawan-pooja', label: 'Hawan-Pooja' },
  { id: 'guest-house', label: 'Guest House' },
];

const galleryImages: GalleryImage[] = [
  {
    id: 1,
    title: 'Temple Covered Area',
    category: 'temple',
    image: mandir.mander_one,
  },
  {
    id: 2,
    title: 'Hawan Pooja Area',
    category: 'hawan-pooja',
    image: mandir.hawan_photo_one,
  },
  {
    id: 3,
    title: 'Guest House Sitting Room',
    category: 'guest-house',
    image: mandir.guest_house,
  },
  {
    id: 4,
    title: 'Temple Pravesh Dwar',
    category: 'temple',
    image: mandir.mandir_entrance,
  },
  {
    id: 5,
    title: 'Hawan Kund',
    category: 'hawan-pooja',
    image: mandir.hawan_photo_two,
  },
  {
    id: 6,
    title: 'Mataji Darshan',
    category: 'temple',
    image: mandir.mataji,
  },
  {
    id: 7,
    title: 'Guest House Building',
    category: 'guest-house',
    image: mandir.guest_house_two,
  },
  {
    id: 8,
    title: 'Hawan Mandap',
    category: 'hawan-pooja',
    image: mandir.hawan_three,
  },
  {
    id: 9,
    title: 'Devotees During Hawan',
    category: 'hawan-pooja',
    image: mandir.hawan_four,
  },
];

const Gsection = () => {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>('all');

  const filteredImages = useMemo(() => {
    if (activeCategory === 'all') {
      return galleryImages;
    }

    return galleryImages.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <section className="bg-white px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex justify-center overflow-x-auto">
          <div className="flex min-w-max items-center border-b border-gray-200">
            {categories.map((category, index) => {
              const isActive = activeCategory === category.id;

              return (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => setActiveCategory(category.id)}
                  className={`relative min-w-28 px-6 py-4 text-sm font-bold transition-colors duration-300 sm:min-w-36 ${
                    isActive
                      ? 'text-red-900'
                      : 'text-gray-500 hover:text-red-700'
                  }`}
                  aria-pressed={isActive}
                >
                  {category.label}
                  {isActive && (
                    <span className="absolute inset-x-5 bottom-0 h-0.5 bg-red-900" />
                  )}
                  {index < categories.length - 1 && (
                    <span className="absolute right-0 top-1/2 hidden h-4 -translate-y-1/2 border-r border-gray-200 sm:block" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filteredImages.map((item) => (
            <figure
              key={item.id}
              className="group aspect-[4/3] overflow-hidden bg-gray-100"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gsection;
