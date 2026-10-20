import React, { useState } from 'react';
import { CartItem, CustomerInfo, Order } from '../types';
import { X, CheckCircle2, ShieldCheck, Truck, CreditCard, Banknote, QrCode, ArrowLeft } from 'lucide-react';

interface CheckoutModalProps {
  isOpen: boolean;
  items: CartItem[];
  promoDiscount: number;
  promoCode: string;
  onClose: () => void;
  onOrderSuccess: (order: Order) => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  items,
  promoDiscount,
  promoCode,
  onClose,
  onOrderSuccess,
}) => {
  const [formData, setFormData] = useState<CustomerInfo>({
    fullName: '',
    phoneNumber: '',
    email: '',
    address: '',
    city: 'Hà Nội',
    paymentMethod: 'cod',
    notes: '',
  });

  const [confirmedOrder, setConfirmedOrder] = useState<Order | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phoneNumber || !formData.address) {
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      const orderNumber = Math.floor(1000 + Math.random() * 9000);
      const deliveryDate = new Date();
      deliveryDate.setDate(deliveryDate.getDate() + 2);

      const newOrder: Order = {
        orderId: `THB-${orderNumber}`,
        createdAt: new Date().toLocaleDateString('vi-VN'),
        customer: { ...formData },
        items: [...items],
        subtotal,
        discount: discountAmount,
        shippingFee,
        total: finalTotal,
        status: 'confirmed',
        estimatedDelivery: deliveryDate.toLocaleDateString('vi-VN', {
          weekday: 'long',
          day: '2-digit',
          month: '2-digit',
        }),
      };

      setConfirmedOrder(newOrder);
      setIsSubmitting(false);
      onOrderSuccess(newOrder);
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-3xl rounded-2xl shadow-2xl border border-stone-200 overflow-hidden flex flex-col max-h-[92vh]">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-stone-200 shrink-0">
          <h2 className="font-display font-bold text-lg text-stone-900">
            {confirmedOrder ? 'Đặt Hàng Thành Công' : 'Xác Nhận Đơn Hàng & Thanh Toán'}
          </h2>
          <button
            onClick={onClose}
            className="p-1.5 text-stone-400 hover:text-stone-800 rounded-lg hover:bg-stone-100 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8">
          {confirmedOrder ? (
            /* Order Success View */
            <div className="text-center py-6">
              <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-4 border border-emerald-100">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <span className="text-xs font-semibold tracking-wider text-emerald-700 uppercase">
                Đơn hàng #{confirmedOrder.orderId} đã được ghi nhận
              </span>
              <h3 className="font-display text-2xl font-bold text-stone-900 mt-1 mb-2">
                Cảm ơn bạn đã lựa chọn Trung Hiếu Books
              </h3>
              <p className="text-xs text-stone-600 max-w-md mx-auto mb-6">
                Ấn phẩm đang được phòng lưu trữ kiểm tra tình trạng bìa, bọc màng chống sốc và gửi kèm bookmark độc bản. Dự kiến giao hàng vào: <strong className="text-stone-900">{confirmedOrder.estimatedDelivery}</strong>.
              </p>

              {/* Receipt Box */}
              <div className="max-w-md mx-auto bg-stone-50 rounded-xl p-5 border border-stone-200 text-left text-xs space-y-3 mb-6">
                <div className="flex justify-between border-b border-stone-200 pb-2">
                  <span className="text-stone-500">Người nhận:</span>
                  <span className="font-semibold text-stone-800">{confirmedOrder.customer.fullName} ({confirmedOrder.customer.phoneNumber})</span>
                </div>
                <div className="flex justify-between border-b border-stone-200 pb-2">
                  <span className="text-stone-500">Địa chỉ:</span>
                  <span className="font-medium text-stone-800 text-right max-w-[240px]">
                    {confirmedOrder.customer.address}, {confirmedOrder.customer.city}
                  </span>
                </div>
                <div className="flex justify-between border-b border-stone-200 pb-2">
                  <span className="text-stone-500">Phương thức:</span>
                  <span className="font-medium text-stone-800">
                    {confirmedOrder.customer.paymentMethod === 'cod'
                      ? 'Thanh toán tiền mặt khi nhận hàng (COD)'
                      : confirmedOrder.customer.paymentMethod === 'bank_transfer'
                      ? 'Chuyển khoản VietQR'
                      : 'Thẻ tín dụng / Ghi nợ'}
                  </span>
                </div>
                <div className="flex justify-between font-bold text-sm text-stone-900 pt-1">
                  <span>Tổng tiền thanh toán:</span>
                  <span className="font-display text-base tabular-nums">
                    {formatCurrency(confirmedOrder.total)}
                  </span>
                </div>
              </div>

              <div className="flex justify-center gap-3">
                <button
                  onClick={onClose}
                  className="px-6 py-2.5 bg-stone-900 text-white text-xs font-semibold rounded-lg hover:bg-stone-800 transition-colors cursor-pointer"
                >
                  Hoàn tất & Tiếp tục đọc sách
                </button>
              </div>
            </div>
          ) : (
            /* Checkout Form View */
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                {/* Left Form: Customer Details */}
                <div className="md:col-span-7 space-y-4">
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                    1. Thông tin người nhận
                  </h3>

                  <div className="space-y-3 text-xs">
                    <div>
                      <label className="block text-stone-700 font-medium mb-1">
                        Họ và tên người nhận <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="Ví dụ: Nguyễn Minh Đức"
                        className="w-full px-3.5 py-2.5 bg-white border border-stone-300 rounded-lg focus:outline-hidden focus:border-stone-800"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-stone-700 font-medium mb-1">
                          Số điện thoại liên hệ <span className="text-rose-500">*</span>
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phoneNumber}
                          onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                          placeholder="0912 345 678"
                          className="w-full px-3.5 py-2.5 bg-white border border-stone-300 rounded-lg focus:outline-hidden focus:border-stone-800"
                        />
                      </div>
                      <div>
                        <label className="block text-stone-700 font-medium mb-1">
                          Email nhận biên lai (tùy chọn)
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="email@example.com"
                          className="w-full px-3.5 py-2.5 bg-white border border-stone-300 rounded-lg focus:outline-hidden focus:border-stone-800"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-stone-700 font-medium mb-1">
                        Địa chỉ nhận hàng (Số nhà, Tên đường, Phường/Xã) <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.address}
                        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                        placeholder="Số 45 Tràng Tiền, Quận Hoàn Kiếm"
                        className="w-full px-3.5 py-2.5 bg-white border border-stone-300 rounded-lg focus:outline-hidden focus:border-stone-800"
                      />
                    </div>

                    <div>
                      <label className="block text-stone-700 font-medium mb-1">
                        Tỉnh / Thành phố
                      </label>
                      <select
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-white border border-stone-300 rounded-lg focus:outline-hidden focus:border-stone-800"
                      >
                        <option value="Hà Nội">Hà Nội</option>
                        <option value="TP. Hồ Chí Minh">TP. Hồ Chí Minh</option>
                        <option value="Đà Nẵng">Đà Nẵng</option>
                        <option value="Huế">Thừa Thiên Huế</option>
                        <option value="Hải Phòng">Hải Phòng</option>
                        <option value="Cần Thơ">Cần Thơ</option>
                        <option value="Tỉnh thành khác">Tỉnh thành khác</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-stone-700 font-medium mb-1">
                        Ghi chú đóng gói / giao hàng
                      </label>
                      <textarea
                        rows={2}
                        value={formData.notes}
                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                        placeholder="Ví dụ: Giao giờ hành chính, bọc thêm lớp giấy Kraft làm quà tặng..."
                        className="w-full px-3.5 py-2 bg-white border border-stone-300 rounded-lg focus:outline-hidden focus:border-stone-800"
                      />
                    </div>
                  </div>

                  {/* Payment Method Selector */}
                  <div className="pt-4">
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-stone-500 mb-3">
                      2. Hình thức thanh toán
                    </h3>

                    <div className="space-y-2 text-xs">
                      <label className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-colors ${
                        formData.paymentMethod === 'cod'
                          ? 'border-stone-900 bg-stone-50'
                          : 'border-stone-200 hover:bg-stone-50/50'
                      }`}>
                        <input
                          type="radio"
                          name="paymentMethod"
                          checked={formData.paymentMethod === 'cod'}
                          onChange={() => setFormData({ ...formData, paymentMethod: 'cod' })}
                          className="text-stone-900"
                        />
                        <Banknote className="w-4 h-4 text-amber-800" />
                        <div>
                          <div className="font-semibold text-stone-900">
                            Thanh toán khi nhận hàng (COD)
                          </div>
                          <div className="text-[11px] text-stone-500">
                            Kiểm tra sách nguyên vẹn trước khi thanh toán cho bưu tá
                          </div>
                        </div>
                      </label>

                      <label className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-colors ${
                        formData.paymentMethod === 'bank_transfer'
                          ? 'border-stone-900 bg-stone-50'
                          : 'border-stone-200 hover:bg-stone-50/50'
                      }`}>
                        <input
                          type="radio"
                          name="paymentMethod"
                          checked={formData.paymentMethod === 'bank_transfer'}
                          onChange={() => setFormData({ ...formData, paymentMethod: 'bank_transfer' })}
                          className="text-stone-900"
                        />
                        <QrCode className="w-4 h-4 text-blue-800" />
                        <div>
                          <div className="font-semibold text-stone-900">
                            Chuyển khoản VietQR / MoMo (Xác nhận tự động)
                          </div>
                          <div className="text-[11px] text-stone-500">
                            Quét mã QR qua app ngân hàng bất kỳ, không phí giao dịch
                          </div>
                        </div>
                      </label>

                      <label className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-colors ${
                        formData.paymentMethod === 'card'
                          ? 'border-stone-900 bg-stone-50'
                          : 'border-stone-200 hover:bg-stone-50/50'
                      }`}>
                        <input
                          type="radio"
                          name="paymentMethod"
                          checked={formData.paymentMethod === 'card'}
                          onChange={() => setFormData({ ...formData, paymentMethod: 'card' })}
                          className="text-stone-900"
                        />
                        <CreditCard className="w-4 h-4 text-emerald-800" />
                        <div>
                          <div className="font-semibold text-stone-900">
                            Thẻ ATM / Thẻ quốc tế (Visa, Mastercard)
                          </div>
                          <div className="text-[11px] text-stone-500">
                            Cổng thanh toán mã hóa chuẩn bảo mật PCI DSS
                          </div>
                        </div>
                      </label>
                    </div>
                  </div>
                </div>

                {/* Right Form: Order Summary */}
                <div className="md:col-span-5 bg-stone-50 p-5 rounded-2xl border border-stone-200 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-stone-500 mb-3">
                      Tóm tắt đơn hàng ({items.reduce((s, i) => s + i.quantity, 0)} cuốn)
                    </h3>

                    {/* Book items preview */}
                    <div className="max-h-52 overflow-y-auto space-y-2.5 pr-1 divide-y divide-stone-200/60">
                      {items.map(({ book, quantity }) => (
                        <div key={book.id} className="pt-2 first:pt-0 flex items-center justify-between text-xs">
                          <div className="min-w-0 pr-2">
                            <span className="font-medium text-stone-800 truncate block">
                              {book.title}
                            </span>
                            <span className="text-[11px] text-stone-400">
                              Số lượng: {quantity} &times; {formatCurrency(book.price)}
                            </span>
                          </div>
                          <span className="font-semibold text-stone-900 tabular-nums shrink-0">
                            {formatCurrency(book.price * quantity)}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Cost Calculations */}
                    <div className="mt-5 pt-4 border-t border-stone-200 space-y-2 text-xs">
                      <div className="flex justify-between text-stone-600">
                        <span>Tạm tính:</span>
                        <span className="font-medium tabular-nums">{formatCurrency(subtotal)}</span>
                      </div>
                      {discountAmount > 0 && (
                        <div className="flex justify-between text-emerald-700">
                          <span>Giảm giá ({promoCode}):</span>
                          <span className="font-medium tabular-nums">-{formatCurrency(discountAmount)}</span>
                        </div>
                      )}
                      <div className="flex justify-between text-stone-600">
                        <span>Phí vận chuyển bưu điện:</span>
                        <span className="font-medium tabular-nums">
                          {shippingFee === 0 ? 'Miễn phí' : formatCurrency(shippingFee)}
                        </span>
                      </div>
                      <div className="pt-3 border-t border-stone-200 flex justify-between items-baseline font-bold text-stone-900">
                        <span className="text-sm">Tổng thanh toán:</span>
                        <span className="font-display text-lg text-stone-950 tabular-nums">
                          {formatCurrency(finalTotal)}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-stone-200">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 px-4 bg-stone-900 hover:bg-stone-800 active:scale-[0.98] text-white text-xs font-semibold rounded-xl transition-all cursor-pointer shadow-xs disabled:opacity-50"
                    >
                      {isSubmitting ? 'Đang tạo đơn hàng...' : 'Xác nhận đặt hàng ngay'}
                    </button>
                    <p className="text-[10px] text-stone-400 text-center mt-2">
                      Nhấn xác nhận đồng nghĩa bạn đồng ý với các chính sách lưu hành & đổi trả sách của Trung Hiếu Books.
                    </p>
                  </div>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
