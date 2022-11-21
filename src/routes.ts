import { Router } from "express"
import { DoctorController } from "./controllers/doctorController"
import { SpecialtyController } from "./controllers/specialtyController";

const routes = Router()

routes.post("/doctor/create", new DoctorController().create);
routes.get("/doctor/select", new DoctorController().read);
routes.get("doctor/select/:crm", new DoctorController().readByCrm)
routes.delete("/doctor/:crm", new DoctorController().deleteByCrm)
routes.put("/doctor/update", new DoctorController().update)

routes.post("/specialty/create", new SpecialtyController().create);

export default routes;