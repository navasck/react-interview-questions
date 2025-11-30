'use client';
import { useState } from 'react';

export default function DivWithModal() {
  const [openModalIndex, setOpenModalIndex] = useState(null);
  return (
    <div>
      {/* 10 Div Elements */}
      {[...Array(10)].map((_, index) => (
        <div
          key={index}
          onClick={() => setOpenModalIndex(index)}
          style={{
            padding: '10px',
            margin: '10px',
            background: 'lightblue',
            cursor: 'pointer',
            width: '200px',
          }}
        >
          Click to open Modal {index + 1}
        </div>
      ))}
      {/* Modal */}
      {openModalIndex !== null && (
        <div style={modalStyles.overlay}>
          <div style={modalStyles.modal}>
            <h3>Modal {openModalIndex + 1}</h3>
            <p>This is the content of modal number {openModalIndex + 1}.</p>
            <button onClick={() => setOpenModalIndex(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}
const modalStyles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    background: 'rgba(0,0,0,0.6)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  modal: {
    background: '#fff',
    padding: '20px',
    borderRadius: '8px',
    minWidth: '300px',
  },
};
