import Character from "../models/Character"

export const getCharacters = async (req, res) => {
    const character = Character.findAll()

    res.json({
        message: character
    })
}

export const insertCharacter = async(req, res) => {
    const { name, image, age, weight, history } = req.body

    try {
        let newCharacter = await Character.create({
            name,
            image,
            age,
            weight,
            history
        }, {
            fields: ['name', 'image', 'age', 'weight', 'history']
        })

        if (newCharacter) {
            return res.json({
                message: "Character created",
                data: newCharacter
            })
        }
    } catch (error) {
        res.status(500).json({
            message: "Something goes wrong",
            data: {}
        })
    }
}

