import { type ChangeEvent, type FC, type FormEvent, useState } from 'react'
import axios from 'axios'
import Input from '../components/Input'
import { Button } from '../components/Button'
import { useNavigate } from 'react-router-dom'

interface LoginForm {
  username: string
  password: string
}

export const Login: FC = () => {

  const navigate = useNavigate();

  const [form, setForm] = useState<LoginForm>({ username: '', password: '' })

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    try {
      const res = await axios.post('http://localhost:3000/api/signin', form)
      const token = res.data.token
      localStorage.setItem('token', token);
      console.log('Login successful, token saved.')
      
      navigate("/dashboard");
      
    } catch (err) {
      console.error('Login failed:', err)
    }
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Log in to your account</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            label="Username"
            name="username"
            value={form.username}
            onChange={handleChange}
            placeholder="Enter your username"
          />
          <Input
            label="Password"
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Enter your password"
          />
          <div className="pt-2">
            <Button
              size="md"
              variant="primary"
              text="Sign In"
            />
          </div>
        </form>
      </div>
    </div>
  )
}


