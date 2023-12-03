import React from 'react'

function LoginForm() {
  return (
      <div class="container-fluid">
          <form action="">
              <input type="email" class="form-control mb-3" id="e1" placeholder='Email' />
               <input type="password" class="form-control mb-3" id="e2" placeholder="Password" />
               <button type="submit" class="btn btn-primary">Sign in</button>
          </form>
    </div>

  )
}

export default LoginForm
