import React, { useState } from "react";
import "./AddMovieModal.css";

const AddMovieModal = ({ onAdd }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [newMovie, setNewMovie] = useState({
    title: "",
    description: "",
    posterURL: "",
    rating: "",
    genre: "",
    trailerURL: ""
  });

  const handleChange = (e) => {
    setNewMovie({ ...newMovie, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (
      newMovie.title &&
      newMovie.rating &&
      newMovie.posterURL &&
      newMovie.description
    ) {
      const movieToAdd = {
        ...newMovie,
        id: Date.now().toString(),
        rating: parseFloat(newMovie.rating),
        genre: newMovie.genre.split(",").map(g => g.trim()),
        createdAt: new Date().toISOString()
      };
      onAdd(movieToAdd);
      setNewMovie({
        title: "",
        description: "",
        posterURL: "",
        rating: "",
        genre: "",
        trailerURL: ""
      });
      setIsOpen(false);
    } else {
      alert("Please fill in all required fields.");
    }
  };

  return (
    <>
      <button className="open-modal-btn" onClick={() => setIsOpen(true)}>
        ➕ Add Movie
      </button>

      {isOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Add New Movie</h2>
            <input name="title" placeholder="Title" value={newMovie.title} onChange={handleChange} />
            <input name="description" placeholder="Description" value={newMovie.description} onChange={handleChange} />
            <input name="posterURL" placeholder="Poster URL" value={newMovie.posterURL} onChange={handleChange} />
            <input name="rating" type="number" placeholder="Rating (0-5)" value={newMovie.rating} onChange={handleChange} />
            <input name="genre" placeholder="Genre(s), comma separated" value={newMovie.genre} onChange={handleChange} />
            <input name="trailerURL" placeholder="Trailer URL" value={newMovie.trailerURL} onChange={handleChange} />

            <div className="modal-buttons">
              <button onClick={handleSubmit}>Add</button>
              <button className="close-btn" onClick={() => setIsOpen(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AddMovieModal;
