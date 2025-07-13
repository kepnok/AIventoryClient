import React, { ChangeEvent, FC, FormEvent, useState } from 'react'
import Input from '../components/Input'
import { Button } from '../components/Button'

interface LoginForm {
  username: string
  password: string
}

const Login: FC = () => {
  const [form, setForm] = useState<LoginForm>({ username: '', password: '' })

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    console.log('Login data:', form)
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
          Log in to your account
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
          <div style={{ width: '100%' }}>
            <Button
              type="submit"
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

export default Login
