import Character from "../models/Character"

export const getCharacters = async (req, res) => {
    const character = await Character.findAll({
        attributes: ['name', 'image']
    })

    res.json({
        results: character
    })
}

export const getCharacterById = async (req, res) => {
    const character = await Character.findOne({
        where: {
            id: req.params.id
        }
    })

    res.json({
        result: character
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

/*export const updateCharacter = async (req, res) => {
    const { id } = req.params
    const { name, image, age, weight, history } = req.body

    const characters = await Character.findAll({
        attributes: ['id', 'name', 'image', 'age', 'weight', 'history'],
        where: {
            id
        }
    })

    if (characters.length > 0) {
        characters.forEach(character => {
            await character.update({
                name,
                image,
                age,
                weight,
                history
            })
        });
    }
    return res.json({
        message: "Character Updated Successfully",
        data: characters
    })
}*/

export const deleteCharacter = async (req, res) => {
    const { id } = req.params

    try {
        let deleteCharacter = await Character.destroy({
            where: {
                id
            }
        })

        if (deleteCharacter) {
            return res.json({
                message: "Character deleted",
                data: {}
            })
        }
    } catch (error) {
        res.status(500).json({
            message: "Something goes wrong",
            data: {}
        })
    }

}