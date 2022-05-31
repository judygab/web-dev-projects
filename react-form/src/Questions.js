export const questions = [
  {
    section: 1,
    items: [
      {
        label: 'username',
        type: 'text'
      },
      {
        label: 'password',
        type: 'password'
      }
    ]
  },
  {
    section: 2,
    items: [
      {
        label: 'Street Address',
        type: 'text'
      },
      {
        label: 'City',
        type: 'text'
      },
      {
        label: 'State',
        type: 'select',
        options: [ 'State 1', 'State 2']
      }
    ]
  },
  {
    section: 3,
    items: [
      {
        label: 'If you are ready to submit please press `Submit`',
        type: 'information'
      }
    ]
  }
]
