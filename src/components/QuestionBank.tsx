import { Search, Filter, Clock, Target, TrendingUp } from 'lucide-react';
import { useState } from 'react';

export function QuestionBank() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Semua', count: 156 },
    { id: 'grammar', name: 'Tata Bahasa', count: 45 },
    { id: 'vocabulary', name: 'Kosakata', count: 52 },
    { id: 'listening', name: 'Mendengar', count: 28 },
    { id: 'reading', name: 'Membaca', count: 31 }
  ];

  const questionSets = [
    {
      id: 1,
      title: 'Tes Tata Bahasa Dasar',
      category: 'grammar',
      questions: 20,
      difficulty: 'Pemula',
      timeEstimate: '15 menit',
      completed: true,
      score: 85,
      color: 'from-primary-400 to-primary-600'
    },
    {
      id: 2,
      title: 'Kosakata Sehari-hari',
      category: 'vocabulary',
      questions: 30,
      difficulty: 'Pemula',
      timeEstimate: '20 menit',
      completed: true,
      score: 92,
      color: 'from-accent-400 to-accent-600'
    },
    {
      id: 3,
      title: 'Latihan Mendengar - Percakapan',
      category: 'listening',
      questions: 15,
      difficulty: 'Menengah',
      timeEstimate: '25 menit',
      completed: false,
      score: 0,
      color: 'from-secondary-400 to-orange-500'
    },
    {
      id: 4,
      title: 'Pemahaman Teks Pendek',
      category: 'reading',
      questions: 25,
      difficulty: 'Menengah',
      timeEstimate: '30 menit',
      completed: false,
      score: 0,
      color: 'from-orange-400 to-orange-600'
    },
    {
      id: 5,
      title: 'Tata Bahasa Lanjutan',
      category: 'grammar',
      questions: 35,
      difficulty: 'Lanjutan',
      timeEstimate: '40 menit',
      completed: false,
      score: 0,
      color: 'from-primary-500 to-accent-500'
    },
    {
      id: 6,
      title: 'Idiom dan Frasa Umum',
      category: 'vocabulary',
      questions: 20,
      difficulty: 'Lanjutan',
      timeEstimate: '25 menit',
      completed: true,
      score: 78,
      color: 'from-accent-500 to-primary-500'
    }
  ];

  const filteredSets = questionSets.filter(set => {
    const matchesCategory = selectedCategory === 'all' || set.category === selectedCategory;
    const matchesSearch = set.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-gray-800 mb-2">Bank Soal</h2>
        <p className="text-gray-600">Latihan soal untuk mengasah kemampuan bahasa Anda</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-white rounded-2xl shadow-md p-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
              <Target className="w-6 h-6 text-primary-600" />
            </div>
            <div>
              <p className="text-2xl text-gray-800">156</p>
              <p className="text-sm text-gray-600">Total Soal</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-accent-100 rounded-xl flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-accent-600" />
            </div>
            <div>
              <p className="text-2xl text-gray-800">85%</p>
              <p className="text-sm text-gray-600">Rata-rata Skor</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-secondary-100 rounded-xl flex items-center justify-center">
              <Clock className="w-6 h-6 text-secondary-600" />
            </div>
            <div>
              <p className="text-2xl text-gray-800">12</p>
              <p className="text-sm text-gray-600">Set Diselesaikan</p>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="bg-white rounded-2xl shadow-md p-6 mb-6">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Search */}
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Cari set soal..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary-500 focus:outline-none transition-colors"
            />
          </div>

          {/* Category Filter */}
          <div className="flex gap-2 overflow-x-auto">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-3 rounded-xl whitespace-nowrap transition-all ${
                  selectedCategory === category.id
                    ? 'bg-primary-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Question Sets Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSets.map(set => (
          <div key={set.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group transform hover:-translate-y-1">
            {/* Header */}
            <div className={`h-24 bg-gradient-to-br ${set.color} flex items-center justify-center relative overflow-hidden`}>
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="relative z-10">
                <p className="text-white text-center px-4">{set.questions} Soal</p>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="mb-4">
                <h4 className="text-gray-800 mb-2">{set.title}</h4>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="px-2 py-1 bg-primary-100 text-primary-700 rounded-full">
                    {set.difficulty}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {set.timeEstimate}
                  </span>
                </div>
              </div>

              {set.completed ? (
                <div className="mb-4">
                  <div className="flex justify-between text-sm text-gray-600 mb-2">
                    <span>Skor terakhir</span>
                    <span className="text-primary-600">{set.score}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${set.color} transition-all duration-500`}
                      style={{ width: `${set.score}%` }}
                    ></div>
                  </div>
                </div>
              ) : (
                <div className="mb-4">
                  <p className="text-sm text-gray-500">Belum dikerjakan</p>
                </div>
              )}

              <button className="w-full py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-xl hover:from-primary-600 hover:to-primary-700 transition-all">
                {set.completed ? 'Ulangi' : 'Mulai'}
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredSets.length === 0 && (
        <div className="text-center py-12">
          <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Filter className="w-12 h-12 text-gray-400" />
          </div>
          <h3 className="text-gray-800 mb-2">Tidak ada hasil</h3>
          <p className="text-gray-600">Coba ubah filter atau kata kunci pencarian Anda</p>
        </div>
      )}
    </div>
  );
}
