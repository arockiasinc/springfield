// AppContext.jsx
import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import Backdrop from "../components/Backdrop";
import ModalBox from "../components/ModalBox";

const AppContext = createContext();

export function AppProvider({ children }) {

  const [cmsData, setCmsData] = useState({});
  const [logos, setLogos] = useState([]);
  const [loading, setLoading] = useState(true);

  // ===== GLOBAL MODAL STATE =====
  const [showModal, setShowModal] = useState(false);
  const [currentCmsId, setCurrentCmsId] = useState(null);

  useEffect(() => {
    async function fetchAll() {
      try {
        const [cmsRes, logosRes] = await Promise.all([
          axios.get("http://localhost/springfield_react/admin/api/get_all_cms.php"),
          fetch("http://localhost/springfield_react/admin/api/get_features.php").then(res => res.json())
        ]);

        setCmsData(cmsRes.data);

        if (logosRes.status === "success") setLogos(logosRes.data);

      } catch (error) {
        console.error("Error loading data", error);
      }

      setLoading(false);
    }

    fetchAll();
  }, []);

  /** UPDATE CMS DATA */
  const updateCms = (id, updatedValue) => {
    setCmsData(prev => ({ ...prev, [id]: updatedValue }));
  };

  /** GLOBAL OPEN MODAL */
  const openModal = (id) => {
    setCurrentCmsId(id);
    setShowModal(true);
  };

  /** GLOBAL CLOSE MODAL */
  const closeModal = () => setShowModal(false);

  return (
    <AppContext.Provider 
      value={{ 
        cmsData, logos, loading, 
        updateCms, showModal, currentCmsId,
        openModal, closeModal 
      }}
    >
      {/* Render the website page content */}
      {children}

   
      <Backdrop show={showModal} onClick={closeModal} />

      <ModalBox
        show={showModal}
        onClose={closeModal}
        cmsId={currentCmsId}
        currentData={{
          ...cmsData[currentCmsId],
          type: cmsData[currentCmsId]?.type
        }}
        onSave={updateCms}
      />
    </AppContext.Provider>
  );
}

export function useAppData() {
  return useContext(AppContext);
}
