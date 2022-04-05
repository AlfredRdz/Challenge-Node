import { Router } from "express"
import { getCharacters, insertCharacter } from "../controllers/Character.controller"

const router = Router()

router.get("/", getCharacters)
router.post("/", insertCharacter)

export default router