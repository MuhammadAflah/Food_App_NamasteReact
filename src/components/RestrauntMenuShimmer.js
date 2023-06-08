const RestrauntMenuShimmer = () => {
    return (
        <>
            <div className="menu_shimmer_head">
                <div className="shimmer_head" style={{width:"50%", height:130, backgroundColor: '#E0E0E0', margin:"auto"}}></div>
                <div  style={{ width: 300 }}>
                    <div style={{ marginBottom: 16 }}>
                        <div className="shimmer_head" style={{ width: '100%', height: 16, borderRadius: 8, backgroundColor: '#E0E0E0' }}></div>
                    </div>
                    <div style={{ marginBottom: 16 }}>
                        <div className="shimmer_head" style={{ width: '60%', height: 16, borderRadius: 8, backgroundColor: '#E0E0E0' }}></div>
                    </div>
                    <div className="shimmer_head" style={{ width: '40%', height: 16, borderRadius: 8, backgroundColor: '#E0E0E0' }}></div>
                </div>
            </div>
            <div className="menu_shimmer_body">
                {Array(6)
                .fill("")
                .map((item, index) => {
                    return <div key={index} className="skeliton"></div>
                })
                }
            </div>
        </>
    )
}

export default RestrauntMenuShimmer