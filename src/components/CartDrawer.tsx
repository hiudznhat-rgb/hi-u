import React, { useState } from 'react';
import { CartItem } from '../types';
import { X, ShoppingBag, Trash2, ArrowRight, Tag, Truck, Check } from 'lucide-react';

interface CartDrawerProps {
  isOpen: boolean;
  items: CartItem[];
  promoDiscount: number;
  promoCode: string;
  onApplyPromo: (code: string) => boolean;
  onClose: () => void;
  onUpdateQuantity: (bookId: string, quantity: number) => void;
  onRemoveItem: (bookId: string) => void;
  onProceedToCheckout: () => void;
  onBrowseBooks: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  items,
  promoDiscount,
  promoCode,
  onApplyPromo,
  onClose,
  onUpdateQuantity,
  onRemoveItem,
  onProceedToCheckout,
  onBrowseBooks,
}) => {
  const [inputCode, setInputCode] = useState('');
  const [promoMessage, setPromoMessage] = useState<{ text: string; isError: boolean } | null>(null);

  if (!isOpen) return null;

  const FREE_SHIPPING_THRESHOLD = 300000;
  const subtotal = items.reduce((sum, item) => sum + item.book.price * item.quantity, 0);
  const discountAmount = Math.round(subtotal * promoDiscount);
  const isFreeShipping = subtotal >= FREE_SHIPPING_THRESHOLD;
  const shippingFee = items.length === 0 ? 0 : isFreeShipping ? 0 : 30000;
  const finalTotal = Math.max(0, subtotal - discountAmount + shippingFee);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('vi-VN').format(amount) + ' đ';
  };

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputCode.trim()) return;
    const success = onApplyPromo(inputCode.trim());
    if (success) {
      setPromoMessage({ text: 'Áp dụng mã giảm 10% thành công!', isError: false });
    } else {
      setPromoMessage({ text: 'Mã không hợp lệ. Thử mã: TRUNGHIEU10', isError: true });
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-stone-950/50 backdrop-blur-xs transition-opacity animate-in fade-in duration-200">
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col border-l border-stone-200">
          {/* Header */}
          <div className="p-5 border-b border-stone-200 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-stone-800" />
              <h2 className="font-display font-bold text-lg text-stone-900">
                Giỏ Sách Của Bạn
              </h2>
              <span className="text-xs bg-stone-100 text-stone-600 px-2 py-0.5 rounded-full font-semibold tabular-nums">
                {items.reduce((sum, i) => sum + i.quantity, 0)}
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 text-stone-400 hover:text-stone-800 rounded-lg hover:bg-stone-100 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Progress Bar */}
          {items.length > 0 && (
            <div className="px-5 py-3 bg-stone-50 border-b border-stone-200/70 text-xs">
              <div className="flex items-center justify-between text-stone-700 font-medium mb-1.5">
                <span className="flex items-center gap-1.5">
                  <Truck className="w-3.5 h-3.5 text-amber-800" />
                  {isFreeShipping ? (
                    <span className="text-emerald-700 font-semibold flex items-center gap-1">
                      <Check className="w-3.5 h-3.5" /> Bạn được miễn phí vận chuyển toàn quốc!
                    </span>
                  ) : (
                    <span>
                      Mua thêm{' '}
                      <strong className="text-stone-900 tabular-nums">
                        {formatCurrency(FREE_SHIPPING_THRESHOLD - subtotal)}
                      </strong>{' '}
                      để nhận Miễn Phí Vận Chuyển
                    </span>
                  )}
                </span>
              </div>
              <div className="w-full bg-stone-200 h-1.5 rounded-full overflow-hidden">
                <div
                  className="bg-amber-800 h-full rounded-full transition-all duration-300"
                  style={{
                    width: `${Math.min(100, (subtotal / FREE_SHIPPING_THRESHOLD) * 100)}%`,
                  }}
                />
              </div>
            </div>
          )}

          {/* Item List / Empty State */}
          <div className="flex-1 overflow-y-auto p-5 divide-y divide-stone-100">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 text-stone-500">
                <div className="w-16 h-16 rounded-full bg-stone-100 flex items-center justify-center mb-4 text-stone-400">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h3 className="font-display font-semibold text-stone-800 text-lg mb-1">
                  Giỏ sách chưa có ấn phẩm nào
                </h3>
                <p className="text-xs text-stone-500 max-w-xs mb-6">
                  Hãy khám phá danh mục tuyển chọn để tìm những tác phẩm tinh hoa cho tủ sách của bạn.
                </p>
                <button
                  onClick={() => {
                    onClose();
                    onBrowseBooks();
                  }}
                  className="px-5 py-2.5 bg-stone-900 text-white text-xs font-semibold rounded-lg hover:bg-stone-800 transition-colors cursor-pointer"
                >
                  Khám phá tuyển tập ngay
                </button>
              </div>
            ) : (
              items.map(({ book, quantity }) => (
                <div key={book.id} className="py-4 flex gap-4 items-start first:pt-0">
                  {/* Thumbnail */}
                  <div className="w-16 h-22 rounded-md overflow-hidden bg-stone-100 shrink-0 border border-stone-200">
                    <img
                      src={book.coverImage}
                      alt={book.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    <h4 className="text-xs font-semibold text-stone-900 leading-snug line-clamp-2">
                      {book.title}
                    </h4>
                    <p className="text-[11px] text-stone-500 mt-0.5 truncate">{book.author}</p>
                    <div className="text-xs font-semibold text-stone-800 tabular-nums mt-1">
                      {formatCurrency(book.price)}
                    </div>

                    {/* Quantity controls */}
                    <div className="flex items-center justify-between mt-2.5">
                      <div className="flex items-center border border-stone-300 rounded-md bg-stone-50">
                        <button
                          onClick={() => onUpdateQuantity(book.id, quantity - 1)}
                          className="px-2 py-0.5 text-xs text-stone-600 hover:text-stone-900 font-bold cursor-pointer"
                        >
                          -
                        </button>
                        <span className="px-2 py-0.5 text-xs font-semibold text-stone-800 tabular-nums">
                          {quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(book.id, quantity + 1)}
                          className="px-2 py-0.5 text-xs text-stone-600 hover:text-stone-900 font-bold cursor-pointer"
                        >
                          +
                        </button>
                      </div>

                      <button
                        onClick={() => onRemoveItem(book.id)}
                        className="text-stone-400 hover:text-rose-600 p-1 transition-colors cursor-pointer"
                        title="Xóa sách"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer & Checkout Area */}
          {items.length > 0 && (
            <div className="p-5 border-t border-stone-200 bg-stone-50 space-y-4 shrink-0">
              {/* Promo code form */}
              <form onSubmit={handleApplyPromo} className="space-y-1.5">
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <Tag className="w-3.5 h-3.5 text-stone-400 absolute left-3 top-3 pointer-events-none" />
                    <input
                      type="text"
                      value={inputCode}
                      onChange={(e) => setInputCode(e.target.value.toUpperCase())}
                      placeholder="Mã giảm giá (ví dụ: TRUNGHIEU10)"
                      className="w-full pl-8 pr-3 py-2 bg-white border border-stone-300 rounded-lg text-xs uppercase focus:outline-hidden focus:border-stone-800"
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-3.5 py-2 bg-stone-200 hover:bg-stone-300 text-stone-800 text-xs font-medium rounded-lg transition-colors cursor-pointer"
                  >
                    Áp dụng
                  </button>
                </div>
                {promoMessage && (
                  <p
                    className={`text-[11px] font-medium ${
                      promoMessage.isError ? 'text-rose-600' : 'text-emerald-700'
                    }`}
                  >
                    {promoMessage.text}
                  </p>
                )}
                {promoDiscount > 0 && (
                  <div className="text-[11px] text-emerald-700 flex items-center justify-between">
                    <span>Đã áp dụng mã: <strong>{promoCode}</strong></span>
                    <span>-{(promoDiscount * 100).toFixed(0)}%</span>
                  </div>
                )}
              </form>

              {/* Price Breakdown */}
              <div className="space-y-1.5 text-xs text-stone-600 pt-2 border-t border-stone-200">
                <div className="flex justify-between">
                  <span>Tạm tính ({items.reduce((s, i) => s + i.quantity, 0)} cuốn):</span>
                  <span className="font-medium text-stone-900 tabular-nums">
                    {formatCurrency(subtotal)}
                  </span>
                </div>

                {discountAmount > 0 && (
                  <div className="flex justify-between text-emerald-700">
                    <span>Ưu đãi phiếu giảm giá:</span>
                    <span className="font-medium tabular-nums">
                      -{formatCurrency(discountAmount)}
                    </span>
                  </div>
                )}

                <div className="flex justify-between">
                  <span>Phí vận chuyển:</span>
                  <span className="font-medium text-stone-900 tabular-nums">
                    {shippingFee === 0 ? 'Miễn phí' : formatCurrency(shippingFee)}
                  </span>
                </div>

                <div className="flex justify-between text-sm font-bold text-stone-900 pt-2 border-t border-stone-200">
                  <span>Tổng thanh toán:</span>
                  <span className="font-display text-base text-stone-950 tabular-nums">
                    {formatCurrency(finalTotal)}
                  </span>
                </div>
              </div>

              {/* Checkout Button */}
              <button
                onClick={() => {
                  onClose();
                  onProceedToCheckout();
                }}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-4 bg-stone-900 hover:bg-stone-800 active:scale-[0.98] text-white text-xs font-semibold rounded-xl transition-all cursor-pointer shadow-xs"
              >
                <span>Tiến hành đặt hàng</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
