import React, { useState, useMemo } from 'react';
import { Book, CATEGORIES } from '../data/books';
import { BookCard } from '../components/BookCard';
import { Search, SlidersHorizontal, LayoutGrid, List, RotateCcw, BookOpen, Star, ShoppingBag, Eye, Heart } from 'lucide-react';

interface ShopPageProps {
  books: Book[];
  wishlist: Book[];
  searchQuery: string;
  onSearchChange: (q: string) => void;
  onToggleWishlist: (book: Book) => void;
  onAddToCart: (book: Book) => void;
  onOpenQuickView: (book: Book) => void;
  onOpenReader: (book: Book) => void;
}

export const ShopPage: React.FC<ShopPageProps> = ({
  books,
  wishlist,
  searchQuery,
  onSearchChange,
  onToggleWishlist,
  onAddToCart,
  onOpenQuickView,
  onOpenReader,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedFormat, setSelectedFormat] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'rating' | 'newest'>('featured');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const filteredBooks = useMemo(() => {
    return books.filter((book) => {
      const matchesCategory =
        selectedCategory === 'all' || book.category === selectedCategory;
      const matchesFormat =
        selectedFormat === 'all' || book.format === selectedFormat;
      const matchesSearch =
        searchQuery.trim() === '' ||
        book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        book.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
        book.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        book.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesFormat && matchesSearch;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'newest') return b.publishYear - a.publishYear;
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      return 0;
    });
  }, [books, selectedCategory, selectedFormat, searchQuery, sortBy]);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('vi-VN').format(amount) + ' đ';
  };

  const handleResetFilters = () => {
    setSelectedCategory('all');
    setSelectedFormat('all');
    setSortBy('featured');
    onSearchChange('');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Page Header */}
      <div className="border-b border-stone-200 pb-6">
        <div className="text-xs font-semibold uppercase tracking-wider text-amber-800 mb-1">
          Cửa Hàng Trực Tuyến &middot; Trung Hiếu Books
        </div>
        <h1 className="font-display text-3xl sm:text-4xl font-bold text-stone-900">
          Danh Mục Toàn Bộ Tuyển Tập
        </h1>
        <p className="text-stone-600 text-sm mt-1 max-w-2xl">
          Khám phá trọn bộ các ấn bản sách chuẩn mực từ Trung Hiếu Books. Mỗi ấn phẩm đều kèm trích đoạn đọc thử và cam kết đóng gói mỹ thuật.
        </p>
      </div>

      {/* Control Bar: Search & Filtering */}
      <div className="space-y-4">
        {/* Search & Sort Controls */}
        <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3.5 top-3 w-4 h-4 text-stone-400 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Tìm theo tên tác phẩm, tác giả, thể loại..."
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-stone-300 rounded-xl text-xs sm:text-sm focus:outline-hidden focus:border-stone-800 shadow-xs"
            />
            {searchQuery && (
              <button
                onClick={() => onSearchChange('')}
                className="absolute right-3 top-2.5 text-xs text-stone-400 hover:text-stone-700"
              >
                Xóa
              </button>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {/* Format Filter */}
            <select
              value={selectedFormat}
              onChange={(e) => setSelectedFormat(e.target.value)}
              className="bg-white border border-stone-300 rounded-xl px-3 py-2 text-xs font-medium text-stone-800 focus:outline-hidden focus:border-stone-800 shadow-xs cursor-pointer"
            >
              <option value="all">Tất cả quy cách bìa</option>
              <option value="Bìa cứng gáy vải">Bìa cứng gáy vải</option>
              <option value="Bìa mềm cao cấp">Bìa mềm cao cấp</option>
              <option value="Bản đặc biệt mạ kim">Bản đặc biệt mạ kim</option>
            </select>

            {/* Sort Filter */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-white border border-stone-300 rounded-xl px-3 py-2 text-xs font-medium text-stone-800 focus:outline-hidden focus:border-stone-800 shadow-xs cursor-pointer"
            >
              <option value="featured">Nổi bật nhất</option>
              <option value="rating">Đánh giá cao nhất</option>
              <option value="price-asc">Giá: Thấp đến cao</option>
              <option value="price-desc">Giá: Cao đến thấp</option>
              <option value="newest">Năm xuất bản mới</option>
            </select>

            {/* View Mode Toggle */}
            <div className="hidden sm:flex items-center border border-stone-300 rounded-xl p-1 bg-white shadow-xs">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                  viewMode === 'grid' ? 'bg-stone-900 text-white' : 'text-stone-500 hover:text-stone-900'
                }`}
                title="Dạng lưới"
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                  viewMode === 'list' ? 'bg-stone-900 text-white' : 'text-stone-500 hover:text-stone-900'
                }`}
                title="Dạng danh sách"
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Categories Tab Selector */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 text-xs font-medium rounded-xl whitespace-nowrap shrink-0 transition-all cursor-pointer ${
                  isActive
                    ? 'bg-stone-900 text-white shadow-xs'
                    : 'bg-white text-stone-600 hover:text-stone-900 border border-stone-200 hover:border-stone-300'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Filter Feedback & Result Summary */}
        <div className="flex items-center justify-between text-xs text-stone-500 pt-1">
          <span>
            Tìm thấy <strong className="text-stone-900">{filteredBooks.length}</strong> cuốn sách phù hợp
          </span>
          {(selectedCategory !== 'all' || selectedFormat !== 'all' || searchQuery) && (
            <button
              onClick={handleResetFilters}
              className="inline-flex items-center gap-1 text-stone-800 hover:text-stone-950 font-medium cursor-pointer underline"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Xóa bộ lọc</span>
            </button>
          )}
        </div>
      </div>

      {/* Books Display */}
      {filteredBooks.length === 0 ? (
        <div className="bg-white rounded-2xl p-16 text-center border border-stone-200">
          <BookOpen className="w-12 h-12 text-stone-300 mx-auto mb-3" />
          <h3 className="font-display font-semibold text-lg text-stone-800 mb-1">
            Không tìm thấy ấn phẩm nào
          </h3>
          <p className="text-xs text-stone-500 max-w-sm mx-auto mb-4">
            Vui lòng thử tìm kiếm lại với tiêu chí khác hoặc xem lại tất cả tuyển tập.
          </p>
          <button
            onClick={handleResetFilters}
            className="px-5 py-2.5 bg-stone-900 text-white text-xs font-semibold rounded-xl hover:bg-stone-800 transition-colors cursor-pointer"
          >
            Xem toàn bộ sách
          </button>
        </div>
      ) : viewMode === 'grid' ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredBooks.map((book) => (
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
      ) : (
        /* List View */
        <div className="space-y-4">
          {filteredBooks.map((book) => {
            const isWishlisted = wishlist.some((b) => b.id === book.id);
            return (
              <div
                key={book.id}
                className="bg-white p-5 rounded-xl border border-stone-200 flex flex-col sm:flex-row gap-5 items-start sm:items-center justify-between hover:shadow-md transition-shadow"
              >
                <div className="flex gap-4 items-start sm:items-center min-w-0">
                  <div
                    onClick={() => onOpenQuickView(book)}
                    className="w-20 h-28 rounded-lg overflow-hidden bg-stone-100 shrink-0 border border-stone-200 cursor-pointer"
                  >
                    <img
                      src={book.coverImage}
                      alt={book.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="min-w-0">
                    <div className="flex items-center gap-2 text-xs text-stone-500 mb-1">
                      <span className="font-medium text-stone-700">{book.categoryLabel}</span>
                      <span aria-hidden="true">&middot;</span>
                      <span>{book.format}</span>
                    </div>

                    <h3
                      onClick={() => onOpenQuickView(book)}
                      className="font-display font-bold text-base text-stone-900 hover:text-amber-900 transition-colors cursor-pointer truncate"
                    >
                      {book.title}
                    </h3>
                    <p className="text-xs text-stone-600 mt-0.5">{book.author} &middot; {book.publisher}</p>

                    <p className="text-xs text-stone-500 line-clamp-2 mt-2 max-w-xl">
                      {book.description}
                    </p>

                    <div className="flex items-center gap-1 text-xs text-amber-500 mt-2 font-medium">
                      <Star className="w-3.5 h-3.5 fill-current" />
                      <span className="text-stone-800">{book.rating.toFixed(1)}</span>
                      <span className="text-stone-400">({book.reviewCount} nhận xét)</span>
                    </div>
                  </div>
                </div>

                <div className="flex sm:flex-col items-center sm:items-end justify-between w-full sm:w-auto shrink-0 gap-3 pt-3 sm:pt-0 border-t sm:border-t-0 border-stone-100">
                  <div className="text-left sm:text-right">
                    <div className="font-display font-bold text-lg text-stone-900 tabular-nums">
                      {formatCurrency(book.price)}
                    </div>
                    {book.originalPrice && (
                      <div className="text-xs text-stone-400 line-through tabular-nums">
                        {formatCurrency(book.originalPrice)}
                      </div>
                    )}
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onOpenReader(book)}
                      className="inline-flex items-center gap-1.5 px-3 py-2 bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-semibold rounded-lg transition-colors cursor-pointer"
                    >
                      <BookOpen className="w-3.5 h-3.5 text-amber-800" />
                      <span>Đọc thử</span>
                    </button>

                    <button
                      onClick={() => onAddToCart(book)}
                      className="inline-flex items-center gap-1.5 px-4 py-2 bg-stone-900 hover:bg-stone-800 text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer shadow-xs"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      <span>Mua</span>
                    </button>

                    <button
                      onClick={() => onToggleWishlist(book)}
                      className={`p-2 rounded-lg border transition-colors cursor-pointer ${
                        isWishlisted
                          ? 'border-rose-200 bg-rose-50 text-rose-600'
                          : 'border-stone-200 text-stone-600 hover:text-stone-900'
                      }`}
                    >
                      <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-current' : ''}`} />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
