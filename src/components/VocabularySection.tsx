import { Search, BookOpen, Volume2, Star, Plus, Filter } from 'lucide-react';
import { useState } from 'react';

export function VocabularySection() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState<'list' | 'flashcard'>('list');

  const categories = [
    { id: 'all', name: 'Semua', count: 324 },
    { id: 'basic', name: 'Dasar', count: 120 },
    { id: 'food', name: 'Makanan', count: 48 },
    { id: 'travel', name: 'Perjalanan', count: 56 },
    { id: 'business', name: 'Bisnis', count: 64 },
    { id: 'daily', name: 'Sehari-hari', count: 36 }
  ];

  const vocabularyLists = [
    {
      id: 1,
      category: 'basic',
      title: 'Kata Kerja Dasar',
      words: [
        { word: 'Go', translation: 'Pergi', example: 'I go to school', pronunciation: '/ɡəʊ/', saved: true },
        { word: 'Come', translation: 'Datang', example: 'Come here please', pronunciation: '/kʌm/', saved: true },
        { word: 'See', translation: 'Melihat', example: 'I see you', pronunciation: '/siː/', saved: false },
        { word: 'Do', translation: 'Melakukan', example: 'What do you do?', pronunciation: '/duː/', saved: false }
      ],
      mastered: 2,
      total: 4,
      color: 'from-primary-400 to-primary-600'
    },
    {
      id: 2,
      category: 'food',
      title: 'Nama Makanan',
      words: [
        { word: 'Apple', translation: 'Apel', example: 'An apple a day', pronunciation: '/ˈæp.əl/', saved: true },
        { word: 'Bread', translation: 'Roti', example: 'Fresh bread', pronunciation: '/bred/', saved: false },
        { word: 'Coffee', translation: 'Kopi', example: 'Hot coffee', pronunciation: '/ˈkɒf.i/', saved: true },
        { word: 'Water', translation: 'Air', example: 'Drink water', pronunciation: '/ˈwɔː.tər/', saved: false }
      ],
      mastered: 2,
      total: 4,
      color: 'from-secondary-400 to-orange-500'
    },
    {
      id: 3,
      category: 'travel',
      title: 'Kosakata Perjalanan',
      words: [
        { word: 'Airport', translation: 'Bandara', example: 'At the airport', pronunciation: '/ˈeə.pɔːt/', saved: false },
        { word: 'Ticket', translation: 'Tiket', example: 'Buy a ticket', pronunciation: '/ˈtɪk.ɪt/', saved: true },
        { word: 'Hotel', translation: 'Hotel', example: 'Book a hotel', pronunciation: '/həʊˈtel/', saved: false },
        { word: 'Train', translation: 'Kereta', example: 'Take the train', pronunciation: '/treɪn/', saved: false }
      ],
      mastered: 1,
      total: 4,
      color: 'from-accent-400 to-accent-600'
    },
    {
      id: 4,
      category: 'business',
      title: 'Istilah Bisnis',
      words: [
        { word: 'Meeting', translation: 'Rapat', example: 'Schedule a meeting', pronunciation: '/ˈmiː.tɪŋ/', saved: true },
        { word: 'Project', translation: 'Proyek', example: 'Start a project', pronunciation: '/ˈprɒdʒ.ekt/', saved: false },
        { word: 'Report', translation: 'Laporan', example: 'Write a report', pronunciation: '/rɪˈpɔːt/', saved: false },
        { word: 'Client', translation: 'Klien', example: 'Meet the client', pronunciation: '/ˈklaɪ.ənt/', saved: true }
      ],
      mastered: 2,
      total: 4,
      color: 'from-orange-400 to-orange-600'
    },
    {
      id: 5,
      category: 'daily',
      title: 'Aktivitas Harian',
      words: [
        { word: 'Wake up', translation: 'Bangun tidur', example: 'I wake up at 7', pronunciation: '/weɪk ʌp/', saved: false },
        { word: 'Brush', translation: 'Menyikat', example: 'Brush your teeth', pronunciation: '/brʌʃ/', saved: true },
        { word: 'Shower', translation: 'Mandi', example: 'Take a shower', pronunciation: '/ˈʃaʊ.ər/', saved: false },
        { word: 'Sleep', translation: 'Tidur', example: 'Go to sleep', pronunciation: '/sliːp/', saved: false }
      ],
      mastered: 1,
      total: 4,
      color: 'from-primary-500 to-accent-500'
    },
    {
      id: 6,
      category: 'basic',
      title: 'Kata Sifat Umum',
      words: [
        { word: 'Good', translation: 'Baik', example: 'Very good', pronunciation: '/ɡʊd/', saved: true },
        { word: 'Bad', translation: 'Buruk', example: 'Not bad', pronunciation: '/bæd/', saved: false },
        { word: 'Big', translation: 'Besar', example: 'Big house', pronunciation: '/bɪɡ/', saved: true },
        { word: 'Small', translation: 'Kecil', example: 'Small car', pronunciation: '/smɔːl/', saved: false }
      ],
      mastered: 2,
      total: 4,
      color: 'from-accent-500 to-primary-500'
    }
  ];

  const filteredLists = vocabularyLists.filter(list => {
    const matchesCategory = selectedCategory === 'all' || list.category === selectedCategory;
    const matchesSearch = list.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      list.words.some(w => w.word.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const playPronunciation = (word: string) => {
    console.log('Playing pronunciation for:', word);
  };

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-gray-800 mb-2">Kosakata</h2>
        <p className="text-gray-600">Pelajari dan simpan kosakata baru</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-white rounded-2xl shadow-md p-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-primary-600" />
            </div>
            <div>
              <p className="text-2xl text-gray-800">324</p>
              <p className="text-sm text-gray-600">Total Kata</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-accent-100 rounded-xl flex items-center justify-center">
              <Star className="w-6 h-6 text-accent-600" />
            </div>
            <div>
              <p className="text-2xl text-gray-800">156</p>
              <p className="text-sm text-gray-600">Dikuasai</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-secondary-100 rounded-xl flex items-center justify-center">
              <Plus className="w-6 h-6 text-secondary-600" />
            </div>
            <div>
              <p className="text-2xl text-gray-800">48</p>
              <p className="text-sm text-gray-600">Baru Minggu Ini</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
              <Filter className="w-6 h-6 text-orange-600" />
            </div>
            <div>
              <p className="text-2xl text-gray-800">6</p>
              <p className="text-sm text-gray-600">Kategori</p>
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
              placeholder="Cari kosakata..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary-500 focus:outline-none transition-colors"
            />
          </div>

          {/* View Mode Toggle */}
          <div className="flex gap-2">
            <button
              onClick={() => setViewMode('list')}
              className={`px-4 py-3 rounded-xl transition-all ${
                viewMode === 'list'
                  ? 'bg-primary-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Daftar
            </button>
            <button
              onClick={() => setViewMode('flashcard')}
              className={`px-4 py-3 rounded-xl transition-all ${
                viewMode === 'flashcard'
                  ? 'bg-primary-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Kartu
            </button>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex gap-2 mt-4 overflow-x-auto">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-xl whitespace-nowrap transition-all text-sm ${
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

      {/* Vocabulary Lists */}
      <div className="space-y-6">
        {filteredLists.map(list => (
          <div key={list.id} className="bg-white rounded-2xl shadow-lg overflow-hidden">
            {/* List Header */}
            <div className={`h-20 bg-gradient-to-r ${list.color} flex items-center justify-between px-6`}>
              <div>
                <h3 className="text-white">{list.title}</h3>
                <p className="text-white/90 text-sm">{list.mastered} / {list.total} dikuasai</p>
              </div>
              <div className="text-right">
                <div className="text-white text-2xl">{Math.round((list.mastered / list.total) * 100)}%</div>
              </div>
            </div>

            {/* Words */}
            <div className="p-6">
              <div className="space-y-4">
                {list.words.map((wordItem, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 border-2 border-gray-200 rounded-xl hover:border-primary-300 hover:bg-primary-50 transition-all"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <button
                          onClick={() => playPronunciation(wordItem.word)}
                          className="w-8 h-8 bg-accent-500 hover:bg-accent-600 rounded-full flex items-center justify-center transition-colors flex-shrink-0"
                        >
                          <Volume2 className="w-4 h-4 text-white" />
                        </button>
                        <div>
                          <h4 className="text-gray-800">{wordItem.word}</h4>
                          <p className="text-sm text-gray-500">{wordItem.pronunciation}</p>
                        </div>
                      </div>
                      <p className="text-gray-700 ml-11 mb-1">{wordItem.translation}</p>
                      <p className="text-sm text-gray-500 ml-11 italic">"{wordItem.example}"</p>
                    </div>
                    <button
                      className={`ml-4 flex-shrink-0 ${
                        wordItem.saved ? 'text-secondary-400' : 'text-gray-300 hover:text-secondary-400'
                      } transition-colors`}
                    >
                      <Star className={`w-6 h-6 ${wordItem.saved ? 'fill-secondary-400' : ''}`} />
                    </button>
                  </div>
                ))}
              </div>

              {/* Practice Button */}
              <button className="w-full mt-4 py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-xl hover:from-primary-600 hover:to-primary-700 transition-all">
                Latihan Kosakata Ini
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredLists.length === 0 && (
        <div className="text-center py-12">
          <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Search className="w-12 h-12 text-gray-400" />
          </div>
          <h3 className="text-gray-800 mb-2">Tidak ada hasil</h3>
          <p className="text-gray-600">Coba ubah filter atau kata kunci pencarian Anda</p>
        </div>
      )}
    </div>
  );
}
