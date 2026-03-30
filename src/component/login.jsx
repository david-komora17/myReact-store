import {useState} from 'react'

export default function login () {
    const [formData, setFormData] = useState({email : "", password : ""})
    const [error, setError] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!formData.email || !formData.password) {
            setError("Both fields are required!")
            return
        }
        setError("")
        console.log("Logging in with:", formData)
    }

  return (
    <div className='max-w-md mx-auto mt-10 p-6 border rounded shadow'>
        <h2 className='text-2xl font-bold mb-4'>login</h2>
            <form onSubmit= {handleSubmit} className='space-y-4'>
                <div>
                    <label>Email</label>
                    <input type = "email" className='w-full border p-2 rounded' value = {formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})}/>
                </div>
                {error && <p className='text-red-500 text-sm'>{error}</p>}
                <button type='submit' className='w-full'>Sign in</button>
            </form>
    </div>
  )
}
