import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { 
  LayoutDashboard, 
  Calendar, 
  Image as ImageIcon, 
  Plus, 
  Edit, 
  Trash2, 
  LogOut, 
  Settings,
  Bell
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const DashboardPage = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("events");

  // Mock data
  const [events, setEvents] = useState([
    { id: 1, title: "Annual Charity Gala", date: "2023-08-15", status: "Published" },
    { id: 2, title: "Community Outreach", date: "2023-09-22", status: "Published" },
    { id: 3, title: "Fundraising Dinner", date: "2023-10-10", status: "Draft" },
  ]);

  const [galleryItems, setGalleryItems] = useState([
    { id: 1, title: "Medical Mission 2023", category: "Outreach" },
    { id: 2, title: "School Donation", category: "Education" },
  ]);

  useEffect(() => {
    const auth = localStorage.getItem("isAuthenticated");
    if (!auth) {
      navigate("/auth");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    toast.success("Logged out successfully");
    navigate("/auth");
  };

  const handleDeleteEvent = (id: number) => {
    setEvents(events.filter(e => e.id !== id));
    toast.success("Event deleted successfully");
  };

  return (
    <div className="flex min-h-screen bg-gray-50 pt-20">
      {/* Sidebar */}
      <aside className="w-64 bg-[#172554] text-white fixed h-full left-0 top-20 z-10 hidden md:block">
        <nav className="p-6 space-y-2">
            <button
            onClick={() => setActiveTab("overview")}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-sm transition-colors ${
              activeTab === "overview" ? "bg-gold text-[#172554] font-bold" : "hover:bg-white/10"
            }`}
          >
            <LayoutDashboard size={20} />
            Overview
          </button>
          <button
            onClick={() => setActiveTab("events")}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-sm transition-colors ${
              activeTab === "events" ? "bg-gold text-[#172554] font-bold" : "hover:bg-white/10"
            }`}
          >
            <Calendar size={20} />
            Manage Events
          </button>
          <button
            onClick={() => setActiveTab("gallery")}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-sm transition-colors ${
              activeTab === "gallery" ? "bg-gold text-[#172554] font-bold" : "hover:bg-white/10"
            }`}
          >
            <ImageIcon size={20} />
            Gallery CMS
          </button>
          <div className="pt-8 border-t border-white/10 mt-8">
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-sm hover:bg-white/10">
              <Settings size={20} />
              Settings
            </button>
            <button
              onClick={handleLogout}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-sm text-red-400 hover:bg-red-500/10"
            >
              <LogOut size={20} />
              Logout
            </button>
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 md:ml-64 p-8">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-3xl font-bold text-[#172554] capitalize">
              {activeTab.replace("-", " ")}
            </h1>
            <p className="text-gray-500 mt-1">FissieE-J CMS Dashboard</p>
          </div>
          <div className="flex items-center gap-4">
             <button className="p-2 bg-white rounded-full border shadow-sm text-gray-400 hover:text-[#172554]">
               <Bell size={20} />
             </button>
             <div className="h-10 w-10 bg-gold rounded-full flex items-center justify-center font-bold text-[#172554]">
               AD
             </div>
          </div>
        </div>

        {activeTab === "events" && (
          <div className="space-y-6">
            <div className="flex justify-between items-center bg-white p-6 rounded-sm shadow-sm border border-gray-100">
              <div>
                <h2 className="text-xl font-bold text-[#172554]">Global Events</h2>
                <p className="text-sm text-gray-500">Manage your foundation's activities</p>
              </div>
              <Button className="bg-gold text-[#172554] hover:bg-gold-hover flex items-center gap-2 rounded-sm shadow-sm">
                <Plus size={18} />
                Add New Event
              </Button>
            </div>

            <div className="bg-white rounded-sm shadow-sm border border-gray-100 overflow-hidden">
              <table className="w-full text-left">
                <thead className="bg-gray-50 border-b border-gray-100">
                  <tr>
                    <th className="px-6 py-4 text-xs font-bold uppercase text-gray-500 tracking-wider">Title</th>
                    <th className="px-6 py-4 text-xs font-bold uppercase text-gray-500 tracking-wider">Date</th>
                    <th className="px-6 py-4 text-xs font-bold uppercase text-gray-500 tracking-wider">Status</th>
                    <th className="px-6 py-4 text-xs font-bold uppercase text-gray-500 tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {events.map((event) => (
                    <tr key={event.id} className="hover:bg-gray-50/50 transition-colors">
                      <td className="px-6 py-4 font-medium text-[#172554]">{event.title}</td>
                      <td className="px-6 py-4 text-gray-500">{event.date}</td>
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase ${
                          event.status === "Published" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"
                        }`}>
                          {event.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 flex gap-3">
                        <button className="text-blue-500 hover:text-blue-700"><Edit size={18} /></button>
                        <button 
                          onClick={() => handleDeleteEvent(event.id)}
                          className="text-red-500 hover:text-red-700"
                        >
                          <Trash2 size={18} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === "gallery" && (
          <div className="space-y-6">
            <div className="flex justify-between items-center bg-white p-6 rounded-sm shadow-sm border border-gray-100">
              <div>
                <h2 className="text-xl font-bold text-[#172554]">Gallery Management</h2>
                <p className="text-sm text-gray-500">Upload and organize mission photos</p>
              </div>
              <Button className="bg-gold text-[#172554] hover:bg-gold-hover flex items-center gap-2 rounded-sm shadow-sm">
                <Plus size={18} />
                Upload Images
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryItems.map(item => (
                <div key={item.id} className="bg-white rounded-sm shadow-sm border border-gray-100 overflow-hidden group">
                  <div className="aspect-video bg-gray-200 relative flex items-center justify-center text-gray-400">
                    <ImageIcon size={48} />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                      <button className="p-2 bg-white rounded-full text-blue-500"><Edit size={18} /></button>
                      <button className="p-2 bg-white rounded-full text-red-500"><Trash2 size={18} /></button>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-[#172554]">{item.title}</h3>
                    <p className="text-xs text-gray-500 mt-1">{item.category}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "overview" && (
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#172554] text-white p-8 rounded-sm shadow-sm relative overflow-hidden">
               <div className="relative z-10">
                 <p className="opacity-60 text-sm font-bold uppercase tracking-widest mb-2">Total Events</p>
                 <h2 className="text-5xl font-bold">12</h2>
               </div>
               <Calendar className="absolute right-[-10%] bottom-[-10%] opacity-10 w-32 h-32" />
            </div>
            <div className="bg-gold text-[#172554] p-8 rounded-sm shadow-sm relative overflow-hidden">
               <div className="relative z-10">
                 <p className="opacity-60 text-sm font-bold uppercase tracking-widest mb-2">Gallery Assets</p>
                 <h2 className="text-5xl font-bold">48</h2>
               </div>
               <ImageIcon className="absolute right-[-10%] bottom-[-10%] opacity-10 w-32 h-32" />
            </div>
             <div className="bg-white p-8 rounded-sm shadow-sm border border-gray-100 relative overflow-hidden">
               <div className="relative z-10">
                 <p className="text-gray-400 text-sm font-bold uppercase tracking-widest mb-2">Active Impact</p>
                 <h2 className="text-5xl font-bold text-[#172554]">₦850k</h2>
               </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default DashboardPage;
