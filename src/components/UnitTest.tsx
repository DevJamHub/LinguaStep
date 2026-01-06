import { ArrowLeft, Volume2, Check, X, Star } from 'lucide-react';
import { useState } from 'react';

interface UnitTestProps {
  unitNumber: number;
  onBack: () => void;
}

export function UnitTest({ unitNumber, onBack }: UnitTestProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  // Mock questions
  const questions = [
    {
      type: 'multiple-choice',
      question: 'Pilih terjemahan yang benar untuk "Hello"',
      options: ['Halo', 'Selamat tinggal', 'Terima kasih', 'Maaf'],
      correctAnswer: 0,
      audio: true
    },
    {
      type: 'multiple-choice',
      question: 'Apa arti dari "Good morning"?',
      options: ['Selamat malam', 'Selamat pagi', 'Selamat siang', 'Selamat tidur'],
      correctAnswer: 1,
      audio: true
    },
    {
      type: 'fill-blank',
      question: 'Lengkapi kalimat: "How ___ you?"',
      options: ['is', 'are', 'am', 'be'],
      correctAnswer: 1,
      audio: false
    },
    {
      type: 'multiple-choice',
      question: 'Pilih kata yang tepat untuk "Terima kasih"',
      options: ['Please', 'Sorry', 'Thank you', 'Welcome'],
      correctAnswer: 2,
      audio: true
    },
    {
      type: 'translate',
      question: 'Terjemahkan: "Saya suka belajar bahasa"',
      options: ['I like learning languages', 'I love learning', 'I like language', 'I learn languages'],
      correctAnswer: 0,
      audio: false
    }
  ];

  const handleAnswerSelect = (index: number) => {
    if (isAnswered) return;
    setSelectedAnswer(index);
  };

  const handleSubmit = () => {
    if (selectedAnswer === null) return;
    
    setIsAnswered(true);
    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setIsAnswered(false);
    } else {
      setShowResults(true);
    }
  };

  const playAudio = () => {
    // Simulate audio playback
    console.log('Playing audio...');
  };

  if (showResults) {
    const percentage = (score / questions.length) * 100;
    const stars = percentage >= 90 ? 3 : percentage >= 70 ? 2 : percentage >= 50 ? 1 : 0;

    return (
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-3xl shadow-2xl p-8 text-center">
          <div className="mb-6">
            <div className="w-24 h-24 mx-auto bg-gradient-to-br from-secondary-400 to-orange-500 rounded-full flex items-center justify-center mb-4">
              <Star className="w-12 h-12 text-white" />
            </div>
            <h2 className="text-gray-800 mb-2">Unit {unitNumber} Selesai!</h2>
            <p className="text-gray-600">Kerja bagus! Terus pertahankan semangatnya.</p>
          </div>

          <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-6 mb-6">
            <div className="text-5xl mb-2">{percentage.toFixed(0)}%</div>
            <p className="text-gray-600 mb-4">{score} dari {questions.length} jawaban benar</p>
            
            <div className="flex justify-center gap-2 mb-4">
              {Array.from({ length: 3 }, (_, i) => (
                <Star
                  key={i}
                  className={`w-8 h-8 ${i < stars ? 'text-secondary-400 fill-secondary-400' : 'text-gray-300'}`}
                />
              ))}
            </div>

            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full">
              <span className="text-primary-600">+{score * 10} XP</span>
            </div>
          </div>

          <div className="flex gap-3">
            <button
              onClick={onBack}
              className="flex-1 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors"
            >
              Kembali
            </button>
            <button
              onClick={() => {
                setCurrentQuestion(0);
                setSelectedAnswer(null);
                setIsAnswered(false);
                setScore(0);
                setShowResults(false);
              }}
              className="flex-1 px-6 py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-xl hover:from-primary-600 hover:to-primary-700 transition-all"
            >
              Ulangi Unit
            </button>
          </div>
        </div>
      </div>
    );
  }

  const question = questions[currentQuestion];
  const isCorrect = selectedAnswer === question.correctAnswer;

  return (
    <div className="max-w-3xl mx-auto">
      {/* Header */}
      <div className="mb-6">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-800 mb-4 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Kembali</span>
        </button>

        {/* Progress */}
        <div className="mb-4">
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>Pertanyaan {currentQuestion + 1} dari {questions.length}</span>
            <span>{Math.round(((currentQuestion + 1) / questions.length) * 100)}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-primary-500 to-accent-500 transition-all duration-300"
              style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Question Card */}
      <div className="bg-white rounded-3xl shadow-xl p-8 mb-6">
        {/* Question */}
        <div className="mb-8">
          <div className="flex items-start gap-4">
            {question.audio && (
              <button
                onClick={playAudio}
                className="flex-shrink-0 w-12 h-12 bg-accent-500 hover:bg-accent-600 rounded-full flex items-center justify-center transition-colors"
              >
                <Volume2 className="w-6 h-6 text-white" />
              </button>
            )}
            <div className="flex-1">
              <h3 className="text-gray-800">{question.question}</h3>
            </div>
          </div>
        </div>

        {/* Options */}
        <div className="space-y-3 mb-8">
          {question.options.map((option, index) => {
            let buttonClass = 'w-full p-4 border-2 rounded-xl text-left transition-all hover:border-primary-400 hover:bg-primary-50';
            
            if (isAnswered) {
              if (index === question.correctAnswer) {
                buttonClass = 'w-full p-4 border-2 border-primary-500 bg-primary-50 rounded-xl text-left';
              } else if (index === selectedAnswer) {
                buttonClass = 'w-full p-4 border-2 border-red-500 bg-red-50 rounded-xl text-left';
              } else {
                buttonClass = 'w-full p-4 border-2 border-gray-200 bg-gray-50 rounded-xl text-left opacity-50';
              }
            } else if (selectedAnswer === index) {
              buttonClass = 'w-full p-4 border-2 border-primary-500 bg-primary-50 rounded-xl text-left';
            } else {
              buttonClass = 'w-full p-4 border-2 border-gray-300 rounded-xl text-left transition-all hover:border-primary-400 hover:bg-primary-50';
            }

            return (
              <button
                key={index}
                onClick={() => handleAnswerSelect(index)}
                disabled={isAnswered}
                className={buttonClass}
              >
                <div className="flex items-center justify-between">
                  <span className="text-gray-800">{option}</span>
                  {isAnswered && index === question.correctAnswer && (
                    <Check className="w-6 h-6 text-primary-600" />
                  )}
                  {isAnswered && index === selectedAnswer && index !== question.correctAnswer && (
                    <X className="w-6 h-6 text-red-600" />
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {/* Feedback */}
        {isAnswered && (
          <div className={`p-4 rounded-xl mb-4 ${isCorrect ? 'bg-primary-50 border-2 border-primary-200' : 'bg-red-50 border-2 border-red-200'}`}>
            <p className={`${isCorrect ? 'text-primary-700' : 'text-red-700'}`}>
              {isCorrect ? '✓ Benar! Jawaban Anda tepat.' : '✗ Hampir benar. Jawaban yang tepat adalah: ' + question.options[question.correctAnswer]}
            </p>
          </div>
        )}

        {/* Action Button */}
        <div>
          {!isAnswered ? (
            <button
              onClick={handleSubmit}
              disabled={selectedAnswer === null}
              className="w-full py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-xl hover:from-primary-600 hover:to-primary-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Periksa Jawaban
            </button>
          ) : (
            <button
              onClick={handleNext}
              className="w-full py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-xl hover:from-primary-600 hover:to-primary-700 transition-all"
            >
              {currentQuestion < questions.length - 1 ? 'Lanjut' : 'Lihat Hasil'}
            </button>
          )}
        </div>
      </div>

      {/* Score */}
      <div className="text-center text-gray-600">
        <p>Skor saat ini: {score} / {currentQuestion + (isAnswered ? 1 : 0)}</p>
      </div>
    </div>
  );
}
