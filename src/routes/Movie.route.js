import { Router } from "express"
import { getMoviesAndSeries, insertMoviesAndSeries } from "../controllers/Movie.controller"

const router = Router()

router.get("/", getMoviesAndSeries)
router.post("/", insertMoviesAndSeries)

export default router