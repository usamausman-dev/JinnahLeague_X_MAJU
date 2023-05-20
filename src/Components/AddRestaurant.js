import React, { useState, useEffect } from 'react'
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import axios from 'axios';
import { useRouter } from "next/router";
import { useSession } from 'next-auth/react'


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function AddRestaurant({ stddataid }) {



    const router = useRouter();


    const [open, setOpen] = useState(false);
    const [RestaurantName, setRestaurantName] = useState('');
    const [Description, setDescription] = useState('');
    const [Cusine, setCusine] = useState("")
    const [RestaurantImage, setRestaurantImage] = useState("")
    const [Address, setAddress] = useState("")
    const [Tables, setTables] = useState("")
    const { data: session, status } = useSession()



    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    function AddRestaurantHandler() {
        let payload = {
            name: RestaurantName,
            description: Description,
            address: Address,
            cuisine: Cusine,
            photo: RestaurantImage,
            admin: session.user.email,
            numOfTable: Tables
        }

        console.log(payload)

        axios.post('/api/CreateRestaurant', payload)
            .then(function (response) {
                alert("Added")
            })
            .catch(function (error) {
                console.log(error.response);
            });




    }

    return (
        <div>
            <button onClick={handleClickOpen} className='bg-red-600 text-white px-10 py-3 rounded-lg'> + <span className='sm:hidden md:hidden lg:inline-block'>  Add Restaurant </span></button>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
                maxWidth="xl"
                fullScreen={true}
            >
                <DialogTitle>
                    <div className='flex   justify-between'>
                        <h1 className='text-xl'>Add Restaurant</h1>
                        <button onClick={handleClose}>x</button>

                    </div>
                </DialogTitle>



                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description" component="span">

                        <div className='grid grid-cols-1 gap-5'>
                            <div className='flex flex-col  '>
                                <label htmlFor="name">Restaurant Name</label>
                                <input required value={RestaurantName} onChange={(e) => setRestaurantName(e.target.value)} type="text" name="Restaurantname" id="Restaurantname" placeholder='Restaurant Name' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5" />
                            </div>
                            <div className='flex flex-col  '>
                                <label htmlFor="name">Description</label>
                                <textarea required value={Description} onChange={(e) => setDescription(e.target.value)} type="text" name="Description" id="Description" placeholder='Description' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5" />
                            </div>

                            <div className='flex flex-col  '>
                                <label htmlFor="name">Cusine</label>
                                <input required value={Cusine} onChange={(e) => setCusine(e.target.value)} type="text" name="Cusine" id="Cusine" placeholder='Cusine' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5" />
                            </div>

                            <div className='flex flex-col  '>
                                <label htmlFor="name">Restaurant Image</label>
                                <input required value={RestaurantImage} onChange={(e) => setRestaurantImage(e.target.value)} type="text" name="RestaurantImage" id="RestaurantImage" placeholder='Restaurant Image URL' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5" />
                            </div>

                            <div className='flex flex-col  '>
                                <label> Address</label>
                                <input required value={Address} onChange={(e) => setAddress(e.target.value)} type="text" name="Address" id="Address" placeholder='Address ' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5" />
                            </div>

                            <div className='flex flex-col  '>
                                <label> Tables</label>
                                <input type="number" required value={Tables} onChange={(e) => setTables(e.target.value)} name="Tables" id="Tables" placeholder='Tables ' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5" />
                            </div>





                            <button onClick={AddRestaurantHandler} className='bg-red-600 px-3 py-2 rounded text-white'>Add Restaurant</button>
                        </div>
                    </DialogContentText>
                </DialogContent>
            </Dialog>
        </div>
    );
}