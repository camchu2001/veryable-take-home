import { createBusiness, getBusiness } from "../services/";

export const getBusinessController = async (req: any, res: any) => {
  const businessId = Number(req.params.businessId);

  const business = await getBusiness(businessId);

  if (!business) {
    res.status(404).json({ message: "Business not found" });
  }
  res.status(200).json(business);
};

export const createBusinessController = async (req: any, res: any) => {
  const createdBusiness = await createBusiness({
    name: req.body.name,
    description: req.body.description,
    email: req.body.email,
    addressLine1: req.body.addressLine1,
    addressLine2: req.body.addressLine2,
    city: req.body.city,
    state: req.body.state,
    zip: req.body.zip,
  });
  res.status(201).json(createdBusiness);
};
