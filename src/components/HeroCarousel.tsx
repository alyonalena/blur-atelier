const HeroCarousel = () => {
  return (
    <>
      <div className="relative h-[calc(100vh-60px)] mt-header overflow-hidden">
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          overflow: 'hidden'
        }}>      
          <video autoPlay muted loop playsInline 
            style={{
              minWidth: '100%',
              minHeight: '100%',
              width: 'auto',
              height: 'auto',
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)', /* Центрирует видео */
              objectFit: 'cover' /* Заполняет весь блок без искажения пропорций */
            }}
          >
            <source src='/vid.mp4' type="video/mp4" />
          </video>
        </div>
      </div>
    </>
  )
}

export default HeroCarousel;
