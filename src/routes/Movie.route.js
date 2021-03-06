import { Router } from "express"
import { getMoviesAndSeries, getMovieById, insertMoviesAndSeries, updateMovie, deleteMovie } from "../controllers/Movie.controller"

const router = Router()

router.get("/", getMoviesAndSeries)
router.get("/:id", getMovieById)
router.post("/", insertMoviesAndSeries)
router.put("/:id", updateMovie)
router.delete("/:id", deleteMovie)

export default router