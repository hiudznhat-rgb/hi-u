import React from 'react';
import { Book } from '../data/books';
import { BookCard } from '../components/BookCard';
import { Search, ArrowRight, ShieldCheck, Truck, BookOpen, Sparkles, BookMarked, Award } from 'lucide-react';
import { PageId } from '../components/Header';

interface HomePageProps {
  books: Book[];
  wishlist: Book[];
  searchQuery: string;
  onSearchChange: (q: string) => void;
  onNavigate: (page: PageId) => void;
  onToggleWishlist: (book: Book) => void;
  onAddToCart: (book: Book) => void;
  onOpenQuickView: (book: Book) => void;
  onOpenReader: (book: Book) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  books,
  wishlist,
  searchQuery,
  onSearchChange,
  onNavigate,
  onToggleWishlist,
  onAddToCart,
  onOpenQuickView,
  onOpenReader,
}) => {
  const featuredBooks = books.filter((b) => b.featured);
  const bestsellers = books.slice(0, 6);

  return (
    <div className="space-y-16 pb-16">
      {/* Hero Section */}
      <section className="relative pt-6 pb-14 border-b border-stone-200/80 bg-linear-to-b from-stone-100/50 via-transparent to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            {/* Left Column: Headline & Intent */}
            <div className="lg:col-span-7 flex flex-col justify-center py-4 lg:py-8">
              <div className="text-xs font-semibold tracking-wider text-amber-800 uppercase mb-3">
                Hiệu Sách Trực Tuyến &middot; Trung Hiếu Books
              </div>

              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-stone-900 leading-[1.15] text-balance mb-6">
                Tuyển chọn những ấn bản sách đắt giá nhất cho tâm hồn.
              </h1>

              <p className="text-base sm:text-lg text-stone-600 leading-relaxed max-w-2xl mb-8">
                Chào mừng bạn đến với <strong>Trung Hiếu Books</strong>. Nơi lưu giữ những tác phẩm văn học, tư tưởng triết học và khoa học xuất sắc, được in ấn công phu trên giấy ngà chống lóa và đóng bìa vải dập kim mỹ thuật.
              </p>

              {/* Functional Search Box */}
              <div className="max-w-xl mb-8">
                <div className="relative flex items-center">
                  <Search className="absolute left-4 w-5 h-5 text-stone-400 pointer-events-none" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => onSearchChange(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        onNavigate('shop');
                      }
                    }}
                    placeholder="Tìm theo tên sách, tác giả hoặc chủ đề (ví dụ: Vũ trụ, Khắc kỷ)..."
                    className="w-full pl-12 pr-24 py-3.5 bg-white border border-stone-300 rounded-xl text-stone-800 placeholder-stone-400 text-sm focus:outline-hidden focus:ring-2 focus:ring-stone-800 focus:border-stone-800 transition-all shadow-xs"
                  />
                  <button
                    onClick={() => onNavigate('shop')}
                    className="absolute right-2 px-3.5 py-1.5 bg-stone-900 text-white text-xs font-medium rounded-lg hover:bg-stone-800 transition-colors cursor-pointer"
                  >
                    Tìm kiếm
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onNavigate('shop')}
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-stone-900 text-white text-sm font-medium rounded-xl hover:bg-stone-800 active:scale-[0.98] transition-all cursor-pointer shadow-xs"
                >
                  <span>Khám phá Cửa Hàng</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onNavigate('reading-room')}
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-white border border-stone-300 hover:border-stone-400 text-stone-800 text-sm font-medium rounded-xl transition-all cursor-pointer shadow-xs"
                >
                  <BookOpen className="w-4 h-4 text-amber-800" />
                  <span>Vào Phòng Đọc Thử</span>
                </button>
              </div>
            </div>

            {/* Right Column: Hero Visual Asset */}
            <div className="lg:col-span-5 relative flex items-center">
              <div className="w-full h-full min-h-[340px] lg:min-h-[460px] rounded-2xl overflow-hidden shadow-md border border-stone-200/90 relative group">
                <img
                  src="/src/assets/images/hero_bookstore_curated_1792026356672.jpg"
                  alt="Không gian phòng đọc sách Trung Hiếu Books"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-stone-950/20 to-transparent pointer-events-none" />
                <div className="absolute bottom-5 left-5 right-5 text-white pointer-events-none">
                  <span className="text-xs uppercase font-semibold tracking-wider text-amber-200">
                    Không Gian Tri Thức
                  </span>
                  <p className="font-display text-lg font-medium mt-1">
                    Trung Hiếu Books &middot; Tinh hoa lưu giữ qua từng trang in
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 4-Column Proof Row */}
          <div className="mt-12 pt-8 border-t border-stone-200/70 grid grid-cols-2 md:grid-cols-4 gap-6 text-stone-700">
            <div className="flex items-start gap-3">
              <div className="p-2.5 rounded-lg bg-stone-100 text-amber-900 shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-stone-900">100% Bản Quyền</h4>
                <p className="text-xs text-stone-500 mt-0.5">Hợp tác trực tiếp cùng các nhà xuất bản hàng đầu</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2.5 rounded-lg bg-stone-100 text-amber-900 shrink-0">
                <BookOpen className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-stone-900">Giấy In Thượng Hạng</h4>
                <p className="text-xs text-stone-500 mt-0.5">Giấy ngà chống lóa, không axit lưu trữ trăm năm</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2.5 rounded-lg bg-stone-100 text-amber-900 shrink-0">
                <Truck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-stone-900">Đóng Gói Chống Va Đập</h4>
                <p className="text-xs text-stone-500 mt-0.5">Bọc 3 lớp carton bảo vệ 8 góc sách nguyên vẹn</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2.5 rounded-lg bg-stone-100 text-amber-900 shrink-0">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-stone-900">Đọc Thử Trực Tuyến</h4>
                <p className="text-xs text-stone-500 mt-0.5">Trải nghiệm chương đầu miễn phí trước khi mua</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Collection Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4 pb-4 border-b border-stone-200">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-amber-800 mb-1">
              Tuyển Tập Nổi Bật
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-stone-900">
              Ấn Bản Mỹ Thuật Tuyển Chọn
            </h2>
          </div>
          <button
            onClick={() => onNavigate('shop')}
            className="text-xs font-semibold text-stone-900 hover:text-amber-900 flex items-center gap-1 cursor-pointer"
          >
            <span>Xem tất cả sách</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {featuredBooks.map((book) => (
            <BookCard
              key={book.id}
              book={book}
              isWishlisted={wishlist.some((b) => b.id === book.id)}
              onToggleWishlist={onToggleWishlist}
              onAddToCart={onAddToCart}
              onOpenQuickView={onOpenQuickView}
              onOpenReader={onOpenReader}
            />
          ))}
        </div>
      </section>

      {/* Reading Room Teaser Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-stone-900 text-stone-100 rounded-2xl p-8 sm:p-12 relative overflow-hidden border border-stone-800">
          <div className="max-w-xl space-y-4 relative z-10">
            <span className="text-xs uppercase tracking-widest text-amber-400 font-semibold flex items-center gap-2">
              <BookMarked className="w-4 h-4" /> Không Gian Trực Tuyến Độc Quyền
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
              Phòng Đọc Thử Miễn Phí của Trung Hiếu Books
            </h3>
            <p className="text-stone-300 text-sm leading-relaxed">
              Trải nghiệm cảm giác lật mở từng trang sách trực tiếp trên màn hình của bạn. Chế độ đọc chuyên dụng với phông chữ serif thanh tao, thay đổi màu giấy đọc ban đêm và điều chỉnh kích thước chữ tùy ý.
            </p>
            <div className="pt-2">
              <button
                onClick={() => onNavigate('reading-room')}
                className="inline-flex items-center gap-2 px-6 py-3 bg-amber-500 hover:bg-amber-400 text-stone-950 text-xs font-bold rounded-xl transition-all cursor-pointer shadow-sm"
              >
                <span>Bước vào Phòng Đọc Thử Ngay</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Bestsellers Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4 pb-4 border-b border-stone-200">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-amber-800 mb-1">
              Được Yêu Thích Nhất
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-stone-900">
              Sách Bán Chạy Tuần Này
            </h2>
          </div>
          <button
            onClick={() => onNavigate('shop')}
            className="text-xs font-semibold text-stone-900 hover:text-amber-900 flex items-center gap-1 cursor-pointer"
          >
            <span>Đến Cửa Hàng</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {bestsellers.map((book) => (
            <BookCard
              key={book.id}
              book={book}
              isWishlisted={wishlist.some((b) => b.id === book.id)}
              onToggleWishlist={onToggleWishlist}
              onAddToCart={onAddToCart}
              onOpenQuickView={onOpenQuickView}
              onOpenReader={onOpenReader}
            />
          ))}
        </div>
      </section>
    </div>
  );
};
