import React, { useState } from "react";
import "./EventForm.css";

const EventForm = ({ onSubmit, initialData = {}, isEdit = false }) => {
  const [formData, setFormData] = useState({
    name: initialData.name || "",
    description: initialData.description || "",
    eventBanner: null, // For the file upload
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "eventBanner") {
      setFormData({ ...formData, eventBanner: files[0] }); // Handle file input
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = new FormData();
    payload.append("name", formData.name);
    payload.append("description", formData.description);
    if (formData.eventBanner) {
      payload.append("eventBanner", formData.eventBanner);
    }
    onSubmit(payload);
  };

  return (
    <form
      onSubmit={handleSubmit}
      encType="multipart/form-data"
      className="event-form"
    >
      <div>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Theme:</label>
        <textarea
          name="theme"
          value={formData.theme}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Date:</label>
        <input type="date" name="date" onChange={handleChange} required />
      </div>
      <div>
        <label>Venue:</label>
        <textarea
          name="venue"
          value={formData.venue}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Event Banner:</label>
        <input
          type="file"
          name="eventBanner"
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">{isEdit ? "Update Event" : "Create Event"}</button>
    </form>
  );
};

export default EventForm;
