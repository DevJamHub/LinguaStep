import { ArrowLeft, Lock, CheckCircle2, Star, Play } from 'lucide-react';
import { useState } from 'react';
import { UnitTest } from './UnitTest';

interface CourseSectionProps {
  courseId: string;
  onBack: () => void;
}

export function CourseSection({ courseId, onBack }: CourseSectionProps) {
  const [selectedUnit, setSelectedUnit] = useState<number | null>(null);

  // Mock course data
  const courseData = {
    english: { name: 'Bahasa Inggris', flag: '🇬🇧', sections: 6 },
    spanish: { name: 'Bahasa Spanyol', flag: '🇪🇸', sections: 5 },
    french: { name: 'Bahasa Prancis', flag: '🇫🇷', sections: 5 },
    japanese: { name: 'Bahasa Jepang', flag: '🇯🇵', sections: 7 },
    korean: { name: 'Bahasa Korea', flag: '🇰🇷', sections: 6 },
    mandarin: { name: 'Bahasa Mandarin', flag: '🇨🇳', sections: 7 }
  };

  const course = courseData[courseId as keyof typeof courseData];

  if (selectedUnit !== null) {
    return <UnitTest unitNumber={selectedUnit} onBack={() => setSelectedUnit(null)} />;
  }

  // Generate sections with units
  const sections = Array.from({ length: course.sections }, (_, sectionIndex) => ({
    id: sectionIndex + 1,
    title: `Bagian ${sectionIndex + 1}: ${getSectionTitle(sectionIndex)}`,
    units: Array.from({ length: 24 }, (_, unitIndex) => ({
      id: unitIndex + 1,
      title: `Unit ${unitIndex + 1}`,
      isCompleted: unitIndex < 12, // Mock: first 12 units completed
      isLocked: sectionIndex > 0 && unitIndex === 0 ? false : sectionIndex > 0 && !sections[sectionIndex - 1]?.units[23]?.isCompleted,
      stars: unitIndex < 12 ? Math.floor(Math.random() * 3) + 1 : 0
    }))
  }));

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-800 mb-4 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Kembali ke Kursus</span>
        </button>
        
        <div className="flex items-center gap-4 mb-4">
          <span className="text-6xl">{course.flag}</span>
          <div>
            <h2 className="text-gray-800">{course.name}</h2>
            <p className="text-gray-600">Pilih unit untuk memulai latihan</p>
          </div>
        </div>
      </div>

      {/* Course Path */}
      <div className="space-y-12">
        {sections.map((section, sectionIndex) => (
          <div key={section.id}>
            {/* Section Header */}
            <div className="bg-white rounded-2xl shadow-md p-6 mb-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-gray-800 mb-1">{section.title}</h3>
                  <p className="text-gray-600">
                    {section.units.filter(u => u.isCompleted).length} / {section.units.length} unit selesai
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-2xl mb-1">
                    {section.units.filter(u => u.isCompleted).reduce((acc, u) => acc + u.stars, 0)} ⭐
                  </div>
                  <p className="text-sm text-gray-500">Total bintang</p>
                </div>
              </div>
              
              {/* Progress Bar */}
              <div className="mt-4">
                <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-primary-500 to-accent-500 transition-all duration-500"
                    style={{ width: `${(section.units.filter(u => u.isCompleted).length / section.units.length) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Units Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {section.units.map((unit, unitIndex) => (
                <UnitCard
                  key={unit.id}
                  unit={unit}
                  sectionIndex={sectionIndex}
                  unitIndex={unitIndex}
                  onClick={() => !unit.isLocked && setSelectedUnit((sectionIndex * 24) + unitIndex + 1)}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

interface UnitCardProps {
  unit: {
    id: number;
    title: string;
    isCompleted: boolean;
    isLocked: boolean;
    stars: number;
  };
  sectionIndex: number;
  unitIndex: number;
  onClick: () => void;
}

function UnitCard({ unit, sectionIndex, unitIndex, onClick }: UnitCardProps) {
  const colors = [
    'from-primary-400 to-primary-600',
    'from-accent-400 to-accent-600',
    'from-secondary-400 to-orange-500',
    'from-orange-400 to-orange-600',
    'from-primary-500 to-accent-500',
    'from-accent-500 to-primary-500'
  ];

  const color = colors[(sectionIndex + unitIndex) % colors.length];

  if (unit.isLocked) {
    return (
      <div className="bg-gray-200 rounded-2xl p-4 flex flex-col items-center justify-center aspect-square opacity-50">
        <Lock className="w-8 h-8 text-gray-400 mb-2" />
        <p className="text-xs text-gray-500 text-center">{unit.title}</p>
      </div>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`relative bg-gradient-to-br ${color} rounded-2xl p-4 flex flex-col items-center justify-center aspect-square hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group`}
    >
      {unit.isCompleted ? (
        <>
          <CheckCircle2 className="w-10 h-10 text-white mb-2" />
          <p className="text-sm text-white mb-2">{unit.title}</p>
          <div className="flex gap-1">
            {Array.from({ length: 3 }, (_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${i < unit.stars ? 'text-secondary-300 fill-secondary-300' : 'text-white/30'}`}
              />
            ))}
          </div>
          <div className="absolute top-2 right-2 bg-white/20 rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity">
            <Play className="w-4 h-4 text-white" />
          </div>
        </>
      ) : (
        <>
          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-2">
            <Play className="w-6 h-6 text-white" />
          </div>
          <p className="text-sm text-white">{unit.title}</p>
        </>
      )}
    </button>
  );
}

function getSectionTitle(index: number): string {
  const titles = [
    'Dasar-dasar',
    'Percakapan Sehari-hari',
    'Tata Bahasa Menengah',
    'Kosakata Lanjutan',
    'Ekspresi & Idiom',
    'Budaya & Tradisi',
    'Komunikasi Profesional'
  ];
  return titles[index] || `Tingkat ${index + 1}`;
}
