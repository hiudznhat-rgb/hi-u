import React from 'react';
import { Search, ArrowRight, ShieldCheck, Truck, BookOpen, Sparkles } from 'lucide-react';

interface HeroProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onExploreClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  searchQuery,
  onSearchChange,
  onExploreClick,
}) => {
  return (
    <section className="relative pt-6 pb-14 border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Split Hero: Content Left, Visual Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Left Column: Headline & Intent */}
          <div className="lg:col-span-7 flex flex-col justify-center py-4 lg:py-8">
            <div className="text-xs font-semibold tracking-wider text-amber-800 uppercase mb-3">
              Tuyển tập sách tinh hoa &middot; Xuất bản chuẩn mực
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-stone-900 leading-[1.15] text-balance mb-6">
              Nơi mỗi trang sách mở ra một chân trời tĩnh tại.
            </h1>

            <p className="text-base sm:text-lg text-stone-600 leading-relaxed max-w-2xl mb-8">
              Khai Trí Books tuyển chọn những ấn bản văn học, tư tưởng triết học và khoa học xuất sắc. Được in trên giấy ngà chống lóa, đóng bìa vải thủ công và gìn giữ trọn vẹn vẻ đẹp nguyên bản của con chữ.
            </p>

            {/* Functional Search Box */}
            <div className="max-w-xl mb-8">
              <div className="relative flex items-center">
                <Search className="absolute left-4 w-5 h-5 text-stone-400 pointer-events-none" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => onSearchChange(e.target.value)}
                  placeholder="Tìm theo tên tác phẩm, tác giả hoặc chủ đề (ví dụ: Vũ trụ, Khắc kỷ, Vance)..."
                  className="w-full pl-12 pr-4 py-3.5 bg-white border border-stone-300 rounded-xl text-stone-800 placeholder-stone-400 text-sm focus:outline-hidden focus:ring-2 focus:ring-stone-800 focus:border-stone-800 transition-all shadow-xs"
                />
                {searchQuery && (
                  <button
                    onClick={() => onSearchChange('')}
                    className="absolute right-3 text-xs text-stone-400 hover:text-stone-700 px-2 py-1 cursor-pointer"
                  >
                    Xóa
                  </button>
                )}
              </div>
            </div>

            {/* Direct CTA & Secondary Action */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={onExploreClick}
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-stone-900 text-white text-sm font-medium rounded-xl hover:bg-stone-800 active:scale-[0.98] transition-all cursor-pointer shadow-xs"
              >
                <span>Khám phá tuyển tập</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-2 text-xs text-stone-500 font-medium pl-2">
                <span>Miễn phí vận chuyển từ 300.000đ</span>
                <span aria-hidden="true">&middot;</span>
                <span>Tặng kèm bookmark độc bản</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Asset */}
          <div className="lg:col-span-5 relative flex items-center">
            <div className="w-full h-full min-h-[340px] lg:min-h-[460px] rounded-2xl overflow-hidden shadow-md border border-stone-200/90 relative group">
              <img
                src="/src/assets/images/hero_bookstore_curated_1792026356672.jpg"
                alt="Không gian phòng đọc sách Khai Trí Books"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/60 via-stone-950/15 to-transparent pointer-events-none" />
              <div className="absolute bottom-5 left-5 right-5 text-white pointer-events-none">
                <span className="text-xs uppercase font-medium tracking-wider text-amber-200">Không Gian Khai Trí</span>
                <p className="font-display text-lg font-medium mt-1">Phòng đọc & Trưng bày ấn bản sưu tầm thủ công</p>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Column Proof Row below split */}
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
              <h4 className="text-sm font-semibold text-stone-900">Chất Liệu Giấy Thượng Hạng</h4>
              <p className="text-xs text-stone-500 mt-0.5">Giấy ngà Phần Lan 80gsm chống mỏi mắt</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-2.5 rounded-lg bg-stone-100 text-amber-900 shrink-0">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-stone-900">Đóng Gói Chống Va Đập</h4>
              <p className="text-xs text-stone-500 mt-0.5">Hộp carton 3 lớp bảo vệ góc sách nguyên vẹn</p>
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
  );
};
