import { useTranslation } from 'react-i18next';
import {
  FaEnvelopeOpenText,
  FaLocationDot,
  FaMapLocationDot,
  FaPhoneVolume,
  FaPlaneDeparture,
  FaRoad,
  FaTrainSubway,
} from 'react-icons/fa6';

const InfoContact = () => {
  const { t } = useTranslation();

  const mapUrl =
    'https://www.google.com/maps?q=23.83417,76.24667%20(Maa%20Baglamukhi%20Mandir%20Nalkheda)&z=16&output=embed';

  const contactCards = [
    {
      id: 1,
      label: t('contact.emailAddress'),
      value: t('contact.email'),
      icon: FaEnvelopeOpenText,
    },
    {
      id: 2,
      label: t('contact.phoneNumber'),
      value: t('contact.phone'),
      icon: FaPhoneVolume,
    },
    {
      id: 3,
      label: t('contact.location'),
      value: t('contact.locationValue'),
      icon: FaMapLocationDot,
    },
  ];

  const reachOptions = [
    {
      id: 1,
      title: t('contact.byTrain'),
      icon: FaTrainSubway,
      description: t('contact.byTrainDesc'),
    },
    {
      id: 2,
      title: t('contact.byRoad'),
      icon: FaRoad,
      description: t('contact.byRoadDesc'),
    },
    {
      id: 3,
      title: t('contact.byAir'),
      icon: FaPlaneDeparture,
      description: t('contact.byAirDesc'),
    },
  ];
  return (
    <section className="relative bg-white pb-20">
      <div className="relative h-64 overflow-hidden bg-[#efe9dc]">
        <iframe
          title="Maa Baglamukhi Temple location map"
          src={mapUrl}
          className="h-full w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        <div className="absolute inset-0 bg-white/10" />
      </div>

      <div className="relative z-10 mx-auto -mt-28 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {contactCards.map((card) => {
            const Icon = card.icon;
            const isLocationCard = card.id === 3;
            const googleMapsUrl = 'https://www.google.com/maps/search/?api=1&query=23.83417,76.24667';

            const cardContent = (
              <article
                className={`flex min-h-72 flex-col items-center justify-center rounded-lg border border-gray-200 bg-white px-6 py-10 text-center shadow-sm ${isLocationCard ? 'cursor-pointer hover:shadow-md hover:border-red-300 transition-all' : ''}`}
              >
                <div className="mb-4 flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-[#8c4558]">
                  <span>{card.label}</span>
                  <span aria-hidden="true">-&gt;</span>
                </div>
                <p className="mb-7 max-w-sm text-xl font-extrabold leading-snug text-red-500 sm:text-2xl">
                  {card.value}
                </p>
                <Icon className="text-6xl text-[#8c4558]" aria-hidden="true" />
              </article>
            );

            if (isLocationCard) {
              return (
                <a
                  key={card.id}
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  {cardContent}
                </a>
              );
            }

            return cardContent;
          })}
        </div>

        <div className="mt-28 rounded-lg bg-white px-6 py-10 shadow-[0_20px_70px_rgba(31,41,55,0.12)] sm:px-10 lg:px-12">
          <h2 className="mb-10 text-center text-4xl font-extrabold text-red-500 sm:text-5xl">
            {t('contact.howToReach')}
          </h2>

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
            {reachOptions.map((option) => {
              const Icon = option.icon;

              return (
                <article key={option.id} className="flex gap-5">
                  <div className="pt-1">
                    <Icon className="text-4xl text-red-500" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-2xl font-extrabold text-red-500">
                      {option.title}
                    </h3>
                    <p className="text-base leading-7 text-gray-600">
                      {option.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-10 flex justify-center">
            <a
              href="https://www.google.com/maps/search/?api=1&query=23.83417,76.24667"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 rounded-full bg-[#8c4558] px-9 py-4 text-sm font-extrabold uppercase text-white transition hover:bg-[#743749]"
            >
              {t('contact.findUs')}
              <FaLocationDot aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoContact;
