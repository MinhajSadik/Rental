interface footerSubDataTypes {
  name: string;
  path: string;
}

export interface footerDataTypes {
  title: string;
  subData: Array<footerSubDataTypes>;
}; 