export const pageAnimation = {
  initial: {
    opacity: 0,
    y: 200,
  },

  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      when: 'beforeChildren',
      staggerChildren: 0.25,
    },
  },

  exit: {
    opacity: 0,
    transition: { duration: 0.5 },
  },
};

export const titleAnimation = {
  initial: {
    y: 200,
  },

  animate: {
    y: 0,
    transition: { duration: 0.75, ease: 'easeOut' },
  },
};

export const fadeAnimation = {
  initial: {
    opacity: 0,
    transition: { duration: 0.75, ease: 'easeOut' },
  },

  animate: {
    opacity: 1,
    transition: { duration: 0.75, ease: 'easeOut' },
  },
};

export const photoAnimation = {
  initial: {
    scale: 1.5,
    opacity: 0,
  },
  animate: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.75, ease: 'easeOut' },
  },
};

export const waveAnimation = {
  initial: {
    pathLength: 0,
    pathOffset: 1,
  },

  animate: {
    pathLength: 1,
    pathOffset: 0,
    transition: { duration: 1, ease: 'easeOut' },
  },
};

export const lineAnimation = {
  initial: {
    width: '0%',
  },

  animate: {
    width: '100%',
    transition: { duration: 1 },
  },
};

export const slideAnimation = {
  initial: {
    x: '-130%',
    skew: '45deg',
  },

  animate: {
    x: '100%',
    skew: '0deg',
    transition: { duration: 1, ease: 'easeOut' },
  },
};

export const sliderAnimation = {
  initial: {
    opacity: 1,
  },

  animate: {
    opacity: 1,
    transition: { staggerChildren: 0.2, ease: 'easeOut' },
  },
};

export const zoomAnimation = {
  initial: {
    opacity: 0,
    scale: 1.2,
    transition: { duration: 0.75, ease: 'easeOut' },
  },

  animate: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.75, ease: 'easeOut' },
  },
};
