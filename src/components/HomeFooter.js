import React from 'react'

const Footer = () => (
  <>
    <hr className="footer-hr" />
    <footer className="bg-secondary bg-gradient page-footer font-small pt-4">
      <div className="container-fluid text-center text-md-left">
        <div className="row">
          <div className="col-md-6 mt-md-0 mt-3">
            <h5 className="text-uppercase">Footer Content</h5>
            <p className='text-dark'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              cumque molestias sapiente rerum iste, expedita tempora! Expedita
              facere magni laboriosam fuga laborum?
            </p>
          </div>

          <hr className="clearfix w-100 d-md-none pb-0" />

          <div className="col-md-3 mb-md-0 mb-3">
            <h5 className="text-uppercase text-warning">terms</h5>
            <p className='text-dark'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            sint maiores iure quia fugiat, asperiores, praesentium accusantium,
            ea enim quis tempore? Et veniam porro similique maxime facilis ullam
            a sunt.
              </p> 
            {/* <ul className="list-unstyled">
            <li>
              <a href="#!">Link 1</a>
            </li>
            <li>
              <a href="#!">Link 2</a>
            </li>
            </ul> */}
          </div>

          <div className="col-md-3 mb-md-0 mb-3">
            <h5 className="text-uppercase text-warning">map</h5>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi
            alias, asperiores qui dolores ut odit aliquid quam quaerat soluta
            nisi nam eveniet eaque. Necessitatibus in, consequatur eius est
            voluptates cupiditate?
            {/* <ul className="list-unstyled">
              <li>
                <a href="#!">Link 3</a>
              </li>
              <li>
                <a href="#!">Link 4</a>
              </li>
            </ul> */}
          </div>
        </div>
      </div>

      <div className="footer-copyright text-center py-3">
        <span>© 2022 Copyright: </span> 
        <a className='text-info fw-bolder' href="https://github.com/MnrGDKL" target="_blank" rel="noreferrer">Munir G.</a>
      </div>
    </footer>
  </>
)

export default Footer
