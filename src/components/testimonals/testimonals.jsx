import React from 'react'
import './testimonals.css'
import Avatar from '../../asset/avatar.png'

const data = [
  {
    avatar: Avatar,
    name: "Tina Show",
    review : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora at distinctio est fugit animi esse facere corporis, veritatis, tenetur corrupti aliquid delectus quo. Quas, doloremque sequi? Quis consequuntur illum quos?'
  },
  {
    avatar: Avatar,
    name: "Shate Wale",
    review : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora at distinctio est fugit animi esse facere corporis, veritatis, tenetur corrupti aliquid delectus quo. Quas, doloremque sequi? Quis consequuntur illum quos?'
  },
  {
    avatar: Avatar,
    name: "Kwame Despite",
    review : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora at distinctio est fugit animi esse facere corporis, veritatis, tenetur corrupti aliquid delectus quo. Quas, doloremque sequi? Quis consequuntur illum quos?'
  },
  {
    avatar: Avatar,
    name: "Nana Ama Mc Brown",
    review : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora at distinctio est fugit animi esse facere corporis, veritatis, tenetur corrupti aliquid delectus quo. Quas, doloremque sequi? Quis consequuntur illum quos?'
  },
]

const testimonals = () => {
  return (
    <section id='testimonals_section'>
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>
      <div className="container testimonals_container">
      {
        data.map(({avatar, name, review}, index) => {
          return (
            <article className="testimonal">
            <div className="clients_avatar">
              <img className='client-img' src = { Avatar } alt="" />
              <h5 className="class_name">{name}</h5>
              <small className="class_review"> {review} </small>
            </div>
            </article>
          )
        })
      }
        
      </div>
    </section>
  )
}

export default testimonals