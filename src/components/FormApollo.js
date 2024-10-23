'use client';

import { useForm } from 'react-hook-form';

const MyForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log('apolo form data', data);
  };

  return (
    <div className='w-2/4 bg-white p-10 m-6'>
      <form onSubmit={handleSubmit(onSubmit)} className='w-full'>
        <div className='form-group'>
          <label
            htmlFor='name'
            className='block text-sm font-medium text-gray-700'
          >
            Name
          </label>
          <input
            type='text'
            className='form-control mt-1 px-3 py-2 bg-white border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-indigo-500 focus:ring-width-1'
            id='name'
            {...register('name', { required: true })}
          />
          {errors.name && (
            <small className='text-danger text-red-500 block text-xs'>
              Name is required
            </small>
          )}
        </div>
        <div className='form-group'>
          <label
            htmlFor='email'
            className='block text-sm font-medium text-gray-700'
          >
            Email
          </label>
          <input
            type='email'
            className='form-control mt-1 px-3 py-2 bg-white border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-indigo-500 focus:ring-width-1'
            id='email'
            {...register('email', {
              required: true,
              pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            })}
          />
          {errors.email && (
            <small className='text-danger'>Invalid email address</small>
          )}
        </div>
        <div className='form-group'>
          <label
            htmlFor='phone'
            className='block text-sm font-medium text-gray-700'
          >
            Phone
          </label>
          <input
            type='tel'
            className='form-control mt-1 px-3 py-2 bg-white border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-indigo-500 focus:ring-width-1'
            id='phone'
            {...register('phone', { required: true, pattern: /^\d{10}$/ })}
          />
          {errors.phone && (
            <small className='text-danger'>Invalid phone number</small>
          )}
        </div>
        <div className='form-group'>
          <label
            htmlFor='message'
            className='block text-sm font-medium text-gray-700'
          >
            Message
          </label>
          <textarea
            className='form-control mt-1 px-3 py-2 bg-white border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-indigo-500 focus:ring-width-1'
            id='message'
            rows='3'
            {...register('message', { required: true })}
          ></textarea>
          {errors.message && (
            <small className='text-danger'>Message is required</small>
          )}
        </div>
        <div className='form-group'>
          <label
            htmlFor='gender'
            className='block text-sm font-medium text-gray-700'
          >
            Gender
          </label>
          <div className='form-check'>
            <input
              type='radio'
              className='form-check-input'
              id='gender-male'
              name='gender'
              value='male'
              {...register('gender', { required: true })}
            />
            <label className='form-check-label' htmlFor='gender-male'>
              Male
            </label>
          </div>
          <div className='form-check'>
            <input
              type='radio'
              className='form-check-input'
              id='gender-female'
              name='gender'
              value='female'
              {...register('gender', { required: true })}
            />
            <label className='form-check-label' htmlFor='gender-female'>
              Female
            </label>
          </div>
          {errors.gender && (
            <small className='text-danger'>Gender is required</small>
          )}
        </div>
        <div className='form-group'>
          <label
            htmlFor='preferredTime'
            className='block text-sm font-medium text-gray-700'
          >
            Preferred Time
          </label>
          <select
            className='form-control'
            id='preferredTime'
            {...register('preferredTime', { required: true })}
          >
            <option value=''>Select a time</option>
            <option value='morning'>Morning</option>
            <option value='afternoon'>Afternoon</option>
            <option value='evening'>Evening</option>
          </select>{' '}
           
          {errors.preferredTime && (
            <small className='text-danger'>Preferred time is required</small>
          )}
        </div>
        <div className='form-group form-check'>
          <input
            type='checkbox'
            className='form-check-input'
            id='termsAndConditions'
            {...register('termsAndConditions', { required: true })}
          />
          <label
            htmlFor='termsAndConditions'
            className='block text-sm font-medium text-gray-700'
          >
            I agree to the terms and conditions
          </label>
          {errors.termsAndConditions && (
            <small className='text-danger'>
              Please agree to the terms and conditions
            </small>
          )}
        </div>
        <button
          type='submit'
          className='btn btn-primary px-4 py-2 bg-indigo-500 hover:bg-indigo-700 text-white rounded shadow-sm'
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default MyForm;
