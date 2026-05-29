import { useTranslation } from 'react-i18next';

interface TempleInfoCardProps {
  subtitleKey: string;
  titleKey: string;
  items: Array<{
    labelKey: string;
    valueKey: string;
  }>;
}

const TempleInfoCard = ({ subtitleKey, titleKey, items }: TempleInfoCardProps) => {
  const { t } = useTranslation();

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
      <p className="text-sm text-gray-500 mb-2">{t(subtitleKey)}</p>
      <h3 className="text-xl font-bold text-red-700 mb-6">{t(titleKey)}</h3>
      
      <div className="space-y-4">
        {items.map((item, index) => (
          <div key={index} className="flex items-start gap-3">
            <div className="w-0.5 h-full bg-red-600 shrink-0 mt-2" />
            <div className="flex-1">
              <p className="font-semibold text-gray-800 mb-1">{t(item.labelKey)}</p>
              <p className="text-sm text-gray-600">{t(item.valueKey)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TempleInfoCard;
