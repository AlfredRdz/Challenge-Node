import { Router } from "express"
import { getMoviesAndSeries, getMovieById, insertMoviesAndSeries } from "../controllers/Movie.controller"

const router = Router()

router.get("/", getMoviesAndSeries)
router.get("/:id", getMovieById)
router.post("/", insertMoviesAndSeries)

export default router