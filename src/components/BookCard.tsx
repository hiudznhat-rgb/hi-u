import React from 'react';
import { Book } from '../data/books';
import { Heart, BookOpen, ShoppingBag, Eye, Star } from 'lucide-react';

interface BookCardProps {
  book: Book;
  isWishlisted: boolean;
  onToggleWishlist: (book: Book) => void;
  onAddToCart: (book: Book) => void;
  onOpenQuickView: (book: Book) => void;
  onOpenReader: (book: Book) => void;
}

export const BookCard: React.FC<BookCardProps> = ({
  book,
  isWishlisted,
  onToggleWishlist,
  onAddToCart,
  onOpenQuickView,
  onOpenReader,
}) => {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('vi-VN').format(amount) + ' đ';
  };

  return (
    <div className="group flex flex-col bg-white rounded-xl border border-stone-200/90 overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
      {/* Book Cover Image Area */}
      <div className="relative aspect-3/4 bg-stone-100 overflow-hidden cursor-pointer" onClick={() => onOpenQuickView(book)}>
        <img
          src={book.coverImage}
          alt={`Bìa sách ${book.title}`}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-500"
        />

        {/* Subtle Tag (quiet text badge, not neon pill) */}
        {book.badge && (
          <div className="absolute top-3 left-3 bg-stone-900/90 backdrop-blur-xs text-white text-[11px] font-medium px-2.5 py-1 rounded-sm tracking-wide">
            {book.badge}
          </div>
        )}

        {/* Wishlist Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleWishlist(book);
          }}
          aria-label={isWishlisted ? 'Xóa khỏi yêu thích' : 'Thêm vào yêu thích'}
          className={`absolute top-3 right-3 p-2 rounded-full backdrop-blur-md transition-colors cursor-pointer ${
            isWishlisted
              ? 'bg-rose-50 text-rose-600 shadow-sm'
              : 'bg-white/80 text-stone-600 hover:text-stone-900 hover:bg-white'
          }`}
        >
          <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-current' : ''}`} />
        </button>

        {/* Quick Read / Quick View Hover Overlay */}
        <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-stone-950/80 via-stone-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-between gap-2">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onOpenReader(book);
            }}
            className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 bg-white/95 hover:bg-white text-stone-900 text-xs font-medium rounded-lg backdrop-blur-sm transition-all cursor-pointer shadow-xs"
          >
            <BookOpen className="w-3.5 h-3.5 text-amber-800" />
            <span>Đọc thử</span>
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onOpenQuickView(book);
            }}
            className="p-2 bg-stone-900/90 hover:bg-stone-900 text-white rounded-lg backdrop-blur-sm transition-all cursor-pointer"
            title="Xem chi tiết"
          >
            <Eye className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Card Content & Metadata */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Category & Format (Clean unboxed text metadata) */}
          <div className="flex items-center gap-2 text-xs text-stone-500 mb-1.5">
            <span className="font-medium text-stone-700">{book.categoryLabel}</span>
            <span aria-hidden="true">&middot;</span>
            <span>{book.format}</span>
          </div>

          {/* Title */}
          <h3
            onClick={() => onOpenQuickView(book)}
            className="font-display font-semibold text-stone-900 text-base leading-snug hover:text-amber-900 transition-colors cursor-pointer line-clamp-2 mb-1"
          >
            {book.title}
          </h3>

          {/* Author & Rating */}
          <div className="flex items-center justify-between text-xs text-stone-600 mb-3">
            <span className="truncate max-w-[160px]">{book.author}</span>
            <div className="flex items-center gap-1 font-medium text-stone-700">
              <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
              <span className="tabular-nums">{book.rating.toFixed(1)}</span>
              <span className="text-stone-400">({book.reviewCount})</span>
            </div>
          </div>
        </div>

        {/* Pricing & Add to Cart Button */}
        <div className="pt-3 border-t border-stone-100 flex items-center justify-between gap-2 mt-2">
          <div>
            <div className="font-semibold text-base text-stone-900 tabular-nums">
              {formatCurrency(book.price)}
            </div>
            {book.originalPrice && (
              <div className="text-xs text-stone-400 line-through tabular-nums">
                {formatCurrency(book.originalPrice)}
              </div>
            )}
          </div>

          <button
            onClick={() => onAddToCart(book)}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-stone-900 hover:bg-stone-800 active:scale-[0.98] text-white text-xs font-medium rounded-lg transition-all cursor-pointer shadow-xs"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>Chọn mua</span>
          </button>
        </div>
      </div>
    </div>
  );
};
