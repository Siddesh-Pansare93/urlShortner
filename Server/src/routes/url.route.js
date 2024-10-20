import { Router } from "express";
import {handleUrlShortRequest, redirectControl} from '../controllers/handleurlcontrol.js'

const router = Router()

router.post("/" , handleUrlShortRequest  )
router.get("/:ShortId", redirectControl);


export default router