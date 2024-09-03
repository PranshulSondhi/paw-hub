
import './Search.css';
import { Link } from 'react-router-dom';
import img10 from './searchpic/pitcher.jpg';
import charlie from './searchpic/charlieBeagle.jpg';
import toby from './searchpic/tobyBeagle.jpg';
import winston from './searchpic/winstonBeagle.avif';
import coco from './searchpic/cocoLabrador.jpg';
import max from './searchpic/maxLabrador.jpg';
import cooper from './searchpic/cooperLabrador.jpeg';
import teddy from './searchpic/teddyLabrador.jpg';
import benji from './searchpic/benjiPitbull.jpg';
import nola from './searchpic/nolaPitbull.jpg';
import snoopy from './searchpic/snoopyPitbull.jpg';
import archie from './searchpic/archiePitbull.jpg';
import apricot from './searchpic/apricotGoldenretriever.jpg';
import bella from './searchpic/bellaGoldenretrieve.jpg';
import Bear from './searchpic/BearGoldenretriever.jpg';
import Cherry from './searchpic/cherryAmericanbully.jpg';
import Macy from './searchpic/macyAmericambully.jpg';
import oliver from './searchpic/oliverGermanshepherd.avif';
import avin from './searchpic/avinGermanshephard.jpg';
import Jack from './searchpic/jackPersiancat.jpg';
import Maisy from './searchpic/MaisyPersiancat.jpg';
import Ellie from './searchpic/ElliePersiancat.jpg';
import Max from './searchpic/MaxSiamese.jpeg';
import Bailey from './searchpic/baileySiamese.jpg';
import Georgia from './searchpic/GeorgiaSiamese.jpg';
import Milo from './searchpic/MiloMainecoon.jpg';
import Piper from './searchpic/PiperMainecoon.avif';
import Charlie from './searchpic/charlieShorthair.jpeg';
import Leo from './searchpic/leoSphynx.jpg';
import aster from './searchpic/asterShorthair.jpg';
import oreo from './searchpic/oreoSphynx.jpg';
import Maple from './searchpic/MapleShorthair.jpg';
import Ivy from './searchpic/ivyMainecoon.jpg';
import Andy from './searchpic/AndySphinx.jpg';


//   return (
//     <div className='full'>
      // <ul className="navbarhome">
      // <li className="empty"></li>
      // <li><Link className="li" to='/login'>Login</Link></li>
      // <li><Link className="li" to='/sign'>Sign in </Link></li>
      // <li><Link className="li" to='/eco'>Shopping</Link></li>
      // <b><li><Link className="li" to='/search'>Adopt Now</Link></li></b>
      // <li><Link className="li" to='/'>Home</Link></li>
      // </ul>
//       <center><h1 className='sdhead'>Search Your Furry Friend!</h1></center>
//       <input className='searchbar'
//         style={{color:'black',fontSize:20,width:1100,marginLeft:210}}
//         type="text"
//         placeholder="Search breed..."
//         value={searchQuery}
//         onChange={handleSearchChange}
//       />
//       <select className='option' style={{color:'black',fontSize:20,width:250,marginLeft:210,marginBottom:50}} value={filterType} onChange={handleFilterChange}>
//         <option>Select option</option>
//         <option value="dog">Dogs</option>
//         <option value="cat">Cats</option>
//       </select>

      
//       <div style={{ display: 'flex', flexWrap: 'wrap', alignItems:'center',justifyContent:'center',backgroundColor:'#FFCDB2'}}>
//         {filteredDogs.map(dog => (
//           <center><DogCard key={dog.id} name={dog.name} image={dog.image} dogName={dog.dogName} Age={dog.Age}/></center>
//         ))}
//       </div>
//     </div>
//   );
// }

// const Searchpage = () => {
//   return (
//     <>
//       <Search />
//     </>
//   );
// };

// export default Searchpage;

import React, { useState, useEffect } from 'react';

function SearchAnimals() {
    const [city, setCity] = useState('');
    const [animalType, setAnimalType] = useState('');
    const [breed, setBreed] = useState('');
    const [breeds, setBreeds] = useState([]);
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const cities = ['Chandigarh', 'Panchkula', 'Mohali'];
    const animalTypes = ['Dog', 'Cat', 'Bird'];

    useEffect(() => {
        if (animalType) {
            setLoading(true);
            setError(null);
            fetch(`/api/breeds?animalType=${(animalType)}`)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Failed to fetch breeds');
                    }
                    return response.json();
                })
                .then(data => setBreeds(data.breeds))
                .catch(err => setError(err.message))
                .finally(() => setLoading(false));
        } else {
            setBreeds([]);
        }
    }, [animalType]);

    const handleSearch = () => {
        setLoading(true);
        setError(null);
        fetch(`http://localhost:3000/pets/search?city=${(city)}&type=${(animalType)}&breed=${(breed)}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch pets');
                }
                return response.json();
            })
            .then(data => setResults(data))
            .catch(err => setError(err.message))
            .finally(() => setLoading(false));
    };

    return (
      
        <div>
            {/* <h1>Search Animals</h1> */}

            <ul className="navbarhome">
      <li className="empty"></li>
      <li><Link className="li" to='/login'>Login</Link></li>
      <li><Link className="li" to='/sign'>Sign in </Link></li>
      <li><Link className="li" to='/eco'>Shopping</Link></li>
      <b><li><Link className="li" to='/search'>Adopt Now</Link></li></b>
      <li><Link className="li" to='/'>Home</Link></li>
      </ul>

            <div>
                <label className = "City" >City:</label>
                <select value={city} onChange={(e) => setCity(e.target.value)}>
                    <option value="">Select a city</option>
                    {cities.map((city, index) => (
                        <option key={index} value={city}>
                            {city}
                        </option>
                    ))}
                </select>
            </div>

            <div>
                <label className = "Animal" >Animal Type:</label>
                <select value={animalType} onChange={(e) => setAnimalType(e.target.value)}>
                    <option value="">Select an animal type</option>
                    {animalTypes.map((type, index) => (
                        <option key={index} value={type}>
                            {type}
                        </option>
                    ))}
                </select>
            </div>

            {/* <div>
                <label className = "Breed" >Breed:</label>
                <select value={breed} onChange={(e) => setBreed(e.target.value)} disabled={!animalType || loading}>
                    <option value="">Select a breed</option>
                    {breeds.map((breed, index) => (
                        <option key={index} value={breed}>
                            {breed}
                        </option>
                    ))}
                </select>
            </div> */}

            <button className = "searchButton" onClick={handleSearch} disabled={loading}>
                {loading ? 'Searching...' : 'Search'}
            </button>

            {loading && <p>Loading...</p>}
            {/* {error && <p style={{color: 'red'}}>{error}</p>} */}

            <div>
                <h2 className = "SearchResults">Search Results</h2>
                {results.length > 0 ? (
                    <ul>
                        {results.map((pet, index) => (
                            // <li key={index}>
                            //     {pet.type} - {pet.breed} - {pet.city} - {pet.name} - {pet.age}
                            //</li>
                            <center><DogCard key={index} name={pet.name}  breed={pet.breed} age={pet.age} city={pet.city}/></center>
                        ))}
                    </ul>
                ) : (
                    <p>No results found</p>
                )}
            </div>
        </div>
    );
}

export default SearchAnimals;
