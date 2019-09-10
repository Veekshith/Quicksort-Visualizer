const mockSteps = [
  {
    name: 'Here is a visualization of the entire Quicksort process.',
    elementStates: [
      {
        markInitial: true,
        markPivot: false,
        markSelected: false,
        markSorted: false,
        markLeftArrow: false,
        markRightArrow: false
      },
      {
        markInitial: true,
        markPivot: false,
        markSelected: false,
        markSorted: false,
        markLeftArrow: false,
        markRightArrow: false
      },
      {
        markInitial: true,
        markPivot: false,
        markSelected: false,
        markSorted: false,
        markLeftArrow: false,
        markRightArrow: false
      },
      {
        markInitial: true,
        markPivot: false,
        markSelected: false,
        markSorted: false,
        markLeftArrow: false,
        markRightArrow: false
      },
      {
        markInitial: true,
        markPivot: false,
        markSelected: false,
        markSorted: false,
        markLeftArrow: false,
        markRightArrow: false
      }
    ],
    listGlance: [
      5,
      4,
      3,
      7,
      8
    ],
    uniqueKeys: [
      0,
      1,
      2,
      3,
      4
    ]
  },
  {
    name: 'Select pivot',
    elementStates: [
      {
        markInitial: true,
        markPivot: true,
        markSelected: false,
        markSorted: false,
        markLeftArrow: false,
        markRightArrow: false
      },
      {
        markInitial: true,
        markPivot: false,
        markSelected: false,
        markSorted: false,
        markLeftArrow: false,
        markRightArrow: false
      },
      {
        markInitial: true,
        markPivot: false,
        markSelected: false,
        markSorted: false,
        markLeftArrow: false,
        markRightArrow: false
      },
      {
        markInitial: true,
        markPivot: false,
        markSelected: false,
        markSorted: false,
        markLeftArrow: false,
        markRightArrow: false
      },
      {
        markInitial: true,
        markPivot: false,
        markSelected: false,
        markSorted: false,
        markLeftArrow: false,
        markRightArrow: false
      }
    ],
    listGlance: [
      5,
      4,
      3,
      7,
      8
    ],
    uniqueKeys: [
      0,
      1,
      2,
      3,
      4
    ]
  },
  {
    name: 'Partioning started',
    elementStates: [
      {
        markInitial: true,
        markPivot: true,
        markSelected: false,
        markSorted: false,
        markLeftArrow: false,
        markRightArrow: false
      },
      {
        markInitial: true,
        markPivot: false,
        markSelected: false,
        markSorted: false,
        markLeftArrow: false,
        markRightArrow: false
      },
      {
        markInitial: true,
        markPivot: false,
        markSelected: false,
        markSorted: false,
        markLeftArrow: false,
        markRightArrow: false
      },
      {
        markInitial: true,
        markPivot: false,
        markSelected: false,
        markSorted: false,
        markLeftArrow: false,
        markRightArrow: false
      },
      {
        markInitial: true,
        markPivot: false,
        markSelected: false,
        markSorted: false,
        markLeftArrow: false,
        markRightArrow: false
      }
    ],
    listGlance: [
      5,
      4,
      3,
      7,
      8
    ],
    uniqueKeys: [
      0,
      1,
      2,
      3,
      4
    ]
  },
  {
    name: 'Select left pointer',
    elementStates: [
      {
        markInitial: true,
        markPivot: true,
        markSelected: false,
        markSorted: false,
        markLeftArrow: false,
        markRightArrow: false
      },
      {
        markInitial: true,
        markPivot: false,
        markSelected: false,
        markSorted: false,
        markLeftArrow: true,
        markRightArrow: false
      },
      {
        markInitial: true,
        markPivot: false,
        markSelected: false,
        markSorted: false,
        markLeftArrow: false,
        markRightArrow: false
      },
      {
        markInitial: true,
        markPivot: false,
        markSelected: false,
        markSorted: false,
        markLeftArrow: false,
        markRightArrow: false
      },
      {
        markInitial: true,
        markPivot: false,
        markSelected: false,
        markSorted: false,
        markLeftArrow: false,
        markRightArrow: false
      }
    ],
    listGlance: [
      5,
      4,
      3,
      7,
      8
    ],
    uniqueKeys: [
      0,
      1,
      2,
      3,
      4
    ]
  },
  {
    name: 'Select right pointer',
    elementStates: [
      {
        markInitial: true,
        markPivot: true,
        markSelected: false,
        markSorted: false,
        markLeftArrow: false,
        markRightArrow: false
      },
      {
        markInitial: true,
        markPivot: false,
        markSelected: false,
        markSorted: false,
        markLeftArrow: true,
        markRightArrow: true
      },
      {
        markInitial: true,
        markPivot: false,
        markSelected: false,
        markSorted: false,
        markLeftArrow: false,
        markRightArrow: false
      },
      {
        markInitial: true,
        markPivot: false,
        markSelected: false,
        markSorted: false,
        markLeftArrow: false,
        markRightArrow: false
      },
      {
        markInitial: true,
        markPivot: false,
        markSelected: false,
        markSorted: false,
        markLeftArrow: false,
        markRightArrow: false
      }
    ],
    listGlance: [
      5,
      4,
      3,
      7,
      8
    ],
    uniqueKeys: [
      0,
      1,
      2,
      3,
      4
    ]
  },
  {
    name: 'Compare until right pointer is less than pivot  then swap right and left  pointers',
    elementStates: [
      {
        markInitial: true,
        markPivot: true,
        markSelected: false,
        markSorted: false,
        markLeftArrow: false,
        markRightArrow: false
      },
      {
        markInitial: true,
        markPivot: false,
        markSelected: false,
        markSorted: false,
        markLeftArrow: true,
        markRightArrow: true
      },
      {
        markInitial: true,
        markPivot: false,
        markSelected: false,
        markSorted: false,
        markLeftArrow: false,
        markRightArrow: false
      },
      {
        markInitial: true,
        markPivot: false,
        markSelected: false,
        markSorted: false,
        markLeftArrow: false,
        markRightArrow: false
      },
      {
        markInitial: true,
        markPivot: false,
        markSelected: false,
        markSorted: false,
        markLeftArrow: false,
        markRightArrow: false
      }
    ],
    listGlance: [
      5,
      4,
      3,
      7,
      8
    ],
    uniqueKeys: [
      0,
      1,
      2,
      3,
      4
    ]
  },
  {
    name: 'This is as far as it can go',
    elementStates: [
      {
        markInitial: true,
        markPivot: true,
        markSelected: false,
        markSorted: false,
        markLeftArrow: false,
        markRightArrow: false
      },
      {
        markInitial: true,
        markPivot: false,
        markSelected: true,
        markSorted: false,
        markLeftArrow: true,
        markRightArrow: true
      },
      {
        markInitial: true,
        markPivot: false,
        markSelected: false,
        markSorted: false,
        markLeftArrow: false,
        markRightArrow: false
      },
      {
        markInitial: true,
        markPivot: false,
        markSelected: false,
        markSorted: false,
        markLeftArrow: false,
        markRightArrow: false
      },
      {
        markInitial: true,
        markPivot: false,
        markSelected: false,
        markSorted: false,
        markLeftArrow: false,
        markRightArrow: false
      }
    ],
    listGlance: [
      5,
      4,
      3,
      7,
      8
    ],
    uniqueKeys: [
      0,
      1,
      2,
      3,
      4
    ]
  },
  {
    name: 'Swap the selected values',
    elementStates: [
      {
        markInitial: true,
        markPivot: true,
        markSelected: false,
        markSorted: false,
        markLeftArrow: false,
        markRightArrow: false
      },
      {
        markInitial: true,
        markPivot: false,
        markSelected: false,
        markSorted: false,
        markLeftArrow: true,
        markRightArrow: true
      },
      {
        markInitial: true,
        markPivot: false,
        markSelected: false,
        markSorted: false,
        markLeftArrow: false,
        markRightArrow: false
      },
      {
        markInitial: true,
        markPivot: false,
        markSelected: false,
        markSorted: false,
        markLeftArrow: false,
        markRightArrow: false
      },
      {
        markInitial: true,
        markPivot: false,
        markSelected: false,
        markSorted: false,
        markLeftArrow: false,
        markRightArrow: false
      }
    ],
    listGlance: [
      5,
      4,
      3,
      7,
      8
    ],
    uniqueKeys: [
      0,
      1,
      2,
      3,
      4
    ]
  },
  {
    name: 'move left pointer',
    elementStates: [
      {
        markInitial: true,
        markPivot: true,
        markSelected: false,
        markSorted: false,
        markLeftArrow: false,
        markRightArrow: false
      },
      {
        markInitial: true,
        markPivot: false,
        markSelected: false,
        markSorted: false,
        markLeftArrow: false,
        markRightArrow: true
      },
      {
        markInitial: true,
        markPivot: false,
        markSelected: false,
        markSorted: false,
        markLeftArrow: true,
        markRightArrow: false
      },
      {
        markInitial: true,
        markPivot: false,
        markSelected: false,
        markSorted: false,
        markLeftArrow: false,
        markRightArrow: false
      },
      {
        markInitial: true,
        markPivot: false,
        markSelected: false,
        markSorted: false,
        markLeftArrow: false,
        markRightArrow: false
      }
    ],
    listGlance: [
      5,
      4,
      3,
      7,
      8
    ],
    uniqueKeys: [
      0,
      1,
      2,
      3,
      4
    ]
  },
  {
    name: 'Move right pointer',
    elementStates: [
      {
        markInitial: true,
        markPivot: true,
        markSelected: false,
        markSorted: false,
        markLeftArrow: false,
        markRightArrow: false
      },
      {
        markInitial: true,
        markPivot: false,
        markSelected: false,
        markSorted: false,
        markLeftArrow: false,
        markRightArrow: false
      },
      {
        markInitial: true,
        markPivot: false,
        markSelected: false,
        markSorted: false,
        markLeftArrow: true,
        markRightArrow: true
      },
      {
        markInitial: true,
        markPivot: false,
        markSelected: false,
        markSorted: false,
        markLeftArrow: false,
        markRightArrow: false
      },
      {
        markInitial: true,
        markPivot: false,
        markSelected: false,
        markSorted: false,
        markLeftArrow: false,
        markRightArrow: false
      }
    ],
    listGlance: [
      5,
      4,
      3,
      7,
      8
    ],
    uniqueKeys: [
      0,
      1,
      2,
      3,
      4
    ]
  },
  {
    name: 'Compare until right pointer is less than pivot  then swap right and left  pointers',
    elementStates: [
      {
        markInitial: true,
        markPivot: true,
        markSelected: false,
        markSorted: false,
        markLeftArrow: false,
        markRightArrow: false
      },
      {
        markInitial: true,
        markPivot: false,
        markSelected: false,
        markSorted: false,
        markLeftArrow: false,
        markRightArrow: false
      },
      {
        markInitial: true,
        markPivot: false,
        markSelected: false,
        markSorted: false,
        markLeftArrow: true,
        markRightArrow: true
      },
      {
        markInitial: true,
        markPivot: false,
        markSelected: false,
        markSorted: false,
        markLeftArrow: false,
        markRightArrow: false
      },
      {
        markInitial: true,
        markPivot: false,
        markSelected: false,
        markSorted: false,
        markLeftArrow: false,
        markRightArrow: false
      }
    ],
    listGlance: [
      5,
      4,
      3,
      7,
      8
    ],
    uniqueKeys: [
      0,
      1,
      2,
      3,
      4
    ]
  },
  {
    name: 'This is as far as it can go',
    elementStates: [
      {
        markInitial: true,
        markPivot: true,
        markSelected: false,
        markSorted: false,
        markLeftArrow: false,
        markRightArrow: false
      },
      {
        markInitial: true,
        markPivot: false,
        markSelected: false,
        markSorted: false,
        markLeftArrow: false,
        markRightArrow: false
      },
      {
        markInitial: true,
        markPivot: false,
        markSelected: true,
        markSorted: false,
        markLeftArrow: true,
        markRightArrow: true
      },
      {
        markInitial: true,
        markPivot: false,
        markSelected: false,
        markSorted: false,
        markLeftArrow: false,
        markRightArrow: false
      },
      {
        markInitial: true,
        markPivot: false,
        markSelected: false,
        markSorted: false,
        markLeftArrow: false,
        markRightArrow: false
      }
    ],
    listGlance: [
      5,
      4,
      3,
      7,
      8
    ],
    uniqueKeys: [
      0,
      1,
      2,
      3,
      4
    ]
  },
  {
    name: 'Swap the selected values',
    elementStates: [
      {
        markInitial: true,
        markPivot: true,
        markSelected: false,
        markSorted: false,
        markLeftArrow: false,
        markRightArrow: false
      },
      {
        markInitial: true,
        markPivot: false,
        markSelected: false,
        markSorted: false,
        markLeftArrow: false,
        markRightArrow: false
      },
      {
        markInitial: true,
        markPivot: false,
        markSelected: false,
        markSorted: false,
        markLeftArrow: true,
        markRightArrow: true
      },
      {
        markInitial: true,
        markPivot: false,
        markSelected: false,
        markSorted: false,
        markLeftArrow: false,
        markRightArrow: false
      },
      {
        markInitial: true,
        markPivot: false,
        markSelected: false,
        markSorted: false,
        markLeftArrow: false,
        markRightArrow: false
      }
    ],
    listGlance: [
      5,
      4,
      3,
      7,
      8
    ],
    uniqueKeys: [
      0,
      1,
      2,
      3,
      4
    ]
  },
  {
    name: 'move left pointer',
    elementStates: [
      {
        markInitial: true,
        markPivot: true,
        markSelected: false,
        markSorted: false,
        markLeftArrow: false,
        markRightArrow: false
      },
      {
        markInitial: true,
        markPivot: false,
        markSelected: false,
        markSorted: false,
        markLeftArrow: false,
        markRightArrow: false
      },
      {
        markInitial: true,
        markPivot: false,
        markSelected: false,
        markSorted: false,
        markLeftArrow: false,
        markRightArrow: true
      },
      {
        markInitial: true,
        markPivot: false,
        markSelected: false,
        markSorted: false,
        markLeftArrow: true,
        markRightArrow: false
      },
      {
        markInitial: true,
        markPivot: false,
        markSelected: false,
        markSorted: false,
        markLeftArrow: false,
        markRightArrow: false
      }
    ],
    listGlance: [
      5,
      4,
      3,
      7,
      8
    ],
    uniqueKeys: [
      0,
      1,
      2,
      3,
      4
    ]
  },
  {
    name: 'Move right pointer',
    elementStates: [
      {
        markInitial: true,
        markPivot: true,
        markSelected: false,
        markSorted: false,
        markLeftArrow: false,
        markRightArrow: false
      },
      {
        markInitial: true,
        markPivot: false,
        markSelected: false,
        markSorted: false,
        markLeftArrow: false,
        markRightArrow: false
      },
      {
        markInitial: true,
        markPivot: false,
        markSelected: false,
        markSorted: false,
        markLeftArrow: false,
        markRightArrow: false
      },
      {
        markInitial: true,
        markPivot: false,
        markSelected: false,
        markSorted: false,
        markLeftArrow: true,
        markRightArrow: true
      },
      {
        markInitial: true,
        markPivot: false,
        markSelected: false,
        markSorted: false,
        markLeftArrow: false,
        markRightArrow: false
      }
    ],
    listGlance: [
      5,
      4,
      3,
      7,
      8
    ],
    uniqueKeys: [
      0,
      1,
      2,
      3,
      4
    ]
  },
  {
    name: 'Compare until right pointer is less than pivot  then swap right and left  pointers',
    elementStates: [
      {
        markInitial: true,
        markPivot: true,
        markSelected: false,
        markSorted: false,
        markLeftArrow: false,
        markRightArrow: false
      },
      {
        markInitial: true,
        markPivot: false,
        markSelected: false,
        markSorted: false,
        markLeftArrow: false,
        markRightArrow: false
      },
      {
        markInitial: true,
        markPivot: false,
        markSelected: false,
        markSorted: false,
        markLeftArrow: false,
        markRightArrow: false
      },
      {
        markInitial: true,
        markPivot: false,
        markSelected: false,
        markSorted: false,
        markLeftArrow: true,
        markRightArrow: true
      },
      {
        markInitial: true,
        markPivot: false,
        markSelected: false,
        markSorted: false,
        markLeftArrow: false,
        markRightArrow: false
      }
    ],
    listGlance: [
      5,
      4,
      3,
      7,
      8
    ],
    uniqueKeys: [
      0,
      1,
      2,
      3,
      4
    ]
  },
  {
    name: 'Move right pointer',
    elementStates: [
      {
        markInitial: true,
        markPivot: true,
        markSelected: false,
        markSorted: false,
        markLeftArrow: false,
        markRightArrow: false
      },
      {
        markInitial: true,
        markPivot: false,
        markSelected: false,
        markSorted: false,
        markLeftArrow: false,
        markRightArrow: false
      },
      {
        markInitial: true,
        markPivot: false,
        markSelected: false,
        markSorted: false,
        markLeftArrow: false,
        markRightArrow: false
      },
      {
        markInitial: true,
        markPivot: false,
        markSelected: false,
        markSorted: false,
        markLeftArrow: true,
        markRightArrow: false
      },
      {
        markInitial: true,
        markPivot: false,
        markSelected: false,
        markSorted: false,
        markLeftArrow: false,
        markRightArrow: true
      }
    ],
    listGlance: [
      5,
      4,
      3,
      7,
      8
    ],
    uniqueKeys: [
      0,
      1,
      2,
      3,
      4
    ]
  },
  {
    name: 'Compare until right pointer is less than pivot  then swap right and left  pointers',
    elementStates: [
      {
        markInitial: true,
        markPivot: true,
        markSelected: false,
        markSorted: false,
        markLeftArrow: false,
        markRightArrow: false
      },
      {
        markInitial: true,
        markPivot: false,
        markSelected: false,
        markSorted: false,
        markLeftArrow: false,
        markRightArrow: false
      },
      {
        markInitial: true,
        markPivot: false,
        markSelected: false,
        markSorted: false,
        markLeftArrow: false,
        markRightArrow: false
      },
      {
        markInitial: true,
        markPivot: false,
        markSelected: false,
        markSorted: false,
        markLeftArrow: true,
        markRightArrow: false
      },
      {
        markInitial: true,
        markPivot: false,
        markSelected: false,
        markSorted: false,
        markLeftArrow: false,
        markRightArrow: true
      }
    ],
    listGlance: [
      5,
      4,
      3,
      7,
      8
    ],
    uniqueKeys: [
      0,
      1,
      2,
      3,
      4
    ]
  },
  {
    name: 'Right pointer reached the end, this is as far it can go',
    elementStates: [
      {
        markInitial: true,
        markPivot: false,
        markSelected: true,
        markSorted: false,
        markLeftArrow: false,
        markRightArrow: false
      },
      {
        markInitial: true,
        markPivot: false,
        markSelected: false,
        markSorted: false,
        markLeftArrow: false,
        markRightArrow: false
      },
      {
        markInitial: true,
        markPivot: false,
        markSelected: true,
        markSorted: false,
        markLeftArrow: false,
        markRightArrow: false
      },
      {
        markInitial: true,
        markPivot: false,
        markSelected: false,
        markSorted: false,
        markLeftArrow: true,
        markRightArrow: false
      },
      {
        markInitial: true,
        markPivot: false,
        markSelected: false,
        markSorted: false,
        markLeftArrow: false,
        markRightArrow: true
      }
    ],
    listGlance: [
      5,
      4,
      3,
      7,
      8
    ],
    uniqueKeys: [
      0,
      1,
      2,
      3,
      4
    ]
  },
  {
    name: 'Move pivot to its final position',
    elementStates: [
      {
        markInitial: true,
        markPivot: false,
        markSelected: false,
        markSorted: false,
        markLeftArrow: false,
        markRightArrow: false
      },
      {
        markInitial: true,
        markPivot: false,
        markSelected: false,
        markSorted: false,
        markLeftArrow: false,
        markRightArrow: false
      },
      {
        markInitial: true,
        markPivot: false,
        markSelected: false,
        markSorted: true,
        markLeftArrow: false,
        markRightArrow: false
      },
      {
        markInitial: true,
        markPivot: false,
        markSelected: false,
        markSorted: false,
        markLeftArrow: false,
        markRightArrow: false
      },
      {
        markInitial: true,
        markPivot: false,
        markSelected: false,
        markSorted: false,
        markLeftArrow: false,
        markRightArrow: false
      }
    ],
    listGlance: [
      3,
      4,
      5,
      7,
      8
    ],
    uniqueKeys: [
      2,
      1,
      0,
      3,
      4
    ]
  },
  {
    name: 'Sorting left sublist',
    elementStates: [
      {
        markInitial: true,
        markPivot: false,
        markSelected: false,
        markSorted: false,
        markLeftArrow: false,
        markRightArrow: false
      },
      {
        markInitial: true,
        markPivot: false,
        markSelected: false,
        markSorted: false,
        markLeftArrow: false,
        markRightArrow: false
      },
      {
        markInitial: true,
        markPivot: false,
        markSelected: false,
        markSorted: true,
        markLeftArrow: false,
        markRightArrow: false
      },
      {
        markInitial: true,
        markPivot: false,
        markSelected: false,
        markSorted: false,
        markLeftArrow: false,
        markRightArrow: false
      },
      {
        markInitial: true,
        markPivot: false,
        markSelected: false,
        markSorted: false,
        markLeftArrow: false,
        markRightArrow: false
      }
    ],
    listGlance: [
      3,
      4,
      5,
      7,
      8
    ],
    uniqueKeys: [
      2,
      1,
      0,
      3,
      4
    ]
  },
  {
    name: 'Select pivot',
    elementStates: [
      {
        markInitial: true,
        markPivot: true,
        markSelected: false,
        markSorted: false,
        markLeftArrow: false,
        markRightArrow: false
      },
      {
        markInitial: true,
        markPivot: false,
        markSelected: false,
        markSorted: false,
        markLeftArrow: false,
        markRightArrow: false
      },
      {
        markInitial: true,
        markPivot: false,
        markSelected: false,
        markSorted: true,
        markLeftArrow: false,
        markRightArrow: false
      },
      {
        markInitial: true,
        markPivot: false,
        markSelected: false,
        markSorted: false,
        markLeftArrow: false,
        markRightArrow: false
      },
      {
        markInitial: true,
        markPivot: false,
        markSelected: false,
        markSorted: false,
        markLeftArrow: false,
        markRightArrow: false
      }
    ],
    listGlance: [
      3,
      4,
      5,
      7,
      8
    ],
    uniqueKeys: [
      2,
      1,
      0,
      3,
      4
    ]
  },
  {
    name: 'Partioning started',
    elementStates: [
      {
        markInitial: true,
        markPivot: true,
        markSelected: false,
        markSorted: false,
        markLeftArrow: false,
        markRightArrow: false
      },
      {
        markInitial: true,
        markPivot: false,
        markSelected: false,
        markSorted: false,
        markLeftArrow: false,
        markRightArrow: false
      },
      {
        markInitial: true,
        markPivot: false,
        markSelected: false,
        markSorted: true,
        markLeftArrow: false,
        markRightArrow: false
      },
      {
        markInitial: true,
        markPivot: false,
        markSelected: false,
        markSorted: false,
        markLeftArrow: false,
        markRightArrow: false
      },
      {
        markInitial: true,
        markPivot: false,
        markSelected: false,
        markSorted: false,
        markLeftArrow: false,
        markRightArrow: false
      }
    ],
    listGlance: [
      3,
      4,
      5,
      7,
      8
    ],
    uniqueKeys: [
      2,
      1,
      0,
      3,
      4
    ]
  },
  {
    name: 'Select left pointer',
    elementStates: [
      {
        markInitial: true,
        markPivot: true,
        markSelected: false,
        markSorted: false,
        markLeftArrow: false,
        markRightArrow: false
      },
      {
        markInitial: true,
        markPivot: false,
        markSelected: false,
        markSorted: false,
        markLeftArrow: true,
        markRightArrow: false
      },
      {
        markInitial: true,
        markPivot: false,
        markSelected: false,
        markSorted: true,
        markLeftArrow: false,
        markRightArrow: false
      },
      {
        markInitial: true,
        markPivot: false,
        markSelected: false,
        markSorted: false,
        markLeftArrow: false,
        markRightArrow: false
      },
      {
        markInitial: true,
        markPivot: false,
        markSelected: false,
        markSorted: false,
        markLeftArrow: false,
        markRightArrow: false
      }
    ],
    listGlance: [
      3,
      4,
      5,
      7,
      8
    ],
    uniqueKeys: [
      2,
      1,
      0,
      3,
      4
    ]
  },
  {
    name: 'Select right pointer',
    elementStates: [
      {
        markInitial: true,
        markPivot: true,
        markSelected: false,
        markSorted: false,
        markLeftArrow: false,
        markRightArrow: false
      },
      {
        markInitial: true,
        markPivot: false,
        markSelected: false,
        markSorted: false,
        markLeftArrow: true,
        markRightArrow: true
      },
      {
        markInitial: true,
        markPivot: false,
        markSelected: false,
        markSorted: true,
        markLeftArrow: false,
        markRightArrow: false
      },
      {
        markInitial: true,
        markPivot: false,
        markSelected: false,
        markSorted: false,
        markLeftArrow: false,
        markRightArrow: false
      },
      {
        markInitial: true,
        markPivot: false,
        markSelected: false,
        markSorted: false,
        markLeftArrow: false,
        markRightArrow: false
      }
    ],
    listGlance: [
      3,
      4,
      5,
      7,
      8
    ],
    uniqueKeys: [
      2,
      1,
      0,
      3,
      4
    ]
  },
  {
    name: 'Compare until right pointer is less than pivot  then swap right and left  pointers',
    elementStates: [
      {
        markInitial: true,
        markPivot: true,
        markSelected: false,
        markSorted: false,
        markLeftArrow: false,
        markRightArrow: false
      },
      {
        markInitial: true,
        markPivot: false,
        markSelected: false,
        markSorted: false,
        markLeftArrow: true,
        markRightArrow: true
      },
      {
        markInitial: true,
        markPivot: false,
        markSelected: false,
        markSorted: true,
        markLeftArrow: false,
        markRightArrow: false
      },
      {
        markInitial: true,
        markPivot: false,
        markSelected: false,
        markSorted: false,
        markLeftArrow: false,
        markRightArrow: false
      },
      {
        markInitial: true,
        markPivot: false,
        markSelected: false,
        markSorted: false,
        markLeftArrow: false,
        markRightArrow: false
      }
    ],
    listGlance: [
      3,
      4,
      5,
      7,
      8
    ],
    uniqueKeys: [
      2,
      1,
      0,
      3,
      4
    ]
  },
  {
    name: 'Right pointer reached the end, this is as far it can go',
    elementStates: [
      {
        markInitial: true,
        markPivot: false,
        markSelected: true,
        markSorted: false,
        markLeftArrow: false,
        markRightArrow: false
      },
      {
        markInitial: true,
        markPivot: false,
        markSelected: false,
        markSorted: false,
        markLeftArrow: true,
        markRightArrow: true
      },
      {
        markInitial: true,
        markPivot: false,
        markSelected: false,
        markSorted: true,
        markLeftArrow: false,
        markRightArrow: false
      },
      {
        markInitial: true,
        markPivot: false,
        markSelected: false,
        markSorted: false,
        markLeftArrow: false,
        markRightArrow: false
      },
      {
        markInitial: true,
        markPivot: false,
        markSelected: false,
        markSorted: false,
        markLeftArrow: false,
        markRightArrow: false
      }
    ],
    listGlance: [
      3,
      4,
      5,
      7,
      8
    ],
    uniqueKeys: [
      2,
      1,
      0,
      3,
      4
    ]
  },
  {
    name: 'Move pivot to its final position',
    elementStates: [
      {
        markInitial: true,
        markPivot: false,
        markSelected: false,
        markSorted: true,
        markLeftArrow: false,
        markRightArrow: false
      },
      {
        markInitial: true,
        markPivot: false,
        markSelected: false,
        markSorted: false,
        markLeftArrow: false,
        markRightArrow: false
      },
      {
        markInitial: true,
        markPivot: false,
        markSelected: false,
        markSorted: true,
        markLeftArrow: false,
        markRightArrow: false
      },
      {
        markInitial: true,
        markPivot: false,
        markSelected: false,
        markSorted: false,
        markLeftArrow: false,
        markRightArrow: false
      },
      {
        markInitial: true,
        markPivot: false,
        markSelected: false,
        markSorted: false,
        markLeftArrow: false,
        markRightArrow: false
      }
    ],
    listGlance: [
      3,
      4,
      5,
      7,
      8
    ],
    uniqueKeys: [
      2,
      1,
      0,
      3,
      4
    ]
  },
  {
    name: 'Sorting right sublist',
    elementStates: [
      {
        markInitial: true,
        markPivot: false,
        markSelected: false,
        markSorted: true,
        markLeftArrow: false,
        markRightArrow: false
      },
      {
        markInitial: true,
        markPivot: false,
        markSelected: false,
        markSorted: true,
        markLeftArrow: false,
        markRightArrow: false
      },
      {
        markInitial: true,
        markPivot: false,
        markSelected: false,
        markSorted: true,
        markLeftArrow: false,
        markRightArrow: false
      },
      {
        markInitial: true,
        markPivot: false,
        markSelected: false,
        markSorted: true,
        markLeftArrow: false,
        markRightArrow: false
      },
      {
        markInitial: true,
        markPivot: false,
        markSelected: false,
        markSorted: false,
        markLeftArrow: false,
        markRightArrow: false
      }
    ],
    listGlance: [
      3,
      4,
      5,
      7,
      8
    ],
    uniqueKeys: [
      2,
      1,
      0,
      3,
      4
    ]
  },
  {
    name: 'Select pivot',
    elementStates: [
      {
        markInitial: true,
        markPivot: false,
        markSelected: false,
        markSorted: true,
        markLeftArrow: false,
        markRightArrow: false
      },
      {
        markInitial: true,
        markPivot: false,
        markSelected: false,
        markSorted: true,
        markLeftArrow: false,
        markRightArrow: false
      },
      {
        markInitial: true,
        markPivot: false,
        markSelected: false,
        markSorted: true,
        markLeftArrow: false,
        markRightArrow: false
      },
      {
        markInitial: true,
        markPivot: true,
        markSelected: false,
        markSorted: false,
        markLeftArrow: false,
        markRightArrow: false
      },
      {
        markInitial: true,
        markPivot: false,
        markSelected: false,
        markSorted: false,
        markLeftArrow: false,
        markRightArrow: false
      }
    ],
    listGlance: [
      3,
      4,
      5,
      7,
      8
    ],
    uniqueKeys: [
      2,
      1,
      0,
      3,
      4
    ]
  },
  {
    name: 'Partioning started',
    elementStates: [
      {
        markInitial: true,
        markPivot: false,
        markSelected: false,
        markSorted: true,
        markLeftArrow: false,
        markRightArrow: false
      },
      {
        markInitial: true,
        markPivot: false,
        markSelected: false,
        markSorted: true,
        markLeftArrow: false,
        markRightArrow: false
      },
      {
        markInitial: true,
        markPivot: false,
        markSelected: false,
        markSorted: true,
        markLeftArrow: false,
        markRightArrow: false
      },
      {
        markInitial: true,
        markPivot: true,
        markSelected: false,
        markSorted: false,
        markLeftArrow: false,
        markRightArrow: false
      },
      {
        markInitial: true,
        markPivot: false,
        markSelected: false,
        markSorted: false,
        markLeftArrow: false,
        markRightArrow: false
      }
    ],
    listGlance: [
      3,
      4,
      5,
      7,
      8
    ],
    uniqueKeys: [
      2,
      1,
      0,
      3,
      4
    ]
  },
  {
    name: 'Select left pointer',
    elementStates: [
      {
        markInitial: true,
        markPivot: false,
        markSelected: false,
        markSorted: true,
        markLeftArrow: false,
        markRightArrow: false
      },
      {
        markInitial: true,
        markPivot: false,
        markSelected: false,
        markSorted: true,
        markLeftArrow: false,
        markRightArrow: false
      },
      {
        markInitial: true,
        markPivot: false,
        markSelected: false,
        markSorted: true,
        markLeftArrow: false,
        markRightArrow: false
      },
      {
        markInitial: true,
        markPivot: true,
        markSelected: false,
        markSorted: false,
        markLeftArrow: false,
        markRightArrow: false
      },
      {
        markInitial: true,
        markPivot: false,
        markSelected: false,
        markSorted: false,
        markLeftArrow: true,
        markRightArrow: false
      }
    ],
    listGlance: [
      3,
      4,
      5,
      7,
      8
    ],
    uniqueKeys: [
      2,
      1,
      0,
      3,
      4
    ]
  },
  {
    name: 'Select right pointer',
    elementStates: [
      {
        markInitial: true,
        markPivot: false,
        markSelected: false,
        markSorted: true,
        markLeftArrow: false,
        markRightArrow: false
      },
      {
        markInitial: true,
        markPivot: false,
        markSelected: false,
        markSorted: true,
        markLeftArrow: false,
        markRightArrow: false
      },
      {
        markInitial: true,
        markPivot: false,
        markSelected: false,
        markSorted: true,
        markLeftArrow: false,
        markRightArrow: false
      },
      {
        markInitial: true,
        markPivot: true,
        markSelected: false,
        markSorted: false,
        markLeftArrow: false,
        markRightArrow: false
      },
      {
        markInitial: true,
        markPivot: false,
        markSelected: false,
        markSorted: false,
        markLeftArrow: true,
        markRightArrow: true
      }
    ],
    listGlance: [
      3,
      4,
      5,
      7,
      8
    ],
    uniqueKeys: [
      2,
      1,
      0,
      3,
      4
    ]
  },
  {
    name: 'Compare until right pointer is less than pivot  then swap right and left  pointers',
    elementStates: [
      {
        markInitial: true,
        markPivot: false,
        markSelected: false,
        markSorted: true,
        markLeftArrow: false,
        markRightArrow: false
      },
      {
        markInitial: true,
        markPivot: false,
        markSelected: false,
        markSorted: true,
        markLeftArrow: false,
        markRightArrow: false
      },
      {
        markInitial: true,
        markPivot: false,
        markSelected: false,
        markSorted: true,
        markLeftArrow: false,
        markRightArrow: false
      },
      {
        markInitial: true,
        markPivot: true,
        markSelected: false,
        markSorted: false,
        markLeftArrow: false,
        markRightArrow: false
      },
      {
        markInitial: true,
        markPivot: false,
        markSelected: false,
        markSorted: false,
        markLeftArrow: true,
        markRightArrow: true
      }
    ],
    listGlance: [
      3,
      4,
      5,
      7,
      8
    ],
    uniqueKeys: [
      2,
      1,
      0,
      3,
      4
    ]
  },
  {
    name: 'Right pointer reached the end, this is as far it can go',
    elementStates: [
      {
        markInitial: true,
        markPivot: false,
        markSelected: false,
        markSorted: true,
        markLeftArrow: false,
        markRightArrow: false
      },
      {
        markInitial: true,
        markPivot: false,
        markSelected: false,
        markSorted: true,
        markLeftArrow: false,
        markRightArrow: false
      },
      {
        markInitial: true,
        markPivot: false,
        markSelected: false,
        markSorted: true,
        markLeftArrow: false,
        markRightArrow: false
      },
      {
        markInitial: true,
        markPivot: false,
        markSelected: true,
        markSorted: false,
        markLeftArrow: false,
        markRightArrow: false
      },
      {
        markInitial: true,
        markPivot: false,
        markSelected: false,
        markSorted: false,
        markLeftArrow: true,
        markRightArrow: true
      }
    ],
    listGlance: [
      3,
      4,
      5,
      7,
      8
    ],
    uniqueKeys: [
      2,
      1,
      0,
      3,
      4
    ]
  },
  {
    name: 'Move pivot to its final position',
    elementStates: [
      {
        markInitial: true,
        markPivot: false,
        markSelected: false,
        markSorted: true,
        markLeftArrow: false,
        markRightArrow: false
      },
      {
        markInitial: true,
        markPivot: false,
        markSelected: false,
        markSorted: true,
        markLeftArrow: false,
        markRightArrow: false
      },
      {
        markInitial: true,
        markPivot: false,
        markSelected: false,
        markSorted: true,
        markLeftArrow: false,
        markRightArrow: false
      },
      {
        markInitial: true,
        markPivot: false,
        markSelected: false,
        markSorted: true,
        markLeftArrow: false,
        markRightArrow: false
      },
      {
        markInitial: true,
        markPivot: false,
        markSelected: false,
        markSorted: false,
        markLeftArrow: false,
        markRightArrow: false
      }
    ],
    listGlance: [
      3,
      4,
      5,
      7,
      8
    ],
    uniqueKeys: [
      2,
      1,
      0,
      3,
      4
    ]
  },
  {
    name: 'Sorting Complete!!',
    elementStates: [
      {
        markInitial: true,
        markPivot: false,
        markSelected: false,
        markSorted: true,
        markLeftArrow: false,
        markRightArrow: false
      },
      {
        markInitial: true,
        markPivot: false,
        markSelected: false,
        markSorted: true,
        markLeftArrow: false,
        markRightArrow: false
      },
      {
        markInitial: true,
        markPivot: false,
        markSelected: false,
        markSorted: true,
        markLeftArrow: false,
        markRightArrow: false
      },
      {
        markInitial: true,
        markPivot: false,
        markSelected: false,
        markSorted: true,
        markLeftArrow: false,
        markRightArrow: false
      },
      {
        markInitial: true,
        markPivot: false,
        markSelected: false,
        markSorted: true,
        markLeftArrow: false,
        markRightArrow: false
      }
    ],
    listGlance: [
      3,
      4,
      5,
      7,
      8
    ],
    uniqueKeys: [
      2,
      1,
      0,
      3,
      4
    ]
  }
]

export default mockSteps;