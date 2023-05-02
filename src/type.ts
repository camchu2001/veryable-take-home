export interface Schedule {
  businessName: string | null;
  opTitle: string;
  pay: number;
  startTime: Date;
  endTime: Date;
  addressLine1: string;
  addressLine2: string;
  city: string;
  state: string;
  zip: string;
}
