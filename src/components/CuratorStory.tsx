import React, { useState } from 'react';
import { BookOpen, Award, CheckCircle, Mail, Sparkles } from 'lucide-react';

export const CuratorStory: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <section id="curator" className="py-16 bg-[#f5f2eb] border-y border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Editorial Philosophy */}
          <div className="lg:col-span-7 space-y-6">
            <div className="text-xs font-semibold uppercase tracking-wider text-amber-900">
              Triết lý tuyển chọn & Khí chất ấn phẩm
            </div>

            <h2 className="font-display text-3xl sm:text-4xl font-bold text-stone-900 leading-tight">
              Chúng tôi không chỉ bán sách, chúng tôi lưu giữ vẻ đẹp trường cửu của con chữ.
            </h2>

            <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
              Mỗi ấn phẩm tại <strong>Khai Trí Books</strong> phải vượt qua quy trình tuyển lựa khắt khe của Hội đồng Cố vấn Văn học & Triết học:
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-stone-900 text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                  1
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-stone-900">Bản dịch nguyên tác & Chuẩn mực ngữ pháp</h3>
                  <p className="text-xs text-stone-600 mt-0.5 leading-relaxed">
                    Hợp tác cùng các dịch giả tiền bối và học giả uy tín, có phần khảo dị và chú thích điển tích kỹ lưỡng.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-stone-900 text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                  2
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-stone-900">Chất liệu giấy mỹ thuật không axit (Acid-Free)</h3>
                  <p className="text-xs text-stone-600 mt-0.5 leading-relaxed">
                    Giữ độ trắng ngà tự nhiên qua hàng chục năm mà không bị ố vàng hay giòn rách, thân thiện với thị lực người đọc.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-stone-900 text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                  3
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-stone-900">Kỹ thuật đóng sách gáy khâu chỉ & Bìa vải linen</h3>
                  <p className="text-xs text-stone-600 mt-0.5 leading-relaxed">
                    Sách có thể mở phẳng 180 độ dễ dàng khi đọc trên bàn trà mà không lo bung keo hay nếp gãy gáy sách.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Reading Club Box */}
          <div id="reading-club" className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-2xl border border-stone-200 shadow-md">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-900 flex items-center justify-center mb-4">
              <Sparkles className="w-5 h-5" />
            </div>

            <h3 className="font-display text-xl font-bold text-stone-900 mb-2">
              Câu Lạc Bộ Độc Giả Khai Trí
            </h3>

            <p className="text-xs text-stone-600 leading-relaxed mb-6">
              Đăng ký nhận bản tin văn nghệ định kỳ mỗi tháng: Tóm lược 3 cuốn sách hay nhất, danh mục ấn bản giới hạn sắp phát hành và mã ưu đãi 10% cho đơn hàng đầu tiên.
            </p>

            {subscribed ? (
              <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-800 text-xs flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>Bạn đã gia nhập Câu Lạc Bộ Khai Trí! Hãy kiểm tra hộp thư để nhận mã ưu đãi chào mừng.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-3">
                <div className="relative">
                  <Mail className="w-4 h-4 text-stone-400 absolute left-3.5 top-3 pointer-events-none" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Nhập địa chỉ email của bạn..."
                    className="w-full pl-10 pr-3 py-2.5 bg-stone-50 border border-stone-300 rounded-xl text-xs focus:outline-hidden focus:bg-white focus:border-stone-800"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-stone-900 hover:bg-stone-800 active:scale-[0.98] text-white text-xs font-semibold rounded-xl transition-all cursor-pointer shadow-xs"
                >
                  Gia nhập & Nhận ưu đãi 10%
                </button>
                <div className="flex items-center justify-center gap-2 text-[11px] text-stone-400">
                  <span>Không thư rác</span>
                  <span aria-hidden="true">&middot;</span>
                  <span>Hủy đăng ký bất kỳ lúc nào</span>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
