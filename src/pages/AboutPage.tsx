import React from 'react';
import { BookOpen, ShieldCheck, Award, Heart, Sparkles, CheckCircle2, Feather, Users } from 'lucide-react';
import { PageId } from '../components/Header';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
      {/* Hero Header */}
      <div className="max-w-3xl border-b border-stone-200 pb-8">
        <div className="text-xs font-semibold uppercase tracking-wider text-amber-800 mb-2">
          Hành Trình Thương Hiệu &middot; Trung Hiếu Books
        </div>
        <h1 className="font-display text-3xl sm:text-5xl font-bold text-stone-900 leading-tight">
          Gìn giữ vẻ đẹp nguyên bản và phẩm cách của sách giấy.
        </h1>
        <p className="text-stone-600 text-base sm:text-lg mt-4 leading-relaxed">
          Được khởi nguồn từ tình yêu sâu đậm với những trang sách thơm mùi mực in truyền thống, <strong>Trung Hiếu Books</strong> ra đời với sứ mệnh mang đến cho bạn đọc Việt Nam những ấn bản tri thức chuẩn mực về nội dung và tinh xảo về mỹ thuật.
        </p>
      </div>

      {/* Editorial Story Split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6 space-y-6 text-stone-700 text-sm leading-relaxed">
          <h2 className="font-display text-2xl font-bold text-stone-900">
            Câu Chuyện Sáng Lập Trung Hiếu Books
          </h2>
          <p>
            Trong thời đại của sự phân tán chú ý và những dòng tin tức lướt qua chớp nhoáng, chúng tôi tin rằng việc ngồi xuống, lật mở từng trang sách in trên chất liệu giấy thượng hạng vẫn là nghi thức thiêng liêng nhất để con người đối thoại với chính mình.
          </p>
          <p>
            Từng tựa sách tại <strong>Trung Hiếu Books</strong> không phải là sản phẩm sản xuất hàng loạt vô hồn. Đó là kết quả của hàng trăm giờ tuyển lựa bản thảo, đối chiếu bản dịch nguyên tác cùng các chuyên gia ngôn ngữ, và thử nghiệm hàng chục mẫu chất liệu bìa vải, dập mạ kim thủ công để tìm ra độ hoàn thiện hoàn mỹ nhất.
          </p>
          <div className="p-4 bg-stone-100 rounded-xl border-l-2 border-stone-800 text-stone-800 italic">
            &ldquo;Một cuốn sách hay không chỉ nuôi dưỡng trí tuệ khi đọc, mà còn là một tác phẩm nghệ thuật làm sang trọng không gian sống của bạn.&rdquo;
          </div>
        </div>

        <div className="lg:col-span-6">
          <div className="rounded-2xl overflow-hidden border border-stone-200 shadow-md aspect-4/3 relative">
            <img
              src="/src/assets/images/hero_bookstore_curated_1792026356672.jpg"
              alt="Phòng lưu trữ và trưng bày sách Trung Hiếu Books"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* 4 Golden Standards */}
      <div className="space-y-8 pt-4">
        <div className="text-center max-w-xl mx-auto">
          <div className="text-xs font-semibold uppercase tracking-wider text-amber-800 mb-1">
            Quy Chuẩn Xuất Bản
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-stone-900">
            4 Tiêu Chuẩn Vàng Của Trung Hiếu Books
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-900 flex items-center justify-center font-bold">
              01
            </div>
            <h3 className="font-display font-bold text-base text-stone-900">
              Bản Dịch Khảo Dị Chuẩn Mực
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Tuyển tập văn học và triết học được dịch bởi các dịch giả hàng đầu, có chú thích điển tích và khảo cứu thuật ngữ tỉ mỉ.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-900 flex items-center justify-center font-bold">
              02
            </div>
            <h3 className="font-display font-bold text-base text-stone-900">
              Giấy Ngà Không Axit (Acid-Free)
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Sử dụng dòng giấy xốp Phần Lan và Munken Thụy Điển giúp sách bền đẹp qua nhiều thế hệ mà không bị ố vàng, chống mỏi mắt.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-900 flex items-center justify-center font-bold">
              03
            </div>
            <h3 className="font-display font-bold text-base text-stone-900">
              Khâu Chỉ Gáy Mở Phẳng 180°
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Kỹ thuật đóng sách gáy khâu tép chỉ thủ công giúp sách mở phẳng êm ái trên mặt bàn, tuyệt đối không bị gãy gáy hay bung keo.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-900 flex items-center justify-center font-bold">
              04
            </div>
            <h3 className="font-display font-bold text-base text-stone-900">
              Đóng Gói Chống Va Đập 3 Lớp
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Mỗi cuốn sách gửi đi đều được bọc màng co bảo vệ, quấn màng xốp khí bóng nước và đặt trong hộp carton sóng cứng 3 lớp.
            </p>
          </div>
        </div>
      </div>

      {/* Advisory & Editorial Board */}
      <div className="bg-[#f5f2eb] rounded-2xl p-8 sm:p-12 border border-stone-200">
        <div className="max-w-2xl mx-auto text-center space-y-4">
          <Users className="w-8 h-8 text-amber-900 mx-auto" />
          <h3 className="font-display text-2xl font-bold text-stone-900">
            Hội Đồng Cố Vấn & Biên Tập Trung Hiếu Books
          </h3>
          <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
            Chúng tôi tự hào quy tụ đội ngũ học giả, giảng viên ngôn ngữ và các nhà nghiên cứu văn học có thâm niên. Mọi đề mục xuất bản đều được bình duyệt và thẩm định kỹ lưỡng trước khi đưa vào in ấn.
          </p>
          <div className="pt-4 flex flex-wrap justify-center gap-4 text-xs font-semibold text-stone-800">
            <span className="px-3.5 py-1.5 bg-white rounded-lg shadow-2xs">Ban Cố Vấn Văn Học Cổ Điển</span>
            <span className="px-3.5 py-1.5 bg-white rounded-lg shadow-2xs">Tổ Biên Dịch Triết Học</span>
            <span className="px-3.5 py-1.5 bg-white rounded-lg shadow-2xs">Họa Sĩ Thiết Kế Bìa Nghệ Thuật</span>
          </div>
        </div>
      </div>

      {/* Call to action */}
      <div className="text-center pt-4">
        <button
          onClick={() => onNavigate('shop')}
          className="px-8 py-3.5 bg-stone-900 hover:bg-stone-800 active:scale-[0.98] text-white text-xs font-semibold rounded-xl transition-all cursor-pointer shadow-xs"
        >
          Khám phá các ấn phẩm tại Cửa Hàng
        </button>
      </div>
    </div>
  );
};
