import React, { useState } from 'react';
import { Book } from '../data/books';
import { X, Star, ShoppingBag, BookOpen, Heart, Check, ShieldCheck, Truck, RotateCcw } from 'lucide-react';

interface BookDetailModalProps {
  book: Book | null;
  isWishlisted: boolean;
  onClose: () => void;
  onAddToCart: (book: Book, quantity?: number) => void;
  onToggleWishlist: (book: Book) => void;
  onOpenReader: (book: Book) => void;
}

export const BookDetailModal: React.FC<BookDetailModalProps> = ({
  book,
  isWishlisted,
  onClose,
  onAddToCart,
  onToggleWishlist,
  onOpenReader,
}) => {
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'desc' | 'toc' | 'author' | 'reviews'>('desc');

  if (!book) return null;

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('vi-VN').format(amount) + ' đ';
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-4xl rounded-2xl shadow-2xl border border-stone-200 overflow-hidden flex flex-col max-h-[92vh]">
        {/* Modal Top Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-stone-200 shrink-0">
          <div className="flex items-center gap-2 text-xs text-stone-500 font-medium">
            <span>{book.categoryLabel}</span>
            <span aria-hidden="true">&middot;</span>
            <span>Mã ấn phẩm: {book.id.toUpperCase()}</span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg hover:bg-stone-100 text-stone-500 hover:text-stone-900 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content Scrollable Area */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            {/* Left: Sticky Book Cover Gallery */}
            <div className="md:col-span-5 flex flex-col items-center">
              <div className="relative w-full aspect-3/4 max-w-xs rounded-xl overflow-hidden shadow-lg border border-stone-200 bg-stone-100">
                <img
                  src={book.coverImage}
                  alt={`Bìa ${book.title}`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                {book.badge && (
                  <div className="absolute top-3 left-3 bg-stone-900/90 text-white text-xs font-medium px-2.5 py-1 rounded-sm">
                    {book.badge}
                  </div>
                )}
              </div>

              {/* Action Buttons under image */}
              <div className="w-full max-w-xs mt-4 flex items-center gap-3">
                <button
                  onClick={() => onOpenReader(book)}
                  className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 bg-stone-100 hover:bg-stone-200 text-stone-900 text-xs font-semibold rounded-lg transition-colors cursor-pointer"
                >
                  <BookOpen className="w-4 h-4 text-amber-800" />
                  <span>Đọc thử trích đoạn</span>
                </button>

                <button
                  onClick={() => onToggleWishlist(book)}
                  className={`p-2.5 rounded-lg border transition-colors cursor-pointer ${
                    isWishlisted
                      ? 'border-rose-200 bg-rose-50 text-rose-600'
                      : 'border-stone-200 hover:border-stone-300 text-stone-600 hover:text-stone-900'
                  }`}
                  title="Yêu thích"
                >
                  <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-current' : ''}`} />
                </button>
              </div>

              {/* Trust badges */}
              <div className="w-full max-w-xs mt-6 pt-5 border-t border-stone-100 space-y-2.5 text-xs text-stone-600">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Bản quyền chính thức &middot; NXB cấp phép</span>
                </div>
                <div className="flex items-center gap-2">
                  <Truck className="w-4 h-4 text-amber-700 shrink-0" />
                  <span>Đóng gói màng bọc khí & bọc màng co</span>
                </div>
                <div className="flex items-center gap-2">
                  <RotateCcw className="w-4 h-4 text-stone-500 shrink-0" />
                  <span>Đổi mới trong 7 ngày nếu lỗi in ấn</span>
                </div>
              </div>
            </div>

            {/* Right: Contiguous Purchase Module & Details */}
            <div className="md:col-span-7 flex flex-col justify-between">
              <div>
                <div className="text-xs font-medium text-stone-500 uppercase tracking-wider mb-1">
                  Tác giả: <span className="text-stone-800 font-semibold">{book.author}</span>
                </div>

                <h1 className="font-display text-2xl sm:text-3xl font-bold text-stone-900 leading-tight mb-2">
                  {book.title}
                </h1>

                {book.originalTitle && (
                  <p className="text-sm italic text-stone-500 mb-3">
                    Tên nguyên tác: {book.originalTitle}
                  </p>
                )}

                {/* Rating & Reviews count */}
                <div className="flex items-center gap-3 mb-5 pb-4 border-b border-stone-200">
                  <div className="flex items-center gap-1 text-amber-500">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(book.rating)
                            ? 'fill-amber-400 text-amber-400'
                            : 'text-stone-200'
                        }`}
                      />
                    ))}
                    <span className="ml-1 text-xs font-semibold text-stone-800 tabular-nums">
                      {book.rating.toFixed(1)}
                    </span>
                  </div>
                  <span className="text-xs text-stone-400">&middot;</span>
                  <span className="text-xs text-stone-500">
                    {book.reviewCount} nhận xét từ bạn đọc
                  </span>
                  <span className="text-xs text-stone-400">&middot;</span>
                  <span className="text-xs text-emerald-700 font-medium">
                    Còn {book.pages > 400 ? '12' : '28'} cuốn trong kho
                  </span>
                </div>

                {/* Price Display */}
                <div className="flex items-baseline gap-3 mb-6">
                  <span className="font-display text-3xl font-bold text-stone-900 tabular-nums">
                    {formatCurrency(book.price)}
                  </span>
                  {book.originalPrice && (
                    <span className="text-base text-stone-400 line-through tabular-nums">
                      {formatCurrency(book.originalPrice)}
                    </span>
                  )}
                  {book.originalPrice && (
                    <span className="text-xs font-semibold text-amber-900 bg-amber-50 px-2 py-0.5 rounded">
                      Tiết kiệm {Math.round(((book.originalPrice - book.price) / book.originalPrice) * 100)}%
                    </span>
                  )}
                </div>

                {/* Book Specs Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 p-3.5 bg-stone-50 rounded-xl mb-6 text-xs">
                  <div>
                    <span className="text-stone-400 block">Quy cách:</span>
                    <span className="font-semibold text-stone-800">{book.format}</span>
                  </div>
                  <div>
                    <span className="text-stone-400 block">Số trang:</span>
                    <span className="font-semibold text-stone-800 tabular-nums">{book.pages} trang</span>
                  </div>
                  <div>
                    <span className="text-stone-400 block">Năm xuất bản:</span>
                    <span className="font-semibold text-stone-800 tabular-nums">{book.publishYear}</span>
                  </div>
                  <div>
                    <span className="text-stone-400 block">Nhà xuất bản:</span>
                    <span className="font-semibold text-stone-800 truncate block">{book.publisher}</span>
                  </div>
                  {book.translator && (
                    <div>
                      <span className="text-stone-400 block">Dịch giả:</span>
                      <span className="font-semibold text-stone-800 truncate block">{book.translator}</span>
                    </div>
                  )}
                  <div>
                    <span className="text-stone-400 block">Mã ISBN:</span>
                    <span className="font-semibold text-stone-800 tabular-nums">{book.isbn}</span>
                  </div>
                </div>

                {/* Quantity & Add to Cart Controls */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-8">
                  <div className="flex items-center border border-stone-300 rounded-lg p-1 bg-white shrink-0 self-start">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-3 py-1.5 text-stone-600 hover:text-stone-900 font-bold cursor-pointer"
                    >
                      -
                    </button>
                    <span className="px-4 py-1.5 text-sm font-semibold tabular-nums text-stone-800">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-3 py-1.5 text-stone-600 hover:text-stone-900 font-bold cursor-pointer"
                    >
                      +
                    </button>
                  </div>

                  <button
                    onClick={() => {
                      onAddToCart(book, quantity);
                    }}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 bg-stone-900 hover:bg-stone-800 active:scale-[0.98] text-white text-sm font-semibold rounded-xl transition-all cursor-pointer shadow-xs"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span>Thêm vào giỏ sách &middot; {formatCurrency(book.price * quantity)}</span>
                  </button>
                </div>

                {/* Tab Navigation for Detailed Info */}
                <div className="border-b border-stone-200 mb-4">
                  <div className="flex gap-6 text-xs font-semibold">
                    <button
                      onClick={() => setActiveTab('desc')}
                      className={`pb-2.5 transition-colors cursor-pointer border-b-2 ${
                        activeTab === 'desc'
                          ? 'border-stone-900 text-stone-900'
                          : 'border-transparent text-stone-500 hover:text-stone-700'
                      }`}
                    >
                      Giới thiệu nội dung
                    </button>
                    <button
                      onClick={() => setActiveTab('toc')}
                      className={`pb-2.5 transition-colors cursor-pointer border-b-2 ${
                        activeTab === 'toc'
                          ? 'border-stone-900 text-stone-900'
                          : 'border-transparent text-stone-500 hover:text-stone-700'
                      }`}
                    >
                      Mục lục ({book.tableOfContents.length})
                    </button>
                    <button
                      onClick={() => setActiveTab('author')}
                      className={`pb-2.5 transition-colors cursor-pointer border-b-2 ${
                        activeTab === 'author'
                          ? 'border-stone-900 text-stone-900'
                          : 'border-transparent text-stone-500 hover:text-stone-700'
                      }`}
                    >
                      Tác giả
                    </button>
                    <button
                      onClick={() => setActiveTab('reviews')}
                      className={`pb-2.5 transition-colors cursor-pointer border-b-2 ${
                        activeTab === 'reviews'
                          ? 'border-stone-900 text-stone-900'
                          : 'border-transparent text-stone-500 hover:text-stone-700'
                      }`}
                    >
                      Đánh giá ({book.reviews.length})
                    </button>
                  </div>
                </div>

                {/* Tab Content Panes */}
                <div className="text-sm text-stone-600 leading-relaxed min-h-[140px]">
                  {activeTab === 'desc' && (
                    <p>{book.description}</p>
                  )}

                  {activeTab === 'toc' && (
                    <ul className="space-y-2 text-xs">
                      {book.tableOfContents.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2 pb-1.5 border-b border-stone-100 last:border-0">
                          <span className="text-amber-800 font-mono text-[11px] tabular-nums">0{idx + 1}.</span>
                          <span className="font-medium text-stone-800">{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {activeTab === 'author' && (
                    <div>
                      <h4 className="font-semibold text-stone-900 text-xs mb-1">{book.author}</h4>
                      <p className="text-xs">{book.authorBio}</p>
                    </div>
                  )}

                  {activeTab === 'reviews' && (
                    <div className="space-y-3">
                      {book.reviews.map((rev) => (
                        <div key={rev.id} className="p-3 bg-stone-50 rounded-lg">
                          <div className="flex items-center justify-between text-xs mb-1">
                            <span className="font-semibold text-stone-800">{rev.userName}</span>
                            <span className="text-stone-400 tabular-nums">{rev.date}</span>
                          </div>
                          <div className="flex items-center gap-1 text-amber-500 mb-1.5">
                            {Array.from({ length: rev.rating }).map((_, i) => (
                              <Star key={i} className="w-3 h-3 fill-current" />
                            ))}
                          </div>
                          <p className="text-xs text-stone-700">{rev.comment}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
