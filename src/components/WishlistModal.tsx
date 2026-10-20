import React from 'react';
import { Book } from '../data/books';
import { X, Heart, ShoppingBag, Trash2 } from 'lucide-react';

interface WishlistModalProps {
  isOpen: boolean;
  wishlist: Book[];
  onClose: () => void;
  onRemoveFromWishlist: (bookId: string) => void;
  onAddToCart: (book: Book) => void;
}

export const WishlistModal: React.FC<WishlistModalProps> = ({
  isOpen,
  wishlist,
  onClose,
  onRemoveFromWishlist,
  onAddToCart,
}) => {
  if (!isOpen) return null;

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('vi-VN').format(amount) + ' đ';
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-xl rounded-2xl shadow-2xl border border-stone-200 overflow-hidden flex flex-col max-h-[85vh]">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-stone-200">
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-rose-600 fill-rose-600" />
            <h2 className="font-display font-bold text-lg text-stone-900">
              Sách Yêu Thích Của Bạn
            </h2>
            <span className="text-xs bg-stone-100 text-stone-600 px-2 py-0.5 rounded-full font-semibold tabular-nums">
              {wishlist.length}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-stone-400 hover:text-stone-800 rounded-lg hover:bg-stone-100 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 divide-y divide-stone-100">
          {wishlist.length === 0 ? (
            <div className="text-center py-12 text-stone-500">
              <Heart className="w-12 h-12 mx-auto mb-3 text-stone-300" />
              <h3 className="font-display font-semibold text-stone-800 text-base mb-1">
                Chưa có cuốn sách nào trong danh sách
              </h3>
              <p className="text-xs text-stone-500">
                Nhấn vào biểu tượng trái tim trên mỗi tác phẩm để lưu lại vào tủ sách yêu thích của bạn.
              </p>
            </div>
          ) : (
            wishlist.map((book) => (
              <div key={book.id} className="py-4 first:pt-0 flex gap-4 items-center justify-between">
                <div className="flex gap-3 items-center min-w-0">
                  <div className="w-14 h-19 rounded bg-stone-100 overflow-hidden shrink-0 border border-stone-200">
                    <img
                      src={book.coverImage}
                      alt={book.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-xs font-semibold text-stone-900 truncate">{book.title}</h4>
                    <p className="text-[11px] text-stone-500">{book.author}</p>
                    <div className="text-xs font-semibold text-stone-900 tabular-nums mt-1">
                      {formatCurrency(book.price)}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={() => {
                      onAddToCart(book);
                      onRemoveFromWishlist(book.id);
                    }}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-stone-900 hover:bg-stone-800 text-white text-xs font-medium rounded-lg transition-colors cursor-pointer"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    <span>Mua</span>
                  </button>
                  <button
                    onClick={() => onRemoveFromWishlist(book.id)}
                    className="p-1.5 text-stone-400 hover:text-rose-600 rounded transition-colors cursor-pointer"
                    title="Xóa khỏi yêu thích"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
