import { useState } from "react";

function ProductForm({ addProduct }) {
  // const { theme, user } = useContext(GlobalContext); // Ensure GlobalContext is available
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [oldPrice, setOldPrice] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!title || !price || !oldPrice || !description) {
      alert("Toate campurile sunt obligatorii!");
      return;
    }
    addProduct({ title, price, oldPrice, description });
    setTitle("");
    setPrice("");
    setOldPrice("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label">Nume produs</label>
        <input type="text" className="form-control" placeholder="Nume produs" value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div className="mb-3">
        <label className="form-label">Pret produs</label>
        <input type="number" className="form-control" placeholder="Pret produs" value={price} onChange={(e) => setPrice(e.target.value)} />
      </div>
      <div className="mb-3">
        <label className="form-label">Pret vechi</label>
        <input type="number" className="form-control" placeholder="Pret vechi" value={oldPrice} onChange={(e) => setOldPrice(e.target.value)} />
      </div>
      <div className="mb-3">
        <label className="form-label">Descriere produs</label>
        <textarea className="form-control" rows="3" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
      </div>
      <button type="submit" className="btn btn-primary">Adauga produs</button>
    </form>
  );
}

export default ProductForm;