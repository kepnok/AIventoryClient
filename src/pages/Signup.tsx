import React, { ChangeEvent, FC, FormEvent, useState } from 'react'
import Input from '../components/Input'
import { Button } from '../components/Button'

interface SignupForm {
  username: string
  password: string
  email: string
  warehouseId: string
}

const Signup: FC = () => {
  const [form, setForm] = useState<SignupForm>({
    username: '',
    password: '',
    email: '',
    warehouseId: ''
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    console.log('Signup data:', form)
  }

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: '#f7f7f7'
      }}
    >
      <div
        style={{
          maxWidth: '400px',
          width: '100%',
          backgroundColor: '#fff',
          padding: '2rem',
          borderRadius: '8px',
          boxShadow: '0 0 10px rgba(0,0,0,0.1)'
        }}
      >
        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem', textAlign: 'center' }}>
          Create an account
        </h2>
        <form onSubmit={handleSubmit}>
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
          <Button type="submit" size="md" variant="primary" text="Sign Up" />
        </form>
      </div>
    </div>
  )
}

export default Signup
