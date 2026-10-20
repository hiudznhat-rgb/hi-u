import React from 'react';
import { BookOpen } from 'lucide-react';
import { PageId } from './Header';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (page: PageId) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-stone-900 text-stone-300 pt-14 pb-10 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-stone-800">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <button
              onClick={() => handleNav('home')}
              className="flex items-center gap-2 text-white hover:opacity-90 transition-opacity cursor-pointer text-left"
            >
              <div className="w-8 h-8 rounded-lg bg-stone-800 text-amber-300 flex items-center justify-center">
                <BookOpen className="w-4 h-4" />
              </div>
              <span className="font-display text-xl font-bold tracking-tight">Trung Hiếu Books</span>
            </button>
            <p className="text-xs text-stone-400 leading-relaxed max-w-sm">
              Hiệu sách trực tuyến tôn vinh văn hóa đọc đích thực. Mỗi tác phẩm được tuyển lựa công phu, gìn giữ trọn vẹn vẻ đẹp nguyên tác và đóng gói tỉ mỉ trước khi đến tay bạn đọc.
            </p>
            <div className="text-xs text-stone-400 space-y-1">
              <p>Chi nhánh Hà Nội: Số 18 Phố Tràng Tiền, Quận Hoàn Kiếm</p>
              <p>Chi nhánh TP.HCM: Số 156 Đường Nguyễn Du, Quận 1</p>
              <p>Hotline: (024) 3826 8998 &middot; Email: bientap@trunghieubooks.vn</p>
            </div>
          </div>

          {/* 5 Main Site Pages */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
              5 Trang Chính Trên Web
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li>
                <button
                  onClick={() => handleNav('home')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  1. Trang Chủ & Ấn Bản Nổi Bật
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('shop')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  2. Cửa Hàng & Danh Mục Sách
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('reading-room')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  3. Phòng Đọc Thử Trực Tuyến
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('about')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  4. Giới Thiệu Về Trung Hiếu Books
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('contact')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  5. Liên Hệ & Hỗ Trợ Độc Giả
                </button>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
              Thể Loại Tuyển Chọn
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li><button onClick={() => handleNav('shop')} className="hover:text-white cursor-pointer">Văn học kinh điển</button></li>
              <li><button onClick={() => handleNav('shop')} className="hover:text-white cursor-pointer">Triết học phương Đông</button></li>
              <li><button onClick={() => handleNav('shop')} className="hover:text-white cursor-pointer">Khoa học & Vũ trụ</button></li>
              <li><button onClick={() => handleNav('shop')} className="hover:text-white cursor-pointer">Mỹ thuật & Thiết kế</button></li>
              <li><button onClick={() => handleNav('shop')} className="hover:text-white cursor-pointer">Tâm lý & Lối sống</button></li>
            </ul>
          </div>

          {/* Guarantee Badges */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
              Cam Kết Dịch Vụ
            </h4>
            <div className="space-y-2 text-xs text-stone-400">
              <div className="p-2 bg-stone-800 rounded-lg border border-stone-700 text-stone-300">
                100% Sách bản quyền
              </div>
              <div className="p-2 bg-stone-800 rounded-lg border border-stone-700 text-stone-300">
                Đóng gói 3 lớp carton
              </div>
              <div className="p-2 bg-stone-800 rounded-lg border border-stone-700 text-stone-300">
                Đổi mới trong 7 ngày
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-4">
          <p>&copy; {new Date().getFullYear()} Trung Hiếu Books. Giữ toàn bộ quyền sở hữu trí tuệ.</p>
          <div className="flex items-center gap-4 text-xs">
            <span>Chính sách đổi trả 7 ngày</span>
            <span aria-hidden="true">&middot;</span>
            <span>Bảo mật thông tin</span>
            <span aria-hidden="true">&middot;</span>
            <span>Quy chuẩn đóng gói</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
