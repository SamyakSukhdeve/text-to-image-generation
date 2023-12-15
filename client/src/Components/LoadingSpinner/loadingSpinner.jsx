import "./loadingSpinner.css";

export default function LoadingSpinner() {
  return (
    <div className="spinner-container">
      <div className="loading-spinner"></div>
      <h4 className="loding-text">Rendering images...</h4>
    </div>
  );
}
