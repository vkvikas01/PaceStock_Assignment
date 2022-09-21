import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class SignUp extends Component {
    render() {
        return (

          <div className="container">
    <div className="row">
      <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div className="card border-0 shadow rounded-3 my-5">
          <h3 className='text-center'>Welcome To Daily News</h3>
          <div className="card-body p-4 p-sm-5">
            <h1 className="card-title text-center mb-4 fw-light fs-5"><h2>Sign In</h2></h1>
            <form>
              <div className="form-floating mb-3">
                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                <label htmlFor="floatingInput">Email address</label>
              </div>
              <div className="form-floating mb-3">
                <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
                <label htmlFor="floatingPassword">Password</label>
              </div>

              <div class="row mb-4">
    <div class="col d-flex justify-content-center">
     
      <div class="form-check">
        <Link>Create account</Link>
      </div>
    </div>

    <div class="col">
      
      <Link>Forgot password?</Link>
      <a href="#!"></a>
    </div>
  </div>
              <div className="d-grid text-center">
              <button type="button" class="btn btn-success text-white"><Link className="nav-link text-white" to="/blog">Sign in</Link></button>
               
              </div>
              <hr className="my-4 "/>
              <div className="d-grid mb-2 text-center">
              <button type="button" class="btn btn-danger"><Link className="nav-link text-white" to="/blog">Login With Google</Link></button>
                
              </div>
              <div className="d-grid text-center">
              <button type="button" class="btn btn-info"><Link className="nav-link text-dark" to="/blog">Login with Github</Link></button>
              
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>



        )
    }
}