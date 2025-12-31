import { useState, useEffect } from "react";
import axios from "axios";

export default function ModalBox({ show, onClose, cmsId, currentData, onSave }) {

  const [heading, setHeading] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    if (show && cmsId) {
      axios
        .get(`http://localhost/springfield_react/admin/get_cms.php?id=${cmsId}`)
        .then(res => {
          setHeading(res.data.heading || "");
          setContent(res.data.content || "");

          if (res.data.image) {
            setPreview(`http://localhost/springfield_react/uploads/${res.data.image}`);
          }
        });
    }
  }, [show, cmsId]);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleSave = async () => {
    const formData = new FormData();
    formData.append("id", cmsId);
    formData.append("heading", heading);
    formData.append("content", content);

    if (image) formData.append("image", image);

    const res = await axios.post(
      `http://localhost/springfield_react/admin/update_cms.php`,
      formData,
      { headers: { "Content-Type": "multipart/form-data" } }
    );

    if (res.data.success) {
      setStatus("Content Saved Successfully!");

      onSave(cmsId, {
        ...currentData,
        heading,
        content,
        image: res.data.image || currentData.image
      });

      setTimeout(() => {
        setStatus("");
        onClose();
      }, 1000);

    } else {
      setStatus("Error saving data.");
    }
  };

  if (!show) return null;

  const type = currentData?.type || "text";

  return (
    <div className="modal-wrapper" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>

        <h2>Edit Section {cmsId}</h2>

        {type === "text" && (
          <>
            <label>Heading</label>
            <input value={heading} onChange={(e) => setHeading(e.target.value)} />

            <label>Description</label>
            <textarea value={content} onChange={(e)=>setContent(e.target.value)}></textarea>
          </>
        )}

        {type === "image" && (
          <>
            <label>Upload Image</label>
            <input type="file" onChange={handleImageUpload} />
            {preview && <img src={preview} className="preview-img" />}

            <label>Heading</label>
            <input value={heading} onChange={(e) => setHeading(e.target.value)} />

            <label>Description</label>
            <textarea value={content} onChange={(e)=>setContent(e.target.value)}></textarea>
          </>
        )}

        {type === "image_only" && (
          <>
            <label>Upload Image</label>
            <input type="file" onChange={handleImageUpload} className="mb-3"/>
            {preview && <img src={preview} className="preview-img" />}
          </>
        )}

        {type === "heading_only" && (
          <>
            <label>Heading</label>
            <input value={heading} onChange={(e) => setHeading(e.target.value)} />
          </>
        )}

        {type === "headingimage" && (
          <>
            <label>Upload Image</label>
            <input type="file" onChange={handleImageUpload} />
            {preview && <img src={preview} className="preview-img" />}

            <label>Heading</label>
            <input value={heading} onChange={(e) => setHeading(e.target.value)} />
          </>
        )}

        {status && <p className="status-message">{status}</p>}

        <div className="modal-buttons">
          <button className="save" onClick={handleSave}>Save</button>
          <button className="cancel" onClick={onClose}>Close</button>
        </div>

      </div>
    </div>
  );
}
