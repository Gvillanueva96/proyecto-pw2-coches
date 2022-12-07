import React from 'react'
import noticia1 from './../assets/images/car1.jpg';
import noticia2 from './../assets/images/car2.jpg'
import noticia3 from './../assets/images/car3.jpg'
import './Noticias.css'

export default function Noticias() {
    return (
        <section id="noticias" className='pad-top'>
            <div className="container">
                <div className="row">
                    <article className="col">
                        <div className="imagen"><img className="img-responsive" src={noticia1} /></div>
                        <h4><a href='#'>PARA LA ALTA COMPETICION</a></h4>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae, sapiente explicabo tenetur asperiores perspiciatis voluptas accusamus minus ipsum dolores reiciendis, sequi nam quod distinctio harum numquam earum alias tempora molestiae?</p>
                    </article>
                    <article className="col">
                        <div className="imagen"><img className="img-responsive" src={noticia2} /></div>
                        <h4><a href='#'>UN SUV PARA LA FAMILIA</a></h4>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia, id ab. Facilis illum libero natus fugit nesciunt deserunt, consequatur enim adipisci ducimus consequuntur tempora, odio suscipit aliquid error recusandae obcaecati.</p>
                    </article>
                    <article className="col">
                        <div className="imagen"><img className="img-responsive" src={noticia3} /></div>
                        <h4><a href='#'>GRAN TURISMO DE CLASE</a></h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque consequatur animi, velit quae quis laudantium inventore vitae similique iure, ratione corrupti commodi ex sapiente, fugit error! Accusantium amet vero inventore?</p>
                    </article>
                </div>
            </div>
        </section>
    )
}
