import React from 'react'

function Patient() {

    // const value = localStorage.getItem('currentUser');
    const user = JSON.parse(localStorage.getItem('currentUser'));
    console.log(user);



  return (
      <div>
          <section>
              <div class="container py-5">
                  {/* <div class="row">
                      <div class="col">
                          <nav aria-label="breadcrumb" class="bg-light rounded-3 p-3 mb-4">
                              <ol class="breadcrumb mb-0">
                                  <li class="breadcrumb-item"><a href="#">Home</a></li>
                                  <li class="breadcrumb-item"><a href="#">User</a></li>
                                  <li class="breadcrumb-item active" aria-current="page">User Profile</li>
                              </ol>
                          </nav>
                      </div>
                  </div> */}

                  <div class="row">
                      <div class="col-lg-4">
                          <div class="card mb-4">
                              <div class="card-body text-center">
                                  <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" alt="avatar"
                                      class="rounded-circle img-fluid" style={{ width: "130px" }} />
                                  <h5 class="my-3">{user.name}</h5>
                                  <p class="text-muted mb-1">{user.connumber}</p>
                                  <p class="text-muted mb-4">{user.gender}</p>
                                  <div class="d-flex justify-content-center mb-2">
                                      <button type="button" class="btn btn-primary">Follow</button>
                                      <button type="button" class="btn btn-outline-primary ml-3">Message</button>
                                  </div>
                              </div>
                          </div>

                      </div>
                      <div class="col-lg-8">
                          <div class="card mb-4">
                              <div class="card-body">
                                  <div class="row">
                                      <div class="col-sm-3">
                                          <p class="mb-0">Full Name</p>
                                      </div>
                                      <div class="col-sm-9">
                                          <p class="text-muted mb-0">{user.name}</p>
                                      </div>
                                  </div>
                                  <hr />
                                  <div class="row">
                                      <div class="col-sm-3">
                                          <p class="mb-0">Email</p>
                                      </div>
                                      <div class="col-sm-9">
                                          <p class="text-muted mb-0">{ user.email}</p>
                                      </div>
                                  </div>
                                  <hr />
                                  <div class="row">
                                      <div class="col-sm-3">
                                          <p class="mb-0">Mobile</p>
                                      </div>
                                      <div class="col-sm-9">
                                          <p class="text-muted mb-0">{user.connumber}</p>
                                      </div>
                                  </div>
                                  <hr />
                                  <div class="row">
                                      <div class="col-sm-3">
                                          <p class="mb-0">Notes</p>
                                      </div>
                                      <div class="col-sm-9">
                                          <p class="text-muted mb-0">{ user.notes}</p>
                                      </div>
                                  </div>
                                  <hr />
                                  <div class="row">
                                      <div class="col-sm-3">
                                          <p class="mb-0">Address</p>
                                      </div>
                                      <div class="col-sm-9">
                                          <p class="text-muted mb-0">{ user.address}</p>
                                      </div>
                                      
                                  </div>
                                  <hr />
                                  <div class="row">
                                      <div class="col-sm-3">
                                          <p class="mb-0">Account Created On</p>
                                      </div>
                                      <div class="col-sm-9">
                                          <p class="text-muted mb-0">{user.createdAt}</p>
                                      </div>

                                  </div>
                              </div>
                          </div>
                          <div class="row">

                          </div>
                      </div>
                  </div>
              </div>
          </section>
      </div>
  )
}

export default Patient