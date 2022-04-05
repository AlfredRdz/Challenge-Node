import Movie_Serie from "../models/Movie_Serie"

export const getMoviesAndSeries = async (req, res) => {
    const moviesAndSeries = await Movie_Serie.findAll({
        attributes: ["title", "image"]
    })

    res.json({
        results: moviesAndSeries
    })
}

export const insertMoviesAndSeries = async(req, res) => {
    const { title, image, rate } = req.body

    try {
        let newMoviesAndSeries = await Movie_Serie.create({
            title,
            image,
            rate
        }, {
            fields: ['title', 'image', 'rate']
        })

        if (newMoviesAndSeries) {
            return res.json({
                message: "Movies and Series created",
                data: newMoviesAndSeries
            })
        }
    } catch (error) {
        res.status(500).json({
            message: "Something goes wrong",
            data: {}
        })
    }
}