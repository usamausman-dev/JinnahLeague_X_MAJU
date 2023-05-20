import React, { useState, useEffect } from 'react'
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import axios from 'axios';
import { useRouter } from "next/router";
import { useSession } from 'next-auth/react'
import RestaurantCard from './RestaurantCard';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function UserRestaurant() {


    const [restaurants, setRestaurants] = useState([])
    const router = useRouter();
    const { data: session, status } = useSession()
    const [open, setOpen] = useState(false);

    const payload = {
        admin: session.user.email
    }


    const handleClickOpen = () => {

        axios.post('/api/MyRestaurant', payload)
            .then(function (response) {
                setRestaurants(response.data.data)
                setOpen(true);
            })
            .catch(function (error) {
                console.log(error.response);
            });
    };

    const handleClose = () => {
        setOpen(false);
    };





    return (
        <div>
            <button onClick={handleClickOpen} className='bg-red-600 text-white mr-2 px-10 py-3 rounded-lg'> <span className=' lg:inline-block'>  My Restaurant </span></button>
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
                    <div className='flex  mt-10  ml-10 justify-between'>
                        <h1 className='text-2xl font-bold'>My Restaurant</h1>
                        <button onClick={handleClose}>x</button>

                    </div>
                </DialogTitle>



                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description" component="span">
                        <div className='grid grid-cols-4 px-32 gap-10 mb-20 mt-10'>
                            {
                                restaurants.length > 0 && restaurants.map((v, k) => <RestaurantCard key={k} restaurantData={v} />)
                            }


                        </div>
                    </DialogContentText>
                </DialogContent>
            </Dialog>
        </div>
    );

}


