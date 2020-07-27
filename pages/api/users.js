export default async (req, res) => {

    const usersInfo = await fetch('https://pokeapi.co/api/v2/pokemon')
    const jsonUsersInfo = await usersInfo.json()
    const info = jsonUsersInfo.results
    const numeratedInfo = info.map((item, index) => item = {
        pokemon: item.name,
        id: index
    })

    res.statusCode = 200
    res.json(numeratedInfo)
}
  