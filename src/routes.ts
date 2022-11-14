import { Router } from "express"
import { DoctorController } from "./controllers/doctorController"

const routes = Router()

routes.post("/doctor", new DoctorController().create)

export default routes