import React from 'react';
import { useTranslation } from 'react-i18next';
import { mandir } from '../../assets/imageConstants';

interface NearTempleData {
  id: number;
  title: string;
  description: string;
  image: string;
}

const nearTempleData: NearTempleData[] = [
  {
    id: 1,
    title: "Mahakaleshwar Temple",
    description: "Shri Mahakaleshwar of Ujjaini is one of the twelve famous Jyotirlingas in India. The glory of Mahakaleshwar temple has been described in detail in various Puranas.",
    image: mandir.mahakal,
  },
  {
    id: 2,
    title: "Baijnath Temple",
    description: "Baijnath Mahadev Temple is situated on Susner Road (Ujjain-Kota Road National Highway 27) in Agar-Malwa district. Baijnath Mahadev Temple is one of the major tourist and religious places of Agar-Malwa district. This is the only temple in India which was built by the British. The temple is situated on the banks of the Banganga River. Its construction work started in 1528 and was completed in 1536. The height of the temple peak is about 50 feet.",
    image: mandir.baijnath,
  },
  {
    id: 3,
    title: "Omkareshwar Temple",
    description: "Shri Omkareshwar Jyotirling. Omkareshwar Jyotirling temple situated on Omkar mountain in the middle of Narmada river is the center of extreme faith of Hindus.",
    image: mandir.omkareshwar,
  },
];

const NearTempleCard: React.FC<{ data: NearTempleData }> = ({ data }) => {
  return (
    <div className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer">
      <div className="relative aspect-4/3 overflow-hidden">
        <img src={data.image} alt={data.title} className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"/>
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out" />
        <div className="absolute inset-0 flex flex-col justify-end p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
          <h3 className="text-white text-xl font-bold mb-2 drop-shadow-lg">
            {data.title}
          </h3>
          <p className="text-gray-200 text-sm leading-relaxed drop-shadow-md">
            {data.description}
          </p>
        </div>
      </div>
    </div>
  );
};

const NearTemple: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-linear-to-b from-amber-50 to-orange-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="container-lg max-w-[1600px] mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
            {t('nearTemple.nearbyTemples')}
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            {t('nearTemple.description')}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {nearTempleData.map((temple) => (
            <NearTempleCard key={temple.id} data={temple} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NearTemple;