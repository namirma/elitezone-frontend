export const ReadMoreImgVarinets = {
    begin: {
        x: '-100vw'
    },
    visial: {
        x: 0,
        transition: {
          delay: 0.3,
            duration: 1,
            type: 'spring',
            stiffness: 50,
        }
    }
}

export const ImgVarinets = {
    begin: {
      x: '100vw'
    },
    visible: {
      x: '0',
      transition: {
        duration: 0.5,
        type:'spring',
        stiffness: 50,
        delay:.5
      }
    }
  };