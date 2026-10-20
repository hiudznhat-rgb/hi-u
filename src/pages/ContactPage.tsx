import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, ChevronDown, ChevronUp, Sparkles } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'order_inquiry',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Newsletter club state
  const [clubEmail, setClubEmail] = useState('');
  const [clubSubscribed, setClubSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.phone && formData.message) {
      setSubmitted(true);
    }
  };

  const handleClubSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (clubEmail) {
      setClubSubscribed(true);
      setClubEmail('');
    }
  };

  const faqs = [
    {
      q: 'Thời gian giao hàng của Trung Hiếu Books mất bao lâu?',
      a: 'Nội thành Hà Nội và TP. Hồ Chí Minh thường nhận sách trong 24 giờ. Các tỉnh thành khác trên toàn quốc từ 2 - 3 ngày làm việc thông qua đơn vị vận chuyển Bưu Điện Chuyển Phát Nhanh có định vị đơn hàng.',
    },
    {
      q: 'Quy cách đóng gói sách của Trung Hiếu Books như thế nào?',
      a: 'Mỗi cuốn sách trước khi rời kho đều được kiểm tra kỹ lưỡng gáy và mép bìa, bọc màng co bảo vệ mới 100%, quấn 2 lớp màng xốp khí bóng nước và đóng trong thùng carton 3 lớp cứng cáp cùng bookmark mỹ thuật tặng kèm.',
    },
    {
      q: 'Chính sách đổi trả sách nếu xảy ra lỗi in ấn hoặc vận chuyển?',
      a: 'Trung Hiếu Books cam kết đổi mới 1-1 miễn phí 100% trong vòng 7 ngày nếu sách bị lỗi kỹ thuật nhà in (thiếu trang, ngược trang, mờ chữ) hoặc bị móp góc trong quá trình bưu tá giao hàng.',
    },
    {
      q: 'Tôi có thể đặt số lượng lớn cho thư viện trường học hoặc quà tặng doanh nghiệp không?',
      a: 'Có. Trung Hiếu Books có chính sách chiết khấu đặc biệt dành cho các tủ sách doanh nghiệp, thư viện cộng đồng kèm dịch vụ in ấn lời tựa hoặc dập logo nhũ bạc độc quyền theo yêu cầu.',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
      {/* Header */}
      <div className="max-w-3xl border-b border-stone-200 pb-6">
        <div className="text-xs font-semibold uppercase tracking-wider text-amber-800 mb-1">
          Dịch Vụ Độc Giả &middot; Trung Hiếu Books
        </div>
        <h1 className="font-display text-3xl sm:text-4xl font-bold text-stone-900">
          Liên Hệ & Hỗ Trợ Độc Giả
        </h1>
        <p className="text-stone-600 text-sm mt-1">
          Chúng tôi luôn sẵn lòng lắng nghe mọi chia sẻ, thắc mắc về ấn phẩm hoặc yêu cầu đặt sách riêng của bạn.
        </p>
      </div>

      {/* Contact Cards & Branches */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-xs space-y-3">
          <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-900 flex items-center justify-center">
            <MapPin className="w-5 h-5" />
          </div>
          <h3 className="font-display font-bold text-base text-stone-900">
            Chi Nhánh Hà Nội
          </h3>
          <p className="text-xs text-stone-600 leading-relaxed">
            Số 18 Phố Tràng Tiền, Quận Hoàn Kiếm, TP. Hà Nội
          </p>
          <div className="text-xs text-stone-500 pt-2 border-t border-stone-100 flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-stone-400" />
            <span>Mở cửa: 08:30 &ndash; 21:30 hàng ngày</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-xs space-y-3">
          <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-900 flex items-center justify-center">
            <MapPin className="w-5 h-5" />
          </div>
          <h3 className="font-display font-bold text-base text-stone-900">
            Chi Nhánh TP. Hồ Chí Minh
          </h3>
          <p className="text-xs text-stone-600 leading-relaxed">
            Số 156 Đường Nguyễn Du, Phường Bến Thành, Quận 1, TP. Hồ Chí Minh
          </p>
          <div className="text-xs text-stone-500 pt-2 border-t border-stone-100 flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-stone-400" />
            <span>Mở cửa: 08:30 &ndash; 21:30 hàng ngày</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-xs space-y-3">
          <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-900 flex items-center justify-center">
            <Phone className="w-5 h-5" />
          </div>
          <h3 className="font-display font-bold text-base text-stone-900">
            Tổng Đài & Hỗ Trợ Đơn
          </h3>
          <div className="text-xs text-stone-600 space-y-1">
            <p>Hotline đặt sách: <strong className="text-stone-900">(024) 3826 8998</strong></p>
            <p>CSKH di động: <strong className="text-stone-900">0918 234 567</strong></p>
            <p>Email: bientap@trunghieubooks.vn</p>
          </div>
          <div className="text-xs text-emerald-700 pt-2 border-t border-stone-100 font-medium">
            Hỗ trợ tư vấn sách trực tuyến 24/7
          </div>
        </div>
      </div>

      {/* Contact Form & Reading Club Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Contact Form */}
        <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-stone-200 shadow-sm">
          <h2 className="font-display text-xl font-bold text-stone-900 mb-1">
            Gửi Thư Cho Trung Hiếu Books
          </h2>
          <p className="text-xs text-stone-500 mb-6">
            Điền thông tin bên dưới, chuyên viên tuyển tập sách sẽ liên hệ hỗ trợ bạn trong vòng 2 giờ làm việc.
          </p>

          {submitted ? (
            <div className="p-8 text-center bg-stone-50 rounded-xl border border-stone-200">
              <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto mb-3" />
              <h3 className="font-display font-bold text-lg text-stone-900 mb-1">
                Tin nhắn đã gửi thành công!
              </h3>
              <p className="text-xs text-stone-600 max-w-sm mx-auto mb-6">
                Cảm ơn <strong>{formData.name}</strong> đã liên hệ với Trung Hiếu Books. Chúng tôi sẽ phản hồi lại bạn qua số điện thoại <strong>{formData.phone}</strong> sớm nhất.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormData({ name: '', email: '', phone: '', subject: 'order_inquiry', message: '' });
                }}
                className="px-5 py-2 bg-stone-900 text-white text-xs font-semibold rounded-lg hover:bg-stone-800 transition-colors cursor-pointer"
              >
                Gửi thêm tin nhắn khác
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-stone-700 font-medium mb-1">
                    Họ và tên của bạn <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Nguyễn Văn A"
                    className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-300 rounded-lg focus:outline-hidden focus:bg-white focus:border-stone-800"
                  />
                </div>

                <div>
                  <label className="block text-stone-700 font-medium mb-1">
                    Số điện thoại <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="0912 345 678"
                    className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-300 rounded-lg focus:outline-hidden focus:bg-white focus:border-stone-800"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-stone-700 font-medium mb-1">
                    Email nhận phản hồi
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="email@example.com"
                    className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-300 rounded-lg focus:outline-hidden focus:bg-white focus:border-stone-800"
                  />
                </div>

                <div>
                  <label className="block text-stone-700 font-medium mb-1">
                    Nhu cầu liên hệ
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-300 rounded-lg focus:outline-hidden focus:bg-white focus:border-stone-800 cursor-pointer"
                  >
                    <option value="order_inquiry">Hỏi về tình trạng đơn hàng</option>
                    <option value="rare_book">Yêu cầu tìm kiếm tựa sách hiếm</option>
                    <option value="corporate">Đặt sách quà tặng / Tủ sách cơ quan</option>
                    <option value="collaboration">Hợp tác xuất bản / Dịch thuật</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-stone-700 font-medium mb-1">
                  Nội dung nhắn gửi <span className="text-rose-500">*</span>
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Hãy cho chúng tôi biết tựa sách hoặc yêu cầu cụ thể của bạn..."
                  className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-300 rounded-lg focus:outline-hidden focus:bg-white focus:border-stone-800"
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center gap-2 px-6 py-3 bg-stone-900 hover:bg-stone-800 active:scale-[0.98] text-white font-semibold rounded-xl transition-all cursor-pointer shadow-xs"
              >
                <Send className="w-4 h-4" />
                <span>Gửi lời nhắn ngay</span>
              </button>
            </form>
          )}
        </div>

        {/* Club Box */}
        <div className="lg:col-span-5 bg-[#f5f2eb] p-6 sm:p-8 rounded-2xl border border-stone-200 space-y-6">
          <div className="w-10 h-10 rounded-xl bg-amber-900 text-amber-100 flex items-center justify-center">
            <Sparkles className="w-5 h-5" />
          </div>

          <div>
            <h3 className="font-display text-xl font-bold text-stone-900">
              Câu Lạc Bộ Độc Giả Trung Hiếu
            </h3>
            <p className="text-xs text-stone-600 mt-1 leading-relaxed">
              Trở thành thành viên thân thiết để nhận mã giảm giá 10% <strong>TRUNGHIEU10</strong> cho đơn hàng kế tiếp và tham gia các buổi đàm đạo văn học hàng tháng.
            </p>
          </div>

          {clubSubscribed ? (
            <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-800 text-xs flex items-center gap-2 font-medium">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
              <span>Chào mừng bạn! Sử dụng ngay mã: TRUNGHIEU10 khi thanh toán.</span>
            </div>
          ) : (
            <form onSubmit={handleClubSubmit} className="space-y-3">
              <input
                type="email"
                required
                value={clubEmail}
                onChange={(e) => setClubEmail(e.target.value)}
                placeholder="Nhập email của bạn..."
                className="w-full px-3.5 py-2.5 bg-white border border-stone-300 rounded-xl text-xs focus:outline-hidden focus:border-stone-800"
              />
              <button
                type="submit"
                className="w-full py-3 bg-stone-900 hover:bg-stone-800 active:scale-[0.98] text-white text-xs font-semibold rounded-xl transition-all cursor-pointer shadow-xs"
              >
                Đăng ký nhận ưu đãi 10%
              </button>
            </form>
          )}
        </div>
      </div>

      {/* FAQ Accordion */}
      <div className="space-y-6 pt-4 border-t border-stone-200">
        <div className="max-w-xl">
          <div className="text-xs font-semibold uppercase tracking-wider text-amber-800 mb-1">
            Giải Đáp Thắc Mắc
          </div>
          <h2 className="font-display text-2xl font-bold text-stone-900">
            Câu Hỏi Thường Gặp (FAQ)
          </h2>
        </div>

        <div className="divide-y divide-stone-200 bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-xs">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div key={idx} className="p-5 sm:p-6 transition-colors">
                <button
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between text-left gap-4 cursor-pointer"
                >
                  <span className="font-display font-semibold text-sm sm:text-base text-stone-900">
                    {faq.q}
                  </span>
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 text-stone-500 shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-stone-500 shrink-0" />
                  )}
                </button>
                {isOpen && (
                  <p className="mt-3 text-xs sm:text-sm text-stone-600 leading-relaxed pr-6">
                    {faq.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
