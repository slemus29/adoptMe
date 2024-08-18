import Pet from './Pet'
import { ApiPet } from './SearchParams'

interface ResultsProps {
    pets: ApiPet[]
}

const Results = ({ pets }: ResultsProps) => {
    return (
        <div>
            {pets.length === 0 ? (
                <h1>No pets found!</h1>
            ) : (
                pets.map((pet) => (
                    <Pet
                        id={pet.id}
                        name={pet.name}
                        animal={pet.animal}
                        breed={pet.breed}
                        images={pet.images}
                        location={`${pet.city}, ${pet.state}`}
                        key={pet.id}
                    />
                ))
            )}
        </div>
    )
}

export default Results;
