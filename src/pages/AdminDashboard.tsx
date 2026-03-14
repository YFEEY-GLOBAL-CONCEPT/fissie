import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  LayoutDashboard, DollarSign, MessageSquare, Image, FileText, LogOut,
  TrendingUp, Users, Heart, ArrowUpRight, Eye, Download, CheckCircle, XCircle, Clock
} from "lucide-react";

// Mock data
const mockDonations = [
  { id: 1, name: "Aisha Mohammed", email: "aisha@gmail.com", amount: 50000, status: "success", ref: "TXN_001234", date: "2026-03-10", message: "Keep up the great work!" },
  { id: 2, name: "John Okafor", email: "john@gmail.com", amount: 20000, status: "success", ref: "TXN_001235", date: "2026-03-08", message: "" },
  { id: 3, name: "Fatima Bello", email: "fatima@yahoo.com", amount: 10000, status: "pending", ref: "TXN_001236", date: "2026-03-06", message: "For the children" },
  { id: 4, name: "David Eze", email: "david@hotmail.com", amount: 5000, status: "success", ref: "TXN_001237", date: "2026-03-04", message: "" },
  { id: 5, name: "Grace Adeyemi", email: "grace@gmail.com", amount: 100000, status: "success", ref: "TXN_001238", date: "2026-03-01", message: "God bless your efforts" },
];

const mockMessages = [
  { id: 1, name: "Sarah James", email: "sarah@gmail.com", subject: "Volunteer", message: "I want to volunteer with your organization.", date: "2026-03-12", status: "unread" },
  { id: 2, name: "Michael Uche", email: "michael@gmail.com", subject: "Partnership", message: "We'd like to discuss a partnership opportunity.", date: "2026-03-10", status: "read" },
  { id: 3, name: "Blessing Obi", email: "blessing@gmail.com", subject: "Donation inquiry", message: "How can I donate materials?", date: "2026-03-08", status: "unread" },
];

type Tab = "overview" | "donations" | "messages" | "gallery" | "pages";

const statusIcon = (status: string) => {
  if (status === "success") return <CheckCircle size={16} className="text-green-600" />;
  if (status === "pending") return <Clock size={16} className="text-yellow-600" />;
  return <XCircle size={16} className="text-destructive" />;
};

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState<Tab>("overview");
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("admin_session")) {
      navigate("/admin");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("admin_session");
    navigate("/admin");
  };

  const totalDonations = mockDonations.reduce((s, d) => s + (d.status === "success" ? d.amount : 0), 0);
  const unreadMessages = mockMessages.filter(m => m.status === "unread").length;

  const sidebarItems: { label: string; icon: typeof LayoutDashboard; tab: Tab }[] = [
    { label: "Overview", icon: LayoutDashboard, tab: "overview" },
    { label: "Donations", icon: DollarSign, tab: "donations" },
    { label: "Messages", icon: MessageSquare, tab: "messages" },
    { label: "Gallery", icon: Image, tab: "gallery" },
    { label: "Pages", icon: FileText, tab: "pages" },
  ];

  return (
    <div className="min-h-screen flex bg-muted">
      {/* Sidebar */}
      <aside className="w-64 bg-primary text-primary-foreground flex flex-col shrink-0">
        <div className="p-6 border-b border-primary-foreground/10">
          <Link to="/" className="text-lg font-bold">
            FissieE-J <span className="text-gold">Admin</span>
          </Link>
        </div>
        <nav className="flex-1 py-4">
          {sidebarItems.map((item) => (
            <button
              key={item.tab}
              onClick={() => setActiveTab(item.tab)}
              className={`w-full flex items-center gap-3 px-6 py-3 text-sm font-medium transition-colors ${
                activeTab === item.tab
                  ? "bg-primary-foreground/10 text-gold"
                  : "text-primary-foreground/70 hover:text-primary-foreground hover:bg-primary-foreground/5"
              }`}
            >
              <item.icon size={18} />
              {item.label}
              {item.tab === "messages" && unreadMessages > 0 && (
                <span className="ml-auto bg-gold text-foreground text-xs px-2 py-0.5 rounded-full">{unreadMessages}</span>
              )}
            </button>
          ))}
        </nav>
        <div className="p-4 border-t border-primary-foreground/10">
          <button onClick={handleLogout} className="flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-primary-foreground w-full">
            <LogOut size={16} />
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-auto">
        <header className="bg-background border-b border-border px-8 py-4 flex items-center justify-between">
          <h1 className="text-xl font-bold text-foreground capitalize">{activeTab}</h1>
          <Link to="/" className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-1">
            <Eye size={14} /> View Site
          </Link>
        </header>

        <div className="p-8">
          {activeTab === "overview" && <OverviewTab totalDonations={totalDonations} unreadMessages={unreadMessages} />}
          {activeTab === "donations" && <DonationsTab />}
          {activeTab === "messages" && <MessagesTab />}
          {activeTab === "gallery" && <GalleryTab />}
          {activeTab === "pages" && <PagesTab />}
        </div>
      </main>
    </div>
  );
};

