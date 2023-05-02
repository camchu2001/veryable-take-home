import { getOperator, createOperator } from "../services/operators.services";

export const getOperatorController = async (req: any, res: any) => {
  const operatorID = Number(req.params.operatorId);

  // call service
  const operator = await getOperator(operatorID);

  if (!operator) {
    res.status(404).json({ message: "Operator not found" });
  }
  res.status(200).json(operator);
};

export const createOperatorController = async (req: any, res: any) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;

  // call service
  const newOperator = await createOperator(firstName, lastName);

  res.status(201).json(newOperator);
};
