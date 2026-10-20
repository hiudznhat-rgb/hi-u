import React, { useState } from 'react';
import { Book } from '../data/books';
import { BookOpen, Type, ShoppingBag, Bookmark, ArrowLeft, ArrowRight, Check } from 'lucide-react';

interface ReadingRoomPageProps {
  books: Book[];
  onAddToCart: (book: Book) => void;
  onOpenQuickView: (book: Book) => void;
}

export const ReadingRoomPage: React.FC<ReadingRoomPageProps> = ({
  books,
  onAddToCart,
  onOpenQuickView,
}) => {
  const [selectedBook, setSelectedBook] = useState<Book>(books[0]);
  const [fontSize, setFontSize] = useState<'normal' | 'large' | 'huge'>('large');
  const [theme, setTheme] = useState<'ivory' | 'sepia' | 'dark'>('ivory');
  const [bookmarked, setBookmarked] = useState<boolean>(false);

  const fontClasses = {
    normal: 'text-base leading-relaxed',
    large: 'text-lg leading-loose',
    huge: 'text-xl leading-loose',
  };

  const themeClasses = {
    ivory: 'bg-[#faf8f5] text-stone-900 border-stone-200',
    sepia: 'bg-[#f4ecd8] text-[#433422] border-[#e0d4be]',
    dark: 'bg-[#18181b] text-[#d4d4d8] border-stone-800',
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('vi-VN').format(amount) + ' đ';
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Page Header */}
      <div className="border-b border-stone-200 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="text-xs font-semibold uppercase tracking-wider text-amber-800 mb-1">
            Không Gian Đọc Trực Tuyến &middot; Trung Hiếu Books
          </div>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-stone-900">
            Phòng Đọc Thử Sách Số
          </h1>
          <p className="text-stone-600 text-sm mt-1 max-w-xl">
            Thưởng thức trọn vẹn chương mở đầu của các tác phẩm tinh hoa trước khi quyết định bổ sung vào tủ sách gia đình.
          </p>
        </div>

        {/* Reader Themes & Typography Settings Bar */}
        <div className="flex items-center gap-4 bg-white p-2.5 rounded-xl border border-stone-200 shadow-xs">
          {/* Font Size Selector */}
          <div className="flex items-center gap-1 text-xs">
            <Type className="w-3.5 h-3.5 text-stone-400 ml-1" />
            <button
              onClick={() => setFontSize('normal')}
              className={`px-2.5 py-1 rounded-md cursor-pointer ${
                fontSize === 'normal' ? 'bg-stone-900 text-white font-bold' : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              A-
            </button>
            <button
              onClick={() => setFontSize('large')}
              className={`px-2.5 py-1 rounded-md cursor-pointer ${
                fontSize === 'large' ? 'bg-stone-900 text-white font-bold' : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              A
            </button>
            <button
              onClick={() => setFontSize('huge')}
              className={`px-2.5 py-1 rounded-md cursor-pointer ${
                fontSize === 'huge' ? 'bg-stone-900 text-white font-bold' : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              A+
            </button>
          </div>

          <div className="h-4 w-px bg-stone-200" />

          {/* Theme Toggles */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setTheme('ivory')}
              title="Giấy ngà Phần Lan"
              className={`w-6 h-6 rounded-full border-2 bg-[#faf8f5] cursor-pointer ${
                theme === 'ivory' ? 'border-amber-800 ring-2 ring-amber-800/20' : 'border-stone-300'
              }`}
            />
            <button
              onClick={() => setTheme('sepia')}
              title="Giấy bách thảo hoài niệm"
              className={`w-6 h-6 rounded-full border-2 bg-[#f4ecd8] cursor-pointer ${
                theme === 'sepia' ? 'border-amber-800 ring-2 ring-amber-800/20' : 'border-stone-300'
              }`}
            />
            <button
              onClick={() => setTheme('dark')}
              title="Chế độ đọc ban đêm"
              className={`w-6 h-6 rounded-full border-2 bg-[#18181b] cursor-pointer ${
                theme === 'dark' ? 'border-amber-500 ring-2 ring-amber-500/20' : 'border-stone-400'
              }`}
            />
          </div>
        </div>
      </div>

      {/* Book Shelf Selection Strip */}
      <div className="space-y-3">
        <div className="text-xs font-semibold text-stone-500 uppercase tracking-wider">
          Chọn cuốn sách để đọc thử ngay:
        </div>
        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-none">
          {books.map((b) => {
            const isCurrent = selectedBook.id === b.id;
            return (
              <button
                key={b.id}
                onClick={() => {
                  setSelectedBook(b);
                  setBookmarked(false);
                }}
                className={`flex items-center gap-3 p-2.5 rounded-xl border text-left shrink-0 transition-all cursor-pointer ${
                  isCurrent
                    ? 'border-stone-900 bg-white shadow-md ring-2 ring-stone-900/10'
                    : 'border-stone-200 bg-white/70 hover:bg-white hover:border-stone-300'
                }`}
              >
                <div className="w-12 h-16 rounded overflow-hidden bg-stone-100 shrink-0 border border-stone-200">
                  <img
                    src={b.coverImage}
                    alt={b.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="min-w-0 pr-2">
                  <div className="text-xs font-bold text-stone-900 truncate max-w-[150px]">
                    {b.title}
                  </div>
                  <div className="text-[11px] text-stone-500 truncate max-w-[150px]">
                    {b.author}
                  </div>
                  <div className="text-[10px] text-amber-800 font-semibold mt-1">
                    {formatCurrency(b.price)}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Reading Paper Canvas */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Book Meta & Action Card */}
        <div className="lg:col-span-4 bg-white p-6 rounded-2xl border border-stone-200 shadow-sm space-y-6">
          <div className="flex gap-4 items-center">
            <div className="w-20 h-28 rounded-lg overflow-hidden bg-stone-100 shrink-0 border border-stone-200 shadow-sm">
              <img
                src={selectedBook.coverImage}
                alt={selectedBook.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <span className="text-[11px] font-semibold text-amber-800 uppercase">
                {selectedBook.categoryLabel}
              </span>
              <h3 className="font-display font-bold text-base text-stone-900 leading-snug mt-0.5">
                {selectedBook.title}
              </h3>
              <p className="text-xs text-stone-600 mt-1">{selectedBook.author}</p>
              <div className="text-xs font-bold text-stone-900 tabular-nums mt-2">
                {formatCurrency(selectedBook.price)}
              </div>
            </div>
          </div>

          <div className="text-xs text-stone-600 space-y-1.5 pt-4 border-t border-stone-100">
            <div><span className="text-stone-400">Quy cách:</span> {selectedBook.format}</div>
            <div><span className="text-stone-400">Số trang sách:</span> {selectedBook.pages} trang</div>
            <div><span className="text-stone-400">Đơn vị xuất bản:</span> {selectedBook.publisher}</div>
            {selectedBook.translator && (
              <div><span className="text-stone-400">Dịch giả:</span> {selectedBook.translator}</div>
            )}
          </div>

          <div className="pt-2 space-y-2">
            <button
              onClick={() => onAddToCart(selectedBook)}
              className="w-full py-3 bg-stone-900 hover:bg-stone-800 active:scale-[0.98] text-white text-xs font-semibold rounded-xl flex items-center justify-center gap-2 transition-all cursor-pointer shadow-xs"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Mua ấn bản đầy đủ ({formatCurrency(selectedBook.price)})</span>
            </button>

            <button
              onClick={() => onOpenQuickView(selectedBook)}
              className="w-full py-2.5 bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-medium rounded-xl transition-colors cursor-pointer"
            >
              Xem chi tiết mục lục & nhận xét
            </button>
          </div>
        </div>

        {/* Right: Immersive Reading Sheet */}
        <div
          className={`lg:col-span-8 p-8 sm:p-14 rounded-2xl border shadow-md transition-colors ${themeClasses[theme]}`}
        >
          {/* Chapter Heading */}
          <div className="text-center mb-10 pb-6 border-b border-stone-300/40">
            <div className="flex items-center justify-between text-xs opacity-60 mb-3">
              <span>TRÍCH ĐOẠN ĐỘC QUYỀN &middot; TRUNG HIẾU BOOKS</span>
              <button
                onClick={() => setBookmarked(!bookmarked)}
                className="flex items-center gap-1 text-xs hover:opacity-100 transition-opacity cursor-pointer"
              >
                <Bookmark className={`w-3.5 h-3.5 ${bookmarked ? 'fill-current text-amber-600' : ''}`} />
                <span>{bookmarked ? 'Đã ghim trang' : 'Ghim trang đọc'}</span>
              </button>
            </div>

            <h2 className="font-display text-2xl sm:text-3xl font-bold mb-2">
              {selectedBook.sampleExcerpt.chapter}
            </h2>
            <p className="text-xs italic opacity-75">
              Tác phẩm: <strong>{selectedBook.title}</strong> &middot; Tác giả: {selectedBook.author}
            </p>
          </div>

          {/* Text paragraphs */}
          <div className={`font-reading space-y-6 ${fontClasses[fontSize]}`}>
            {selectedBook.sampleExcerpt.text.map((p, idx) => (
              <p key={idx} className="indent-8 text-justify">
                {p}
              </p>
            ))}
          </div>

          {/* Reading End Card */}
          <div className="mt-14 pt-8 border-t border-stone-300/40 text-center">
            <h4 className="font-display text-lg font-bold mb-2">
              Bạn yêu thích giọng văn tác phẩm này?
            </h4>
            <p className="text-xs opacity-75 max-w-md mx-auto mb-6">
              Đặt mua ấn bản gốc ngay hôm nay để nhận sách bọc màng co mới 100%, kèm hộp bảo quản carton 3 lớp và bookmark mỹ thuật Trung Hiếu Books.
            </p>
            <button
              onClick={() => onAddToCart(selectedBook)}
              className="inline-flex items-center gap-2 px-6 py-3 bg-stone-900 text-white text-xs font-semibold rounded-xl hover:bg-stone-800 transition-all cursor-pointer shadow-xs"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Thêm vào giỏ sách &middot; {formatCurrency(selectedBook.price)}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
