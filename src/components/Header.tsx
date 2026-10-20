import React from 'react';
import { ShoppingBag, Heart, BookOpen, Menu, X } from 'lucide-react';

export type PageId = 'home' | 'shop' | 'reading-room' | 'about' | 'contact';

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  cartCount: number;
  wishlistCount: number;
  onOpenCart: () => void;
  onOpenWishlist: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  onNavigate,
  cartCount,
  wishlistCount,
  onOpenCart,
  onOpenWishlist,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const navLinks: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Trang Chủ' },
    { id: 'shop', label: 'Cửa Hàng' },
    { id: 'reading-room', label: 'Phòng Đọc Thử' },
    { id: 'about', label: 'Giới Thiệu' },
    { id: 'contact', label: 'Liên Hệ' },
  ];

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-[#faf9f6]/95 backdrop-blur-md border-b border-stone-200/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-8">
        {/* Zone 1: Single text element wordmark */}
        <button
          onClick={() => handleNavClick('home')}
          className="font-display text-2xl font-bold tracking-tight text-stone-900 whitespace-nowrap shrink-0 flex items-center gap-2.5 hover:opacity-90 transition-opacity cursor-pointer text-left"
        >
          <div className="w-9 h-9 rounded-lg bg-stone-900 text-amber-100 flex items-center justify-center shrink-0 shadow-xs">
            <BookOpen className="w-5 h-5" strokeWidth={2.2} />
          </div>
          <span>Trung Hiếu Books</span>
        </button>

        {/* Zone 2: 5 clean single-line text navigation links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium">
          {navLinks.map((link) => {
            const isActive = currentPage === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`transition-colors whitespace-nowrap shrink-0 cursor-pointer relative py-1 ${
                  isActive
                    ? 'text-stone-950 font-semibold'
                    : 'text-stone-600 hover:text-stone-950'
                }`}
              >
                <span>{link.label}</span>
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-stone-900 rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Primary Action & Badges */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenWishlist}
            aria-label="Danh sách yêu thích"
            className="relative p-2 text-stone-600 hover:text-stone-900 transition-colors rounded-full hover:bg-stone-200/50 cursor-pointer"
            title="Sách yêu thích"
          >
            <Heart className="w-5 h-5" />
            {wishlistCount > 0 && (
              <span className="absolute -top-1 -right-1 flex h-4.5 min-w-4.5 items-center justify-center rounded-full bg-rose-600 px-1 text-[11px] font-semibold text-white tabular-nums">
                {wishlistCount}
              </span>
            )}
          </button>

          <button
            onClick={onOpenCart}
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-stone-900 rounded-lg hover:bg-stone-800 active:scale-[0.98] transition-all whitespace-nowrap shrink-0 cursor-pointer shadow-xs"
          >
            <ShoppingBag className="w-4 h-4" />
            <span className="hidden sm:inline">Giỏ sách</span>
            <span className="bg-stone-700 text-stone-100 rounded-full px-1.5 py-0.2 text-xs font-semibold tabular-nums">
              {cartCount}
            </span>
          </button>

          {/* Mobile hamburger toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 lg:hidden text-stone-700 hover:text-stone-900 rounded-lg hover:bg-stone-100 cursor-pointer"
            aria-label="Mở menu điều hướng"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-stone-200 bg-white/95 px-4 pt-2 pb-4 space-y-1 shadow-md">
          {navLinks.map((link) => {
            const isActive = currentPage === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`block w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-stone-100 text-stone-900 font-semibold'
                    : 'text-stone-600 hover:bg-stone-50 hover:text-stone-900'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
};
