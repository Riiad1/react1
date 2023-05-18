import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../Components/Userbio.scss';

const User = () => {
    const [userData, setUserData] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await fetch(`https://reqres.in/api/users/${id}`);
                const data = await response.json();
                setUserData(data.data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchUser();
    }, [id]);

    return (
        <div className='biographi'>
            {userData ? (
                <div>
                    <h2>{userData.first_name} {userData.last_name}</h2>
                    <p><img src={userData.avatar} alt={userData.first_name} /></p>
                    <span>{userData.email}</span>
                    <p>He/She was born in 1995, after finishing his studies in gastronomy,</p>
                    <p>he started his career as a waiter. Over time, he advanced to become</p>
                    <p>the general manager of a prestigious hotel, leading a large kitchen</p>
                    <p>staff and creating a successful team to provide the best gastronomic</p>
                    <p>experience to guests.</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default User;
