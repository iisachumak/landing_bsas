import React from 'react'

const Asesoramiento = () => {
  return (
    <div class="container text-center">
      <div class="row m-3">
        <div class="col-sm-12 col-md-6 m-1">
          <button type="button" className="btn-verde btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Quiero Asesoramiento</button>
          <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="exampleModalLabel">New message</h1>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <form>
                    <div class="mb-3">
                      <label for="recipient-name" class="col-form-label">Recipient:</label>
                      <input type="text" class="form-control" id="recipient-name" />
                    </div>
                    <div class="mb-3">
                      <label for="message-text" class="col-form-label">Message:</label>
                      <textarea class="form-control" id="message-text"></textarea>
                    </div>
                  </form>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="button" class="btn btn-primary">Send message</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-12 col-md-4 m-1">
          <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              Cilindradas
            </button>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">0 CC - 124 CC</a></li>
              <li><a class="dropdown-item" href="#">125 CC - 200 CC</a></li>
              <li><a class="dropdown-item" href="#">201 CC - 250 CC</a></li>
              <li><a class="dropdown-item" href="#">251 CC - 500 CC</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Asesoramiento