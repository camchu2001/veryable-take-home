import { getOperator, createOperator } from "../services/operators.services";

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
