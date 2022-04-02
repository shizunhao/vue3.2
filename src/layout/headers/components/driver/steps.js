// Define the steps for introduction
export const steps = (i18n) => [
  {
    element: '#guide',
    popover: {
      title: i18n('driver.guideBtn'),
      description: 'Body of the popover',
      position: 'left'
    }
  },
  {
    element: '#hamburger',
    popover: {
      title: i18n('driver.hamburgerBtn'),
      description: 'Body of the popover',
      position: 'bottom'
    }
  },
  {
    element: '#screenfull',
    popover: {
      title: i18n('driver.fullScreen'),
      description: 'Body of the popover',
      position: 'left'
    }
  }
]
