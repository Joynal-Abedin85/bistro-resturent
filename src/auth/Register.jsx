import React, { useContext } from 'react';
import { Authcontext } from './Authprovider';
import { NavLink } from 'react-router-dom';
import { useForm} from "react-hook-form"

const Register = () => {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  const {createuser} = useContext(Authcontext)

  const onSubmit = (data) => {
    console.log(data)
    createuser(data.email, data.password)
    .then(result => {
      console.log(result.user)
    })
  }
    return (
        <div className="hero relative top-20 bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">register now!</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleSubmit(onSubmit)} className="card-body">
      <div className="form-control">
          <label className="label">
            <span className="label-text">name</span>
          </label>
          <input type="text" {...register("name")} name='name' placeholder="name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email"  {...register("email")} name='email' placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" {...register("password")} name='password' placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        
        <div>
        <h2>if you  have account <NavLink className='text-amber-500' to='/login' >login</NavLink>  </h2>
        </div>
        
        <div className="form-control mt-6">
          <button  className="btn btn-primary">Login</button>
        </div>
        
      </form>
      
    </div>
  </div>
</div>
    );
};

export default Register;