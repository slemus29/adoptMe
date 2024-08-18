import { useState, useContext } from 'react'
import { useQuery } from '@tanstack/react-query'
import { useNavigate, useParams } from 'react-router-dom'
import fetchPet from './fetchPet'
import Carousel from './Carousel'
import { ErrorBoundary } from './ErrorBoundary'
import Modal from './Modal'
import AdoptedPetContext from './AdoptedPetContext'

interface DetailsProps {}

const Details = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const [_, setAdoptedPet] = useContext(AdoptedPetContext)

    const [showModal, setShowModal] = useState(false)
    const results = useQuery(['details', id], fetchPet)

    if (results.isLoading) {
        return (
            <div className="loading-pane">
                <h2 className="loader">🌀</h2>
            </div>
        )
    }

    const pet = results.data.pets[0]

    return (
        <div className="details">
            <Carousel images={pet.images} />
            <div>
                <h1>{pet.name}</h1>
                <h2>
                    {pet.animal} - {pet.breed} - {pet.city}, {pet.state}
                    <button onClick={() => setShowModal(true)}>Adopt {pet.name}</button>
                    <p>{pet.description}</p>
                </h2>
                {showModal ? (
                    <Modal>
                        <h1>Would you like to adopt {pet.name} ?</h1>
                        <div className="buttons">
                            <button onClick={() => {
                                setAdoptedPet(pet)
                                navigate('/')
                            }}>Yes</button>
                            <button onClick={() => setShowModal(false)}>
                                No
                            </button>
                        </div>
                    </Modal>
                ) : null}
            </div>
        </div>
    )
}

export default function DetailsErrorBoundary(props: DetailsProps) {
    return (
        <ErrorBoundary>
            <Details {...props} />
        </ErrorBoundary>
    )
}
