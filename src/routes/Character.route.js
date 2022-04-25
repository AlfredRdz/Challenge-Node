import { Router } from "express"
import { getCharacters, getCharacterById, insertCharacter, deleteCharacter } from "../controllers/Character.controller"

const router = Router()

router.get("/", getCharacters)
router.get("/:id", getCharacterById)
router.post("/", insertCharacter)
//router.put("/:id", updateCharacter)
router.delete("/:id", deleteCharacter)

export default router