const defaultState = {
  siteName: 'Laravel/Vue Starter Kit',
  note: {
    id: null,
    text: ''
  },
  newNote: {
    title: 'New note',
    text: ''
  },
  notes: [
    {
      id: 1,
      title: 'Snippet 1',
      text: "# Snippet title \n I am using __markdown__. \n `some code`"
    },
    {
      id: 2,
      title: 'Snippet 2',
      text: 'Snippet 2 Body'
    }
  ]
}

export default defaultState
