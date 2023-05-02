import {
  getOperator,
  createOperator,
  getOpsByOperatorId,
  getBusinessesByID,
} from "../services";
import { Schedule } from "../type";

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

  const schedules: Schedule[] = [];

  ops.forEach((op) => {
    const business = businesses.find((b) => b.id === op.businessID);
    if (business) {
      const schedule: Schedule = {
        businessName: business.name,
        opTitle: op.title,
        pay: op.pay,
        startTime: op.startTime,
        endTime: op.endTime,
        addressLine1: business.addressLine1,
        addressLine2: business.addressLine2,
        city: business.city,
        state: business.state,
        zip: business.zip,
      };
      schedules.push(schedule);
    }
  });

  res.status(200).json(schedules);
};
