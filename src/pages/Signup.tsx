import { type ChangeEvent, type FC, type FormEvent, useState } from 'react'
import axios from 'axios'
import Input from '../components/Input'
import { Button } from '../components/Button'
import { useNavigate } from 'react-router-dom';

interface SignupForm {
  username: string;
  password: string;
  email: string;
  warehouseId: string;
}

export const Signup: FC = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState<SignupForm>({
    username: '',
    password: '',
    email: '',
    warehouseId: ''
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
  const { name, value } = e.target;

  setForm(prev => ({
    ...prev,
    [name]: name === "warehouseId" ? Number(value) : value
  }));
};


  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    try {
      const res = await axios.post('http://localhost:3000/api/signup', form)
      console.log('Signup successful:', res.data)
      alert("signed up scuessfully");

      navigate("/signin");
      
    } catch (err) {
      console.error('Signup failed:', err)
      alert("signup failed")
    }
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Create an account</h2>
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
          <Input
            label="Email"
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
          <Input
            label="Warehouse ID"
            name="warehouseId"
            value={form.warehouseId}
            onChange={handleChange}
            placeholder="Enter warehouse ID"
          />
          <div className="pt-2">
            <Button size="md" variant="primary" text="Sign Up" />
          </div>
        </form>
      </div>
    </div>
  )
}

