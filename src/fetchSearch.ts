interface FetchSearch {
    queryKey: [
        string,
        {
            animal: string
            location: string
            breed: string
        },
    ]
}

const fetchSearch = async ({ queryKey }: FetchSearch) => {
    const { animal, location, breed } = queryKey[1]
    const apiRes = await fetch(
        `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`,
    )

    if (!apiRes.ok) {
        throw new Error(`pets search not ok ${animal}, ${location}, ${breed}`)
    }

    return apiRes.json()
}

export default fetchSearch
