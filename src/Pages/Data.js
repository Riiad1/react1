import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card'
import '../Components/data.scss'
import Footer from './Footer';

const Data = () => {
    const [getapi, setGetapi] =useState ([]);
    const fetchData = async () => {
        try {
            const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita');
            const data = await response.json();
            setGetapi(data.drinks);
        }catch (error){
            console.log(error)
        }
    }
    useEffect(() => {
        fetchData();
    }, [])
  return (
    <div className='bodi'>
        {
            getapi && getapi.map((api) => {
                return (
                    <Card key={api.idDrink} className='cards'>
                        <Card.Body >{api.strDrink}</Card.Body>
                    </Card>
                )
            })
        }

    </div>
  );
};

export default Data;
