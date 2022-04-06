import Movie from "../models/Movie"

export const getMoviesAndSeries = async (req, res) => {
    const movie = await Movie.findAll()

    res.json({
        message: movie
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