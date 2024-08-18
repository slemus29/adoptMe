import { useState, useEffect, useContext } from 'react'
import useBreedList from './useBreedList'
import Results from './Results'
import { useQuery } from '@tanstack/react-query'
import fetchSearch from './fetchSearch'
import AdoptedPetContext from './AdoptedPetContext'
const ANIMALS = ['bird', 'cat', 'dog', 'rabbit', 'reptile']

export interface ApiPet {
    id: string
    name: string
    animal: string
    breed: string
    images: string[]
    location: string
    city: string
    state: string
}

const SearchParams = () => {
    const [requestParams, setRequestParams] = useState({
        location: '',
        animal: '',
        breed: '',
    })
    const [animal, setAnimal] = useState('')
    const [breeds] = useBreedList(animal)
    const [adopetedPet] = useContext(AdoptedPetContext)

    const results = useQuery(['search', requestParams], fetchSearch)
    const pets = results.data?.pets ?? []

    return (
        <div className="search-params">
            <form
                onSubmit={(e) => {
                    e.preventDefault()
                    const formData = new FormData(e.currentTarget)

                    const formString = (key: string) => {
                        const value = formData.get(key)
                        if (typeof value === 'string') {
                            return value
                        }
                        return ''
                    }

                    const obj = {
                        animal: formString('animal'),
                        location: formString('location'),
                        breed: formString('breed'),
                    }
                    setRequestParams(obj)
                }}
            >
                {adopetedPet ? (
                    <div className='pet image-container'>
                        <img
                            src={adopetedPet.images[0]}
                            alt={adopetedPet.name}
                        />
                    </div>
                ) : null}
                <label htmlFor="location">
                    Location
                    <input
                        id="location"
                        name="location"
                        placeholder="Location"
                    />
                </label>
                <label htmlFor="animal">
                    Animal
                    <select
                        name="animal"
                        value={animal}
                        id="animal"
                        onChange={(e) => {
                            setAnimal(e.target.value)
                        }}
                    >
                        <option />
                        {ANIMALS.map((animal) => (
                            <option key={animal}>{animal}</option>
                        ))}
                    </select>
                </label>
                <label htmlFor="breed">
                    Breed
                    <select
                        name="breed"
                        disabled={breeds.length === 0}
                        id="breed"
                    >
                        {breeds.map((breed: string) => (
                            <option key={breed}>{breed}</option>
                        ))}
                    </select>
                </label>
                <button>Submit</button>
            </form>
            <Results pets={pets} />
        </div>
    )
}

export default SearchParams
