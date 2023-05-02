import {
  getOperator,
  createOperator,
  getOpsByOperatorId,
  getBusinessesByID,
} from "../services";

export const getOperatorController = async (req: any, res: any) => {
  const operatorId = Number(req.params.operatorId);

  const operator = await getOperator(operatorId);

  if (!operator) {
    res.status(404).json({ message: "Operator not found" });
  }
  res.status(200).json(operator);
};

export const createOperatorController = async (req: any, res: any) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;

  const newOperator = await createOperator(firstName, lastName);

  res.status(201).json(newOperator);
};

export const getOperatorScheduleController = async (req: any, res: any) => {
  const operatorId = Number(req.params.operatorId);
  const ops = await getOpsByOperatorId(operatorId);
  const businessIds = ops.map((op) => op.businessID);
  const businesses = await getBusinessesByID(businessIds);

  const schedules = [];
  for (let i = 0; i < ops.length; i++) {
    for (let j = 0; j < businesses.length; j++) {
      if (ops[i].businessID === businesses[j].id) {
        schedules.push({
          businessName: businesses[j].name,
          opTitle: ops[i].title,
          pay: ops[i].pay,
          startTime: ops[i].startTime,
          endTime: ops[i].endTime,
          addressLine1: businesses[j].addressLine1,
          addressLine2: businesses[j].addressLine2,
          city: businesses[j].city,
          state: businesses[j].state,
          zip: businesses[j].zip,
        });
      }
    }
  }
  res.status(200).json(schedules);
};
