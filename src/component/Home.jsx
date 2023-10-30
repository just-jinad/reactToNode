import React from 'react'

const Home = () => {
  return (
    <>
        <div className='cor'>
    <div id="carouselExample" class="carousel slide">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://img.freepik.com/free-photo/group-five-african-college-students-spending-time-together-campus-university-yard-black-afro-friends-studying-education-theme_627829-6007.jpg?size=626&ext=jpg&ga=GA1.1.930197615.1698227208&semt=sph" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://img.freepik.com/premium-photo/happy-students-with-diplomas-outdoors-graduation-ceremony_495423-58230.jpg?size=626&ext=jpg&ga=GA1.1.930197615.1698227208&semt=sph" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://img.freepik.com/premium-photo/education-high-school-university-learning-people-concept-group-international-students-talking-lecture-hall_380164-148687.jpg?size=626&ext=jpg&ga=GA1.1.930197615.1698227208&semt=sph" className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
        </div>
    </>
  )
}

export default Home