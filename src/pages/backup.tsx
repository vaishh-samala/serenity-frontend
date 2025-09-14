// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import {
//   Calendar,
//   Clock,
//   User,
//   CheckCircle,
//   XCircle,
//   PlusCircle,
// } from "lucide-react";

// const dummyPendingTherapists = [
//   {
//     id: 1,
//     name: "Dr. John Doe",
//     details: "Specialist in Anxiety, 10 years experience",
//     document: "proof_document.pdf",
//   },
//   {
//     id: 2,
//     name: "Dr. Jane Smith",
//     details: "Expert in Stress Management, 8 years experience",
//     document: "verification.pdf",
//   },
// ];

// const dummyApprovedTherapists = [
//   {
//     id: 3,
//     name: "Dr. Alice Johnson",
//     details: "Focus on Relationships, 12 years experience",
//   },
//   {
//     id: 4,
//     name: "Dr. Bob Brown",
//     details: "Mindfulness Therapy, 15 years experience",
//   },
// ];

// const dummyNormalUsers = [
//   { id: 1, name: "User One", email: "user1@example.com", joined: "2025-01-01" },
//   { id: 2, name: "User Two", email: "user2@example.com", joined: "2025-02-01" },
// ];

// const dummyTherapies = [
//   {
//     id: 1,
//     title: "Anxiety Management Session",
//     date: "2025-01-15",
//     therapist: "Dr. John Doe",
//     status: "upcoming",
//     duration: "60 min",
//   },
//   {
//     id: 2,
//     title: "Stress Relief Workshop",
//     date: "2024-12-20",
//     therapist: "Dr. Jane Smith",
//     status: "past",
//     duration: "90 min",
//   },
//   {
//     id: 3,
//     title: "Mindfulness Practice",
//     date: "2025-02-10",
//     therapist: "Dr. Alice Johnson",
//     status: "upcoming",
//     duration: "45 min",
//   },
// ];

// const dummyMyTherapies = [
//   {
//     id: 1,
//     title: "My Anxiety Session",
//     date: "2025-01-20",
//     bookedCount: 5,
//     duration: "60 min",
//   },
//   {
//     id: 2,
//     title: "My Stress Workshop",
//     date: "2025-02-05",
//     bookedCount: 3,
//     duration: "90 min",
//   },
// ];

// const dummyBookedTherapies = [
//   {
//     id: 1,
//     title: "Booked Anxiety Session",
//     date: "2025-01-15",
//     therapist: "Dr. John Doe",
//     status: "upcoming",
//     duration: "60 min",
//   },
//   {
//     id: 2,
//     title: "Booked Stress Relief",
//     date: "2024-12-20",
//     therapist: "Dr. Jane Smith",
//     status: "past",
//     duration: "90 min",
//   },
// ];

