import { type ChangeEvent, type FC } from 'react'

interface InputProps {
  label?: string
  type?: string
  name: string
  value: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
}

const Input: FC<InputProps> = ({ label, type = 'text', name, value, onChange, placeholder }) => (
  <div style={{ marginBottom: '1rem' }}>
    {label && (
      <label htmlFor={name} style={{ display: 'block', marginBottom: '0.5rem' }}>
        {label}
      </label>
    )}
    <input
      id={name}
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      style={{
        width: '100%',
        padding: '0.5rem',
        border: '1px solid #ccc',
        borderRadius: '4px',
        fontSize: '1rem'
      }}
    />
  </div>
)

export default Input
