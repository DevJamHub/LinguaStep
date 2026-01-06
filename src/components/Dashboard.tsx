import { Book, FileQuestion, Languages, Trophy, Flame, Target, User, LogOut, BookOpen } from 'lucide-react';
import { useState } from 'react';
import { CourseSection } from './CourseSection';
import { QuestionBank } from './QuestionBank';
import { VocabularySection } from './VocabularySection';

interface DashboardProps {
  onLogout: () => void;
}

type TabType = 'courses' | 'questions' | 'vocabulary';

export function Dashboard({ onLogout }: DashboardProps) {
  const [activeTab, setActiveTab] = useState<TabType>('courses');
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);

  const stats = {
    streak: 7,
    totalXP: 2450,
    completedLessons: 45
  };

  const renderContent = () => {
    if (selectedCourse) {
      return <CourseSection courseId={selectedCourse} onBack={() => setSelectedCourse(null)} />;
    }

    switch (activeTab) {
      case 'courses':
        return <CoursesGrid onSelectCourse={setSelectedCourse} />;
      case 'questions':
        return <QuestionBank />;
      case 'vocabulary':
        return <VocabularySection />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-accent-50 to-secondary-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b-4 border-primary-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-accent-500 rounded-2xl flex items-center justify-center transform -rotate-6">
                <svg width="32" height="32" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 8C18 8 13 12 13 18C13 20 13.5 21.8 14.4 23.3L12 28L17 26C19 27.2 21.4 28 24 28C30 28 35 24 35 18C35 12 30 8 24 8Z" fill="white"/>
                </svg>
              </div>
              <div>
                <h3 className="text-gray-800">LinguaStep</h3>
                <p className="text-sm text-gray-500">Belajar Bahasa Universal</p>
              </div>
            </div>

            {/* Stats */}
            <div className="hidden md:flex items-center gap-6">
              <div className="flex items-center gap-2 bg-orange-100 px-4 py-2 rounded-full">
                <Flame className="w-5 h-5 text-orange-500" />
                <span className="text-orange-700">{stats.streak} hari</span>
              </div>
              <div className="flex items-center gap-2 bg-primary-100 px-4 py-2 rounded-full">
                <Target className="w-5 h-5 text-primary-600" />
                <span className="text-primary-700">{stats.totalXP} XP</span>
              </div>
              <div className="flex items-center gap-2 bg-accent-100 px-4 py-2 rounded-full">
                <Trophy className="w-5 h-5 text-accent-600" />
                <span className="text-accent-700">{stats.completedLessons} Pelajaran</span>
              </div>
            </div>

            {/* User Menu */}
            <div className="flex items-center gap-3">
              <button className="w-10 h-10 bg-gradient-to-br from-secondary-400 to-orange-400 rounded-full flex items-center justify-center hover:shadow-lg transition-shadow">
                <User className="w-5 h-5 text-white" />
              </button>
              <button
                onClick={onLogout}
                className="hidden sm:flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-xl transition-colors"
              >
                <LogOut className="w-4 h-4" />
                <span>Keluar</span>
              </button>
            </div>
          </div>

          {/* Mobile Stats */}
          <div className="md:hidden flex items-center gap-3 mt-4 overflow-x-auto">
            <div className="flex items-center gap-2 bg-orange-100 px-3 py-1.5 rounded-full whitespace-nowrap">
              <Flame className="w-4 h-4 text-orange-500" />
              <span className="text-sm text-orange-700">{stats.streak} hari</span>
            </div>
            <div className="flex items-center gap-2 bg-primary-100 px-3 py-1.5 rounded-full whitespace-nowrap">
              <Target className="w-4 h-4 text-primary-600" />
              <span className="text-sm text-primary-700">{stats.totalXP} XP</span>
            </div>
            <div className="flex items-center gap-2 bg-accent-100 px-3 py-1.5 rounded-full whitespace-nowrap">
              <Trophy className="w-4 h-4 text-accent-600" />
              <span className="text-sm text-accent-700">{stats.completedLessons}</span>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      {!selectedCourse && (
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex gap-2 overflow-x-auto">
              <button
                onClick={() => setActiveTab('courses')}
                className={`flex items-center gap-2 px-6 py-4 border-b-4 transition-colors whitespace-nowrap ${
                  activeTab === 'courses'
                    ? 'border-primary-500 text-primary-600'
                    : 'border-transparent text-gray-600 hover:text-gray-800'
                }`}
              >
                <BookOpen className="w-5 h-5" />
                <span>Kursus</span>
              </button>
              <button
                onClick={() => setActiveTab('questions')}
                className={`flex items-center gap-2 px-6 py-4 border-b-4 transition-colors whitespace-nowrap ${
                  activeTab === 'questions'
                    ? 'border-primary-500 text-primary-600'
                    : 'border-transparent text-gray-600 hover:text-gray-800'
                }`}
              >
                <FileQuestion className="w-5 h-5" />
                <span>Bank Soal</span>
              </button>
              <button
                onClick={() => setActiveTab('vocabulary')}
                className={`flex items-center gap-2 px-6 py-4 border-b-4 transition-colors whitespace-nowrap ${
                  activeTab === 'vocabulary'
                    ? 'border-primary-500 text-primary-600'
                    : 'border-transparent text-gray-600 hover:text-gray-800'
                }`}
              >
                <Languages className="w-5 h-5" />
                <span>Kosakata</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {renderContent()}
      </main>
    </div>
  );
}

function CoursesGrid({ onSelectCourse }: { onSelectCourse: (courseId: string) => void }) {
  const courses = [
    {
      id: 'english',
      name: 'Bahasa Inggris',
      flag: '🇬🇧',
      progress: 65,
      totalUnits: 120,
      completedUnits: 78,
      color: 'from-accent-400 to-accent-600'
    },
    {
      id: 'spanish',
      name: 'Bahasa Spanyol',
      flag: '🇪🇸',
      progress: 30,
      totalUnits: 100,
      completedUnits: 30,
      color: 'from-orange-400 to-orange-600'
    },
    {
      id: 'french',
      name: 'Bahasa Prancis',
      flag: '🇫🇷',
      progress: 15,
      totalUnits: 100,
      completedUnits: 15,
      color: 'from-accent-500 to-primary-500'
    },
    {
      id: 'japanese',
      name: 'Bahasa Jepang',
      flag: '🇯🇵',
      progress: 5,
      totalUnits: 150,
      completedUnits: 7,
      color: 'from-orange-500 to-primary-500'
    },
    {
      id: 'korean',
      name: 'Bahasa Korea',
      flag: '🇰🇷',
      progress: 0,
      totalUnits: 120,
      completedUnits: 0,
      color: 'from-primary-400 to-accent-500'
    },
    {
      id: 'mandarin',
      name: 'Bahasa Mandarin',
      flag: '🇨🇳',
      progress: 0,
      totalUnits: 150,
      completedUnits: 0,
      color: 'from-secondary-400 to-orange-500'
    }
  ];

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-gray-800 mb-2">Pilih Bahasa untuk Dipelajari</h2>
        <p className="text-gray-600">Mulai perjalanan belajar bahasa Anda hari ini</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <button
            key={course.id}
            onClick={() => onSelectCourse(course.id)}
            className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group transform hover:-translate-y-1"
          >
            <div className={`h-32 bg-gradient-to-br ${course.color} flex items-center justify-center`}>
              <span className="text-7xl">{course.flag}</span>
            </div>
            <div className="p-6">
              <h3 className="text-gray-800 mb-3">{course.name}</h3>
              
              {course.progress > 0 ? (
                <>
                  <div className="mb-3">
                    <div className="flex justify-between text-sm text-gray-600 mb-2">
                      <span>{course.completedUnits} / {course.totalUnits} unit</span>
                      <span>{course.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${course.color} transition-all duration-500`}
                        style={{ width: `${course.progress}%` }}
                      ></div>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1 text-sm text-primary-600">
                    <Book className="w-4 h-4" />
                    Lanjutkan Belajar
                  </span>
                </>
              ) : (
                <div className="text-gray-500">
                  <p className="mb-2">{course.totalUnits} unit tersedia</p>
                  <span className="inline-flex items-center gap-1 text-sm text-primary-600">
                    Mulai Sekarang →
                  </span>
                </div>
              )}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}