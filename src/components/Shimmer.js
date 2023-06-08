const Shimmer = () => {
  return (
    <>
    <div className="restaurant-slide">
      {Array(4)
      .fill("")
      .map((slide, index) => {
        return <div key={index} className="demo-card">

        </div>
      })
      }
    </div>
      <div className="restaurant-list">
        {Array(10)
          .fill("")
          .map((item, index) => {
            return <div key={index} className="demo-card">
              <img
                style={{ width: "100%", height: 130, borderRadius:"10px" }}
                alt={item.title}
                src={item.src}
              />
              <div style={{ width: 300 }}>
                <div style={{ marginBottom: 16 }}>
                  <div style={{ width: '100%', height: 16, borderRadius: 8, backgroundColor: '#E0E0E0' }}></div>
                </div>
                <div style={{ marginBottom: 16 }}>
                  <div style={{ width: '60%', height: 16, borderRadius: 8, backgroundColor: '#E0E0E0' }}></div>
                </div>
                <div style={{ width: '40%', height: 16, borderRadius: 8, backgroundColor: '#E0E0E0' }}></div>
              </div>
            </div>;
          })}
      </div>
    </>
  );
};

export default Shimmer;
