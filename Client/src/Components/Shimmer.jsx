function Shimmer() {
  return (
    <div className="shimmer_body">
      <h1
        style={{
          alignSelf: "start",
          marginTop: "100px",
          fontSize: "5em",
          color: "rgba(255, 255, 255, 0.2)",
        }}
      >
        PLEASE WAIT
      </h1>
      <div className="loader">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}

export default Shimmer;