// const ScheduleTherapyModal = ({ isOpen, onClose, onSchedule }) => {
//   const [formData, setFormData] = useState({
//     title: "",
//     date: "",
//     duration: "",
//     description: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = () => {
//     onSchedule(formData);
//     setFormData({ title: "", date: "", duration: "", description: "" });
//     onClose();
//   };

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//       <div className="bg-background p-6 rounded-lg shadow-xl w-full max-w-md">
//         <h2 className="text-2xl font-bold mb-4">Schedule New Therapy</h2>
//         <div className="space-y-4">
//           <div>
//             <label className="block text-sm font-medium text-foreground">
//               Title
//             </label>
//             <input
//               type="text"
//               name="title"
//               value={formData.title}
//               onChange={handleChange}
//               className="w-full p-2 border border-border rounded-md"
//               placeholder="Enter therapy title"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-foreground">
//               Date
//             </label>
//             <input
//               type="date"
//               name="date"
//               value={formData.date}
//               onChange={handleChange}
//               className="w-full p-2 border border-border rounded-md"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-foreground">
//               Duration (minutes)
//             </label>
//             <input
//               type="number"
//               name="duration"
//               value={formData.duration}
//               onChange={handleChange}
//               className="w-full p-2 border border-border rounded-md"
//               placeholder="Enter duration"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-foreground">
//               Description
//             </label>
//             <textarea
//               name="description"
//               value={formData.description}
//               onChange={handleChange}
//               className="w-full p-2 border border-border rounded-md"
//               placeholder="Enter therapy description"
//             />
//           </div>
//         </div>
//         <div className="mt-6 flex justify-end gap-2">
//           <button
//             className="px-4 py-2 border border-border rounded-md"
//             onClick={onClose}
//           >
//             Cancel
//           </button>
//           <button
//             className="px-4 py-2 bg-primary text-primary-foreground rounded-md"
//             onClick={handleSubmit}
//           >
//             Schedule
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// const Dashboard = () => {
//   const [role, setRole] = useState(null);
//   const [mainTab, setMainTab] = useState("pending");
//   const [therapyTab, setTherapyTab] = useState("upcoming");
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   useEffect(() => {
//     const storedRole = localStorage.getItem("role");
//     if (storedRole) {
//       setRole(storedRole);
//     }
//   }, []);

//   const handleApprove = (id) => {
//     console.log(`Approved therapist ${id}`);
//   };

//   const handleReject = (id) => {
//     console.log(`Rejected therapist ${id}`);
//   };

//   const handleSchedule = (data) => {
//     console.log("Scheduled therapy:", data);
//   };

//   if (!role) {
//     return (
//       <div className="min-h-full bg-background flex items-center justify-center py-20">
//         <div className="bg-background rounded-lg shadow-lg border border-border p-8 max-w-md w-full text-center">
//           <h1 className="text-2xl font-heading font-bold text-foreground mb-4">
//             Access Denied
//           </h1>
//           <p className="text-muted-foreground mb-6">
//             Please login or signup first to see the dashboard.
//           </p>
//           <div className="flex justify-center gap-4">
//             <Link
//               to="/login"
//               className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition"
//             >
//               Login
//             </Link>
//             <Link
//               to="/register"
//               className="px-4 py-2 bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/90 transition"
//             >
//               Signup
//             </Link>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-background py-12">
//       <div className="container mx-auto px-4">
//         {role === "admin" && (
//           <div className="space-y-12 ">
//             <div className="text-center animate-fade-in">
//               <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
//                 Admin Dashboard
//               </h1>
//               <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
//                 Manage therapists, users, and therapies efficiently
//               </p>
//             </div>
//             <div className="space-y-6">
//               <div className="flex justify-center">
//                 <div className="flex gap-2 bg-muted/20 p-1 rounded-lg max-w-3xl w-full items-center justify-center">
//                   <button
//                     className={`px-4 py-2 rounded-md ${mainTab === "pending" ? "bg-primary text-primary-foreground border border-border" : "text-muted-foreground"}`}
//                     onClick={() => setMainTab("pending")}
//                   >
//                     Pending Therapists
//                   </button>
//                   <button
//                     className={`px-4 py-2 rounded-md ${mainTab === "approved" ? "bg-primary text-primary-foreground border border-border" : "text-muted-foreground"}`}
//                     onClick={() => setMainTab("approved")}
//                   >
//                     Approved Therapists
//                   </button>
//                   <button
//                     className={`px-4 py-2 rounded-md ${mainTab === "users" ? "bg-primary text-primary-foreground border border-border" : "text-muted-foreground"}`}
//                     onClick={() => setMainTab("users")}
//                   >
//                     Users
//                   </button>
//                   <button
//                     className={`px-4 py-2 rounded-md ${mainTab === "therapies" ? "bg-primary text-primary-foreground border border-border" : "text-muted-foreground"}`}
//                     onClick={() => setMainTab("therapies")}
//                   >
//                     Therapies
//                   </button>
//                 </div>
//               </div>
//               {mainTab === "pending" && (
//                 <div className="bg-background rounded-lg shadow-lg border border-border">
//                   <div className="p-6">
//                     <h2 className="text-xl font-bold mb-2">
//                       Pending Therapists
//                     </h2>
//                     <p className="text-muted-foreground mb-4">
//                       Review and approve therapist applications
//                     </p>
//                     <div className="overflow-x-auto rounded-lg border border-border">
//                       <table className="w-full text-sm text-left text-foreground">
//                         <thead className="text-xs text-muted-foreground uppercase bg-muted/50">
//                           <tr>
//                             <th className="px-6 py-3">Name</th>
//                             <th className="px-6 py-3">Details</th>
//                             <th className="px-6 py-3">Document</th>
//                             <th className="px-6 py-3">Actions</th>
//                           </tr>
//                         </thead>
//                         <tbody>
//                           {dummyPendingTherapists.map((therapist) => (
//                             <tr
//                               key={therapist.id}
//                               className="border-b border-border/50 hover:bg-muted/10"
//                             >
//                               <td className="px-6 py-4 flex items-center gap-2">
//                                 <User className="h-4 w-4" />
//                                 {therapist.name}
//                               </td>
//                               <td className="px-6 py-4">{therapist.details}</td>
//                               <td className="px-6 py-4">
//                                 <Link
//                                   to={`/documents/${therapist.document}`}
//                                   className="text-primary hover:underline"
//                                 >
//                                   {therapist.document}
//                                 </Link>
//                               </td>
//                               <td className="px-6 py-4">
//                                 <div className="flex gap-2">
//                                   <button
//                                     className="px-3 py-1 bg-primary text-primary-foreground rounded-md flex items-center gap-1"
//                                     onClick={() => handleApprove(therapist.id)}
//                                   >
//                                     <CheckCircle className="h-4 w-4" /> Approve
//                                   </button>
//                                   <button
//                                     className="px-3 py-1 bg-destructive text-destructive-foreground rounded-md flex items-center gap-1"
//                                     onClick={() => handleReject(therapist.id)}
//                                   >
//                                     <XCircle className="h-4 w-4" /> Reject
//                                   </button>
//                                 </div>
//                               </td>
//                             </tr>
//                           ))}
//                         </tbody>
//                       </table>
//                     </div>
//                   </div>
//                 </div>
//               )}
//               {mainTab === "approved" && (
//                 <div className="bg-background rounded-lg shadow-lg border border-border">
//                   <div className="p-6">
//                     <h2 className="text-xl font-bold mb-2">
//                       Approved Therapists
//                     </h2>
//                     <p className="text-muted-foreground mb-4">
//                       View all approved therapists
//                     </p>
//                     <div className="overflow-x-auto rounded-lg border border-border">
//                       <table className="w-full text-sm text-left text-foreground">
//                         <thead className="text-xs text-muted-foreground uppercase bg-muted/50">
//                           <tr>
//                             <th className="px-6 py-3">Name</th>
//                             <th className="px-6 py-3">Details</th>
//                           </tr>
//                         </thead>
//                         <tbody>
//                           {dummyApprovedTherapists.map((therapist) => (
//                             <tr
//                               key={therapist.id}
//                               className="border-b border-border/50 hover:bg-muted/10"
//                             >
//                               <td className="px-6 py-4 flex items-center gap-2">
//                                 <User className="h-4 w-4" />
//                                 {therapist.name}
//                               </td>
//                               <td className="px-6 py-4">{therapist.details}</td>
//                             </tr>
//                           ))}
//                         </tbody>
//                       </table>
//                     </div>
//                   </div>
//                 </div>
//               )}
//               {mainTab === "users" && (
//                 <div className="bg-background rounded-lg shadow-lg border border-border">
//                   <div className="p-6">
//                     <h2 className="text-xl font-bold mb-2">Users</h2>
//                     <p className="text-muted-foreground mb-4">
//                       Manage registered users
//                     </p>
//                     <div className="overflow-x-auto rounded-lg border border-border">
//                       <table className="w-full text-sm text-left text-foreground">
//                         <thead className="text-xs text-muted-foreground uppercase bg-muted/50">
//                           <tr>
//                             <th className="px-6 py-3">Name</th>
//                             <th className="px-6 py-3">Email</th>
//                             <th className="px-6 py-3">Joined</th>
//                           </tr>
//                         </thead>
//                         <tbody>
//                           {dummyNormalUsers.map((user) => (
//                             <tr
//                               key={user.id}
//                               className="border-b border-border/50 hover:bg-muted/10"
//                             >
//                               <td className="px-6 py-4 flex items-center gap-2">
//                                 <User className="h-4 w-4" />
//                                 {user.name}
//                               </td>
//                               <td className="px-6 py-4">{user.email}</td>
//                               <td className="px-6 py-4">
//                                 {new Date(user.joined).toLocaleDateString()}
//                               </td>
//                             </tr>
//                           ))}
//                         </tbody>
//                       </table>
//                     </div>
//                   </div>
//                 </div>
//               )}
//               {mainTab === "therapies" && (
//                 <div className="space-y-4">
//                   <div className="flex justify-center">
//                     <div className="flex gap-2 bg-muted/20 p-1 rounded-lg w-full max-w-[200px]">
//                       <button
//                         className={`flex-1 py-2 rounded-md ${therapyTab === "upcoming" ? "bg-background text-foreground" : "text-muted-foreground"}`}
//                         onClick={() => setTherapyTab("upcoming")}
//                       >
//                         Upcoming
//                       </button>
//                       <button
//                         className={`flex-1 py-2 rounded-md ${therapyTab === "past" ? "bg-background text-foreground" : "text-muted-foreground"}`}
//                         onClick={() => setTherapyTab("past")}
//                       >
//                         Past
//                       </button>
//                     </div>
//                   </div>
//                   {therapyTab === "upcoming" && (
//                     <div className="bg-background rounded-lg shadow-lg border border-border">
//                       <div className="p-6">
//                         <h2 className="text-xl font-bold mb-2">
//                           Upcoming Therapies
//                         </h2>
//                         <p className="text-muted-foreground mb-4">
//                           View all upcoming therapy sessions
//                         </p>
//                         <div className="overflow-x-auto rounded-lg border border-border">
//                           <table className="w-full text-sm text-left text-foreground">
//                             <thead className="text-xs text-muted-foreground uppercase bg-muted/50">
//                               <tr>
//                                 <th className="px-6 py-3">Title</th>
//                                 <th className="px-6 py-3">Therapist</th>
//                                 <th className="px-6 py-3">Date</th>
//                                 <th className="px-6 py-3">Duration</th>
//                               </tr>
//                             </thead>
//                             <tbody>
//                               {dummyTherapies
//                                 .filter((t) => t.status === "upcoming")
//                                 .map((therapy) => (
//                                   <tr
//                                     key={therapy.id}
//                                     className="border-b border-border/50 hover:bg-muted/10"
//                                   >
//                                     <td className="px-6 py-4">
//                                       {therapy.title}
//                                     </td>
//                                     <td className="px-6 py-4">
//                                       <div className="flex items-center gap-2">
//                                         <User className="h-4 w-4" />
//                                         {therapy.therapist}
//                                       </div>
//                                     </td>
//                                     <td className="px-6 py-4">
//                                       <div className="flex items-center gap-2">
//                                         <Calendar className="h-4 w-4" />
//                                         {new Date(
//                                           therapy.date,
//                                         ).toLocaleDateString()}
//                                       </div>
//                                     </td>
//                                     <td className="px-6 py-4">
//                                       <div className="flex items-center gap-2">
//                                         <Clock className="h-4 w-4" />
//                                         {therapy.duration}
//                                       </div>
//                                     </td>
//                                   </tr>
//                                 ))}
//                             </tbody>
//                           </table>
//                         </div>
//                       </div>
//                     </div>
//                   )}
//                   {therapyTab === "past" && (
//                     <div className="bg-background rounded-lg shadow-lg border border-border">
//                       <div className="p-6">
//                         <h2 className="text-xl font-bold mb-2">
//                           Past Therapies
//                         </h2>
//                         <p className="text-muted-foreground mb-4">
//                           View all past therapy sessions
//                         </p>
//                         <div className="overflow-x-auto rounded-lg border border-border">
//                           <table className="w-full text-sm text-left text-foreground">
//                             <thead className="text-xs text-muted-foreground uppercase bg-muted/50">
//                               <tr>
//                                 <th className="px-6 py-3">Title</th>
//                                 <th className="px-6 py-3">Therapist</th>
//                                 <th className="px-6 py-3">Date</th>
//                                 <th className="px-6 py-3">Duration</th>
//                               </tr>
//                             </thead>
//                             <tbody>
//                               {dummyTherapies
//                                 .filter((t) => t.status === "past")
//                                 .map((therapy) => (
//                                   <tr
//                                     key={therapy.id}
//                                     className="border-b border-border/50 hover:bg-muted/10"
//                                   >
//                                     <td className="px-6 py-4">
//                                       {therapy.title}
//                                     </td>
//                                     <td className="px-6 py-4">
//                                       <div className="flex items-center gap-2">
//                                         <User className="h-4 w-4" />
//                                         {therapy.therapist}
//                                       </div>
//                                     </td>
//                                     <td className="px-6 py-4">
//                                       <div className="flex items-center gap-2">
//                                         <Calendar className="h-4 w-4" />
//                                         {new Date(
//                                           therapy.date,
//                                         ).toLocaleDateString()}
//                                       </div>
//                                     </td>
//                                     <td className="px-6 py-4">
//                                       <div className="flex items-center gap-2">
//                                         <Clock className="h-4 w-4" />
//                                         {therapy.duration}
//                                       </div>
//                                     </td>
//                                   </tr>
//                                 ))}
//                             </tbody>
//                           </table>
//                         </div>
//                       </div>
//                     </div>
//                   )}
//                 </div>
//               )}
//             </div>
//           </div>
//         )}
//         {role === "therapist" && (
//           <div className="space-y-12">
//             <div className="text-center  animate-fade-in">
//               <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
//                 Therapist Dashboard
//               </h1>
//               <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
//                 Manage your therapies and bookings
//               </p>
//             </div>
//             <div className="flex justify-end items-center">
//               <button
//                 className="px-4 py-2 bg-primary text-primary-foreground rounded-md flex items-center gap-2"
//                 onClick={() => setIsModalOpen(true)}
//               >
//                 <PlusCircle className="h-4 w-4" /> Schedule New Therapy
//               </button>
//             </div>
//             <div className="bg-background rounded-lg shadow-lg border border-border">
//               <div className="p-6">
//                 <h2 className="text-xl font-bold mb-2">My Therapies</h2>
//                 <p className="text-muted-foreground mb-4">
//                   View and manage your scheduled therapies
//                 </p>
//                 <div className="overflow-x-auto rounded-lg border border-border">
//                   <table className="w-full text-sm text-left text-foreground">
//                     <thead className="text-xs text-muted-foreground uppercase bg-muted/50">
//                       <tr>
//                         <th className="px-6 py-3">Title</th>
//                         <th className="px-6 py-3">Date</th>
//                         <th className="px-6 py-3">Booked Count</th>
//                         <th className="px-6 py-3">Duration</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {dummyMyTherapies.map((therapy) => (
//                         <tr
//                           key={therapy.id}
//                           className="border-b border-border/50 hover:bg-muted/10"
//                         >
//                           <td className="px-6 py-4">{therapy.title}</td>
//                           <td className="px-6 py-4 flex items-center gap-2">
//                             <Calendar className="h-4 w-4" />
//                             {new Date(therapy.date).toLocaleDateString()}
//                           </td>
//                           <td className="px-6 py-4">
//                             <span className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs">
//                               {therapy.bookedCount} Booked
//                             </span>
//                           </td>
//                           <td className="px-6 py-4 flex items-center gap-2">
//                             <Clock className="h-4 w-4" />
//                             {therapy.duration}
//                           </td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>
//               </div>
//             </div>
//             <ScheduleTherapyModal
//               isOpen={isModalOpen}
//               onClose={() => setIsModalOpen(false)}
//               onSchedule={handleSchedule}
//             />
//           </div>
//         )}
//         {role === "user" && (
//           <div className="space-y-12">
//             <div className="text-center  animate-fade-in">
//               <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
//                 User Dashboard
//               </h1>
//               <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
//                 View and manage your booked therapies
//               </p>
//             </div>
//             <div className="space-y-4">
//               <div className="flex justify-center">
//                 <div className="flex gap-2 bg-muted/20 p-1 rounded-lg w-full max-w-[200px]">
//                   <button
//                     className={`flex-1 py-2 rounded-md ${therapyTab === "upcoming" ? "bg-background text-foreground" : "text-muted-foreground"}`}
//                     onClick={() => setTherapyTab("upcoming")}
//                   >
//                     Upcoming
//                   </button>
//                   <button
//                     className={`flex-1 py-2 rounded-md ${therapyTab === "past" ? "bg-background text-foreground" : "text-muted-foreground"}`}
//                     onClick={() => setTherapyTab("past")}
//                   >
//                     Past
//                   </button>
//                 </div>
//               </div>
//               {therapyTab === "upcoming" && (
//                 <div className="bg-background rounded-lg shadow-lg border border-border">
//                   <div className="p-6">
//                     <h2 className="text-xl font-bold mb-2">
//                       Upcoming Therapies
//                     </h2>
//                     <p className="text-muted-foreground mb-4">
//                       Your scheduled therapy sessions
//                     </p>
//                     <div className="overflow-x-auto rounded-lg border border-border">
//                       <table className="w-full text-sm text-left text-foreground">
//                         <thead className="text-xs text-muted-foreground uppercase bg-muted/50">
//                           <tr>
//                             <th className="px-6 py-3">Title</th>
//                             <th className="px-6 py-3">Therapist</th>
//                             <th className="px-6 py-3">Date</th>
//                             <th className="px-6 py-3">Duration</th>
//                           </tr>
//                         </thead>
//                         <tbody>
//                           {dummyBookedTherapies
//                             .filter((t) => t.status === "upcoming")
//                             .map((therapy) => (
//                               <tr
//                                 key={therapy.id}
//                                 className="border-b border-border/50 hover:bg-muted/10"
//                               >
//                                 <td className="px-6 py-4">{therapy.title}</td>
//                                 <td className="px-6 py-4">
//                                   <div className="flex items-center gap-2">
//                                     <User className="h-4 w-4" />
//                                     {therapy.therapist}
//                                   </div>
//                                 </td>
//                                 <td className="px-6 py-4">
//                                   <div className="flex items-center gap-2">
//                                     <Calendar className="h-4 w-4" />
//                                     {new Date(
//                                       therapy.date,
//                                     ).toLocaleDateString()}
//                                   </div>
//                                 </td>
//                                 <td className="px-6 py-4">
//                                   <div className="flex items-center gap-2">
//                                     <Clock className="h-4 w-4" />
//                                     {therapy.duration}
//                                   </div>
//                                 </td>
//                               </tr>
//                             ))}
//                         </tbody>
//                       </table>
//                     </div>
//                   </div>
//                 </div>
//               )}
//               {therapyTab === "past" && (
//                 <div className="bg-background rounded-lg shadow-lg border border-border">
//                   <div className="p-6">
//                     <h2 className="text-xl font-bold mb-2">Past Therapies</h2>
//                     <p className="text-muted-foreground mb-4">
//                       Your completed therapy sessions
//                     </p>
//                     <div className="overflow-x-auto rounded-lg border border-border">
//                       <table className="w-full text-sm text-left text-foreground">
//                         <thead className="text-xs text-muted-foreground uppercase bg-muted/50">
//                           <tr>
//                             <th className="px-6 py-3">Title</th>
//                             <th className="px-6 py-3">Therapist</th>
//                             <th className="px-6 py-3">Date</th>
//                             <th className="px-6 py-3">Duration</th>
//                           </tr>
//                         </thead>
//                         <tbody>
//                           {dummyBookedTherapies
//                             .filter((t) => t.status === "past")
//                             .map((therapy) => (
//                               <tr
//                                 key={therapy.id}
//                                 className="border-b border-border/50 hover:bg-muted/10"
//                               >
//                                 <td className="px-6 py-4">{therapy.title}</td>
//                                 <td className="px-6 py-4">
//                                   <div className="flex items-center gap-2">
//                                     <User className="h-4 w-4" />
//                                     {therapy.therapist}
//                                   </div>
//                                 </td>
//                                 <td className="px-6 py-4">
//                                   <div className="flex items-center gap-2">
//                                     <Calendar className="h-4 w-4" />
//                                     {new Date(
//                                       therapy.date,
//                                     ).toLocaleDateString()}
//                                   </div>
//                                 </td>
//                                 <td className="px-6 py-4">
//                                   <div className="flex items-center gap-2">
//                                     <Clock className="h-4 w-4" />
//                                     {therapy.duration}
//                                   </div>
//                                 </td>
//                               </tr>
//                             ))}
//                         </tbody>
//                       </table>
//                     </div>
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

// const Dashboard = () => {
//   const [role, setRole] = useState(null);
//   const [mainTab, setMainTab] = useState("pending");
//   const [therapyTab, setTherapyTab] = useState("upcoming");
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [therapists, setTherapists] = useState([]);
//   const [users, setUsers] = useState([]);
//   const [therapies, setTherapies] = useState([]);
//   const [approved, setApproved] = useState(true);
//   const [isSubmitted, setIsSubmitted] = useState(false);
//   const [approvalFormData, setApprovalFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phoneNumber: "",
//     bio: "",
//     experienceYears: "",
//     document: null,
//   });

//   useEffect(() => {
//     const storedRole = localStorage.getItem("role");
//     if (storedRole) {
//       setRole(storedRole);
//     }
//   }, []);

//   useEffect(() => {
//     if (role) {
//       fetchData();
//     }
//   }, [role]);

//   const fetchData = async () => {
//     const token = localStorage.getItem("token");
//     if (!token) return;

//     const res = await fetch("https://serenity-backend-beige.vercel.app/user", {
//       headers: { Authorization: `Bearer ${token}` },
//     });
//     const data = await res.json();

//     if (role === "admin") {
//       setTherapists(data.therapists);
//       setUsers(data.users);
//       setTherapies(data.therapies);
//     } else if (role === "therapist") {
//       if (data.approved === false) {
//         setApproved(false);
//       } else {
//         setApproved(true);
//         setTherapies(data.therapies);
//       }
//     } else if (role === "user") {
//       setTherapies(data.therapies);
//     }
//   };

//   const handleApprove = async (id) => {
//     const token = localStorage.getItem("token");
//     await fetch(`https://serenity-backend-beige.vercel.app/users/${id}`, {
//       method: "PATCH",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${token}`,
//       },
//       body: JSON.stringify({ approved: true }),
//     });
//     fetchData();
//   };

//   const handleReject = async (id) => {
//     const token = localStorage.getItem("token");
//     await fetch(`https://serenity-backend-beige.vercel.app/users/${id}`, {
//       method: "PATCH",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${token}`,
//       },
//       body: JSON.stringify({ approved: false }),
//     });
//     fetchData();
//   };

//   const handleSchedule = async (data) => {
//     const token = localStorage.getItem("token");
//     await fetch("https://serenity-backend-beige.vercel.app/therapy", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${token}`,
//       },
//       body: JSON.stringify(data),
//     });
//     fetchData();
//   };

//   const handleApprovalChange = (e) => {
//     setApprovalFormData({
//       ...approvalFormData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleFileChange = (e) => {
//     setApprovalFormData({ ...approvalFormData, document: e.target.files[0] });
//   };

//   const handleApprovalSubmit = async () => {
//     const token = localStorage.getItem("token");
//     const fd = new FormData();
//     fd.append("firstName", approvalFormData.firstName);
//     fd.append("lastName", approvalFormData.lastName);
//     fd.append("email", approvalFormData.email);
//     fd.append("phoneNumber", approvalFormData.phoneNumber);
//     fd.append("bio", approvalFormData.bio);
//     fd.append("experienceYears", approvalFormData.experienceYears);
//     if (approvalFormData.document) {
//       fd.append("document", approvalFormData.document);
//     }

//     const res = await fetch("https://serenity-backend-beige.vercel.app/approval", {
//       method: "POST",
//       headers: { Authorization: `Bearer ${token}` },
//       body: fd,
//     });
//     if (res.ok) {
//       setIsSubmitted(true);
//     }
//   };

//   if (!role) {
//     return (
//       <div className="min-h-full bg-background flex items-center justify-center py-20">
//         <div className="bg-background rounded-lg shadow-lg border border-border p-8 max-w-md w-full text-center">
//           <h1 className="text-2xl font-heading font-bold text-foreground mb-4">
//             Access Denied
//           </h1>
//           <p className="text-muted-foreground mb-6">
//             Please login or signup first to see the dashboard.
//           </p>
//           <div className="flex justify-center gap-4">
//             <Link
//               to="/login"
//               className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition"
//             >
//               Login
//             </Link>
//             <Link
//               to="/register"
//               className="px-4 py-2 bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/90 transition"
//             >
//               Signup
//             </Link>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-background py-12">
//       <div className="container mx-auto px-4">
//         {role === "admin" && (
//           <div className="space-y-12 ">
//             <div className="text-center animate-fade-in">
//               <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
//                 Admin Dashboard
//               </h1>
//               <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
//                 Manage therapists, users, and therapies efficiently
//               </p>
//             </div>
//             <div className="space-y-6">
//               <div className="flex justify-center">
//                 <div className="flex gap-2 bg-muted/20 p-1 rounded-lg max-w-3xl w-full items-center justify-center">
//                   <button
//                     className={`px-4 py-2 rounded-md ${mainTab === "pending" ? "bg-primary text-primary-foreground border border-border" : "text-muted-foreground"}`}
//                     onClick={() => setMainTab("pending")}
//                   >
//                     Pending Therapists
//                   </button>
//                   <button
//                     className={`px-4 py-2 rounded-md ${mainTab === "approved" ? "bg-primary text-primary-foreground border border-border" : "text-muted-foreground"}`}
//                     onClick={() => setMainTab("approved")}
//                   >
//                     Approved Therapists
//                   </button>
//                   <button
//                     className={`px-4 py-2 rounded-md ${mainTab === "users" ? "bg-primary text-primary-foreground border border-border" : "text-muted-foreground"}`}
//                     onClick={() => setMainTab("users")}
//                   >
//                     Users
//                   </button>
//                   <button
//                     className={`px-4 py-2 rounded-md ${mainTab === "therapies" ? "bg-primary text-primary-foreground border border-border" : "text-muted-foreground"}`}
//                     onClick={() => setMainTab("therapies")}
//                   >
//                     Therapies
//                   </button>
//                 </div>
//               </div>
//               {mainTab === "pending" && (
//                 <div className="bg-background rounded-lg shadow-lg border border-border">
//                   <div className="p-6">
//                     <h2 className="text-xl font-bold mb-2">
//                       Pending Therapists
//                     </h2>
//                     <p className="text-muted-foreground mb-4">
//                       Review and approve therapist applications
//                     </p>
//                     <div className="overflow-x-auto rounded-lg border border-border">
//                       <table className="w-full text-sm text-left text-foreground">
//                         <thead className="text-xs text-muted-foreground uppercase bg-muted/50">
//                           <tr>
//                             <th className="px-6 py-3">Name</th>
//                             <th className="px-6 py-3">Details</th>
//                             <th className="px-6 py-3">Document</th>
//                             <th className="px-6 py-3">Actions</th>
//                           </tr>
//                         </thead>
//                         <tbody>
//                           {therapists
//                             .filter((therapist) => !therapist.approved)
//                             .map((therapist) => (
//                               <tr
//                                 key={therapist.id}
//                                 className="border-b border-border/50 hover:bg-muted/10"
//                               >
//                                 <td className="px-6 py-4 flex items-center gap-2">
//                                   <User className="h-4 w-4" />
//                                   {`${therapist.therapistDetails.firstName} ${therapist.therapistDetails.lastName}`}
//                                 </td>
//                                 <td className="px-6 py-4">{`${therapist.therapistDetails.bio}, ${therapist.therapistDetails.experienceYears} years experience`}</td>
//                                 <td className="px-6 py-4">
//                                   <Link
//                                     to={`/documents/${therapist.therapistDetails.documentPath}`}
//                                     className="text-primary hover:underline"
//                                   >
//                                     {therapist.therapistDetails.documentPath}
//                                   </Link>
//                                 </td>
//                                 <td className="px-6 py-4">
//                                   <div className="flex gap-2">
//                                     <button
//                                       className="px-3 py-1 bg-primary text-primary-foreground rounded-md flex items-center gap-1"
//                                       onClick={() =>
//                                         handleApprove(therapist.id)
//                                       }
//                                     >
//                                       <CheckCircle className="h-4 w-4" />{" "}
//                                       Approve
//                                     </button>
//                                     <button
//                                       className="px-3 py-1 bg-destructive text-destructive-foreground rounded-md flex items-center gap-1"
//                                       onClick={() => handleReject(therapist.id)}
//                                     >
//                                       <XCircle className="h-4 w-4" /> Reject
//                                     </button>
//                                   </div>
//                                 </td>
//                               </tr>
//                             ))}
//                         </tbody>
//                       </table>
//                     </div>
//                   </div>
//                 </div>
//               )}
//               {mainTab === "approved" && (
//                 <div className="bg-background rounded-lg shadow-lg border border-border">
//                   <div className="p-6">
//                     <h2 className="text-xl font-bold mb-2">
//                       Approved Therapists
//                     </h2>
//                     <p className="text-muted-foreground mb-4">
//                       View all approved therapists
//                     </p>
//                     <div className="overflow-x-auto rounded-lg border border-border">
//                       <table className="w-full text-sm text-left text-foreground">
//                         <thead className="text-xs text-muted-foreground uppercase bg-muted/50">
//                           <tr>
//                             <th className="px-6 py-3">Name</th>
//                             <th className="px-6 py-3">Details</th>
//                           </tr>
//                         </thead>
//                         <tbody>
//                           {therapists
//                             .filter((therapist) => therapist.approved)
//                             .map((therapist) => (
//                               <tr
//                                 key={therapist.id}
//                                 className="border-b border-border/50 hover:bg-muted/10"
//                               >
//                                 <td className="px-6 py-4 flex items-center gap-2">
//                                   <User className="h-4 w-4" />
//                                   {`${therapist.therapistDetails.firstName} ${therapist.therapistDetails.lastName}`}
//                                 </td>
//                                 <td className="px-6 py-4">{`${therapist.therapistDetails.bio}, ${therapist.therapistDetails.experienceYears} years experience`}</td>
//                               </tr>
//                             ))}
//                         </tbody>
//                       </table>
//                     </div>
//                   </div>
//                 </div>
//               )}
//               {mainTab === "users" && (
//                 <div className="bg-background rounded-lg shadow-lg border border-border">
//                   <div className="p-6">
//                     <h2 className="text-xl font-bold mb-2">Users</h2>
//                     <p className="text-muted-foreground mb-4">
//                       Manage registered users
//                     </p>
//                     <div className="overflow-x-auto rounded-lg border border-border">
//                       <table className="w-full text-sm text-left text-foreground">
//                         <thead className="text-xs text-muted-foreground uppercase bg-muted/50">
//                           <tr>
//                             <th className="px-6 py-3">Name</th>
//                             <th className="px-6 py-3">Email</th>
//                             <th className="px-6 py-3">Joined</th>
//                           </tr>
//                         </thead>
//                         <tbody>
//                           {users.map((user) => (
//                             <tr
//                               key={user.id}
//                               className="border-b border-border/50 hover:bg-muted/10"
//                             >
//                               <td className="px-6 py-4 flex items-center gap-2">
//                                 <User className="h-4 w-4" />
//                                 {user.name}
//                               </td>
//                               <td className="px-6 py-4">{user.email}</td>
//                               <td className="px-6 py-4">
//                                 {new Date(user.createdAt).toLocaleDateString()}
//                               </td>
//                             </tr>
//                           ))}
//                         </tbody>
//                       </table>
//                     </div>
//                   </div>
//                 </div>
//               )}
//               {mainTab === "therapies" && (
//                 <div className="space-y-4">
//                   <div className="flex justify-center">
//                     <div className="flex gap-2 bg-muted/20 p-1 rounded-lg w-full max-w-[200px]">
//                       <button
//                         className={`flex-1 py-2 rounded-md ${therapyTab === "upcoming" ? "bg-background text-foreground" : "text-muted-foreground"}`}
//                         onClick={() => setTherapyTab("upcoming")}
//                       >
//                         Upcoming
//                       </button>
//                       <button
//                         className={`flex-1 py-2 rounded-md ${therapyTab === "past" ? "bg-background text-foreground" : "text-muted-foreground"}`}
//                         onClick={() => setTherapyTab("past")}
//                       >
//                         Past
//                       </button>
//                     </div>
//                   </div>
//                   {therapyTab === "upcoming" && (
//                     <div className="bg-background rounded-lg shadow-lg border border-border">
//                       <div className="p-6">
//                         <h2 className="text-xl font-bold mb-2">
//                           Upcoming Therapies
//                         </h2>
//                         <p className="text-muted-foreground mb-4">
//                           View all upcoming therapy sessions
//                         </p>
//                         <div className="overflow-x-auto rounded-lg border border-border">
//                           <table className="w-full text-sm text-left text-foreground">
//                             <thead className="text-xs text-muted-foreground uppercase bg-muted/50">
//                               <tr>
//                                 <th className="px-6 py-3">Title</th>
//                                 <th className="px-6 py-3">Therapist</th>
//                                 <th className="px-6 py-3">Date</th>
//                                 <th className="px-6 py-3">Duration</th>
//                               </tr>
//                             </thead>
//                             <tbody>
//                               {therapies
//                                 .filter(
//                                   (therapy) =>
//                                     new Date(therapy.date) > new Date(),
//                                 )
//                                 .map((therapy) => {
//                                   const therapist = therapists.find(
//                                     (t) => t.id === therapy.therapistId,
//                                   );
//                                   return (
//                                     <tr
//                                       key={therapy.id}
//                                       className="border-b border-border/50 hover:bg-muted/10"
//                                     >
//                                       <td className="px-6 py-4">
//                                         {therapy.title}
//                                       </td>
//                                       <td className="px-6 py-4">
//                                         <div className="flex items-center gap-2">
//                                           <User className="h-4 w-4" />
//                                           {therapist
//                                             ? `${therapist.therapistDetails.firstName} ${therapist.therapistDetails.lastName}`
//                                             : "Unknown"}
//                                         </div>
//                                       </td>
//                                       <td className="px-6 py-4">
//                                         <div className="flex items-center gap-2">
//                                           <Calendar className="h-4 w-4" />
//                                           {new Date(
//                                             therapy.date,
//                                           ).toLocaleDateString()}
//                                         </div>
//                                       </td>
//                                       <td className="px-6 py-4">
//                                         <div className="flex items-center gap-2">
//                                           <Clock className="h-4 w-4" />
//                                           {therapy.duration} min
//                                         </div>
//                                       </td>
//                                     </tr>
//                                   );
//                                 })}
//                             </tbody>
//                           </table>
//                         </div>
//                       </div>
//                     </div>
//                   )}
//                   {therapyTab === "past" && (
//                     <div className="bg-background rounded-lg shadow-lg border border-border">
//                       <div className="p-6">
//                         <h2 className="text-xl font-bold mb-2">
//                           Past Therapies
//                         </h2>
//                         <p className="text-muted-foreground mb-4">
//                           View all past therapy sessions
//                         </p>
//                         <div className="overflow-x-auto rounded-lg border border-border">
//                           <table className="w-full text-sm text-left text-foreground">
//                             <thead className="text-xs text-muted-foreground uppercase bg-muted/50">
//                               <tr>
//                                 <th className="px-6 py-3">Title</th>
//                                 <th className="px-6 py-3">Therapist</th>
//                                 <th className="px-6 py-3">Date</th>
//                                 <th className="px-6 py-3">Duration</th>
//                               </tr>
//                             </thead>
//                             <tbody>
//                               {therapies
//                                 .filter(
//                                   (therapy) =>
//                                     new Date(therapy.date) <= new Date(),
//                                 )
//                                 .map((therapy) => {
//                                   const therapist = therapists.find(
//                                     (t) => t.id === therapy.therapistId,
//                                   );
//                                   return (
//                                     <tr
//                                       key={therapy.id}
//                                       className="border-b border-border/50 hover:bg-muted/10"
//                                     >
//                                       <td className="px-6 py-4">
//                                         {therapy.title}
//                                       </td>
//                                       <td className="px-6 py-4">
//                                         <div className="flex items-center gap-2">
//                                           <User className="h-4 w-4" />
//                                           {therapist
//                                             ? `${therapist.therapistDetails.firstName} ${therapist.therapistDetails.lastName}`
//                                             : "Unknown"}
//                                         </div>
//                                       </td>
//                                       <td className="px-6 py-4">
//                                         <div className="flex items-center gap-2">
//                                           <Calendar className="h-4 w-4" />
//                                           {new Date(
//                                             therapy.date,
//                                           ).toLocaleDateString()}
//                                         </div>
//                                       </td>
//                                       <td className="px-6 py-4">
//                                         <div className="flex items-center gap-2">
//                                           <Clock className="h-4 w-4" />
//                                           {therapy.duration} min
//                                         </div>
//                                       </td>
//                                     </tr>
//                                   );
//                                 })}
//                             </tbody>
//                           </table>
//                         </div>
//                       </div>
//                     </div>
//                   )}
//                 </div>
//               )}
//             </div>
//           </div>
//         )}
//         {role === "therapist" && (
//           <div className="space-y-12">
//             <div className="text-center  animate-fade-in">
//               <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
//                 Therapist Dashboard
//               </h1>
//               <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
//                 Manage your therapies and bookings
//               </p>
//             </div>
//             {!approved ? (
//   <div className="bg-background p-8 rounded-xl shadow-2xl w-full max-w-2xl mx-auto">
//     {isSubmitted ? (
//       <p className="text-center text-primary text-lg font-medium">
//         Your request has been submitted. Awaiting approval.
//       </p>
//     ) : (
//       <>
//         <h2 className="text-3xl font-bold text-foreground mb-6 text-center">
//           Request Approval
//         </h2>
//         <div className="space-y-6">
//           <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
//             <div className="flex-1">
//               <label className="block text-sm font-medium text-foreground mb-1">
//                 First Name
//               </label>
//               <input
//                 type="text"
//                 name="firstName"
//                 value={approvalFormData.firstName}
//                 onChange={handleApprovalChange}
//                 className="w-full p-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition"
//                 placeholder="Enter your first name"
//               />
//             </div>
//             <div className="flex-1">
//               <label className="block text-sm font-medium text-foreground mb-1">
//                 Last Name
//               </label>
//               <input
//                 type="text"
//                 name="lastName"
//                 value={approvalFormData.lastName}
//                 onChange={handleApprovalChange}
//                 className="w-full p-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition"
//                 placeholder="Enter your last name"
//               />
//             </div>
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-foreground mb-1">
//               Phone Number
//             </label>
//             <input
//               type="text"
//               name="phoneNumber"
//               value={approvalFormData.phoneNumber}
//               onChange={handleApprovalChange}
//               className="w-full p-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition"
//               placeholder="Enter your phone number"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-foreground mb-1">
//               Experience Years
//             </label>
//             <input
//               type="number"
//               name="experienceYears"
//               value={approvalFormData.experienceYears}
//               onChange={handleApprovalChange}
//               className="w-full p-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition"
//               placeholder="Enter years of experience"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-foreground mb-1">
//               Document
//             </label>
//             <input
//               type="file"
//               name="document"
//               onChange={handleFileChange}
//               className="w-full p-3 border border-border rounded-lg file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:bg-primary file:text-primary-foreground hover:file:bg-primary/90 transition"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-foreground mb-1">
//               Bio
//             </label>
//             <textarea
//               name="bio"
//               value={approvalFormData.bio}
//               onChange={handleApprovalChange}
//               className="w-full p-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition resize-y"
//               placeholder="Tell us about yourself"
//             />
//           </div>
//           <div className="flex justify-end">
//             <button
//               className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition focus:ring-2 focus:ring-primary focus:ring-offset-2"
//               onClick={handleApprovalSubmit}
//             >
//               Submit Request
//             </button>
//           </div>
//         </div>
//       </>
//     )}
//   </div>
// ) : (
//               <>
//                 <div className="flex justify-end items-center">
//                   <button
//                     className="px-4 py-2 bg-primary text-primary-foreground rounded-md flex items-center gap-2"
//                     onClick={() => setIsModalOpen(true)}
//                   >
//                     <PlusCircle className="h-4 w-4" /> Schedule New Therapy
//                   </button>
//                 </div>
//                 <div className="bg-background rounded-lg shadow-lg border border-border">
//                   <div className="p-6">
//                     <h2 className="text-xl font-bold mb-2">My Therapies</h2>
//                     <p className="text-muted-foreground mb-4">
//                       View and manage your scheduled therapies
//                     </p>
//                     <div className="overflow-x-auto rounded-lg border border-border">
//                       <table className="w-full text-sm text-left text-foreground">
//                         <thead className="text-xs text-muted-foreground uppercase bg-muted/50">
//                           <tr>
//                             <th className="px-6 py-3">Title</th>
//                             <th className="px-6 py-3">Date</th>
//                             <th className="px-6 py-3">Booked Count</th>
//                             <th className="px-6 py-3">Duration</th>
//                           </tr>
//                         </thead>
//                         <tbody>
//                           {therapies?.map((therapy) => (
//                             <tr
//                               key={therapy.id}
//                               className="border-b border-border/50 hover:bg-muted/10"
//                             >
//                               <td className="px-6 py-4">{therapy.title}</td>
//                               <td className="px-6 py-4 flex items-center gap-2">
//                                 <Calendar className="h-4 w-4" />
//                                 {new Date(therapy.scheduledAt).toLocaleDateString()}
//                               </td>
//                               <td className="px-6 py-4">
//                                 <span className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs">
//                                   {therapy.bookings.length} Booked
//                                 </span>
//                               </td>
//                               <td className="px-6 py-4 flex items-center gap-2">
//                                 <Clock className="h-4 w-4" />
//                                 {therapy.duration} min
//                               </td>
//                             </tr>
//                           ))}
//                         </tbody>
//                       </table>
//                     </div>
//                   </div>
//                 </div>
//                 <ScheduleTherapyModal
//                   isOpen={isModalOpen}
//                   onClose={() => setIsModalOpen(false)}
//                   onSchedule={handleSchedule}
//                 />
//               </>
//             )}
//           </div>
//         )}
//         {role === "user" && (
//           <div className="space-y-12">
//             <div className="text-center  animate-fade-in">
//               <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
//                 User Dashboard
//               </h1>
//               <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
//                 View and manage your booked therapies
//               </p>
//             </div>
//             <div className="space-y-4">
//               <div className="flex justify-center">
//                 <div className="flex gap-2 bg-muted/20 p-1 rounded-lg w-full max-w-[200px]">
//                   <button
//                     className={`flex-1 py-2 rounded-md ${therapyTab === "upcoming" ? "bg-background text-foreground" : "text-muted-foreground"}`}
//                     onClick={() => setTherapyTab("upcoming")}
//                   >
//                     Upcoming
//                   </button>
//                   <button
//                     className={`flex-1 py-2 rounded-md ${therapyTab === "past" ? "bg-background text-foreground" : "text-muted-foreground"}`}
//                     onClick={() => setTherapyTab("past")}
//                   >
//                     Past
//                   </button>
//                 </div>
//               </div>
//               {therapyTab === "upcoming" && (
//                 <div className="bg-background rounded-lg shadow-lg border border-border">
//                   <div className="p-6">
//                     <h2 className="text-xl font-bold mb-2">
//                       Upcoming Therapies
//                     </h2>
//                     <p className="text-muted-foreground mb-4">
//                       Your scheduled therapy sessions
//                     </p>
//                     <div className="overflow-x-auto rounded-lg border border-border">
//                       <table className="w-full text-sm text-left text-foreground">
//                         <thead className="text-xs text-muted-foreground uppercase bg-muted/50">
//                           <tr>
//                             <th className="px-6 py-3">Title</th>
//                             <th className="px-6 py-3">Therapist</th>
//                             <th className="px-6 py-3">Date</th>
//                             <th className="px-6 py-3">Duration</th>
//                           </tr>
//                         </thead>
//                         <tbody>
//                           {therapies
//                             .filter(
//                               (therapy) => new Date(therapy.date) > new Date(),
//                             )
//                             .map((therapy) => (
//                               <tr
//                                 key={therapy.id}
//                                 className="border-b border-border/50 hover:bg-muted/10"
//                               >
//                                 <td className="px-6 py-4">{therapy.title}</td>
//                                 <td className="px-6 py-4">
//                                   <div className="flex items-center gap-2">
//                                     <User className="h-4 w-4" />
//                                     {therapy.therapist
//                                       ? `${therapy.therapist.therapistDetails.firstName} ${therapy.therapist.therapistDetails.lastName}`
//                                       : "Unknown"}
//                                   </div>
//                                 </td>
//                                 <td className="px-6 py-4">
//                                   <div className="flex items-center gap-2">
//                                     <Calendar className="h-4 w-4" />
//                                     {new Date(
//                                       therapy.date,
//                                     ).toLocaleDateString()}
//                                   </div>
//                                 </td>
//                                 <td className="px-6 py-4">
//                                   <div className="flex items-center gap-2">
//                                     <Clock className="h-4 w-4" />
//                                     {therapy.duration} min
//                                   </div>
//                                 </td>
//                               </tr>
//                             ))}
//                         </tbody>
//                       </table>
//                     </div>
//                   </div>
//                 </div>
//               )}
//               {therapyTab === "past" && (
//                 <div className="bg-background rounded-lg shadow-lg border border-border">
//                   <div className="p-6">
//                     <h2 className="text-xl font-bold mb-2">Past Therapies</h2>
//                     <p className="text-muted-foreground mb-4">
//                       Your completed therapy sessions
//                     </p>
//                     <div className="overflow-x-auto rounded-lg border border-border">
//                       <table className="w-full text-sm text-left text-foreground">
//                         <thead className="text-xs text-muted-foreground uppercase bg-muted/50">
//                           <tr>
//                             <th className="px-6 py-3">Title</th>
//                             <th className="px-6 py-3">Therapist</th>
//                             <th className="px-6 py-3">Date</th>
//                             <th className="px-6 py-3">Duration</th>
//                           </tr>
//                         </thead>
//                         <tbody>
//                           {therapies
//                             .filter(
//                               (therapy) => new Date(therapy.date) <= new Date(),
//                             )
//                             .map((therapy) => (
//                               <tr
//                                 key={therapy.id}
//                                 className="border-b border-border/50 hover:bg-muted/10"
//                               >
//                                 <td className="px-6 py-4">{therapy.title}</td>
//                                 <td className="px-6 py-4">
//                                   <div className="flex items-center gap-2">
//                                     <User className="h-4 w-4" />
//                                     {therapy.therapist
//                                       ? `${therapy.therapist.therapistDetails.firstName} ${therapy.therapist.therapistDetails.lastName}`
//                                       : "Unknown"}
//                                   </div>
//                                 </td>
//                                 <td className="px-6 py-4">
//                                   <div className="flex items-center gap-2">
//                                     <Calendar className="h-4 w-4" />
//                                     {new Date(
//                                       therapy.date,
//                                     ).toLocaleDateString()}
//                                   </div>
//                                 </td>
//                                 <td className="px-6 py-4">
//                                   <div className="flex items-center gap-2">
//                                     <Clock className="h-4 w-4" />
//                                     {therapy.duration} min
//                                   </div>
//                                 </td>
//                               </tr>
//                             ))}
//                         </tbody>
//                       </table>
//                     </div>
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };
