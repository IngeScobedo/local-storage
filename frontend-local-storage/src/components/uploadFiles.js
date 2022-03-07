import axios from 'axios'

const Upload = () => {
  const user = JSON.parse(localStorage.getItem('token'))

  const handleUpload = (e) => {
    e.preventDefault()

    console.log({
      files: e.target.file.files[0]
    })

    const formData = new FormData()
    formData.append('file', e.target.file.files[0])

    axios.post('http://localhost:5000/uploads', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        id: `${user}`
      }
    })
  }

  return (
    <form onSubmit={handleUpload}>
      <label
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        htmlFor="file"
      >
        Upload file
      </label>
      <input
        className="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
        aria-describedby="user_avatar_help"
        id="file"
        type="file"
      />
      <button>Upload File</button>
    </form>
  )
}

export default Upload
