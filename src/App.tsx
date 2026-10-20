/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { BOOKS_DATA, Book } from './data/books';
import { CartItem, Order } from './types';
import { Header, PageId } from './components/Header';
import { HomePage } from './pages/HomePage';
import { ShopPage } from './pages/ShopPage';
import { ReadingRoomPage } from './pages/ReadingRoomPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { BookDetailModal } from './components/BookDetailModal';
import { BookReaderModal } from './components/BookReaderModal';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { WishlistModal } from './components/WishlistModal';
import { Footer } from './components/Footer';
import { Check } from 'lucide-react';

export default function App() {
  // Navigation state (5 distinct pages)
  const [currentPage, setCurrentPage] = useState<PageId>('home');

  // Persistence for Cart & Wishlist
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('trunghieu_cart');
      return saved ? JSON.parse(saved) : [
        { book: BOOKS_DATA[0], quantity: 1 } // Pre-seed 1 book so cart has rich initial state
      ];
    } catch {
      return [{ book: BOOKS_DATA[0], quantity: 1 }];
    }
  });

  const [wishlist, setWishlist] = useState<Book[]>(() => {
    try {
      const saved = localStorage.getItem('trunghieu_wishlist');
      return saved ? JSON.parse(saved) : [BOOKS_DATA[1]];
    } catch {
      return [BOOKS_DATA[1]];
    }
  });

  // Global search query
  const [searchQuery, setSearchQuery] = useState('');

  // Modals state
  const [quickViewBook, setQuickViewBook] = useState<Book | null>(null);
  const [readingBook, setReadingBook] = useState<Book | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  // Promo code state
  const [promoDiscount, setPromoDiscount] = useState<number>(0);
  const [promoCode, setPromoCode] = useState<string>('');

  // Toast feedback state
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    try {
      localStorage.setItem('trunghieu_cart', JSON.stringify(cart));
    } catch {
      // ignore
    }
  }, [cart]);

  useEffect(() => {
    try {
      localStorage.setItem('trunghieu_wishlist', JSON.stringify(wishlist));
    } catch {
      // ignore
    }
  }, [wishlist]);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 2800);
  };

  // Cart operations
  const handleAddToCart = (book: Book, quantity: number = 1) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.book.id === book.id);
      if (existing) {
        return prev.map((item) =>
          item.book.id === book.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { book, quantity }];
    });
    showToast(`Đã thêm "${book.title}" vào giỏ sách!`);
  };

  const handleUpdateQuantity = (bookId: string, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveFromCart(bookId);
      return;
    }
    setCart((prev) =>
      prev.map((item) =>
        item.book.id === bookId ? { ...item, quantity } : item
      )
    );
  };

  const handleRemoveFromCart = (bookId: string) => {
    setCart((prev) => prev.filter((item) => item.book.id !== bookId));
  };

  // Wishlist operations
  const handleToggleWishlist = (book: Book) => {
    setWishlist((prev) => {
      const exists = prev.some((b) => b.id === book.id);
      if (exists) {
        showToast(`Đã bỏ "${book.title}" khỏi danh sách yêu thích`);
        return prev.filter((b) => b.id !== book.id);
      } else {
        showToast(`Đã lưu "${book.title}" vào danh sách yêu thích`);
        return [...prev, book];
      }
    });
  };

  const handleRemoveFromWishlist = (bookId: string) => {
    setWishlist((prev) => prev.filter((b) => b.id !== bookId));
  };

  // Promo code validation
  const handleApplyPromo = (code: string): boolean => {
    const clean = code.trim().toUpperCase();
    if (clean === 'TRUNGHIEU10' || clean === 'KHAITRI10') {
      setPromoDiscount(0.1);
      setPromoCode('TRUNGHIEU10');
      return true;
    }
    return false;
  };

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const totalCartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col bg-[#faf9f6] text-stone-900 selection:bg-amber-200">
      {/* Toast Feedback */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-stone-900 text-white text-xs font-medium px-4 py-3 rounded-xl shadow-xl flex items-center gap-2 border border-stone-800 animate-in fade-in slide-in-from-bottom-2 duration-200">
          <Check className="w-4 h-4 text-emerald-400" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Header with 5 Page Navigation Links */}
      <Header
        currentPage={currentPage}
        onNavigate={handleNavigate}
        cartCount={totalCartCount}
        wishlistCount={wishlist.length}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenWishlist={() => setIsWishlistOpen(true)}
      />

      {/* Main Multi-Page Content Area */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            books={BOOKS_DATA}
            wishlist={wishlist}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            onNavigate={handleNavigate}
            onToggleWishlist={handleToggleWishlist}
            onAddToCart={handleAddToCart}
            onOpenQuickView={setQuickViewBook}
            onOpenReader={setReadingBook}
          />
        )}

        {currentPage === 'shop' && (
          <ShopPage
            books={BOOKS_DATA}
            wishlist={wishlist}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            onToggleWishlist={handleToggleWishlist}
            onAddToCart={handleAddToCart}
            onOpenQuickView={setQuickViewBook}
            onOpenReader={setReadingBook}
          />
        )}

        {currentPage === 'reading-room' && (
          <ReadingRoomPage
            books={BOOKS_DATA}
            onAddToCart={handleAddToCart}
            onOpenQuickView={setQuickViewBook}
          />
        )}

        {currentPage === 'about' && (
          <AboutPage onNavigate={handleNavigate} />
        )}

        {currentPage === 'contact' && (
          <ContactPage />
        )}
      </main>

      {/* Global Modals & Overlays */}
      <BookDetailModal
        book={quickViewBook}
        isWishlisted={quickViewBook ? wishlist.some((b) => b.id === quickViewBook.id) : false}
        onClose={() => setQuickViewBook(null)}
        onAddToCart={handleAddToCart}
        onToggleWishlist={handleToggleWishlist}
        onOpenReader={(b) => {
          setQuickViewBook(null);
          setReadingBook(b);
        }}
      />

      <BookReaderModal
        book={readingBook}
        onClose={() => setReadingBook(null)}
        onAddToCart={handleAddToCart}
      />

      <CartDrawer
        isOpen={isCartOpen}
        items={cart}
        promoDiscount={promoDiscount}
        promoCode={promoCode}
        onApplyPromo={handleApplyPromo}
        onClose={() => setIsCartOpen(false)}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveFromCart}
        onProceedToCheckout={() => setIsCheckoutOpen(true)}
        onBrowseBooks={() => handleNavigate('shop')}
      />

      <CheckoutModal
        isOpen={isCheckoutOpen}
        items={cart}
        promoDiscount={promoDiscount}
        promoCode={promoCode}
        onClose={() => setIsCheckoutOpen(false)}
        onOrderSuccess={(order) => {
          setCart([]);
          showToast(`Đơn hàng #${order.orderId} đã được ghi nhận thành công!`);
        }}
      />

      <WishlistModal
        isOpen={isWishlistOpen}
        wishlist={wishlist}
        onClose={() => setIsWishlistOpen(false)}
        onRemoveFromWishlist={handleRemoveFromWishlist}
        onAddToCart={handleAddToCart}
      />

      {/* Footer across all 5 pages */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
