import React, { useState } from 'react';
import { Book } from '../data/books';
import { X, ShoppingBag, Bookmark, Type, BookOpen } from 'lucide-react';

interface BookReaderModalProps {
  book: Book | null;
  onClose: () => void;
  onAddToCart: (book: Book) => void;
}

export const BookReaderModal: React.FC<BookReaderModalProps> = ({
  book,
  onClose,
  onAddToCart,
}) => {
  const [fontSize, setFontSize] = useState<'normal' | 'large' | 'huge'>('large');
  const [theme, setTheme] = useState<'ivory' | 'sepia' | 'dark'>('ivory');

  if (!book) return null;

  const fontClasses = {
    normal: 'text-base leading-relaxed',
    large: 'text-lg leading-loose',
    huge: 'text-xl leading-loose',
  };

  const themeClasses = {
    ivory: 'bg-[#faf8f5] text-stone-900 border-stone-200',
    sepia: 'bg-[#f4ecd8] text-[#433422] border-[#e0d4be]',
    dark: 'bg-[#1e1e1e] text-[#d4d4d4] border-stone-800',
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('vi-VN').format(amount) + ' đ';
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div
        className={`w-full max-w-3xl rounded-2xl shadow-2xl border flex flex-col max-h-[92vh] overflow-hidden transition-colors ${themeClasses[theme]}`}
      >
        {/* Reader Top Controls Bar */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-stone-200/50 shrink-0">
          <div className="flex items-center gap-3">
            <BookOpen className="w-5 h-5 text-amber-800" />
            <div>
              <h2 className="text-sm font-semibold truncate max-w-[220px] sm:max-w-md">
                {book.title}
              </h2>
              <p className="text-xs opacity-75">{book.author}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Font Size Selector */}
            <div className="hidden sm:flex items-center gap-1 p-1 rounded-lg border border-stone-300/60 text-xs">
              <Type className="w-3.5 h-3.5 ml-1 opacity-70" />
              <button
                onClick={() => setFontSize('normal')}
                className={`px-2 py-0.5 rounded cursor-pointer ${fontSize === 'normal' ? 'bg-stone-800 text-white' : 'hover:opacity-100 opacity-60'}`}
              >
                A-
              </button>
              <button
                onClick={() => setFontSize('large')}
                className={`px-2 py-0.5 rounded cursor-pointer ${fontSize === 'large' ? 'bg-stone-800 text-white' : 'hover:opacity-100 opacity-60'}`}
              >
                A
              </button>
              <button
                onClick={() => setFontSize('huge')}
                className={`px-2 py-0.5 rounded cursor-pointer ${fontSize === 'huge' ? 'bg-stone-800 text-white' : 'hover:opacity-100 opacity-60'}`}
              >
                A+
              </button>
            </div>

            {/* Theme Toggle (Ivory, Sepia, Dark) */}
            <div className="flex items-center gap-1.5">
              <button
                onClick={() => setTheme('ivory')}
                title="Giấy ngà Phần Lan"
                className={`w-6 h-6 rounded-full border-2 bg-[#faf8f5] cursor-pointer ${theme === 'ivory' ? 'border-amber-800 scale-110' : 'border-stone-300'}`}
              />
              <button
                onClick={() => setTheme('sepia')}
                title="Giấy bách thảo hoài niệm"
                className={`w-6 h-6 rounded-full border-2 bg-[#f4ecd8] cursor-pointer ${theme === 'sepia' ? 'border-amber-800 scale-110' : 'border-stone-300'}`}
              />
              <button
                onClick={() => setTheme('dark')}
                title="Chế độ đọc ban đêm"
                className={`w-6 h-6 rounded-full border-2 bg-[#1e1e1e] cursor-pointer ${theme === 'dark' ? 'border-amber-600 scale-110' : 'border-stone-500'}`}
              />
            </div>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg hover:bg-stone-500/10 transition-colors cursor-pointer ml-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Reader Reading Canvas */}
        <div className="flex-1 overflow-y-auto px-6 sm:px-12 py-8 sm:py-10">
          <div className="max-w-xl mx-auto">
            {/* Chapter Header */}
            <div className="text-center mb-8 pb-6 border-b border-stone-300/40">
              <div className="text-xs uppercase tracking-widest opacity-60 mb-2 font-medium">
                Ấn phẩm phát hành bởi {book.publisher}
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold mb-2">
                {book.sampleExcerpt.chapter}
              </h3>
              {book.translator && (
                <p className="text-xs italic opacity-75">
                  Bản dịch tiếng Việt bởi: {book.translator}
                </p>
              )}
            </div>

            {/* Book Excerpt Text */}
            <div className={`font-reading space-y-6 ${fontClasses[fontSize]}`}>
              {book.sampleExcerpt.text.map((paragraph, idx) => (
                <p key={idx} className="indent-6 sm:indent-8 text-justify">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Reader Notice */}
            <div className="mt-12 p-6 rounded-xl border border-stone-300/50 bg-stone-500/5 text-center">
              <Bookmark className="w-5 h-5 mx-auto mb-2 opacity-60" />
              <h4 className="text-sm font-semibold mb-1">
                Bạn vừa đọc xong phần trích đoạn mẫu
              </h4>
              <p className="text-xs opacity-75 max-w-md mx-auto mb-4">
                Toàn bộ tác phẩm gồm {book.pages} trang in với chất lượng giấy mỹ thuật cao cấp cùng các minh họa nguyên tác.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={() => {
                    onAddToCart(book);
                    onClose();
                  }}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-stone-900 text-white text-xs font-semibold rounded-lg hover:bg-stone-800 transition-all cursor-pointer shadow-xs"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Mua trọn bộ tác phẩm &middot; {formatCurrency(book.price)}</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Reader Bottom Bar */}
        <div className="px-5 py-3 border-t border-stone-200/50 flex items-center justify-between text-xs opacity-70 shrink-0">
          <span>Chương mẫu trích xuất chính thức &middot; Trung Hiếu Books</span>
          <span>ISBN: {book.isbn}</span>
        </div>
      </div>
    </div>
  );
};
