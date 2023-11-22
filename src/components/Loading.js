function Loading({ isLoading }){
    
    return (
        <>
            <div style={{
                position: 'fixed',
                top: 0,
                bottom: 0,
                // bottom: isLoading ? 0 : '100%',
                left: 0,
                right: 0,
                backgroundColor: 'rgba(0,0,0,1)',
                zIndex: 99999,
                display: 'grid',
                placeContent: 'center',
                // backdropFilter: 'blur(3px)'
                opacity: isLoading ? 1 : 0,
                pointerEvents: isLoading ? 'initial' : 'none',
                transition: isLoading ? 'none' : '.75s ease-in-out',
                overflow: 'hidden'
            }}>
                <div className="loader">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 66 66" height="100px" width="100px" className="spinner">
                        <circle stroke="url(#gradient)" r="20" cy="33" cx="33" strokeWidth="1" fill="transparent" className="path"></circle>
                        <linearGradient id="gradient">
                            <stop stopOpacity="1" stopColor="orange" offset="0%"></stop>
                            <stop stopOpacity="0" stopColor="#dee2e6" offset="100%"></stop>
                        </linearGradient>
                    </svg>
                </div>
            </div>
        </>
    )
}

export default Loading;