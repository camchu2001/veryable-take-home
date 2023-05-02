import { createOp, getOp } from "../services";

export const getOpController = async (req: any, res: any) => {
  const opId = Number(req.params.opId);

  const op = await getOp(opId);

  if (!op) {
    res.status(404).json({ message: "Op not found" });
  }
  res.status(200).json(op);
};

export const createOpController = async (req: any, res: any) => {
  const createdOp = await createOp({
    operatorID: req.body.operatorID,
    businessID: req.body.businessID,
    title: req.body.title,
    description: req.body.description,
    pay: req.body.pay,
    location: req.body.location,
    startTime: new Date(req.body.startTime).toISOString(),
    endTime: new Date(req.body.endTime).toISOString(),
  });
  res.status(201).json(createdOp);
};
