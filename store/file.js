export const state = () => ({
  pdfs: []
})

export const mutations = {
  addPdf(state, file) {
    state.pdfs.push({
      name: file.name,
      date: new Date().toJSON(),
      uid: uuidv4()
    })
  },
  removePdf(state, index) {
    state.pdfs.splice(index, 1)
  }
}

function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = Math.random() * 16 | 0
    const v = c === 'x' ? r : (r & 0x3 | 0x8)
    return v.toString(16)
  })
}
