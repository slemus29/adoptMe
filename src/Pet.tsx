import { Link } from "react-router-dom"

export interface PetProps {
    id: string
    name: string
    animal: string
    breed: string
    images: string[]
    location: string
}

// const Pet: React.FC<PetProps> = (props) => {
//     return React.createElement("div", {}, [
//         React.createElement("h1", {}, props.name),
//         React.createElement("h2", {}, props.animal),
//         React.createElement("h2", {}, props.breed),
//     ]);
// };

const Pet: React.FC<PetProps> = ({ name, animal, breed, images, location, id }) => {
    let hero = "http://pets-images.dev-apis.com/pets/none.jpg"
    if(images.length){
        hero = images[0]
    }
    return (
       <Link to={`/details/${id}`} className="pet">
        <div className="image-container">
            <img src={hero} alt={name} />
        </div>
        <div className="info">
            <h1>{name}</h1>
            <h2>{animal} - {breed} - {location}</h2>

        </div>
       </Link>
    )
}

export default Pet