const OverviewTab = ({ totalDonations, unreadMessages }: { totalDonations: number; unreadMessages: number }) => (
  <div>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
      {[
        { label: "Total Donations", value: `₦${totalDonations.toLocaleString()}`, icon: DollarSign, color: "text-green-600" },
        { label: "Total Donors", value: mockDonations.length.toString(), icon: Users, color: "text-blue-600" },
        { label: "Unread Messages", value: unreadMessages.toString(), icon: MessageSquare, color: "text-orange-600" },
        { label: "Avg Donation", value: `₦${Math.round(totalDonations / mockDonations.filter(d => d.status === "success").length).toLocaleString()}`, icon: TrendingUp, color: "text-purple-600" },
      ].map((stat) => (
        <div key={stat.label} className="bg-background rounded-xl border border-border p-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-muted-foreground">{stat.label}</span>
            <stat.icon size={18} className={stat.color} />
          </div>
          <p className="text-2xl font-bold text-foreground">{stat.value}</p>
        </div>
      ))}
    </div>

    <div className="grid md:grid-cols-2 gap-6">
      <div className="bg-background rounded-xl border border-border p-6">
        <h3 className="font-bold text-foreground mb-4">Recent Donations</h3>
        <div className="space-y-3">
          {mockDonations.slice(0, 4).map((d) => (
            <div key={d.id} className="flex items-center justify-between py-2 border-b border-border last:border-0">
              <div>
                <p className="text-sm font-medium text-foreground">{d.name}</p>
                <p className="text-xs text-muted-foreground">{d.date}</p>
              </div>
              <div className="flex items-center gap-2">
                {statusIcon(d.status)}
                <span className="text-sm font-bold text-foreground">₦{d.amount.toLocaleString()}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-background rounded-xl border border-border p-6">
        <h3 className="font-bold text-foreground mb-4">Recent Messages</h3>
        <div className="space-y-3">
          {mockMessages.map((m) => (
            <div key={m.id} className="flex items-start justify-between py-2 border-b border-border last:border-0">
              <div>
                <p className="text-sm font-medium text-foreground flex items-center gap-2">
                  {m.name}
                  {m.status === "unread" && <span className="w-2 h-2 bg-gold rounded-full" />}
                </p>
                <p className="text-xs text-muted-foreground">{m.subject}</p>
              </div>
              <span className="text-xs text-muted-foreground">{m.date}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const DonationsTab = () => (
  <div>
    <div className="flex items-center justify-between mb-6">
      <p className="text-muted-foreground">All donation records</p>
      <button className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm font-medium hover:opacity-90 transition-opacity">
        <Download size={14} /> Export CSV
      </button>
    </div>
    <div className="bg-background rounded-xl border border-border overflow-hidden">
      <table className="w-full">
        <thead>
          <tr className="border-b border-border bg-muted/50">
            <th className="text-left p-4 text-xs font-bold uppercase text-muted-foreground">Donor</th>
            <th className="text-left p-4 text-xs font-bold uppercase text-muted-foreground">Amount</th>
            <th className="text-left p-4 text-xs font-bold uppercase text-muted-foreground">Status</th>
            <th className="text-left p-4 text-xs font-bold uppercase text-muted-foreground">Reference</th>
            <th className="text-left p-4 text-xs font-bold uppercase text-muted-foreground">Date</th>
          </tr>
        </thead>
        <tbody>
          {mockDonations.map((d) => (
            <tr key={d.id} className="border-b border-border last:border-0 hover:bg-muted/30">
              <td className="p-4">
                <p className="text-sm font-medium text-foreground">{d.name}</p>
                <p className="text-xs text-muted-foreground">{d.email}</p>
              </td>
              <td className="p-4 text-sm font-bold text-foreground">₦{d.amount.toLocaleString()}</td>
              <td className="p-4">
                <span className={`inline-flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-full ${
                  d.status === "success" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"
                }`}>
                  {statusIcon(d.status)} {d.status}
                </span>
              </td>
              <td className="p-4 text-xs text-muted-foreground font-mono">{d.ref}</td>
              <td className="p-4 text-sm text-muted-foreground">{d.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

const MessagesTab = () => {
  const [selectedMsg, setSelectedMsg] = useState<typeof mockMessages[0] | null>(null);

  return (
    <div className="grid md:grid-cols-3 gap-6">
      <div className="md:col-span-1 bg-background rounded-xl border border-border overflow-hidden">
        <div className="p-4 border-b border-border">
          <h3 className="font-bold text-foreground text-sm">Inbox</h3>
        </div>
        <div className="divide-y divide-border">
          {mockMessages.map((m) => (
            <button
              key={m.id}
              onClick={() => setSelectedMsg(m)}
              className={`w-full text-left p-4 hover:bg-muted/50 transition-colors ${selectedMsg?.id === m.id ? "bg-muted" : ""}`}
            >
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-foreground flex items-center gap-1">
                  {m.name}
                  {m.status === "unread" && <span className="w-2 h-2 bg-gold rounded-full" />}
                </p>
                <span className="text-xs text-muted-foreground">{m.date}</span>
              </div>
              <p className="text-xs text-muted-foreground mt-1 truncate">{m.subject}</p>
            </button>
          ))}
        </div>
      </div>
      <div className="md:col-span-2 bg-background rounded-xl border border-border p-6">
        {selectedMsg ? (
          <div>
            <div className="mb-6">
              <h3 className="text-lg font-bold text-foreground">{selectedMsg.subject}</h3>
              <p className="text-sm text-muted-foreground">From: {selectedMsg.name} ({selectedMsg.email})</p>
              <p className="text-xs text-muted-foreground">{selectedMsg.date}</p>
            </div>
            <p className="text-foreground leading-relaxed mb-6">{selectedMsg.message}</p>
            <textarea
              placeholder="Type your reply..."
              rows={3}
              className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-gold/30 mb-3 resize-none"
            />
            <button className="bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm font-medium hover:opacity-90 transition-opacity">
              Send Reply
            </button>
          </div>
        ) : (
          <p className="text-muted-foreground text-center py-12">Select a message to view</p>
        )}
      </div>
    </div>
  );
};

const GalleryTab = () => (
  <div>
    <div className="flex items-center justify-between mb-6">
      <p className="text-muted-foreground">Manage gallery images</p>
      <button className="bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm font-medium hover:opacity-90 transition-opacity">
        Upload Image
      </button>
    </div>
    <div className="bg-background rounded-xl border border-border p-8 text-center">
      <Image size={48} className="text-muted-foreground mx-auto mb-4" />
      <p className="text-foreground font-bold mb-2">Gallery Management</p>
      <p className="text-sm text-muted-foreground">
        Enable Lovable Cloud to upload, manage, and delete gallery images with captions.
      </p>
    </div>
  </div>
);

const PagesTab = () => (
  <div>
    <p className="text-muted-foreground mb-6">Edit website page content</p>
    <div className="grid md:grid-cols-2 gap-4">
      {["Homepage", "Who We Are", "What We Do", "Contact Us", "Donate"].map((page) => (
        <div key={page} className="bg-background rounded-xl border border-border p-6 flex items-center justify-between">
          <div>
            <h4 className="font-bold text-foreground">{page}</h4>
            <p className="text-xs text-muted-foreground">Last edited: 2026-03-12</p>
          </div>
          <button className="text-sm text-primary font-medium hover:underline flex items-center gap-1">
            Edit <ArrowUpRight size={14} />
          </button>
        </div>
      ))}
    </div>
    <div className="bg-background rounded-xl border border-border p-8 text-center mt-6">
      <FileText size={48} className="text-muted-foreground mx-auto mb-4" />
      <p className="text-foreground font-bold mb-2">Page Editor</p>
      <p className="text-sm text-muted-foreground">
        Enable Lovable Cloud to edit page content, images, and sections directly from the dashboard.
      </p>
    </div>
  </div>
);

export default AdminDashboard;
