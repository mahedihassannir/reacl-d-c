import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Home = () => {


    let [data, Setdata] = useState([])

    useState(() => {


        fetch(`http://localhost:5000/users`)

            .then(res => res.json())
            .then(data => Setdata(data))

    }, [])

    let handleCheck = (id) => {
        console.log(id);




    }

    return (
        <div className='w-full h-screen bg-gray-200 '>


            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src="https://i.ibb.co/JRB47KQ/4.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">Box Office News!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>

            {/* here is about section  */}

            <div className='mt-10 mb-10'>
                <h1 className='text-3xl font-bold text-center mt-5'>About us</h1>
                <h3 className='w-1/2 text-center flex mx-auto mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur molestiae, explicabo commodi ullam adipisci alias ratione odio earum consectetur enim eaque similique praesentium, officiis debitis doloribus eligendi non repellendus mollitia!</h3>

            </div>

            <div className='w-full h-screen mt-10  '>

                <div className='grid w-11/12 mx-auto justify-center gap-5  grid-cols-3'>

                    {
                        data.map(res => <div key={res._id}>

                            <div className="card w-96 bg-base-100 shadow-xl">
                                <figure className="px-10 pt-10">
                                    <img src={res.img} alt="Shoes" className="rounded-xl" />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title">{res.title}</h2>
                                    <p>{res.description}</p>
                                    <div className="card-actions">
                                        <Link to={`/user/${res._id}`}>

                                            <button onClick={() => handleCheck(res._id)} className="btn btn-primary">Buy Now</button>

                                        </Link>
                                    </div>
                                </div>
                            </div>


                        </div>)
                    }
                </div>
            </div>

        </div>
    );
};

export default Home;