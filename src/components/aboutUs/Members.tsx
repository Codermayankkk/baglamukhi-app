import React from 'react';
import { useTranslation } from 'react-i18next';

interface Member {
  role: string;
  name: string;
}

const membersData: Member[] = [
  {
    role: "CHAIRMAN",
    name: "Sub-Divisional Officer Susner-Nalkheda (Revenue)",
  },
  {
    role: "SECRETARY",
    name: "Tehsildar Nalkheda",
  },
  {
    role: "MEMBER",
    name: "Sub-Divisional Officer, Rural Mechanical Services, Agar",
  },
  {
    role: "MEMBER",
    name: "Sub-Divisional Officer Public Works Department Susner",
  },
  {
    role: "MEMBER",
    name: "Sub-Divisional Officer PHE Agar",
  },
  {
    role: "MEMBER",
    name: "Chief Executive Officer, District Panchayat, Nalkheda",
  },
  {
    role: "MEMBER",
    name: "Chief Municipal Officer, Municipal Council, Nalkheda",
  },
  {
    role: "MEMBER",
    name: "Assistant Veterinary Officer Nalkheda",
  },
  {
    role: "MEMBER",
    name: "Junior Engineer M.P. Electricity Board Nalkheda",
  },
  {
    role: "MEMBER",
    name: "Block Medical Officer Nalkheda",
  },
  {
    role: "MEMBER",
    name: "Police Station Incharge Nalkheda",
  },
  {
    role: "MEMBER",
    name: "Shri Gopal-Manoharlal Bhilala",
  },
];

const Members: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl font-extrabold text-red-700 text-center mb-12">
          {t('about.membersOfTempleCommittee')}
        </h2>

        {/* Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {membersData.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-lg font-bold text-red-600 mb-2">
                {t(`about.${member.role.toLowerCase()}`)}
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                {member.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Members;
