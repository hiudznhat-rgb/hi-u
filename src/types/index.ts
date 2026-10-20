import { Book } from '../data/books';

export interface CartItem {
  book: Book;
  quantity: number;
}

export interface CustomerInfo {
  fullName: string;
  phoneNumber: string;
  email: string;
  address: string;
  city: string;
  paymentMethod: 'cod' | 'bank_transfer' | 'card';
  notes?: string;
}

export interface Order {
  orderId: string;
  createdAt: string;
  customer: CustomerInfo;
  items: CartItem[];
  subtotal: number;
  discount: number;
  shippingFee: number;
  total: number;
  status: 'confirmed' | 'shipping' | 'delivered';
  estimatedDelivery: string;
}
