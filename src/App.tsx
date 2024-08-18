import React, { useState } from 'react'
import { createRoot } from 'react-dom/client'
import SearchParams from './SearchParams'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Details from './Details'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import AdoptedPetContext from './AdoptedPetContext'

// const App = () => {
//     return React.createElement('div', {}, [
//         React.createElement('h1', {}, 'Adopt Me'),
//         React.createElement(Pet, {
//             animal: 'Dog',
//             name: 'Luna',
//             breed: 'Havanese',
//         }),
//         React.createElement(Pet, {
//             animal: 'Bird',
//             name: 'Pepper',
//             breed: 'Cocktiel',
//         }),
//         React.createElement(Pet, {
//             animal: 'Cat',
//             name: 'Doink',
//             breed: 'Mixed',
//         }),
//     ])
// }

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: Infinity,
            cacheTime: Infinity,
        },
    },
})

const App = () => {
    const adopetedPet = useState(null)
    return (
        <BrowserRouter>
            <QueryClientProvider client={queryClient}>
                <AdoptedPetContext.Provider value={adopetedPet}>
                    <header>
                        <Link to="/">Adopt ME</Link>
                    </header>
                    <Routes>
                        <Route path="/details/:id" element={<Details />} />
                        <Route path="/" element={<SearchParams />} />
                    </Routes>
                </AdoptedPetContext.Provider>
            </QueryClientProvider>
        </BrowserRouter>
    )
}

const container = document.getElementById('root')

if (container) {
    const root = createRoot(container)
    root.render(React.createElement(App))
}
