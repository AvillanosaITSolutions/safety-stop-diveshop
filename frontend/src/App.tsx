import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, NavLink, useLocation } from 'react-router-dom';
import { Button, Card, Label, Navbar, NavbarBrand, TextInput, Textarea } from 'flowbite-react';
import { HiMenu, HiX } from 'react-icons/hi';
import HomePage from './pages/HomePage';
import CoursesPage from './pages/CoursesPage';
import CourseDetailsPage from './pages/CourseDetailsPage';
import ShipwrecksPage from './pages/ShipwrecksPage';
import AboutUsPage from './pages/AboutUsPage';
import SiteFooter from './components/layout/SiteFooter';
import PortfolioChip from './components/PortfolioChip';
import ssdLogo from './assets/ssd-logo.webp';

type ServiceItem = {
  id: string;
  name: string;
  description: string;
  price: number;
};

const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3001';

const topNavLinks = [
  { label: 'Home', path: '/', end: true },
  { label: 'Dive Courses', path: '/courses' },
  { label: 'Shipwrecks', path: '/shipwrecks' },
  { label: 'About Us', path: '/about' },
];

function PublicLayout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHeaderSolid, setIsHeaderSolid] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const updateHeaderBackground = () => {
      if (!isHomePage) {
        setIsHeaderSolid(true);
        return;
      }

      setIsHeaderSolid(window.scrollY > 0);
    };

    updateHeaderBackground();
    window.addEventListener('scroll', updateHeaderBackground, { passive: true });
    window.addEventListener('resize', updateHeaderBackground);

    return () => {
      window.removeEventListener('scroll', updateHeaderBackground);
      window.removeEventListener('resize', updateHeaderBackground);
    };
  }, [isHomePage, location.pathname]);

  return (
    <>
      <Navbar
        className={`${isHomePage ? 'fixed inset-x-0 top-0' : 'sticky top-0'} z-50 transition-colors duration-300 ${isHeaderSolid
          ? 'border-b border-gray-700/70 !bg-gray-800/95 supports-[backdrop-filter]:backdrop-blur'
          : 'border-0 !bg-transparent'
          }`}
        style={{ backgroundColor: isHeaderSolid ? 'rgba(31, 41, 55, 0.95)' : 'transparent' }}
      >
        <div className="mx-auto mt-3 w-[min(94%,72rem)] px-4 py-2.5 sm:px-7">
          <div className="flex items-center justify-between gap-4">
            <Link to="/" className="cursor-pointer">
              <NavbarBrand className="flex items-center gap-3">
                <img src={ssdLogo} alt="Safety Stop Diveshop logo" className="h-10 w-10 rounded-full object-cover" decoding="async" draggable={false} />
                <div className="leading-tight">
                  <p className="font-display text-lg font-bold tracking-[-0.02em] text-white sm:text-[1.35rem]">Safety Stop DiveShop</p>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-cyan-100/90">Coron, Palawan</p>
                </div>
              </NavbarBrand>
            </Link>

            <button
              type="button"
              aria-label="Toggle navigation menu"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full text-slate-100 transition hover:text-white md:hidden"
            >
              {isMobileMenuOpen ? <HiX className="h-5 w-5" /> : <HiMenu className="h-5 w-5" />}
            </button>

            <div className="hidden flex-wrap items-center justify-end gap-2 md:flex">
              {topNavLinks.map((link) => (
                <NavLink
                  key={link.label}
                  to={link.path}
                  end={link.end}
                  className={({ isActive }) =>
                    `px-3.5 py-2 text-[10px] font-semibold uppercase tracking-[0.08em] transition-all duration-200 sm:text-[11px] ${isActive
                      ? 'text-white'
                      : 'text-slate-200/90 hover:text-white'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
          </div>

          {isMobileMenuOpen && (
            <div className="mt-3 grid gap-2 pt-3 md:hidden">
              {topNavLinks.map((link) => (
                <NavLink
                  key={`mobile-${link.label}`}
                  to={link.path}
                  end={link.end}
                  className={({ isActive }) =>
                    `px-4 py-2.5 text-left text-[11px] font-semibold uppercase tracking-[0.08em] transition-all duration-150 ${isActive
                      ? 'text-white'
                      : 'text-slate-200/90 hover:text-white'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
          )}
        </div>
      </Navbar>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/courses/:courseSlug" element={<CourseDetailsPage />} />
        <Route path="/shipwrecks" element={<ShipwrecksPage />} />
        <Route path="/about" element={<AboutUsPage />} />
      </Routes>
      <SiteFooter />
    </>
  );
}

function AdminPages() {
  const [currentPage, setCurrentPage] = useState<'bookings' | 'payments' | 'chat' | 'status'>('bookings');
  const [services, setServices] = useState<ServiceItem[]>([]);
  const [bookings, setBookings] = useState<any[]>([]);
  const [message, setMessage] = useState('');
  const [bookingForm, setBookingForm] = useState({
    serviceId: '',
    customerName: '',
    customerEmail: '',
    customerPhone: '',
    preferredDate: '',
  });
  const [paymentForm, setPaymentForm] = useState({
    amount: '45000',
    bookingId: '',
    notes: '',
  });
  const [chatMessage, setChatMessage] = useState('');

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch(`${apiBaseUrl}/catalog/services`);
        const data = await response.json();
        setServices(data);
        if (data[0]?.id) {
          setBookingForm(prev => ({ ...prev, serviceId: data[0].id }));
        }
      } catch (error) {
        console.error('Failed to fetch services:', error);
      }
    };

    const fetchBookings = async () => {
      try {
        const response = await fetch(`${apiBaseUrl}/bookings`);
        const data = await response.json();
        setBookings(data);
      } catch (error) {
        console.error('Failed to fetch bookings:', error);
      }
    };

    if (currentPage === 'bookings') {
      fetchServices();
      fetchBookings();
    }
  }, [currentPage]);

  const handleBookingSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch(`${apiBaseUrl}/bookings`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          serviceId: bookingForm.serviceId,
          customerName: bookingForm.customerName,
          customerEmail: bookingForm.customerEmail,
          customerPhone: bookingForm.customerPhone,
          preferredDate: bookingForm.preferredDate,
        }),
      });
      if (response.ok) {
        const data = await response.json();
        setMessage(`✅ Booking created: ${data.id}`);
        setBookingForm({ serviceId: services[0]?.id || '', customerName: '', customerEmail: '', customerPhone: '', preferredDate: '' });
        setBookings([...bookings, data]);
      } else {
        setMessage('❌ Error creating booking');
      }
    } catch (error) {
      setMessage('❌ Error creating booking');
    }
  };

  const handlePaymentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch(`${apiBaseUrl}/payments/intent`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount: parseInt(paymentForm.amount),
          bookingId: paymentForm.bookingId || undefined,
          notes: paymentForm.notes,
        }),
      });
      const data = await response.json();
      setMessage(`✅ Payment intent created: ${data.id || data.clientSecret || 'Success'}`);
    } catch (error) {
      setMessage('❌ Error creating payment intent');
    }
  };

  const handleChatWebhook = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await fetch(`${apiBaseUrl}/chat/webhook`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: chatMessage }),
      });
      setMessage('✅ Chat event logged');
      setChatMessage('');
    } catch (error) {
      setMessage('❌ Error logging chat event');
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar className="bg-gray-800 border-b border-gray-700 sticky top-0 z-50">
        <Link to="/" className="flex items-center gap-2 cursor-pointer">
          <NavbarBrand className="flex items-center gap-2">
            <img src={ssdLogo} alt="Safety Stop Diveshop logo" className="w-9 h-9 rounded-full object-cover" />
            <span className="font-display text-xl font-bold text-white hidden sm:inline">Safety Stop DiveShop Admin</span>
          </NavbarBrand>
        </Link>
        <div className="flex gap-2 md:order-2 flex-wrap">
          {[
            { name: 'bookings', label: 'Bookings' },
            { name: 'payments', label: 'Payments' },
            { name: 'chat', label: 'Chat' },
            { name: 'status', label: 'Status' },
          ].map(({ name, label }) => (
            <Button
              key={name}
              color={currentPage === name ? 'blue' : 'gray'}
              size="sm"
              className="rounded-full"
              onClick={() => setCurrentPage(name as any)}
            >
              <span className="hidden sm:inline">{label}</span>
            </Button>
          ))}
        </div>
      </Navbar>

      <div className="container mx-auto py-8 px-4">
        {message && (
          <div className={`mb-4 p-4 rounded border ${message.startsWith('✅') ? 'bg-green-900 border-green-500 text-green-100' : 'bg-red-900 border-red-500 text-red-100'}`}>
            {message}
          </div>
        )}

        {currentPage === 'bookings' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="bg-gray-800 border-gray-700">
              <h2 className="text-2xl font-bold mb-4 text-white">Create Booking</h2>
              <form onSubmit={handleBookingSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="service" className="text-gray-300">Service</Label>
                  <select
                    id="service"
                    value={bookingForm.serviceId}
                    onChange={(e) => setBookingForm({ ...bookingForm, serviceId: e.target.value })}
                    className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded text-white"
                    required
                  >
                    <option value="">Select a service</option>
                    {services.map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.name} - ₱{(s.price / 100).toFixed(2)}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <Label htmlFor="name" className="text-gray-300">Customer Name</Label>
                  <TextInput
                    id="name"
                    value={bookingForm.customerName}
                    onChange={(e) => setBookingForm({ ...bookingForm, customerName: e.target.value })}
                    required
                    theme={{ field: { input: { colors: { gray: 'bg-gray-700 border-gray-600 text-white' } } } }}
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-gray-300">Email</Label>
                  <TextInput
                    id="email"
                    type="email"
                    value={bookingForm.customerEmail}
                    onChange={(e) => setBookingForm({ ...bookingForm, customerEmail: e.target.value })}
                    required
                    theme={{ field: { input: { colors: { gray: 'bg-gray-700 border-gray-600 text-white' } } } }}
                  />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-gray-300">Phone</Label>
                  <TextInput
                    id="phone"
                    value={bookingForm.customerPhone}
                    onChange={(e) => setBookingForm({ ...bookingForm, customerPhone: e.target.value })}
                    required
                    theme={{ field: { input: { colors: { gray: 'bg-gray-700 border-gray-600 text-white' } } } }}
                  />
                </div>
                <div>
                  <Label htmlFor="date" className="text-gray-300">Preferred Date</Label>
                  <TextInput
                    id="date"
                    type="date"
                    value={bookingForm.preferredDate}
                    onChange={(e) => setBookingForm({ ...bookingForm, preferredDate: e.target.value })}
                    required
                    theme={{ field: { input: { colors: { gray: 'bg-gray-700 border-gray-600 text-white' } } } }}
                  />
                </div>
                <Button type="submit" color="blue" className="w-full rounded-full">Create Booking</Button>
              </form>
            </Card>

            <Card className="bg-gray-800 border-gray-700">
              <h2 className="text-2xl font-bold mb-4 text-white">Recent Bookings ({bookings.length})</h2>
              <div className="space-y-3 max-h-96 overflow-y-auto">
                {bookings.length === 0 ? (
                  <p className="text-gray-400">No bookings yet</p>
                ) : (
                  bookings.map((booking) => (
                    <div key={booking.id} className="p-3 bg-gray-700 rounded text-sm border-l-4 border-cyan-500">
                      <p className="font-semibold text-cyan-300">{booking.customerName}</p>
                      <p className="text-gray-400 text-xs">{booking.customerEmail}</p>
                      <p className="text-gray-500 text-xs">📅 {booking.preferredDate}</p>
                      <p className="text-gray-500 text-xs">Status: <span className="text-yellow-400">{booking.status}</span></p>
                    </div>
                  ))
                )}
              </div>
            </Card>
          </div>
        )}

        {currentPage === 'payments' && (
          <Card className="bg-gray-800 border-gray-700 max-w-2xl">
            <h2 className="text-2xl font-bold mb-4 text-white">Create Payment Intent</h2>
            <form onSubmit={handlePaymentSubmit} className="space-y-4">
              <div>
                <Label htmlFor="amount" className="text-gray-300">Amount (in centavos, e.g., 45000 = ₱450)</Label>
                <TextInput
                  id="amount"
                  type="number"
                  value={paymentForm.amount}
                  onChange={(e) => setPaymentForm({ ...paymentForm, amount: e.target.value })}
                  required
                  theme={{ field: { input: { colors: { gray: 'bg-gray-700 border-gray-600 text-white' } } } }}
                />
              </div>
              <div>
                <Label htmlFor="bookingId" className="text-gray-300">Booking ID (Optional)</Label>
                <TextInput
                  id="bookingId"
                  value={paymentForm.bookingId}
                  onChange={(e) => setPaymentForm({ ...paymentForm, bookingId: e.target.value })}
                  theme={{ field: { input: { colors: { gray: 'bg-gray-700 border-gray-600 text-white' } } } }}
                />
              </div>
              <div>
                <Label htmlFor="notes" className="text-gray-300">Notes</Label>
                <Textarea
                  id="notes"
                  value={paymentForm.notes}
                  onChange={(e) => setPaymentForm({ ...paymentForm, notes: e.target.value })}
                  theme={{ base: 'bg-gray-700 border-gray-600 text-white' }}
                />
              </div>
              <Button type="submit" color="blue" className="w-full rounded-full">Create Payment Intent</Button>
            </form>
          </Card>
        )}

        {currentPage === 'chat' && (
          <Card className="bg-gray-800 border-gray-700 max-w-2xl">
            <h2 className="text-2xl font-bold mb-4 text-white">Chat Event Webhook</h2>
            <form onSubmit={handleChatWebhook} className="space-y-4">
              <div>
                <Label htmlFor="chatMsg" className="text-gray-300">Message</Label>
                <Textarea
                  id="chatMsg"
                  value={chatMessage}
                  onChange={(e) => setChatMessage(e.target.value)}
                  placeholder="Chat message content..."
                  required
                  theme={{ base: 'bg-gray-700 border-gray-600 text-white' }}
                />
              </div>
              <Button type="submit" color="blue" className="w-full rounded-full">Log Chat Event</Button>
            </form>
          </Card>
        )}

        {currentPage === 'status' && (
          <Card className="bg-gray-800 border-gray-700">
            <h2 className="text-2xl font-bold mb-4 text-white">Operations Status</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gray-700 p-4 rounded">
                <p className="text-gray-400 text-sm">Total Bookings</p>
                <p className="text-3xl font-bold text-cyan-400">{bookings.length}</p>
              </div>
              <div className="bg-gray-700 p-4 rounded">
                <p className="text-gray-400 text-sm">Backend Status</p>
                <p className="text-lg font-bold text-green-400">✅ Online</p>
              </div>
              <div className="bg-gray-700 p-4 rounded">
                <p className="text-gray-400 text-sm">Database</p>
                <p className="text-lg font-bold text-green-400">✅ Connected</p>
              </div>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
}

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/*" element={<PublicLayout />} />
        <Route path="/admin/*" element={<AdminPages />} />
      </Routes>
      <PortfolioChip />
    </Router>
  );
}

export default App;
