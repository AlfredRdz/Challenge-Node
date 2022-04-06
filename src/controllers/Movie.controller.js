import Movie from "../models/Movie"

export const getMoviesAndSeries = async (req, res) => {
    const movie = await Movie.findAll({
        attributes: ['title', 'image', 'createdAt']
    })

    res.json({
        message: movie
    })
}

export const getMovieById = async (req, res) => {
    const movie = await Movie.findOne({
        where: {
            id: req.params.id
        }
    })

    res.json({
        results: movie
    })
}

export const insertMoviesAndSeries = async(req, res) => {
    const { title, image, rate } = req.body

    try {
        let newMovie = await Movie.create({
            title,
            image,
            rate
        }, {
            fields: ['title', 'image', 'rate']
        })

        if (newMovie) {
            return res.json({
                message: "Movies and Series created",
                data: newMovie
            })
        }
    } catch (error) {
        res.status(500).json({
            message: "Something goes wrong",
            data: {}
        })
    }
}

export const deleteMovie = async (req, res) => {
    const { id } = req.params

    try {
        let deleteMovie = await Movie.destroy({
            where: {
                id 
            }
        })

        if(deleteMovie) {
            return res.json({
                message: "Movie Deleted",
                data: {}
            })
        }
    } catch (error) {
        res.status(500).json({
            result: "Something goes wrong",
            data: {}
        })
    }
}