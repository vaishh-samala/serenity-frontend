import { Card, CardContent } from "@/components/ui/card";
import {
    Calendar,
    CheckCircle,
    Clock,
    PlusCircle,
    User,
    XCircle,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const TherapyDetailsModal = ({ isOpen, onClose, therapy, therapist }) => {
  if (!isOpen || !therapy) return null;
  const randomMeetingId = Math.floor(
    100000000 + Math.random() * 900000000,
  );

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-background p-8 rounded-lg shadow-xl w-full max-w-2xl">
        <h2 className="text-2xl font-bold mb-6">{therapy.title}</h2>
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <label className="block text-md font-medium text-foreground">
              Description:{" "}
            </label>
            <p className="text-muted-foreground">{therapy.description}</p>
          </div>
          <div className="flex items-center gap-2">
            <label className="block text-md font-medium text-foreground">
              Type:{" "}
            </label>
            <p className="text-muted-foreground">{therapy.type}</p>
          </div>
          <div className="flex items-center gap-2">
            <label className="block text-md font-medium text-foreground">
              Date:{" "}
            </label>
            <p className="text-muted-foreground flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              {new Date(therapy.scheduledAt).toLocaleString()}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <label className="block text-md font-medium text-foreground">
              Duration:{" "}
            </label>
            <p className="text-muted-foreground flex items-center gap-2">
              <Clock className="h-4 w-4" />
              {therapy.duration ? `${therapy.duration} min` : "N/A"}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <label className="block text-md font-medium text-foreground">
              Cost:{" "}
            </label>
            <p className="text-muted-foreground">
              {therapy.cost ? `$${therapy.cost}` : "N/A"}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <label className="block text-md font-medium text-foreground">
              Meeting Link:{" "}
            </label>
            <a href={therapy.meetingLink ? `${therapy.meetingLink}` :  `https://zoom.us/j/${randomMeetingId}`} className="text-sm text-primary hover:underline"
                  target="_blank"
                  rel="noopener noreferrer">
              {therapy.meetingLink ? `${therapy.meetingLink}` :  `https://zoom.us/j/${randomMeetingId}`}
            </a>
          </div>
          <div className="flex items-center gap-2">
            <label className="block text-md font-medium text-foreground">
              Therapist:{" "}
            </label>
            <p className="text-muted-foreground flex items-center gap-2">
              <User className="h-4 w-4" />
              {therapist
                ? `${therapist.therapistDetails.firstName} ${therapist.therapistDetails.lastName}`
                : "Unknown"}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <label className="block text-md font-medium text-foreground">
              Recurrence:{" "}
            </label>
            <p className="text-muted-foreground">
              {therapy.recurrence || "None"}
            </p>
          </div>
          {therapy.recurrence && (
            <>
              <div className="flex items-center gap-2">
                <label className="block text-md font-medium text-foreground">
                  Recurrence Day:{" "}
                </label>
                <p className="text-muted-foreground">
                  {therapy.recurrenceDay || "N/A"}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <label className="block text-md font-medium text-foreground">
                  Recurrence Range:{" "}
                </label>
                <p className="text-muted-foreground">
                  {therapy.recurrenceRangeStart && therapy.recurrenceRangeEnd
                    ? `${new Date(therapy.recurrenceRangeStart).toLocaleDateString()} - ${new Date(therapy.recurrenceRangeEnd).toLocaleDateString()}`
                    : "N/A"}
                </p>
              </div>
            </>
          )}
          <div className="flex items-center gap-2">
            <label className="block text-md font-medium text-foreground">
              Bookings:{" "}
            </label>
            <p className="text-muted-foreground">
              {therapy.bookings.length} Booked
            </p>
          </div>
        </div>
        <div className="mt-8 flex justify-end">
          <button
            className="px-4 py-2 border border-border rounded-md hover:bg-gray-100"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

const TherapistDetailsModal = ({ isOpen, onClose, therapist }) => {
  if (!isOpen || !therapist) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-background p-8 rounded-lg shadow-xl w-full max-w-2xl">
        <h2 className="text-2xl font-bold mb-6">
          {therapist.therapistDetails?.firstName || "Unknown"}{" "}
          {therapist.therapistDetails?.lastName || "Unknown"}
        </h2>
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <label className="block text-md font-medium text-foreground">
              Email:{" "}
            </label>
            <p className="text-muted-foreground">{therapist.email || "N/A"}</p>
          </div>
          <div className="flex items-center gap-2">
            <label className="block text-md font-medium text-foreground">
              Phone Number:{" "}
            </label>
            <p className="text-muted-foreground">
              {therapist.therapistDetails?.phoneNumber || "N/A"}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <label className="block text-md font-medium text-foreground">
              Bio:{" "}
            </label>
            <p className="text-muted-foreground">
              {therapist.therapistDetails?.bio || "N/A"}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <label className="block text-md font-medium text-foreground">
              Experience:{" "}
            </label>
            <p className="text-muted-foreground">
              {therapist.therapistDetails?.experienceYears
                ? `${therapist.therapistDetails.experienceYears} years`
                : "N/A"}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <label className="block text-md font-medium text-foreground">
              Document:{" "}
            </label>
            <p className="text-muted-foreground">
              {therapist.therapistDetails?.documentPath ? (
                <Link
                  to={`${therapist.therapistDetails.documentPath}`}
                  className="text-primary hover:underline"
                  target="_blank"
                >
                  View Document
                </Link>
              ) : (
                "N/A"
              )}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <label className="block text-md font-medium text-foreground">
              Status:{" "}
            </label>
            <p className="text-muted-foreground">
              {therapist.approved
                ? "Approved"
                : therapist.rejected
                  ? "Rejected"
                  : "Pending"}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <label className="block text-md font-medium text-foreground">
              Created At:{" "}
            </label>
            <p className="text-muted-foreground">
              {new Date(therapist.createdAt).toLocaleString()}
            </p>
          </div>
        </div>
        <div className="mt-8 flex justify-end">
          <button
            className="px-4 py-2 border border-border rounded-md hover:bg-gray-100"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

const ScheduleTherapyModal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  onSchedule: (data: {
    title: string;
    scheduledAt: string;
    duration: number;
    description: string;
    type: "INDIVIDUAL" | "GROUP" | "COUPLES";
    cost: number;
    recurrence: "DAILY" | "WEEKLY" | "MONTHLY" | "YEARLY" | null;
    recurrenceDay: string | null;
    recurrenceRangeStart: string | null;
    recurrenceRangeEnd: string | null;
  }) => void;
}> = ({ isOpen, onClose, onSchedule }) => {
  const [formData, setFormData] = useState<{
    title: string;
    date: string;
    duration: string;
    description: string;
    type: string;
    cost: string;
    recurrence: string;
    recurrenceDay: string;
    recurrenceRangeStart: string;
    recurrenceRangeEnd: string;
  }>({
    title: "",
    date: "",
    duration: "",
    description: "",
    type: "",
    cost: "",
    recurrence: "",
    recurrenceDay: "",
    recurrenceRangeStart: "",
    recurrenceRangeEnd: "",
  });
  const [errors, setErrors] = useState<
    Partial<Record<keyof typeof formData, string>>
  >({});

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof typeof formData, string>> = {};
    if (!formData.title.trim()) newErrors.title = "Title is required";
    if (!formData.date) newErrors.date = "Date is required";
    if (
      !formData.duration ||
      isNaN(Number(formData.duration)) ||
      Number(formData.duration) <= 0
    ) {
      newErrors.duration = "Valid duration is required";
    }
    if (!formData.type) newErrors.type = "Type is required";
    if (
      !formData.cost ||
      isNaN(Number(formData.cost)) ||
      Number(formData.cost) <= 0
    ) {
      newErrors.cost = "Valid cost is required";
    }
    if (formData.recurrence === "WEEKLY" && !formData.recurrenceDay) {
      newErrors.recurrenceDay =
        "Recurrence day is required for weekly recurrence";
    }
    if (formData.recurrence && !formData.recurrenceRangeStart) {
      newErrors.recurrenceRangeStart = "Recurrence start date is required";
    }
    if (
      formData.recurrence &&
      formData.recurrenceRangeStart &&
      formData.recurrenceRangeEnd
    ) {
      if (
        new Date(formData.recurrenceRangeStart) >
        new Date(formData.recurrenceRangeEnd)
      ) {
        newErrors.recurrenceRangeEnd = "End date must be after start date";
      }
    }
    console.log(newErrors, "NEW");
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = () => {
    if (!validateForm()) return;

    onSchedule({
      title: formData.title,
      scheduledAt: formData.date,
      duration: parseInt(formData.duration),
      description: formData.description,
      type: formData.type as "INDIVIDUAL" | "GROUP" | "COUPLES",
      cost: parseFloat(formData.cost),
      recurrence: formData.recurrence
        ? (formData.recurrence as "DAILY" | "WEEKLY" | "MONTHLY" | "YEARLY")
        : null,
      recurrenceDay:
        formData.recurrence === "WEEKLY" ? formData.recurrenceDay : null,
      recurrenceRangeStart: formData.recurrence
        ? formData.recurrenceRangeStart
        : null,
      recurrenceRangeEnd: formData.recurrence
        ? formData.recurrenceRangeEnd
        : null,
    });

    setFormData({
      title: "",
      date: "",
      duration: "",
      description: "",
      type: "",
      cost: "",
      recurrence: "",
      recurrenceDay: "",
      recurrenceRangeStart: "",
      recurrenceRangeEnd: "",
    });
    setErrors({});
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-background p-8 rounded-lg shadow-xl w-full max-w-4xl">
        <h2 className="text-2xl font-bold mb-6">Schedule New Therapy</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="block text-sm font-medium text-foreground mb-1">
              Title <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className={`w-full p-3 border ${errors.title ? "border-red-500" : "border-border"} rounded-md focus:outline-none focus:ring-2 focus:ring-primary`}
              placeholder="Enter therapy title"
            />
            {errors.title && (
              <p className="text-red-500 text-xs mt-1">{errors.title}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1">
              Date <span className="text-red-500">*</span>
            </label>
            <input
              type="datetime-local"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className={`w-full p-3 border ${errors.date ? "border-red-500" : "border-border"} rounded-md focus:outline-none focus:ring-2 focus:ring-primary`}
            />
            {errors.date && (
              <p className="text-red-500 text-xs mt-1">{errors.date}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1">
              Duration (minutes) <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              name="duration"
              value={formData.duration}
              onChange={handleChange}
              className={`w-full p-3 border ${errors.duration ? "border-red-500" : "border-border"} rounded-md focus:outline-none focus:ring-2 focus:ring-primary`}
              placeholder="Enter duration"
              min="1"
            />
            {errors.duration && (
              <p className="text-red-500 text-xs mt-1">{errors.duration}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1">
              Type <span className="text-red-500">*</span>
            </label>
            <select
              name="type"
              value={formData.type}
              onChange={handleChange}
              className={`w-full p-3 border ${errors.type ? "border-red-500" : "border-border"} rounded-md focus:outline-none focus:ring-2 focus:ring-primary`}
            >
              <option value="" disabled>
                Select therapy type
              </option>
              <option value="INDIVIDUAL_THERAPY">Individual</option>
              <option value="GROUP_THERAPY">Group</option>
              <option value="YOGA_THERAPY">Yoga</option>
              <option value="SPIRITUAL_THERAPY">Spiritual</option>
              <option value="MUSIC_THERAPY">Music</option>
              <option value="ARTS_CRAFTS_THERAPY">Arts & Crafts</option>
            </select>
            {errors.type && (
              <p className="text-red-500 text-xs mt-1">{errors.type}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1">
              Cost ($) <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              name="cost"
              value={formData.cost}
              onChange={handleChange}
              className={`w-full p-3 border ${errors.cost ? "border-red-500" : "border-border"} rounded-md focus:outline-none focus:ring-2 focus:ring-primary`}
              placeholder="Enter cost"
              step="0.01"
              min="0.01"
            />
            {errors.cost && (
              <p className="text-red-500 text-xs mt-1">{errors.cost}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1">
              Recurrence
            </label>
            <select
              name="recurrence"
              value={formData.recurrence}
              onChange={handleChange}
              className="w-full p-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="">None</option>
              <option value="DAILY">Daily</option>
              <option value="WEEKLY">Weekly</option>
              <option value="MONTHLY">Monthly</option>
              <option value="YEARLY">Yearly</option>
            </select>
          </div>
          {formData.recurrence === "WEEKLY" && (
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">
                Recurrence Day <span className="text-red-500">*</span>
              </label>
              <select
                name="recurrenceDay"
                value={formData.recurrenceDay}
                onChange={handleChange}
                className={`w-full p-3 border ${errors.recurrenceDay ? "border-red-500" : "border-border"} rounded-md focus:outline-none focus:ring-2 focus:ring-primary`}
              >
                <option value="" disabled>
                  Select day
                </option>
                <option value="MONDAY">Monday</option>
                <option value="TUESDAY">Tuesday</option>
                <option value="WEDNESDAY">Wednesday</option>
                <option value="THURSDAY">Thursday</option>
                <option value="FRIDAY">Friday</option>
                <option value="SATURDAY">Saturday</option>
                <option value="SUNDAY">Sunday</option>
              </select>
              {errors.recurrenceDay && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.recurrenceDay}
                </p>
              )}
            </div>
          )}
          {formData.recurrence && (
            <>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">
                  Recurrence Start <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  name="recurrenceRangeStart"
                  value={formData.recurrenceRangeStart}
                  onChange={handleChange}
                  className={`w-full p-3 border ${errors.recurrenceRangeStart ? "border-red-500" : "border-border"} rounded-md focus:outline-none focus:ring-2 focus:ring-primary`}
                />
                {errors.recurrenceRangeStart && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.recurrenceRangeStart}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">
                  Recurrence End
                </label>
                <input
                  type="date"
                  name="recurrenceRangeEnd"
                  value={formData.recurrenceRangeEnd}
                  onChange={handleChange}
                  className={`w-full p-3 border ${errors.recurrenceRangeEnd ? "border-red-500" : "border-border"} rounded-md focus:outline-none focus:ring-2 focus:ring-primary`}
                />
                {errors.recurrenceRangeEnd && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.recurrenceRangeEnd}
                  </p>
                )}
              </div>
            </>
          )}
          <div className="col-span-1 md:col-span-3">
            <label className="block text-sm font-medium text-foreground mb-1">
              Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full p-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Enter therapy description"
              rows={4}
            />
          </div>
        </div>
        <div className="mt-8 flex justify-end gap-4">
          <button
            className="px-4 py-2 border border-border rounded-md hover:bg-gray-100"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 disabled:bg-gray-400"
            onClick={handleSubmit}
          >
            Schedule
          </button>
        </div>
      </div>
    </div>
  );
};

const Dashboard = () => {
  const [role, setRole] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [mainTab, setMainTab] = useState("pending");
  const [therapyTab, setTherapyTab] = useState("upcoming");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [therapists, setTherapists] = useState([]);
  const [users, setUsers] = useState([]);
  const [therapies, setTherapies] = useState([]);
  const [approved, setApproved] = useState(true);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedTherapist, setSelectedTherapist] = useState(null);
  const [approvalFormData, setApprovalFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    bio: "",
    experienceYears: "",
    document: null,
  });
  const [selectedTherapy, setSelectedTherapy] = useState(null);

  useEffect(() => {
    const storedRole = localStorage.getItem("role");
    if (storedRole) {
      setRole(storedRole);
    }
  }, []);

  useEffect(() => {
    if (role) {
      fetchData();
    }
  }, [role]);

  const fetchData = async () => {
    setIsLoading(true)
    const token = localStorage.getItem("token");
    if (!token) return;

    const res = await fetch("https://serenity-backend-beige.vercel.app/user", {
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await res.json();

    if (role === "admin") {
      setTherapists(data.therapists);
      setUsers(data.users);
      setTherapies(data.therapies);
    } else if (role === "therapist") {
      if (data.approved === false) {
        setApproved(false);
        if (data.submitted) {
          setIsSubmitted(true);
        }
      } else {
        setApproved(true);
        setTherapies(data.therapies);
      }
    } else if (role === "user") {
      setTherapies(data.therapies);
    }
    setIsLoading(false)
  };

  const handleApprove = async (id) => {
    const token = localStorage.getItem("token");
    await fetch(`https://serenity-backend-beige.vercel.app/admin/therapists/${id}/approve`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ approved: true }),
    });
    fetchData();
  };

  const handleReject = async (id) => {
    const token = localStorage.getItem("token");
    await fetch(`https://serenity-backend-beige.vercel.app/admin/therapists/${id}/reject`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ approved: false }),
    });
    fetchData();
  };

  const handleSchedule = async (data) => {
    const token = localStorage.getItem("token");
    await fetch("https://serenity-backend-beige.vercel.app/therapy", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });
    fetchData();
  };

  const handleApprovalChange = (e) => {
    setApprovalFormData({
      ...approvalFormData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    setApprovalFormData({ ...approvalFormData, document: e.target.files[0] });
  };

  const handleApprovalSubmit = async () => {
    const token = localStorage.getItem("token");
    const fd = new FormData();
    fd.append("firstName", approvalFormData.firstName);
    fd.append("lastName", approvalFormData.lastName);
    fd.append("email", approvalFormData.email);
    fd.append("phoneNumber", approvalFormData.phoneNumber);
    fd.append("bio", approvalFormData.bio);
    fd.append("experienceYears", approvalFormData.experienceYears);
    if (approvalFormData.document) {
      fd.append("document", approvalFormData.document);
    }

    const res = await fetch(
      "https://serenity-backend-beige.vercel.app/therapist/request-approval",
      {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
        body: fd,
      },
    );
    if (res.ok) {
      setIsSubmitted(true);
    }
  };

  if(isLoading){
    return (
        <div className="min-h-screen bg-background py-12 flex items-center justify-center">
        <Card className="border-border/50">
          <CardContent className="text-center py-12">
            <div className="flex justify-center items-center">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
            </div>
            <p className="text-muted-foreground mt-4">Loading Data...</p>
          </CardContent>
        </Card>
      </div>
    )
  }

  if (!role) {
    return (
      <div className="min-h-full bg-background flex items-center justify-center py-20">
        <div className="bg-background rounded-lg shadow-lg border border-border p-8 max-w-md w-full text-center">
          <h1 className="text-2xl font-heading font-bold text-foreground mb-4">
            Access Denied
          </h1>
          <p className="text-muted-foreground mb-6">
            Please login or signup first to see the dashboard.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              to="/login"
              className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="px-4 py-2 bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/90 transition"
            >
              Signup
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        {role === "admin" && (
          <div className="space-y-12">
            <div className="text-center animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
                Admin Dashboard
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Manage therapists, users, and therapies efficiently
              </p>
            </div>
            <div className="space-y-6">
              <div className="flex justify-center">
                <div className="flex gap-2 bg-muted/20 p-1 rounded-lg max-w-3xl w-full items-center justify-center">
                  <button
                    className={`px-4 py-2 rounded-md ${mainTab === "pending" ? "bg-primary text-primary-foreground border border-border" : "text-muted-foreground"}`}
                    onClick={() => setMainTab("pending")}
                  >
                    Pending Therapists
                  </button>
                  <button
                    className={`px-4 py-2 rounded-md ${mainTab === "approved" ? "bg-primary text-primary-foreground border border-border" : "text-muted-foreground"}`}
                    onClick={() => setMainTab("approved")}
                  >
                    Approved Therapists
                  </button>
                  <button
                    className={`px-4 py-2 rounded-md ${mainTab === "users" ? "bg-primary text-primary-foreground border border-border" : "text-muted-foreground"}`}
                    onClick={() => setMainTab("users")}
                  >
                    Users
                  </button>
                  <button
                    className={`px-4 py-2 rounded-md ${mainTab === "therapies" ? "bg-primary text-primary-foreground border border-border" : "text-muted-foreground"}`}
                    onClick={() => setMainTab("therapies")}
                  >
                    Therapies
                  </button>
                </div>
              </div>
              {mainTab === "pending" && (
                <div className="bg-background rounded-lg shadow-lg border border-border">
                  <div className="p-6">
                    <h2 className="text-xl font-bold mb-2">
                      Pending Therapists
                    </h2>
                    <p className="text-muted-foreground mb-4">
                      Review and approve therapist applications
                    </p>
                    <div className="overflow-x-auto rounded-lg border border-border">
                      <table className="w-full text-sm text-left text-foreground">
                        <thead className="text-xs text-muted-foreground uppercase bg-muted/50">
                          <tr>
                            <th className="px-6 py-3">Name</th>
                            <th className="px-6 py-3">Details</th>
                            <th className="px-6 py-3">Document</th>
                            <th className="px-6 py-3">Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {therapists
                            .filter(
                              (therapist) =>
                                !therapist.approved && !therapist.rejected,
                            )
                            .map((therapist) => (
                              <tr
                                key={therapist.id}
                                className="border-b border-border/50 hover:bg-muted/10 cursor-pointer"
                                onClick={() => setSelectedTherapist(therapist)}
                              >
                                <td className="px-6 py-4 flex items-center gap-2">
                                  <User className="h-4 w-4" />
                                  {`${therapist.therapistDetails?.firstName} ${therapist.therapistDetails?.lastName}`}
                                </td>
                                <td className="px-6 py-4">{`${therapist.therapistDetails?.bio}, ${therapist.therapistDetails?.experienceYears} years experience`}</td>
                                <td className="px-6 py-4">
                                  <Link
                                    to={`${therapist.therapistDetails?.documentPath}`}
                                    className="text-primary hover:underline"
                                    onClick={(e) => e.stopPropagation()}
                                    target="_blank"
                                  >
                                    {therapist.therapistDetails?.documentPath}
                                  </Link>
                                </td>
                                <td className="px-6 py-4">
                                  <div
                                    className="flex gap-2"
                                    onClick={(e) => e.stopPropagation()}
                                  >
                                    <button
                                      className="px-3 py-1 bg-primary text-primary-foreground rounded-md flex items-center gap-1"
                                      onClick={() =>
                                        handleApprove(therapist.id)
                                      }
                                    >
                                      <CheckCircle className="h-4 w-4" />{" "}
                                      Approve
                                    </button>
                                    <button
                                      className="px-3 py-1 bg-destructive text-destructive-foreground rounded-md flex items-center gap-1"
                                      onClick={() => handleReject(therapist.id)}
                                    >
                                      <XCircle className="h-4 w-4" /> Reject
                                    </button>
                                  </div>
                                </td>
                              </tr>
                            ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}
              {mainTab === "approved" && (
                <div className="bg-background rounded-lg shadow-lg border border-border">
                  <div className="p-6">
                    <h2 className="text-xl font-bold mb-2">
                      Approved Therapists
                    </h2>
                    <p className="text-muted-foreground mb-4">
                      View all approved therapists
                    </p>
                    <div className="overflow-x-auto rounded-lg border border-border">
                      <table className="w-full text-sm text-left text-foreground">
                        <thead className="text-xs text-muted-foreground uppercase bg-muted/50">
                          <tr>
                            <th className="px-6 py-3">Name</th>
                            <th className="px-6 py-3">Details</th>
                          </tr>
                        </thead>
                        <tbody>
                          {therapists
                            .filter((therapist) => therapist.approved)
                            .map((therapist) => (
                              <tr
                                key={therapist.id}
                                className="border-b border-border/50 hover:bg-muted/10 cursor-pointer"
                                onClick={() => setSelectedTherapist(therapist)}
                              >
                                <td className="px-6 py-4 flex items-center gap-2">
                                  <User className="h-4 w-4" />
                                  {`${therapist.therapistDetails?.firstName} ${therapist.therapistDetails?.lastName}`}
                                </td>
                                <td className="px-6 py-4">{`${therapist.therapistDetails?.bio}, ${therapist.therapistDetails?.experienceYears} years experience`}</td>
                              </tr>
                            ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}
              {mainTab === "users" && (
                <div className="bg-background rounded-lg shadow-lg border border-border">
                  <div className="p-6">
                    <h2 className="text-xl font-bold mb-2">Users</h2>
                    <p className="text-muted-foreground mb-4">
                      Manage registered users
                    </p>
                    <div className="overflow-x-auto rounded-lg border border-border">
                      <table className="w-full text-sm text-left text-foreground">
                        <thead className="text-xs text-muted-foreground uppercase bg-muted/50">
                          <tr>
                            <th className="px-6 py-3">Name</th>
                            <th className="px-6 py-3">Email</th>
                            <th className="px-6 py-3">Joined</th>
                          </tr>
                        </thead>
                        <tbody>
                          {users.map((user) => (
                            <tr
                              key={user.id}
                              className="border-b border-border/50 hover:bg-muted/10"
                            >
                              <td className="px-6 py-4 flex items-center gap-2">
                                <User className="h-4 w-4" />
                                {user.name}
                              </td>
                              <td className="px-6 py-4">{user.email}</td>
                              <td className="px-6 py-4">
                                {new Date(user.createdAt).toLocaleDateString()}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}
              {mainTab === "therapies" && (
                <div className="space-y-4">
                  <div className="flex justify-center">
                    <div className="flex gap-2 bg-muted/20 p-1 rounded-lg w-full max-w-[200px] border border-border">
                      <button
                        className={`flex-1 py-2 rounded-md ${therapyTab === "upcoming" ? "border border-primary text-foreground" : "text-muted-foreground"}`}
                        onClick={() => setTherapyTab("upcoming")}
                      >
                        Upcoming
                      </button>
                      <button
                        className={`flex-1 py-2 rounded-md ${therapyTab === "past" ? "border border-primary text-foreground" : "text-muted-foreground"}`}
                        onClick={() => setTherapyTab("past")}
                      >
                        Past
                      </button>
                    </div>
                  </div>
                  {therapyTab === "upcoming" && (
                    <div className="bg-background rounded-lg shadow-lg border border-border">
                      <div className="p-6">
                        <h2 className="text-xl font-bold mb-2">
                          Upcoming Therapies
                        </h2>
                        <p className="text-muted-foreground mb-4">
                          View all upcoming therapy sessions
                        </p>
                        <div className="overflow-x-auto rounded-lg border border-border">
                          <table className="w-full text-sm text-left text-foreground">
                            <thead className="text-xs text-muted-foreground uppercase bg-muted/50">
                              <tr>
                                <th className="px-6 py-3">Title</th>
                                <th className="px-6 py-3">Therapist</th>
                                <th className="px-6 py-3">Date</th>
                                <th className="px-6 py-3">Duration</th>
                              </tr>
                            </thead>
                            <tbody>
                              {therapies
                                .filter(
                                  (therapy) =>
                                    new Date(therapy.scheduledAt) > new Date(),
                                )
                                .map((therapy) => {
                                  const therapist = therapists.find(
                                    (t) => t.id === therapy.therapistId,
                                  );
                                  return (
                                    <tr
                                      key={therapy.id}
                                      className="border-b border-border/50 hover:bg-muted/10 cursor-pointer"
                                      onClick={() =>
                                        setSelectedTherapy(therapy)
                                      }
                                    >
                                      <td className="px-6 py-4">
                                        {therapy.title}
                                      </td>
                                      <td className="px-6 py-4">
                                        <div className="flex items-center gap-2">
                                          <User className="h-4 w-4" />
                                          {therapist
                                            ? `${therapist.therapistDetails?.firstName} ${therapist.therapistDetails?.lastName}`
                                            : "Unknown"}
                                        </div>
                                      </td>
                                      <td className="px-6 py-4">
                                        <div className="flex items-center gap-2">
                                          <Calendar className="h-4 w-4" />
                                          {new Date(
                                            therapy.scheduledAt,
                                          ).toLocaleDateString()}
                                        </div>
                                      </td>
                                      <td className="px-6 py-4">
                                        <div className="flex items-center gap-2">
                                          <Clock className="h-4 w-4" />
                                          {therapy.duration
                                            ? `${therapy.duration} min`
                                            : "N/A"}
                                        </div>
                                      </td>
                                    </tr>
                                  );
                                })}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  )}
                  {therapyTab === "past" && (
                    <div className="bg-background rounded-lg shadow-lg border border-border">
                      <div className="p-6">
                        <h2 className="text-xl font-bold mb-2">
                          Past Therapies
                        </h2>
                        <p className="text-muted-foreground mb-4">
                          View all past therapy sessions
                        </p>
                        <div className="overflow-x-auto rounded-lg border border-border">
                          <table className="w-full text-sm text-left text-foreground">
                            <thead className="text-xs text-muted-foreground uppercase bg-muted/50">
                              <tr>
                                <th className="px-6 py-3">Title</th>
                                <th className="px-6 py-3">Therapist</th>
                                <th className="px-6 py-3">Date</th>
                                <th className="px-6 py-3">Duration</th>
                              </tr>
                            </thead>
                            <tbody>
                              {therapies
                                .filter(
                                  (therapy) =>
                                    new Date(therapy.scheduledAt) <= new Date(),
                                )
                                .map((therapy) => {
                                  const therapist = therapists.find(
                                    (t) => t.id === therapy.therapistId,
                                  );
                                  return (
                                    <tr
                                      key={therapy.id}
                                      className="border-b border-border/50 hover:bg-muted/10 cursor-pointer"
                                      onClick={() =>
                                        setSelectedTherapy(therapy)
                                      }
                                    >
                                      <td className="px-6 py-4">
                                        {therapy.title}
                                      </td>
                                      <td className="px-6 py-4">
                                        <div className="flex items-center gap-2">
                                          <User className="h-4 w-4" />
                                          {therapist
                                            ? `${therapist.therapistDetails?.firstName} ${therapist.therapistDetails?.lastName}`
                                            : "Unknown"}
                                        </div>
                                      </td>
                                      <td className="px-6 py-4">
                                        <div className="flex items-center gap-2">
                                          <Calendar className="h-4 w-4" />
                                          {new Date(
                                            therapy.scheduledAt,
                                          ).toLocaleDateString()}
                                        </div>
                                      </td>
                                      <td className="px-6 py-4">
                                        <div className="flex items-center gap-2">
                                          <Clock className="h-4 w-4" />
                                          {therapy.duration
                                            ? `${therapy.duration} min`
                                            : "N/A"}
                                        </div>
                                      </td>
                                    </tr>
                                  );
                                })}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        )}
        {role === "therapist" && (
          <div className="space-y-12">
            <div className="text-center animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
                Therapist Dashboard
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Manage your therapies and bookings
              </p>
            </div>
            {!approved ? (
              <div className="bg-background p-8 rounded-xl shadow-2xl w-full max-w-2xl mx-auto">
                {isSubmitted ? (
                  <p className="text-center text-primary text-lg font-medium">
                    Your request has been submitted. Awaiting approval.
                  </p>
                ) : (
                  <>
                    <h2 className="text-3xl font-bold text-foreground mb-6 text-center">
                      Request Approval
                    </h2>
                    <div className="space-y-6">
                      <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
                        <div className="flex-1">
                          <label className="block text-sm font-medium text-foreground mb-1">
                            First Name
                          </label>
                          <input
                            type="text"
                            name="firstName"
                            value={approvalFormData.firstName}
                            onChange={handleApprovalChange}
                            className="w-full p-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition"
                            placeholder="Enter your first name"
                          />
                        </div>
                        <div className="flex-1">
                          <label className="block text-sm font-medium text-foreground mb-1">
                            Last Name
                          </label>
                          <input
                            type="text"
                            name="lastName"
                            value={approvalFormData.lastName}
                            onChange={handleApprovalChange}
                            className="w-full p-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition"
                            placeholder="Enter your last name"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1">
                          Phone Number
                        </label>
                        <input
                          type="text"
                          name="phoneNumber"
                          value={approvalFormData.phoneNumber}
                          onChange={handleApprovalChange}
                          className="w-full p-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition"
                          placeholder="Enter your phone number"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1">
                          Experience Years
                        </label>
                        <input
                          type="number"
                          name="experienceYears"
                          value={approvalFormData.experienceYears}
                          onChange={handleApprovalChange}
                          className="w-full p-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition"
                          placeholder="Enter years of experience"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1">
                          Document
                        </label>
                        <input
                          type="file"
                          name="document"
                          onChange={handleFileChange}
                          className="w-full p-3 border border-border rounded-lg file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:bg-primary file:text-primary-foreground hover:file:bg-primary/90 transition"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1">
                          Bio
                        </label>
                        <textarea
                          name="bio"
                          value={approvalFormData.bio}
                          onChange={handleApprovalChange}
                          className="w-full p-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition resize-y"
                          placeholder="Tell us about yourself"
                        />
                      </div>
                      <div className="flex justify-end">
                        <button
                          className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition focus:ring-2 focus:ring-primary focus:ring-offset-2"
                          onClick={handleApprovalSubmit}
                        >
                          Submit Request
                        </button>
                      </div>
                    </div>
                  </>
                )}
              </div>
            ) : (
              <>
                <div className="flex justify-end items-center">
                  <button
                    className="px-4 py-2 bg-primary text-primary-foreground rounded-md flex items-center gap-2"
                    onClick={() => setIsModalOpen(true)}
                  >
                    <PlusCircle className="h-4 w-4" /> Schedule New Therapy
                  </button>
                </div>
                <div className="bg-background rounded-lg shadow-lg border border-border">
                  <div className="p-6">
                    <h2 className="text-xl font-bold mb-2">My Therapies</h2>
                    <p className="text-muted-foreground mb-4">
                      View and manage your scheduled therapies
                    </p>
                    <div className="overflow-x-auto rounded-lg border border-border">
                      <table className="w-full text-sm text-left text-foreground">
                        <thead className="text-xs text-muted-foreground uppercase bg-muted/50">
                          <tr>
                            <th className="px-6 py-3">Title</th>
                            <th className="px-6 py-3">Date</th>
                            <th className="px-6 py-3">Booked Count</th>
                            <th className="px-6 py-3">Duration</th>
                          </tr>
                        </thead>
                        <tbody>
                          {therapies?.map((therapy) => (
                            <tr
                              key={therapy.id}
                              className="border-b border-border/50 hover:bg-muted/10 cursor-pointer"
                              onClick={() => setSelectedTherapy(therapy)}
                            >
                              <td className="px-6 py-4">{therapy.title}</td>
                              <td className="px-6 py-4 flex items-center gap-2">
                                <Calendar className="h-4 w-4" />
                                {new Date(
                                  therapy.scheduledAt,
                                ).toLocaleDateString()}
                              </td>
                              <td className="px-6 py-4">
                                <span className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs">
                                  {therapy.bookings.length} Booked
                                </span>
                              </td>
                              <td className="px-6 py-4 flex items-center gap-2">
                                <Clock className="h-4 w-4" />
                                {therapy.duration
                                  ? `${therapy.duration} min`
                                  : "N/A"}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <ScheduleTherapyModal
                  isOpen={isModalOpen}
                  onClose={() => setIsModalOpen(false)}
                  onSchedule={handleSchedule}
                />
                <TherapyDetailsModal
                  isOpen={!!selectedTherapy}
                  onClose={() => setSelectedTherapy(null)}
                  therapy={selectedTherapy}
                  therapist={therapists.find(
                    (t) => t.id === selectedTherapy?.therapistId,
                  )}
                />
              </>
            )}
          </div>
        )}
        {role === "user" && (
          <div className="space-y-12">
            <div className="text-center animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
                User Dashboard
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                View and manage your booked therapies
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex justify-center">
                <div className="flex gap-2 bg-muted/20 p-1 rounded-lg w-full max-w-[200px]">
                  <button
                    className={`flex-1 py-2 rounded-md ${therapyTab === "upcoming" ? "bg-background text-foreground" : "text-muted-foreground"}`}
                    onClick={() => setTherapyTab("upcoming")}
                  >
                    Upcoming
                  </button>
                  <button
                    className={`flex-1 py-2 rounded-md ${therapyTab === "past" ? "bg-background text-foreground" : "text-muted-foreground"}`}
                    onClick={() => setTherapyTab("past")}
                  >
                    Past
                  </button>
                </div>
              </div>
              {therapyTab === "upcoming" && (
                <div className="bg-background rounded-lg shadow-lg border border-border">
                  <div className="p-6">
                    <h2 className="text-xl font-bold mb-2">
                      Upcoming Therapies
                    </h2>
                    <p className="text-muted-foreground mb-4">
                      Your scheduled therapy sessions
                    </p>
                    <div className="overflow-x-auto rounded-lg border border-border">
                      <table className="w-full text-sm text-left text-foreground">
                        <thead className="text-xs text-muted-foreground uppercase bg-muted/50">
                          <tr>
                            <th className="px-6 py-3">Title</th>
                            <th className="px-6 py-3">Therapist</th>
                            <th className="px-6 py-3">Date</th>
                            <th className="px-6 py-3">Duration</th>
                          </tr>
                        </thead>
                        <tbody>
                          {therapies
                            .filter(
                              (therapy) =>
                                new Date(therapy.scheduledAt) > new Date(),
                            )
                            .map((therapy) => (
                              <tr
                                key={therapy.id}
                                className="border-b border-border/50 hover:bg-muted/10 cursor-pointer"
                                onClick={() =>
                                  setSelectedTherapy(therapy.therapist)
                                }
                              >
                                <td className="px-6 py-4">{therapy.title}</td>
                                <td className="px-6 py-4">
                                  <div className="flex items-center gap-2">
                                    <User className="h-4 w-4" />
                                    {therapy.therapist
                                      ? `${therapy.therapist.therapistDetails?.firstName} ${therapy.therapist.therapistDetails?.lastName}`
                                      : "Unknown"}
                                  </div>
                                </td>
                                <td className="px-6 py-4">
                                  <div className="flex items-center gap-2">
                                    <Calendar className="h-4 w-4" />
                                    {new Date(
                                      therapy.scheduledAt,
                                    ).toLocaleDateString()}
                                  </div>
                                </td>
                                <td className="px-6 py-4">
                                  <div className="flex items-center gap-2">
                                    <Clock className="h-4 w-4" />
                                    {therapy.duration
                                      ? `${therapy.duration} min`
                                      : "N/A"}
                                  </div>
                                </td>
                              </tr>
                            ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}
              {therapyTab === "past" && (
                <div className="bg-background rounded-lg shadow-lg border border-border">
                  <div className="p-6">
                    <h2 className="text-xl font-bold mb-2">Past Therapies</h2>
                    <p className="text-muted-foreground mb-4">
                      Your completed therapy sessions
                    </p>
                    <div className="overflow-x-auto rounded-lg border border-border">
                      <table className="w-full text-sm text-left text-foreground">
                        <thead className="text-xs text-muted-foreground uppercase bg-muted/50">
                          <tr>
                            <th className="px-6 py-3">Title</th>
                            <th className="px-6 py-3">Therapist</th>
                            <th className="px-6 py-3">Date</th>
                            <th className="px-6 py-3">Duration</th>
                          </tr>
                        </thead>
                        <tbody>
                          {therapies
                            .filter(
                              (therapy) =>
                                new Date(therapy.scheduledAt) <= new Date(),
                            )
                            .map((therapy) => (
                              <tr
                                key={therapy.id}
                                className="border-b border-border/50 hover:bg-muted/10 cursor-pointer"
                                onClick={() =>
                                  setSelectedTherapy(therapy.therapist)
                                }
                              >
                                <td className="px-6 py-4">{therapy.title}</td>
                                <td className="px-6 py-4">
                                  <div className="flex items-center gap-2">
                                    <User className="h-4 w-4" />
                                    {therapy.therapist
                                      ? `${therapy.therapist.therapistDetails?.firstName} ${therapy.therapist.therapistDetails?.lastName}`
                                      : "Unknown"}
                                  </div>
                                </td>
                                <td className="px-6 py-4">
                                  <div className="flex items-center gap-2">
                                    <Calendar className="h-4 w-4" />
                                    {new Date(
                                      therapy.scheduledAt,
                                    ).toLocaleDateString()}
                                  </div>
                                </td>
                                <td className="px-6 py-4">
                                  <div className="flex items-center gap-2">
                                    <Clock className="h-4 w-4" />
                                    {therapy.duration
                                      ? `${therapy.duration} min`
                                      : "N/A"}
                                  </div>
                                </td>
                              </tr>
                            ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <TherapyDetailsModal
              isOpen={!!selectedTherapy}
              onClose={() => setSelectedTherapy(null)}
              therapy={selectedTherapy}
              therapist={therapists.find(
                (t) => t.id === selectedTherapy?.therapistId,
              )}
            />
          </div>
        )}
        <TherapistDetailsModal
          isOpen={true}
          onClose={() => setSelectedTherapist(null)}
          therapist={selectedTherapist}
        />
        <TherapyDetailsModal
          isOpen={!!selectedTherapy}
          onClose={() => setSelectedTherapy(null)}
          therapy={selectedTherapy}
          therapist={therapists.find(
            (t) => t.id === selectedTherapy?.therapistId,
          )}
        />
      </div>
    </div>
  );
};

export default Dashboard;
