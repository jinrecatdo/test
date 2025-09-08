

function App() {
  return (
    <div style={{
      textAlign: "center",
      marginTop: "50px",
      fontFamily: "Arial, sans-serif"
    }}>
      <h1>🚀 Hello React!</h1>
      <p>Ứng dụng React đầu tiên của bạn đã chạy thành công 🎉</p>
      <button
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          borderRadius: "8px",
          border: "none",
          backgroundColor: "#007bff",
          color: "#fff",
          cursor: "pointer"
        }}
        onClick={() => alert("Bạn vừa bấm nút!")}
      >
        Click me
      </button>
    </div>
  );
}

export default App;



