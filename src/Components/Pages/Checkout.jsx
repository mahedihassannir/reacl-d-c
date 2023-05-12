import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {

    let data = useLoaderData()

    let { title, _id, img, description } = data
    console.log(_id);

    // let deleP = () => {


    //     fetch(`http://localhost:5000/users/${_id}`, {
    //         method: "DELETE"
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data);
    //         })

    // }

    let handleFrm = (e) => {
        e.preventDefault()

        let form = e.target

        let name = form.name.value
        let number = form.mobile.value


        let total = { name, number, title, _id, img, description }

        console.log(total);

    }



    return (
        <div>
            <div className="overflow-x-auto w-full">
                <table className="table w-11/12 mx-auto rounded-md">
                    {/* head */}
                    <thead>
                        <tr>

                            <th>Name</th>
                            <th>title</th>
                            <th>Favorite Color</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>

                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img className='h-[100px] w-[100px]' src={img} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{title}</div>
                                        <div className="text-sm opacity-50"></div>
                                    </div>
                                </div>
                            </td>
                            <td>

                                <br />
                                <span className="badge badge-ghost badge-sm">{description.slice(0, 100)}</span>
                            </td>
                            <td></td>

                        </tr>



                    </tbody>

                </table>
            </div>
            <div>
                <form onSubmit={handleFrm}>


                    <input name='name' placeholder='name' className='block py-3 border-2  ml-10' type="text" />

                    <input name='mobile' className='block py-3 border-2  ml-10' placeholder='mobile' type="text" />

                    <input type="submit" value="order" className='py-4 ml-10 cursor-pointer ' id="" />

                </form>
            </div>
        </div>
    );
};

export default Checkout;