'use client';
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const Register = () => {
  const registerSchema = z
    .object({
      firstName: z.string().min(1, { message: 'First Name required' }),
      lastName: z.string().min(1, { message: 'Last Name required' }),
      email: z
        .string()
        .min(1, { message: 'Email is rquired' })
        .email({ message: 'Email id is invalid' }),
      age: z
        .number()
        .min(18, { message: 'You must be at least 18 years old' })
        .max(70, { message: 'Age must be 70 or below' }),
      password: z
        .string()
        .min(1, { message: 'Password required' })
        .min(5, { message: 'Password must atleast 5 characters' }),
      confirmPassword: z
        .string()
        .min(1, { message: 'Confirm Password required' })
        .min(5, { message: 'Confirm Password must atleast 5 characters' }),
    })
    .refine((data) => data.password == data.confirmPassword, {
      message: 'password does not match',
      path: ['confirmPassword'],
    });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
  });

  const registerForm = (data) => {
    console.log('Register form', data);
  };
  return (
    <div className='container'>
      <h1>Create Your Account</h1>
      <form onSubmit={handleSubmit(registerForm)}>
        <div className='form-group'>
          <label>First Name</label>
          <input type='text' {...register('firstName')}></input>
          {errors.firstName && (
            <p className='error'>{errors.firstName.message}</p>
          )}
        </div>

        <div className='form-group'>
          <label>Last Name</label>
          <input type='text' {...register('lastName')}></input>
          {errors.lastName && (
            <p className='error'>{errors.lastName.message}</p>
          )}
        </div>

        <div className='form-group'>
          <label>Email</label>
          <input type='text' {...register('email')}></input>
          {errors.email && <p className='error'>{errors.email.message}</p>}
        </div>

        <div className='form-group'>
          <label>Age</label>
          <input type='number' {...register('age', { valueAsNumber: true })} />
          {errors.age && <p className='error'>{errors.age.message}</p>}
        </div>

        <div className='form-group'>
          <label>Password</label>
          <input type='text' {...register('password')}></input>
          {errors.password && (
            <p className='error'>{errors.password.message}</p>
          )}
        </div>

        <div className='form-group'>
          <label>Confirm Password</label>
          <input type='text' {...register('confirmPassword')}></input>
          {errors.confirmPassword && (
            <p className='error'>{errors.confirmPassword.message}</p>
          )}
        </div>

        <button type='submit' className='submit-btn'>
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
